import { usePuterStore } from "~/lib/puter";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    const { isLoading, auth } = usePuterStore();


    return (
        <nav className="navbar">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
                <span className="navbar-logo text-gradient">
                    RESUMIND
                </span>
            </Link>

            {/* Actions */}
            <div className="navbar-actions gap-2 md:gap-3">
                <Link to="/upload" className="navbar-cta hidden md:flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Upload Resume</span>
                </Link>

                <button onClick={() => navigate('/upload')} className="navbar-cta md:hidden flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </button>

                {auth.isAuthenticated ? (
                    <button className="logout-button" onClick={auth.signOut}>
                        <p>Log Out</p>
                    </button>
                ) : (
                    <button className="logout-button" onClick={auth.signIn}>
                        <p>Log In</p>
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
