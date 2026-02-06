import ScoreGauge from "~/components/ScoreGauge";
import ScoreBadge from "~/components/ScoreBadge";

const Category = ({ title, score }: { title: string, score: number }) => {
    const textColor = score > 70 ? 'text-green-400'
        : score > 49
            ? 'text-yellow-400' : 'text-red-400';

    return (
        <div className="resume-summary">
            <div className="category">
                <div className="flex flex-col md:flex-row gap-1 md:gap-2 items-start md:items-center justify-start md:justify-center flex-1">
                    <p className="text-base md:text-xl font-medium text-slate-300">{title}</p>
                    <ScoreBadge score={score} />
                </div>
                <p className="text-base md:text-xl font-semibold">
                    <span className={textColor}>{score}</span><span className="text-slate-500">/100</span>
                </p>
            </div>
        </div>
    )
}

const Summary = ({ feedback }: { feedback: Feedback }) => {
    return (
        <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl shadow-2xl w-full border border-slate-700/50 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-cyan-500/10 via-slate-800 to-slate-900 px-4 md:px-6 py-6 md:py-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
                    {/* Score Gauge */}
                    <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
                        <ScoreGauge score={feedback.overallScore} />
                    </div>

                    {/* Score Info */}
                    <div className="flex flex-col gap-3 md:gap-4 flex-1 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Your Resume Score</h2>
                        <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                            This score is calculated based on the variables listed below.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-xs md:text-sm text-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Updated just now
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="px-4 md:px-6 py-6 md:py-8 space-y-3 md:space-y-4">
                <div className="text-xs md:text-sm font-semibold text-slate-500 uppercase tracking-wider px-2">Detailed Breakdown</div>
                <Category title="Tone & Style" score={feedback.toneAndStyle.score} />
                <Category title="Content" score={feedback.content.score} />
                <Category title="Structure" score={feedback.structure.score} />
                <Category title="Skills" score={feedback.skills.score} />
            </div>

            {/* Footer hint */}
            <div className="px-4 md:px-6 py-4 bg-slate-800/50 border-t border-slate-700/50">
                <p className="text-xs md:text-sm text-slate-500 text-center">
                    💡 Expand each section below for detailed feedback and suggestions
                </p>
            </div>
        </div>
    )
}
export default Summary
