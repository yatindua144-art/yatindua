const policyNotes = [
  {
    date: "2026",
    status: "Independent policy note",
    title: "The Pass Rate Is Not the Outcome",
    summary: "A proposed evaluation framework for asking whether BC's Mandatory Entry-Level Training program produces consistent training, work-ready graduates, and a system that learns from carrier evidence.",
    detail: "Built from BCTA's public road-test analysis. The note distinguishes test performance from job readiness and proposes four evaluation lenses: provider consistency, first-job transition, early safety performance, and the feedback loop between carriers, trainers, and regulators.",
    evidence: "Public aggregate analysis and independent evaluation design",
    next: "Carrier interviews, provider-level data, early employment outcomes, and safety indicators",
  },
  {
    date: "2024",
    status: "MPPA capstone",
    title: "Community Care in Action",
    summary: "A BIA-driven service model for responding to homelessness, mental-health challenges, addiction, public-space safety, and fragmented civic responsibility in Gastown.",
    detail: "The project combined research with evidence from businesses and service providers. Rather than erase their conflicting accounts, it identified a shared operational gap: the absence of coordinated, rapid communication between businesses and outreach teams.",
    evidence: "16 service-provider interviews and responses from 36 businesses",
    next: "Protocol pilot, response-time measures, and participant feedback",
  },
  {
    date: "2024",
    status: "Policy evaluation",
    title: "Maternal-Health Access in Bella Bella",
    summary: "An applied research project examining the barriers that rural and remote Indigenous patients encounter when seeking maternal-health information, services, nutrition support, and continuity of care.",
    detail: "The work explored how low-connectivity environments, limited local services, travel requirements, and fragmented information shape access. It produced a service concept, not a claim to speak for community members or replace community-led design.",
    evidence: "Applied research and service-concept development",
    next: "Community-led validation, patient journeys, and Indigenous data-governance review",
  },
];

const essays = [
  {
    date: "2026",
    status: "Public essay",
    title: "More than Stewards",
    summary: "On Indigenous leadership, clean-energy labour shortages, and what a more honest green-transition conversation must admit.",
    detail: "The essay challenges language that recognizes Indigenous communities only as environmental stewards while overlooking ownership, governance, workforce leadership, and decision-making authority.",
    excerpt: "A transition cannot be called inclusive if Indigenous communities appear only in its acknowledgements. Stewardship is not a substitute for authority. The more serious questions concern who owns the infrastructure, who defines the work, who develops the workforce, and who retains the value created on the land.",
  },
  {
    date: "2026",
    status: "Field essay",
    title: "The First Explanation Is Never the Complete Explanation",
    summary: "What field research in Jharkhand and observation in Vancouver reveal about explanations that isolate individual behaviour from land, poverty, gender, institutions, and power.",
    detail: "The essay does not claim that distinct places or experiences are equivalent. It reflects on a recurring analytical failure: treating the most visible explanation as though it were the entire system.",
    excerpt: "The first explanation is often the one a system already knows how to record. A superstition. A disturbance. A failure to comply. Fieldwork begins when that explanation is treated as an opening rather than a conclusion, and when the surrounding questions of land, gender, poverty, authority, and institutional response are allowed back into view.",
  },
  {
    date: "2026",
    status: "Personal policy essay",
    title: "Invited, Then Asked to Leave",
    summary: "A first-person examination of how immigration systems welcome educational credentials while labour systems can render the same credentials economically invisible.",
    detail: "The argument connects lived experience with occupational classification, underemployment, and the political language of skill. It is presented as an essay, not as completed labour-market research.",
    excerpt: "The invitation arrived through a points system that could count education precisely. After arrival, the labour market translated the same education into uncertainty. The contradiction is not simply personal disappointment. It raises a policy question about how one part of the state recognizes skill while another economy renders it conditional.",
  },
  {
    date: "2026",
    status: "Personal essay",
    title: "Before You Come to Canada",
    summary: "The distance between migration's public image and the private experience of surviving after arrival.",
    detail: "A narrative essay about work, dignity, money, shame, and the stories migrants often protect their families from hearing. The personal account is not presented as representative of every newcomer experience.",
    excerpt: "There is the Canada described before departure, and the Canada explained quietly after arrival. Between them are jobs not mentioned in family calls, calculations made in grocery aisles, and the strange work of protecting the people at home from the cost of the decision they helped you make.",
  },
];

const questions = [
  {
    stage: "Developing",
    title: "What does Canada actually mean by skill?",
    why: "Educational attainment, occupational classification, immigration selection, and the work a person can actually obtain do not always describe the same thing.",
    hypothesis: "Deskilling may be produced not only by employer bias, but by the interaction between immigration selection, occupational categories, licensing systems, and the requirement for Canadian experience.",
    evidence: "Occupational mobility data, classification history, employer interviews, immigrant-worker accounts, licensing rules, and wage trajectories.",
  },
  {
    stage: "Early inquiry",
    title: "Who is permitted to define safety in contested public space?",
    why: "Businesses, residents, service providers, street-involved people, police, and municipal agencies can experience the same place through radically different forms of risk.",
    hypothesis: "Safety policy becomes less effective when one group's immediate experience is treated as the complete definition of the problem.",
    evidence: "Participatory interviews, incident and service-call data, outreach records, public-space observation, and analysis of decision authority.",
  },
  {
    stage: "Concept development",
    title: "What would maternal-health access designed from Bella Bella look like?",
    why: "A service designed around urban connectivity, specialist availability, and short travel distances can reproduce exclusion in rural and remote communities.",
    hypothesis: "The most useful intervention may be a coordinated information and navigation layer governed with community, rather than another isolated digital application.",
    evidence: "Community-led research, patient journeys, service inventories, connectivity constraints, referral pathways, and Indigenous data-governance requirements.",
  },
  {
    stage: "Developing",
    title: "When does compliance strengthen a program, and when does it narrow what care can look like?",
    why: "Public funding rules create accountability, but they can also shape eligibility, timelines, documentation burdens, and the kinds of support staff can provide.",
    hypothesis: "The operational design of compliance systems determines whether accountability and participant-centred delivery reinforce or undermine one another.",
    evidence: "Contribution agreements, staff workflows, audit findings, participant journeys, administrative burden, and comparative program models.",
  },
];

