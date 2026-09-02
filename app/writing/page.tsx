import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description: "Policy essays, public writing, evaluation notes, and other published work by Yatin Dua.",
  alternates: { canonical: "/writing" },
  openGraph: {
    title: "Writing | Yatin Dua",
    description: "Policy essays, public writing, evaluation notes, and other published work by Yatin Dua.",
    url: "/writing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing | Yatin Dua",
    description: "Policy essays, public writing, evaluation notes, and other published work by Yatin Dua.",
  },
};

const writing = [
  {
    date: "August 2026",
    type: "Editing",
    title: "The Most Important Sentence Is Usually Buried",
    description: "What policy and academic writing taught me about editing research for a public reader.",
    href: "/writing/important-sentence",
  },
  {
    date: "August 2026",
    type: "Municipal affairs",
    title: "The Vancouver Election Question Nobody Is Asking",
    description: "The mayoral race will dominate Vancouver's election. For organizations with a file at City Hall, the more useful question is what the next political arrangement allows the institution to keep doing.",
    href: "/writing/vancouver-election-question",
  },
  {
    date: "July 2026",
    type: "Evaluation note",
    title: "The Pass Rate Is Not the Outcome",
    description: "A practical blueprint for evaluating commercial-driver training through first-job readiness, early safety performance, and a repeatable feedback loop.",
    href: "/writing/pass-rate",
  },
  {
    date: "April 2026",
    type: "Public essay",
    title: "More Than Stewards",
    description: "On Indigenous leadership, clean-energy labour shortages, and what a more honest green-transition conversation must admit.",
    href: "https://www.linkedin.com/pulse/more-than-stewards-why-canadas-clean-energy-transition-yatin-dua-bhave/",
    external: true,
  },
  {
    date: "November 2024",
    type: "Research essay",
    title: "Community Care in Action",
    description: "What a neighbourhood institution can contribute to Vancouver's response to homelessness, mental health, and substance use, and where its role should end.",
    href: "/writing/community-care",
  },
];

const otherWriting = [
  {
    date: "June 2021",
    type: "Illustrated poetry",
    title: "Burning Dry",
    description: "A published poem on nation, identity, violence, and the colours made to carry them.",
    href: "https://www.gaysifamily.com",
  },
];

const questions = [
  {
    title: "What does Canada actually mean by skill?",
    text: "The obvious answer is that skill is demonstrated by education, experience, and occupational competence. But immigration selection, licensing systems, employer expectations, and the demand for Canadian experience do not recognize those things consistently. I am interested in how their interaction produces deskilling rather than merely recording it.",
  },
  {
    title: "Who is permitted to define safety in contested public space?",
    text: "Businesses, residents, service providers, street-involved people, police, and municipal agencies can experience the same place through different forms of risk. The easy response is to decide which account is correct. My question is what safety policy misses when one group's immediate experience becomes the complete definition of the problem.",
  },
  {
    title: "What would maternal-health access designed from Bella Bella look like?",
    text: "A service can exist on paper and remain inaccessible in practice. Urban assumptions about connectivity, specialist availability, and travel distance can reproduce exclusion in rural and remote communities. I am interested in whether the more useful intervention is a community-governed information and navigation layer rather than another isolated application.",
  },
  {
    title: "When does compliance strengthen a program, and when does it narrow care?",
    text: "Public funding rules create necessary accountability, but they also shape eligibility, timelines, documentation burdens, and the support staff can provide. The question is not whether compliance is good or bad. It is how operational design determines whether accountability and participant-centred delivery reinforce or undermine one another.",
  },
];

export default function WritingPage() {
  return (
    <main className="writingPage" id="top">
      <nav className="nav shell libraryNav" aria-label="Writing navigation">
        <Link className="identity" href="/">
          <strong>Yatin Dua</strong>
          <span>Policy / Research / Programs</span>
        </Link>
        <div className="navLinks">
          <Link href="/">Home</Link>
          <a href="#writing">Writing</a>
          <a href="#questions">Open questions</a>
          <Link href="/cv">About</Link>
          <a href="https://www.linkedin.com/in/yatindua17/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </nav>

      <header className="writingHero shell">
        <p className="label">Writing</p>
        <h1>A body of work.</h1>
        <p>Finished essays and published work, listed in reverse chronological order.</p>
      </header>

      <section className="writingArchive shell" id="writing" aria-labelledby="archive-title">
        <h2 className="srOnly" id="archive-title">Published writing</h2>
        {writing.map((item) => (
          <a
            className="archiveItem"
            href={item.href}
            key={item.title}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
          >
            <div className="archiveMeta"><span>{item.date}</span><span>{item.type}</span></div>
            <div><h3>{item.title}</h3><p>{item.description}</p></div>
            <span className="archiveArrow" aria-hidden="true">{item.external ? "↗" : "→"}</span>
          </a>
        ))}
      </section>

      <section className="writingArchive shell" aria-labelledby="other-writing-title">
        <div className="editorialSectionHead"><div><p className="label">Other writing</p><h2 id="other-writing-title">Beyond policy work.</h2></div></div>
        {otherWriting.map((item) => (
          <a className="archiveItem" href={item.href} key={item.title} target="_blank" rel="noreferrer">
            <div className="archiveMeta"><span>{item.date}</span><span>{item.type}</span></div>
            <div><h3>{item.title}</h3><p>{item.description}</p></div>
            <span className="archiveArrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </section>

      <section className="openQuestions section" id="questions">
        <div className="shell">
          <div className="editorialSectionHead questionsHead">
            <div><p className="label">Open questions</p><h2>What I&apos;m working on.</h2></div>
            <p className="updated">Updated September 2026</p>
          </div>
          <div className="questionNotebook">
            {questions.map((item, index) => (
              <article className="notebookEntry" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 Yatin Dua</span>
        <div className="footerLinks">
          <Link href="/">Home</Link>
          <Link href="/cv">CV</Link>
          <a href="https://www.linkedin.com/in/yatindua17/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="#top">Return to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
