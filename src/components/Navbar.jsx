import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b dark:border-slate-700">
            <h1 className="text-lg font-bold">
                JavaScript Master Tutorial
            </h1>

            <ThemeToggle />
        </nav>
    );
}
