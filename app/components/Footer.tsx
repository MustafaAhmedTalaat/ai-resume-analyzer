export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-200">
            <div className="max-w-5xl mx-auto px-5 py-8">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-semibold">Resumind</h3>
                        <p className="text-xs text-slate-400">AI resume feedback to help you get interviews.</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-800 hover:bg-slate-700 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.74l-.44 2.89h-2.3v6.99C18.34 21.12 22 17 22 12z"/></svg>
                        </a>
                        <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-800 hover:bg-slate-700 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor" aria-hidden="true"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM8.34 17.34H6V10.5h2.34v6.84zM7.17 9.39a1.37 1.37 0 110-2.74 1.37 1.37 0 010 2.74zM18 17.34h-2.34v-3.37c0-.8-.02-1.83-1.12-1.83-1.12 0-1.29.87-1.29 1.77v3.43H10.5V10.5H12.8v.93h.03c.31-.6 1.07-1.23 2.2-1.23 2.35 0 2.79 1.55 2.79 3.57v3.57z"/></svg>
                        </a>
                        <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-slate-800 hover:bg-slate-700 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor" aria-hidden="true"><path d="M12 .296C5.373.296 0 5.67 0 12.296c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.084-.73.084-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.469-2.38 1.235-3.22-.123-.303-.535-1.525.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.651.241 2.873.119 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.62-5.479 5.92.43.372.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .321.216.694.825.576C20.565 22.092 24 17.592 24 12.296 24 5.67 18.627.296 12 .296z"/></svg>
                        </a>
                    </div>
                </div>

                <div className="mt-4 text-center text-sm text-slate-500">
                    &copy; {currentYear} Resumind — All rights reserved.
                </div>
            </div>
        </footer>
    );
}
