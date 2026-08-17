"use client";

import { FormEvent, useState } from "react";

type Reply = {
  kicker: string;
  answer: string;
  links: Array<{ label: string; href: string; external?: boolean }>;
};

const replies: Record<string, Reply> = {
  writing: {
    kicker: "A good place to begin",
    answer:
      "Start with the editing essay. It is the clearest demonstration of how Yatin reads an argument, protects uncertainty, and finds the sentence a public reader actually needs.",
    links: [
      { label: "Read the editing essay", href: "/ideas/important-sentence" },
      { label: "Browse all writing", href: "/ideas" },
    ],
  },
  thinking: {
    kicker: "The method, without the framework slide",
    answer:
      "He begins where an explanation becomes too comfortable. Then he asks what it leaves out, who disappears from the grammar, and which consequence the evidence can honestly support.",
    links: [
      { label: "Open the live questions", href: "#questions" },
      { label: "Read a systems essay", href: "/ideas/community-care" },
    ],
  },
  editor: {
    kicker: "Why editing",
    answer:
      "Policy work taught Yatin to find the decision buried inside a document. Editing is the same judgment directed toward a reader: what is the real claim, what must remain uncertain, and what should come next?",
    links: [
      { label: "See the editorial argument", href: "/ideas/important-sentence" },
      { label: "Read about Yatin", href: "#about" },
    ],
  },
  contact: {
    kicker: "A human answer is better here",
    answer:
      "If you want to discuss an edit, a research question, or a role, write directly. Yatin is based in Vancouver and reads every message himself.",
    links: [
      { label: "Email Yatin", href: "mailto:yatindua144@gmail.com" },
      { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/yatindua17/", external: true },
    ],
  },
  indigenous: {
    kicker: "Indigenous policy and research",
    answer:
      "The work ranges from workforce programs at Squamish Nation to research on maternal-health access and Indigenous leadership in the clean-energy transition. The through-line is who gets to define success.",
    links: [
      { label: "Read More Than Stewards", href: "https://www.linkedin.com/pulse/more-than-stewards-why-canadas-clean-energy-transition-yatin-dua-bhave/", external: true },
      { label: "See the open questions", href: "#questions" },
    ],
  },
  vancouver: {
    kicker: "Vancouver, beyond the headline",
    answer:
      "The Vancouver work asks what survives an election, who defines safety in contested public space, and what neighbourhood institutions can do without pretending to be the care system.",
    links: [
      { label: "Read the election essay", href: "/ideas/vancouver-election-question" },
      { label: "Read Community Care", href: "/ideas/community-care" },
    ],
  },
  evidence: {
    kicker: "Evaluation as a feedback loop",
    answer:
      "A pass rate is an output. The harder question is whether training changes readiness, safety, and what happens in the first job. That distinction shapes Yatin's approach to evidence.",
    links: [
      { label: "Read the evaluation note", href: "/ideas/pass-rate" },
      { label: "Browse all writing", href: "/ideas" },
    ],
  },
  fallback: {
    kicker: "I may not know that one yet",
    answer:
      "Try asking about editing, Indigenous policy, Vancouver, evaluation, open questions, or how to contact Yatin. This is a guide to the work, not a chatbot pretending to know everything.",
    links: [
      { label: "Browse all writing", href: "/ideas" },
      { label: "Ask Yatin directly", href: "mailto:yatindua144@gmail.com" },
    ],
  },
};

const prompts = [
  { label: "Show me the writing", key: "writing" },
  { label: "How does he think?", key: "thinking" },
  { label: "Why editing?", key: "editor" },
  { label: "I want to get in touch", key: "contact" },
];

function replyFor(query: string) {
  const value = query.toLowerCase();
  if (/indigenous|squamish|nation|energy|maternal/.test(value)) return replies.indigenous;
  if (/vancouver|election|city|gastown|homeless/.test(value)) return replies.vancouver;
  if (/evaluation|evidence|training|pass rate|program/.test(value)) return replies.evidence;
  if (/edit|writing|writer|essay|article/.test(value)) return replies.writing;
  if (/think|method|question|approach/.test(value)) return replies.thinking;
  if (/contact|email|hire|role|work with/.test(value)) return replies.contact;
  return replies.fallback;
}

export default function ConversationGuide() {
  const [reply, setReply] = useState<Reply>(replies.writing);
  const [active, setActive] = useState("writing");
  const [query, setQuery] = useState("");

  function choose(key: string) {
    setActive(key);
    setReply(replies[key]);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!query.trim()) return;
    setActive("");
    setReply(replyFor(query));
  }

  return (
    <section className="conversationGuide" aria-labelledby="conversation-title">
      <div className="conversationTopline">
        <span className="conversationStatus" aria-hidden="true" />
        <p id="conversation-title">Talk to this portfolio</p>
        <span>01 / Start here</span>
      </div>

      <p className="conversationQuestion">What brought you here?</p>

      <div className="promptChoices" aria-label="Suggested questions">
        {prompts.map((prompt) => (
          <button
            className={active === prompt.key ? "active" : ""}
            key={prompt.key}
            onClick={() => choose(prompt.key)}
            type="button"
          >
            {prompt.label}
          </button>
        ))}
      </div>

      <div className="conversationReply" aria-live="polite">
        <p>{reply.kicker}</p>
        <div>{reply.answer}</div>
        <nav aria-label="Suggested destinations">
          {reply.links.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
            >
              {link.label} <span aria-hidden="true">{link.external ? "↗" : "→"}</span>
            </a>
          ))}
        </nav>
      </div>

      <form className="conversationForm" onSubmit={submit}>
        <label htmlFor="portfolio-question">Or ask about a subject</label>
        <div>
          <input
            id="portfolio-question"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try “Vancouver” or “evaluation”"
            type="text"
            value={query}
          />
          <button type="submit" aria-label="Ask the portfolio">Ask →</button>
        </div>
      </form>
    </section>
  );
}