export default function IdeasPage() {
  return (
    <main className="libraryPage" id="top">
      <nav className="nav shell libraryNav" aria-label="Library navigation">
        <a className="identity" href="/">
          <strong>Yatin Dua</strong>
          <span>Vancouver, BC</span>
        </a>
        <div className="navLinks">
          <a href="/">Portfolio</a>
          <a href="#notes">Policy notes</a>
          <a href="#essays">Essays</a>
          <a href="#poetry">Poetry</a>
          <a href="#questions">Open questions</a>
          <a href="https://yatindua.substack.com/" target="_blank" rel="noreferrer">Substack</a>
        </div>
      </nav>

      <header className="libraryHero shell">
        <p className="label">Ideas &amp; writing</p>
        <h1>A library of arguments, observations, and unfinished questions.</h1>
        <p>Policy notes, public essays, field writing, poetry, and research ideas at different stages of development. Every item is labelled by what it is, and what it is not.</p>
        <div className="libraryIndex" aria-label="Library contents">
          <a href="#notes"><span>01</span>Policy notes</a>
          <a href="#essays"><span>02</span>Essays</a>
          <a href="#poetry"><span>03</span>Poetry</a>
          <a href="#questions"><span>04</span>Open questions</a>
        </div>
      </header>

      <section className="librarySection shell" id="notes">
        <div className="librarySectionHead"><p className="label">01 / Policy notes</p><h2>Research shaped for a decision.</h2></div>
        <div className="libraryEntries">
          {policyNotes.map((item) => (
            <details className="libraryEntry" key={item.title}>
              <summary>
                <div className="entryMeta"><span>{item.date}</span><span>{item.status}</span></div>
                <div><h3>{item.title}</h3><p>{item.summary}</p></div>
                <span className="entryControl" aria-hidden="true">+</span>
              </summary>
              <div className="entryDetail"><p>{item.detail}</p><dl className="evidenceLedger"><div><dt>Evidence available</dt><dd>{item.evidence}</dd></div><div><dt>Evidence needed next</dt><dd>{item.next}</dd></div></dl><p className="entryBoundary">The classification and evidence boundary are stated explicitly.</p></div>
            </details>
          ))}
        </div>
      </section>

      <section className="librarySection essaySection" id="essays">
        <div className="shell">
          <div className="librarySectionHead"><p className="label">02 / Essays</p><h2>Arguments that keep the person inside them.</h2></div>
          <div className="essayGrid">
            {essays.map((item) => (
              <details className="essayCard" key={item.title}>
                <summary><div className="entryMeta"><span>{item.date}</span><span>{item.status}</span></div><h3>{item.title}</h3><p>{item.summary}</p><span className="cardControl">Read context +</span></summary>
                <div className="entryDetail"><p>{item.detail}</p><blockquote className="essayExcerpt">{item.excerpt}</blockquote><p className="entryBoundary">Edited portfolio excerpt. The argument is presented in its stated genre, not as completed policy research.</p></div>
              </details>
            ))}
          </div>
          <div className="externalWriting">
            <p>For published pieces and new writing beyond this portfolio:</p>
            <a className="textLink" href="https://yatindua.substack.com/" target="_blank" rel="noreferrer">Read on Substack <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="poetrySection" id="poetry">
        <div className="shell poetryGrid">
          <div><p className="label labelLight">03 / Poetry</p><h2>Where the argument stops explaining itself.</h2></div>
          <article className="poem">
            <div className="entryMeta"><span>Published poem</span><span>Gaysi Family</span></div>
            <h3>Burning Dry</h3>
            <blockquote><span>It&apos;s burning and bleeding dry</span><span>Saffron, white and green</span><span>Hues of rainbow in between</span></blockquote>
            <p>A poem on nation, identity, violence, and the colours made to carry them. Only a brief excerpt is reproduced here.</p>
          </article>
        </div>
      </section>

      <section className="librarySection shell" id="questions">
        <div className="librarySectionHead"><p className="label">04 / Open research questions</p><h2>Not conclusions. Invitations to investigate.</h2><p>These entries make uncertainty visible. Each one separates a provisional hypothesis from the evidence still required.</p></div>
        <div className="questionGrid">
          {questions.map((item, index) => (
            <article className="researchQuestion" key={item.title}>
              <div className="questionMeta"><span>{String(index + 1).padStart(2, "0")}</span><span>{item.stage}</span></div>
              <h3>{item.title}</h3>
              <dl>
                <div><dt>Why it matters</dt><dd>{item.why}</dd></div>
                <div><dt>Working hypothesis</dt><dd>{item.hypothesis}</dd></div>
                <div><dt>Evidence needed</dt><dd>{item.evidence}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer shell"><span>© 2026 Yatin Dua</span><div className="footerLinks"><a href="https://www.linkedin.com/in/yatindua17/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://yatindua.substack.com/" target="_blank" rel="noreferrer">Substack ↗</a><a href="#top">Return to top ↑</a></div></footer>
    </main>
  );
}
