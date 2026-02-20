import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

const WipeApp = () => {
    const { auth, isLoading, error, clearError, fs, kv } = usePuterStore();
    const navigate = useNavigate();
    const [files, setFiles] = useState<FSItem[]>([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const loadFiles = async () => {
        const files = (await fs.readDir("./")) as FSItem[];
        setFiles(files);
    };

    useEffect(() => {
        loadFiles();
    }, []);

    useEffect(() => {
        if (!isLoading && !auth.isAuthenticated) {
            navigate("/auth?next=/wipe");
        }
    }, [isLoading]);

    const handleDelete = async () => {
        setIsDeleting(true);

        for (const file of files) {
            await fs.delete(file.path);
        }

        await kv.flush();
        await loadFiles();

        setIsDeleting(false);
        setShowConfirm(false);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-slate-400">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-500">
                Error: {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 px-6 py-10">
            <div className="max-w-3xl mx-auto space-y-8">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-white">App Data Management</h1>
                        <p className="text-slate-400 mt-2">
                            Manage and permanently delete your stored application data.
                        </p>
                    </div>

                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-2 text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer px-5 py-2 rounded-lg transition"
                    >
                        {/* Arrow Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </button>
                </div>

                {/* Files List */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                    <h2 className="text-lg font-semibold mb-4">Stored Files</h2>

                    {files.length === 0 ? (
                        <p className="text-slate-500 text-sm">
                            No files found.
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {files.map((file) => (
                                <div
                                    key={file.id}
                                    className="flex justify-between items-center bg-slate-800 px-4 py-3 rounded-lg"
                                >
                                    <span className="text-sm">{file.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Danger Zone */}
                <div className="bg-red-950 border border-red-800 rounded-xl p-6">
                    <h2 className="text-lg font-semibold text-red-400">
                        Danger Zone
                    </h2>
                    <p className="text-sm text-red-300 mt-2">
                        This action will permanently delete all your stored files and app data.
                        This cannot be undone.
                    </p>

                    <button
                        onClick={() => setShowConfirm(true)}
                        className="mt-4 bg-red-600 hover:bg-red-500 transition text-white px-5 py-2 rounded-lg text-sm"
                    >
                        Wipe App Data
                    </button>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirm && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 w-full max-w-md">
                        <h3 className="text-lg font-semibold text-white">
                            Confirm Deletion
                        </h3>
                        <p className="text-sm text-slate-400 mt-2">
                            Are you sure you want to permanently delete all app data?
                        </p>

                        <div className="flex justify-end gap-3 mt-6">
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="px-4 py-2 text-sm rounded-lg bg-slate-700 hover:bg-slate-600"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleDelete}
                                disabled={isDeleting}
                                className="px-4 py-2 text-sm rounded-lg bg-red-600 hover:bg-red-500 text-white"
                            >
                                {isDeleting ? "Deleting..." : "Yes, Delete"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WipeApp;