"use client";
import Section from "./Section";
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import chtgpt from "../../asserts/chtgpt.png";
import mobileImg from "../../asserts/mobile.png";
import smsImg from "../../asserts/sms.png";
import sentimentImg from "../../asserts/sentiment.png";
import jarvisImg from "../../asserts/jarvis.png";

type Project = {
  title: string;
  description: string;
  tags?: string[];
  bullets?: string[];
  image?: StaticImageData | string;
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Chat-gpt 2 Architecture",
    description:
      "Designed the architecture for a Chat-GPT 2 based application, focusing on modularity and scalability.",
    tags: ["TensorFlow", "Attention Mechanism", "NLP", "Deep Learning"],
    bullets: [
      "Implemented GPT‑2 transformer architecture from scratch with TensorFlow, including multi‑head self‑attention and positional embeddings.",
    ],
    image: chtgpt,
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "https://github.com/NilakshanRaveendran/Chatgpt-2-Architecture.git" },
    ],
  },
  {
    title: "Mobile Price Prediction By ANN",
    description:
      "Developed a mobile application for predicting prices using Artificial Neural Networks (ANN).",
    tags: ["TensorFlow", "Keras", "Mobile Development", "Machine Learning"],
    bullets: [
      "Designed and trained an ANN model to predict mobile prices based on various features.",
      "Integrated the model into a mobile app using TensorFlow Lite for on-device inference.",
    ],
    image: mobileImg,
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "https://github.com/NilakshanRaveendran/Mobile-Price-Prediction.git" },
    ],
  },
  {
    title: "SMS Spam Classification using NLP",
    description:
      "Developed a model to classify SMS messages as spam or not spam using Natural Language Processing techniques.",
    tags: ["TensorFlow", "Keras", "NLP", "Machine Learning"],
    bullets: [
      "Preprocessed text data using tokenization and embedding techniques.",
      "Trained a deep learning model to achieve high accuracy in spam detection.",
    ],
    image: smsImg,
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "https://github.com/NilakshanRaveendran/SMS-Spam-Detect.git" },
    ],
  },
  {
    title: "Sentiment Analysis (Tweets about US Airlines)",
    description:
      "Developed a model to classify tweets about US airlines as positive, negative, or neutral using Natural Language Processing techniques.",
    tags: ["TensorFlow", "TF-IDF", "Naive Bayes", "Machine Learning", "LSTM"],
    bullets: [
      "Preprocessed text data using tokenization and embedding techniques.",
      "Performed sentiment classification on tweets about US Airlines to analyze customer opinions (positive, negative, neutral)",
    ],
    image: sentimentImg,
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "https://github.com/NilakshanRaveendran/Sentiment-Analysis.git" },
    ],
  },
  {
    title: "Jarvis: Personal AI Voice Assistant",
    description:
      "Developed a personal AI voice assistant using Natural Language Processing techniques.",
    tags: ["Python", "Speech Recognition", "LiveKit", "Google Gemini (Personal) API"],
    bullets: [
      "Implemented speech recognition to convert voice commands into text.",
      "Used NLP techniques to understand and respond to user queries.",
    ],
    image: jarvisImg,
    links: [
      { label: "LinkedIn", href: "#" },
      { label: "GitHub", href: "https://github.com/NilakshanRaveendran/JARVIS.git" },
    ],
  },
];

