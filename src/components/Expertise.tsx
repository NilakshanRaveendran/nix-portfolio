import Section from "./Section";

const items = [
  {
    title: "React.js",
    subtitle: "Building Dynamic\nUser Interfaces",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="9" ry="4" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    title: "Node.js",
    subtitle: "Building Scalable\nBackend Solutions",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    title: "TensorFlow",
    subtitle: "ML Modeling\nand Inference",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l9-5 9 5-3 1.7V18l-6 3-6-3V9.7L3 8z" />
        <path d="M12 3v18" />
        <path d="M8 11h3v7L8 16z" />
        <path d="M16 13h-3v5l3-2z" />
      </svg>
    ),
  },
  {
    title: "OpenCV",
    subtitle: "Computer Vision\nImage Processing",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="5" r="3.2" />
        <circle cx="5.5" cy="16" r="3.2" />
        <circle cx="18.5" cy="16" r="3.2" />
        <path d="M9 7l-1.6 5" />
        <path d="M15 7l1.6 5" />
        <path d="M8.2 17h7.6" />
      </svg>
    ),
  },
  {
    title: "Supabase",
    subtitle: "Database, Auth &\nStorage Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 13c6-7 11-8 16-9-6 5-9 9-5 16-7-2-9-4-11-7z" />
        <path d="M10 11l4 9" />
      </svg>
    ),
  },
  
];

export default function Expertise() {
  return (
    <Section className="bg-white dark:bg-zinc-900 rounded-2xl" id="expertise">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Expertise Across Leading
          <br />
          <span className="text-foreground/90">&lt;Dev&gt; Technologies</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto opacity-80">
          With a deep understanding of modern development frameworks and tools, I specialize in creating efficient, scalable, and secure applications.
        </p>
      </div>
      <div className="mt-12 overflow-x-auto py-8">
        <div className="flex flex-nowrap gap-12 items-start justify-center min-w-max px-2">
          {items.map((it) => (
            <div key={it.title} className="flex items-start gap-4">
              <div className="shrink-0 text-foreground/80">{it.icon}</div>
              <div>
                <h3 className="font-semibold">{it.title}</h3>
                {it.subtitle.split("\n").map((line, i) => (
                  <p key={i} className="text-sm opacity-70 leading-5">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
