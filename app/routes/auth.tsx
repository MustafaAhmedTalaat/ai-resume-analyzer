import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";
import Footer from "~/components/Footer";

export const meta = () => ([
    { title: 'Resumind | Auth' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const next = params.get('next') || '/';
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) navigate(next);
    }, [auth.isAuthenticated, next])

    return (
        <main className="bg-slate-900 min-h-screen flex flex-col items-center justify-center">
            <section className="main-section w-full flex justify-center">
                <div className="max-w-md w-full bg-slate-800 text-white rounded-2xl p-8 shadow-lg">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <h1 className="text-3xl font-semibold">Welcome</h1>
                        <p className="text-sm text-slate-300">Log in to continue your job journey and review your resume feedback.</p>
                    </div>

                    <div className="mt-6">
                        {isLoading ? (
                            <button className="navbar-cta w-full animate-pulse">
                                Signing you in...
                            </button>
                        ) : auth.isAuthenticated ? (
                            <button className="logout-button w-full" onClick={auth.signOut}>
                                Log Out
                            </button>
                        ) : (
                            <button className="navbar-cta w-full" onClick={auth.signIn}>
                                Log In
                            </button>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

export default Auth
