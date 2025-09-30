export default function Topbar() {
  return (
    <div className="w-full py-3">
      <div className="container mx-auto px-6 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <a href="mailto:nilaksh2001@gmail.com" className="opacity-90">
              nilaksh2001@gmail.com
            </a>
          </span>
          <a
            href="/cv.pdf"
            download="Nilakshan-Raveendran-CV.pdf"
            className="rounded-full border border-black/10 dark:border-white/15 px-3 py-1 hover:bg-black/5 dark:hover:bg-white/10"
          >
            CV
          </a>
        </div>
        <nav className="hidden sm:flex items-center gap-3 opacity-80">
          <a href="https://www.linkedin.com/in/nilakshan-raveendran-171713269" className="hover:opacity-100" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span>/</span>
          <a href="https://medium.com/@nilaksh2001" className="hover:opacity-100" target="_blank" rel="noopener noreferrer">Medium</a>
          <span>/</span>
          <a href="https://github.com/NilakshanRaveendran" className="hover:opacity-100" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </div>
  );
}
