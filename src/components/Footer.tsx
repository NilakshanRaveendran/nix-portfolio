export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-6 py-4 text-sm">
        © {new Date().getFullYear()} Nilakshan Raveendran
      </div>
    </footer>
  );
}
