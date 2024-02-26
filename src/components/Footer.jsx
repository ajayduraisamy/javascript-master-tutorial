export default function Footer() {
    return (
        <footer className="border-t dark:border-slate-700 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>
                © {new Date().getFullYear()} Ajay Duraisamy — JavaScript Master Tutorial
            </p>
        </footer>
    );
}
