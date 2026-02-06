import { usePuterStore } from "~/lib/puter";
import { Link, useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    const { isLoading, auth } = usePuterStore();


    return (
        <nav className="navbar">
            {/* Logo */}
            <Link to="/" className="flex items-center">
                <span className="navbar-logo text-gradient">
                    RESUMIND
                </span>
            </Link>

            {/* Actions */}
            <div className="navbar-actions">
                <Link to="/upload" className="navbar-cta">
                    Upload Resume
                </Link>

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
