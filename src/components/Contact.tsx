import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" className="bg-white dark:bg-zinc-900 rounded-2xl">
      <div className="max-w-6xl">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Nilakshan Raveendran</h3>
        <p className="mt-2 font-medium opacity-90">
          Computer Engineering Undergraduate - Department of Computer Science & Informatics, Uva Wellassa University
        </p>
        <div className="mt-3 space-y-3 opacity-90">
          <p>
            Passionate about Artificial Intelligence and Machine Learning, with a strong foundation in data science, deep learning, and model development. Experienced in building AI/ML projects that deliver data‑driven solutions to real‑world problems.
          </p>
          <p>
            Currently seeking opportunities to apply my expertise as an AI & ML Developer Intern, contribute effectively, and further enhance my skills in a challenging environment.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href="mailto:nilaksh2001@.com"
          className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
        >
          Email
        </a>
        <a
          href="https://github.com/NilakshanRaveendran"
          className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/nilakshan-raveendran-171713269"
          className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10"
        >
          LinkedIn
        </a>
      </div>
    </Section>
  );
}
