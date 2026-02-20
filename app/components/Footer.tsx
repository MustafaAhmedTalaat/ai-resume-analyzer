export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div>
                        <h3 className="text-xl font-bold text-white">Resumind</h3>
                        <p className="mt-3 text-sm text-slate-400">
                            AI-powered resume feedback to help you land more interviews.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Contact
                        </h4>

                        <div className="mt-4 space-y-3 text-sm">

                            {/* LinkedIn Profile */}
                            <a
                                href="/upload"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-white transition"
                            >
                                Upload resume
                            </a>

                            {/* Email */}
                            <a
                                href="/wipe"
                                className="flex items-center gap-2 hover:text-white transition"
                            >
                                Remove resumes
                            </a>

                        </div>
                    </div>

                    {/* Social Icons */}
                    <div>
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Follow Us
                        </h4>

                        <div className="mt-4 flex items-center gap-4">

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/mstfy.ahmd.tl.t.2025"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 17 22 12z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/mustafa-ahmed-talaat-57a09b2a3/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.34 17.34H6V10.5h2.34v6.84zM7.17 9.39a1.37 1.37 0 110-2.74 1.37 1.37 0 010 2.74zM18 17.34h-2.34v-3.37c0-.8-.02-1.83-1.12-1.83-1.12 0-1.29.87-1.29 1.77v3.43H10.5V10.5H12.8v.93h.03c.31-.6 1.07-1.23 2.2-1.23 2.35 0 2.79 1.55 2.79 3.57v3.57z" />
                                </svg>
                            </a>

                            {/* Email */}
                            <a
                                href="mailto:mustafaahmedtlt13579@gmail.com"
                                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
                    © {currentYear} Resumind. All rights reserved.
                </div>
                <p className="text-center text-xs text-slate-500">Created by Mustafa Ahmed Talaat</p>
            </div>
        </footer>
    );
}