"use client";

import { useState } from "react";

type Reply = {
  kicker: string;
  answer: string;
  links: Array<{ label: string; href: string; external?: boolean }>;
};

const replies: Record<string, Reply> = {
  writing: {
    kicker: "A good place to begin",
    answer:
      "Start with my editing essay. It is the clearest demonstration of how I read an argument, protect uncertainty, and find the sentence a public reader actually needs.",
    links: [
      { label: "Read the editing essay", href: "/writing/important-sentence" },
      { label: "Browse all writing", href: "/writing" },
    ],
  },
  thinking: {
    kicker: "The method, without the framework slide",
    answer:
      "I begin where an explanation becomes too comfortable. Then I ask what it leaves out, who disappears from the grammar, and which consequence the evidence can honestly support.",
    links: [
      { label: "Open my live questions", href: "#questions" },
      { label: "Read a systems essay", href: "/writing/community-care" },
    ],
  },
  editor: {
    kicker: "Why editing",
    answer:
      "Policy work taught me to find the decision buried inside a document. Editing is the same judgment directed toward a reader: what is the real claim, what must remain uncertain, and what should come next?",
    links: [
      { label: "See the editorial argument", href: "/writing/important-sentence" },
      { label: "Read my CV", href: "/cv" },
    ],
  },
  contact: {
    kicker: "A human answer is better here",
    answer:
      "If you want to discuss a policy question, a research problem, a program, an edit, or a role, write directly. I am based in Vancouver and I read every message myself.",
    links: [
      { label: "Email me", href: "mailto:yatindua144@gmail.com" },
      { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/yatindua17/", external: true },
    ],
  },
};

const prompts = [
  { label: "Show me the writing", key: "writing" },
  { label: "How do you think?", key: "thinking" },
  { label: "Why editing?", key: "editor" },
  { label: "I want to get in touch", key: "contact" },
];

export default function ConversationGuide() {
  const [reply, setReply] = useState<Reply>(replies.writing);
  const [active, setActive] = useState("writing");

  function choose(key: string) {
    setActive(key);
    setReply(replies[key]);
  }

  return (
    <section className="conversationGuide" aria-labelledby="conversation-title">
      <div className="conversationTopline">
        <span className="conversationStatus" aria-hidden="true" />
        <p id="conversation-title">START HERE</p>
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
    </section>
  );
}