function TextCard({ p }: { p: Project }) {
  return (
    <div className="relative rounded-2xl bg-white dark:bg-zinc-900 p-6 border border-black/5 dark:border-white/10 shadow-sm">
      <span className="absolute -top-3 left-4 select-none rounded-full bg-black/80 text-white text-[11px] px-2 py-0.5">
        Details
      </span>
      <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
      <p className="mt-2 text-sm opacity-80">{p.description}</p>
      {p.tags && p.tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li
              key={t}
              className="px-2.5 py-1 text-xs rounded-full bg-black/5 dark:bg-white/10"
            >
              {t}
            </li>
          ))}
        </ul>
      )}
      {p.bullets && p.bullets.length > 0 && (
        <ul className="mt-3 space-y-2 text-sm opacity-85 text-left list-disc pl-5">
          {p.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {p.links && (
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          {p.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function ImageCard({ project, onOpen }: { project: Project; onOpen?: (p: Project) => void }) {
  const src = project.image ?? "/placeholder.svg";
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-900 p-2 border border-black/5 dark:border-white/10 shadow-sm">
      <button
        type="button"
        onClick={() => onOpen?.(project)}
        className="relative aspect-video rounded-xl overflow-hidden group w-full text-left"
        aria-label={`Open preview for ${project.title}`}
      >
        <Image
          src={src}
          alt={`Preview for ${project.title}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="absolute top-2 left-2 rounded-md bg-white/90 text-black text-[11px] px-2 py-0.5 shadow">
          Preview
        </span>
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
          <div className="text-xs sm:text-sm font-medium line-clamp-2">
            {project.title}
          </div>
        </div>
      </button>
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [preview, setPreview] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const openPreview = (p: Project) => {
    setPreview(p);
    setIsClosing(false);
    setIsEntering(true);
    // allow next paint then animate to visible
    setTimeout(() => setIsEntering(false), 20);
  };

  const closePreview = () => {
    setIsClosing(true);
    setTimeout(() => {
      setPreview(null);
      setIsClosing(false);
      setIsEntering(false);
    }, 200);
  };
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePreview();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const initialCount = 2; // number of projects to show before expanding
  const visible = showAll ? projects : projects.slice(0, initialCount);
  const hidden = showAll ? [] : projects.slice(visible.length);

  return (
    <Section id="projects" className="">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">
          A Showcase of My
          <br />
          Best Work
        </h2>
        <p className="mt-3 max-w-2xl mx-auto opacity-80 text-sm">
          Explore projects that highlight my skills in software development using
          modern technologies.
        </p>
      </div>
      {/* Group each project's details + preview in a single component */}
      <div className="space-y-8">
        {visible.map((p, idx) => (
          <ProjectItem key={p.title} project={p} index={idx} onOpen={openPreview} />
        ))}
      </div>
      {!showAll && hidden.length > 0 && (
        <div className="mt-6">
          <div className="text-center text-sm opacity-70 mb-3">Up next</div>
          <div className="overflow-x-auto">
            <div className="flex gap-3 px-2 min-w-max justify-center">
              {hidden.map((p) => (
                <button
                  key={p.title}
                  onClick={() => openPreview(p)}
                  className="w-32 shrink-0 rounded-lg bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 hover:shadow-sm transition-shadow text-left"
                >
                  <div className="relative aspect-video rounded-t-lg overflow-hidden">
                    <Image
                      src={p.image ?? "/placeholder.svg"}
                      alt="Preview"
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-1.5">
                    <div className="text-[11px] leading-4 font-medium line-clamp-2">{p.title}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {projects.length > initialCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="px-4 py-2 rounded-full border border-black/10 dark:border-white/15 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      )}
      {/* Modal Preview (image only) */}
      {preview && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-200 ${
            isClosing || isEntering ? "opacity-0" : "opacity-100"
          }`}
          role="dialog"
          aria-modal
          onClick={closePreview}
        >
          <div
            className={`relative w-[90vw] md:w-[80vw] h-[50vh] md:h-[80vh] transform transition-transform duration-200 ${
              isClosing || isEntering ? "scale-95" : "scale-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <Image
                src={preview.image ?? "/placeholder.svg"}
                alt={preview.title}
                fill
                sizes="80vw"
                className="object-contain rounded-3xl"
              />
            </div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 md:top-3 pointer-events-none">
              <span className="inline-block rounded-lg bg-black/70 text-white text-xs sm:text-sm px-3 py-1 leading-none text-center max-w-[90vw] md:max-w-[70vw]">
                {preview.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

function ProjectItem({ project, onOpen }: { project: Project; index: number; onOpen?: (p: Project) => void }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 items-stretch">
      <TextCard p={project} />
      <ImageCard project={project} onOpen={onOpen} />
    </div>
  );
}
