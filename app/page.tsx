import ConversationGuide from "./components/ConversationGuide";

type WorkItem = {
  number: string;
  date: string;
  type: string;
  title: string;
  description: string;
  href: string;
  className: string;
  external?: boolean;
};

const selectedWork: WorkItem[] = [
  { number: "01", date: "August 2026", type: "Editing", title: "The Most Important Sentence Is Usually Buried", description: "What policy and academic writing taught me about editing research for a public reader.", href: "/writing/important-sentence", className: "workCard workCardFeature workCardCoral" },
  { number: "02", date: "August 2026", type: "Municipal affairs", title: "The Vancouver Election Question Nobody Is Asking", description: "The consequential question is not only who wins, but what the next political arrangement lets City Hall keep doing.", href: "/writing/vancouver-election-question", className: "workCard workCardBlue" },
  { number: "03", date: "July 2026", type: "Evaluation note", title: "The Pass Rate Is Not the Outcome", description: "A blueprint for evaluating training through readiness, safety, and the feedback loop after graduation.", href: "/writing/pass-rate", className: "workCard workCardLime" },
  { number: "04", date: "April 2026", type: "Climate and Indigenous policy", title: "More Than Stewards", description: "Why Canada's clean-energy transition needs Indigenous leadership, not Indigenous symbolism.", href: "https://www.linkedin.com/pulse/more-than-stewards-why-canadas-clean-energy-transition-yatin-dua-bhave/", className: "workCard workCardInk", external: true },
  { number: "05", date: "November 2024", type: "Research essay", title: "Community Care in Action", description: "What a neighbourhood institution can contribute to Vancouver's response to homelessness, and where its role should end.", href: "/writing/community-care", className: "workCard workCardBlue" },
  { number: "06", date: "June 2021", type: "Other writing / Poetry", title: "Burning Dry", description: "An illustrated poem on nation, identity, violence, and the colours made to carry them, published by Gaysi Family.", href: "https://www.gaysifamily.com", className: "workCard workCardCoral", external: true },
];

const openQuestions = [
  { title: "What does Canada actually mean by skill?", text: "The obvious answer is education, experience, and occupational competence. But immigration selection, licensing systems, employer expectations, and the demand for Canadian experience do not recognize those things consistently. I am interested in how their interaction produces deskilling rather than merely recording it." },
  { title: "Who is permitted to define safety in contested public space?", text: "Businesses, residents, service providers, street-involved people, police, and municipal agencies can experience the same place through different forms of risk. The easy response is to decide which account is correct. My question is what safety policy misses when one group's immediate experience becomes the complete definition of the problem." },
  { title: "What would maternal-health access designed from Bella Bella look like?", text: "A service can exist on paper and remain inaccessible in practice. Urban assumptions about connectivity, specialist availability, and travel distance can reproduce exclusion in rural and remote communities. I am interested in whether the useful intervention is a community-governed information and navigation layer rather than another isolated application." },
  { title: "When does compliance strengthen a program, and when does it narrow care?", text: "Public funding rules create necessary accountability, but they also shape eligibility, timelines, documentation burdens, and the support staff can provide. The question is how operational design determines whether accountability and participant-centred delivery reinforce or undermine one another." },
];

export default function Home() {
  return (
    <main className="livingHome" id="top">
      <section className="livingHero">
        <nav className="nav shell livingNav" aria-label="Primary navigation">
          <a className="identity" href="#top"><strong>Yatin Dua</strong><span>Policy / Research / Programs</span></a>
          <div className="navLinks">
            <a href="#writing">Writing</a><a href="#questions">Questions</a><a href="/cv">About</a><a href="mailto:yatindua144@gmail.com">Say hello ↗</a>
          </div>
        </nav>

        <div className="livingHeroGrid shell">
          <header className="livingHeroCopy">
            <p className="liveEyebrow"><span aria-hidden="true" /> Vancouver / 2026</p>
            <h1>I do not trust <em>the first</em> explanation.</h1>
            <p>I work across policy, research, program delivery, and public-interest writing, especially where institutions, evidence, and implementation do not line up neatly.</p>
          </header>
          <ConversationGuide />
        </div>

        <div className="signalTicker" aria-hidden="true"><div className="tickerTrack">
          <span>Policy</span><i>✦</i><span>Research</span><i>✦</i><span>Program delivery</span><i>✦</i><span>Evidence</span><i>✦</i><span>Public systems</span><i>✦</i><span>Policy</span><i>✦</i><span>Research</span><i>✦</i><span>Program delivery</span><i>✦</i>
        </div></div>
      </section>

      <section className="workPortal section shell" id="writing">
        <div className="portalHeading">
          <p className="sectionCode">02 / Enter the work</p><h2>Choose a way in.</h2><p>Six pieces. Six different tests of the easy explanation.</p>
        </div>
        <div className="bentoWork">
          {selectedWork.map((item) => (
            <a
              className={item.className}
              href={item.href}
              key={item.title}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              <div className="workCardMeta"><span>{item.number}</span><span>{item.date}</span></div>
              <div className="workCardBody"><p>{item.type}</p><h3>{item.title}</h3><div>{item.description}</div></div>
              <span className="workCardArrow" aria-hidden="true">{item.external ? "↗" : "→"}</span>
            </a>
          ))}
        </div>
        <a className="archiveDoor" href="/writing"><span>Not sure where to begin?</span><strong>See the complete writing archive</strong><b aria-hidden="true">→</b></a>
      </section>

      <section className="questionLab section" id="questions"><div className="shell">
        <div className="questionLabHead"><p className="sectionCode">03 / Notebook in public</p><div><h2>Questions with<br />the answers removed.</h2><p>Open one. This is what I am still trying to understand.</p></div></div>
        <div className="questionAccordion">
          {openQuestions.map((item, index) => (
            <details key={item.title}><summary><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><b aria-hidden="true">+</b></summary><div className="questionAnswer"><p>{item.text}</p></div></details>
          ))}
        </div>
      </div></section>

      <section className="conversationAbout section shell" id="about">
        <div className="aboutPrompt"><p className="sectionCode">04 / The connecting thread</p><p>You might be asking:</p><h2>What connects<br />the work?</h2></div>
        <div className="aboutAnswer">
          <p className="aboutLead">Policy, research, program delivery, and writing all ask the same thing of me: find the real problem, understand what the evidence supports, and make the next decision clearer.</p>
          <div className="aboutColumns"><p>I am based in Vancouver and work across public systems, field research, program delivery, evaluation, and the language institutions use to explain their choices.</p><p>I am most interested in work where research, judgment, communication, and implementation meet, especially when a complex problem has to become something people can actually use.</p></div>
          <div className="thinkingTags" aria-label="Areas of practice"><span>Policy analysis</span><span>Program delivery</span><span>Research</span><span>Public-interest writing</span></div>
        </div>
      </section>

      <section className="humanDoor shell"><p>05 / This part is human</p><h2>Still have a question?</h2><div><p>Good. Send it to me.</p><a href="mailto:yatindua144@gmail.com">yatindua144@gmail.com <span>↗</span></a></div></section>

      <footer className="livingFooter shell"><span>© 2026 Yatin Dua</span><span>Vancouver, British Columbia</span><div><a href="/writing">Writing</a><a href="https://www.linkedin.com/in/yatindua17/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="#top">Top ↑</a></div></footer>
    </main>
  );
}
