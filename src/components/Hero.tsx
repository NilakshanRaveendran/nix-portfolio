import Image from "next/image";
import nixx from "../../asserts/nixx.png";

export default function Hero() {
  return (
    <section className="w-full min-h-[80vh] sm:min-h-[calc(100vh-80px)] py-16 sm:py-20 flex items-center">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <div className="relative w-24 h-24 mx-auto">
          <Image
            src={nixx}
            alt="Profile photo"
            fill
            sizes="96px"
            className="object-cover rounded-full ring-4 ring-white/70"
            priority
          />
          <span className="absolute -right-6 top-4 select-none rounded-full bg-white/95 text-black text-xs px-3 py-1 shadow">
            Hi <span className="wave-emoji">👋</span>
          </span>
        </div>
        <h1 className="mt-6 text-[32px] sm:text-[40px] font-semibold tracking-tight">
          I’m Nilaksh,
        </h1>
        <div className="mt-1 text-[34px] sm:text-[44px] font-extrabold tracking-tight">&lt;Software Developer/&gt;</div>
        <p className="mt-4 max-w-2xl mx-auto opacity-80 text-sm sm:text-base">
          Software Developer (AI) with expertise in designing, training, and deploying intelligent applications.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 shadow-sm"
          >
            Let’s talk
            <span className="inline-flex items-center justify-center w-4.5 h-4.5 rounded-full border border-white/20 bg-white/10">
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5 transition-transform duration-300 ease-out group-hover:rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
