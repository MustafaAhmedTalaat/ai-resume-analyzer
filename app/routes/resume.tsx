import {Link, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import {usePuterStore} from "~/lib/puter";
import Summary from "~/components/Summary";
import ATS from "~/components/ATS";
import Details from "~/components/Details";
import Footer from "~/components/Footer";

export const meta = () => ([
    { title: 'Resumind | Review ' },
    { name: 'description', content: 'Detailed overview of your resume' },
])

const Resume = () => {
    const { auth, isLoading, fs, kv } = usePuterStore();
    const { id } = useParams();
    const [imageUrl, setImageUrl] = useState('');
    const [resumeUrl, setResumeUrl] = useState('');
    const [feedback, setFeedback] = useState<Feedback | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isLoading && !auth.isAuthenticated) navigate(`/auth?next=/resume/${id}`);
    }, [isLoading])

    useEffect(() => {
        const loadResume = async () => {
            const resume = await kv.get(`resume:${id}`);

            if(!resume) return;

            const data = JSON.parse(resume);

            const resumeBlob = await fs.read(data.resumePath);
            if(!resumeBlob) return;

            const pdfBlob = new Blob([resumeBlob], { type: 'application/pdf' });
            const resumeUrl = URL.createObjectURL(pdfBlob);
            setResumeUrl(resumeUrl);

            const imageBlob = await fs.read(data.imagePath);
            if(!imageBlob) return;
            const imageUrl = URL.createObjectURL(imageBlob);
            setImageUrl(imageUrl);

            setFeedback(data.feedback);
            console.log({resumeUrl, imageUrl, feedback: data.feedback });
        }

        loadResume();
    }, [id]);

    return (
        <main className="!pt-0 !px-0 bg-slate-900 min-h-screen">
            <nav className="bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700/50 py-4 md:py-5 sticky top-0 z-40 backdrop-blur-sm">
                <div className="flex items-center justify-between max-w-full px-4 md:px-8">
                    <Link to="/" className="back-button bg-slate-700/80 border-slate-600 hover:bg-slate-600 hover:border-slate-500 text-slate-100 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-xs md:text-sm font-semibold">Back to Home</span>
                    </Link>
                    <h1 className="text-lg md:text-2xl font-bold text-white">Resume Review</h1>
                    <div className="w-24"></div>
                </div>
            </nav>
            <div className="flex flex-col lg:flex-row w-full">
                <section className="feedback-section bg-slate-800 h-[100vh] lg:sticky lg:top-[0px] items-center justify-center order-2 lg:order-1">
                    {imageUrl && resumeUrl && (
                        <div className="animate-in fade-in duration-1000 gradient-border max-sm:m-2 m-0 h-auto md:h-[80vh] lg:h-[90%] w-fit">
                            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={imageUrl}
                                    className="w-full h-full object-contain rounded-2xl max-h-[400px] md:max-h-[600px] lg:max-h-full shadow-2xl"
                                    title="resume"
                                />
                            </a>
                        </div>
                    )}
                </section>
                <section className="feedback-section bg-slate-900 order-1 lg:order-2">
                    <div className="w-full px-4 md:px-8 py-4 md:py-6 flex flex-col gap-4 md:gap-8">
                        {feedback ? (
                            <div className="flex flex-col gap-6 md:gap-8 animate-in fade-in duration-1000">
                                <Summary feedback={feedback} />
                                <ATS score={feedback.ATS.score || 0} suggestions={feedback.ATS.tips || []} />
                                <Details feedback={feedback} />
                            </div>
                        ) : (
                            <div className="flex items-center justify-center min-h-[400px]">
                                <img src="/images/resume-scan-2.gif" className="w-full max-w-[300px] md:max-w-[400px]" />
                            </div>
                        )}
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    )
}
export default Resume
