export default function Intro() {
    return (
        <section className="min-h-[70vh] flex items-center justify-center px-6">

            <div className="text-center max-w-3xl">

                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    Welcome to
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-600">
                        JavaScript Master Class
                    </span>
                </h1>

                <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                    Learn JavaScript step by step — from basics to advanced — with
                    real-world projects and interview practice.
                </p>

                {/* What you'll cover */}
                <div className="grid sm:grid-cols-3 gap-4 mb-10">

                    <div className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        Core JavaScript
                    </div>

                    <div className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        Async Patterns
                    </div>

                    <div className="px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        Interview Prep
                    </div>

                </div>

                {/* START BUTTON */}
                <button className="px-8 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:-translate-y-0.5 transition-transform shadow-lg">
                    Start Lesson 1
                </button>

            </div>

        </section>
    );
}
