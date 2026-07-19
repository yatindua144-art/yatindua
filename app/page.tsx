const investigations = [
  {
    number: "01",
    place: "Gastown, Vancouver",
    title: "What happens when the same street is described as two different crises?",
    summary:
      "Businesses emphasized safety and public disorder. Service providers emphasized poverty, harm reduction, and the absence of low-barrier support. The shared failure was not a lack of concern. It was the lack of a reliable communication system between the groups responding to the same street.",
    methods: ["16 service providers", "36 businesses", "Mixed methods", "Direct canvassing"],
    field: "Conflicting experiences of public space",
    system: "Fragmented municipal, business, and outreach response",
    decision: "A shared communication protocol",
  },
  {
    number: "02",
    place: "Squamish Nation",
    title: "How does a funded program remain accountable without losing sight of the person?",
    summary:
      "Workforce programs carry two responsibilities at once: support participants through real barriers and satisfy the rules attached to public funding. I built the operational systems that held intake, progress, safety records, vendors, and reporting together across concurrent programs.",
    methods: ["5 programs", "4–5 agreements", "Audit readiness", "Excel dashboards"],
    field: "Participants navigating practical barriers",
    system: "Eligibility, safety, funding, and reporting requirements",
    decision: "Usable workflows that preserved both care and compliance",
  },
  {
    number: "03",
    place: "British Columbia",
    title: "The pass rate is not the outcome.",
    summary:
      "BCTA's MELT analysis raises a useful next question: does a higher first-attempt road-test pass rate translate into consistent training, first-job readiness, and early safety performance? This independent note proposes a carrier evidence protocol to find out.",
    methods: ["Regulatory scan", "Evaluation design", "Carrier pulse", "Decision framework"],
    field: "Carrier and newly licensed driver experience",
    system: "Training, licensing, onboarding, and safety oversight",
    decision: "A lean thirty-day evaluation pilot",
  },
  {
    number: "04",
    place: "Jharkhand, India",
    title: "When violence is explained as superstition, what disappears from view?",
    summary:
      "A self-funded field study examined witch-hunting not as an isolated belief but as violence shaped by land, inheritance, caste, widowhood, poverty, and women's refusal to remain socially legible.",
    methods: ["100+ interviews", "150+ surveys", "Field research", "Human-rights analysis"],
    field: "Testimony from women and community actors",
    system: "Gender, property, social power, and institutional protection",
    decision: "An explanation grounded in evidence rather than folklore",
  },
];

const libraryPreview = [
  {
    type: "Public essay",
    title: "More than stewards",
    text: "Indigenous leadership, clean-energy labour, and what a more honest transition conversation must admit.",
  },
  {
    type: "Field essay",
    title: "The first explanation is never the complete explanation",
    text: "What field research in Jharkhand and observation in Vancouver taught me about explanations that make systems comfortable.",
  },
  {
    type: "Open question",
    title: "What does Canada actually mean by skill?",
    text: "An inquiry into occupational classification, migration, and the administrative production of deskilling.",
  },
  {
    type: "Poetry",
    title: "Burning Dry",
    text: "A published poem on nation, identity, violence, and the colours made to carry them.",
  },
];

const workingQuestions = [
  {
    number: "01",
    theme: "Institutions & lived experience",
    question: "What gets lost when consultation is treated as data collection?",
    connection: "Gastown research / Field essay",
  },
  {
    number: "02",
    theme: "Work & mobility",
    question: "What does Canada actually mean by skill?",
    connection: "Workforce programs / Migration essay",
  },
  {
    number: "03",
    theme: "Care & accountability",
    question: "When does compliance strengthen a program, and when does it narrow care?",
    connection: "Squamish Nation / Program practice",
  },
  {
    number: "04",
    theme: "Safety & public space",
    question: "Who is permitted to define safety in a contested place?",
    connection: "Gastown / Open inquiry",
  },
];

const pathways = [
  {
    title: "Institutions and lived experience",
    prompt: "Where the administrative account and the human account stop matching.",
    links: ["Squamish Nation programs", "The first explanation", "Invited, Then Asked to Leave"],
  },
  {
    title: "Belonging and public space",
    prompt: "How safety, care, authority, and visibility are negotiated in shared places.",
    links: ["Gastown research", "Public-space inquiry", "Four Names for the Same Water"],
  },
  {
    title: "Work, mobility and opportunity",
    prompt: "How institutions recognize skill, distribute opportunity, and produce exclusion.",
    links: ["Workforce programming", "Jharkhand fieldwork", "Before You Come to Canada"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="hero" id="top">
        <nav className="nav shell" aria-label="Primary navigation">
          <a className="identity" href="#top">
            <strong>Yatin Dua</strong>
            <span>Vancouver, BC</span>
          </a>
          <div className="navLinks">
            <a href="#work">Work</a>
            <a href="#questions">Questions</a>
            <a href="/ideas">Writing</a>
            <a href="#photography">Photography</a>
            <a href="#about">About</a>
          </div>
        </nav>

        <div className="heroBody shell">
          <div className="heroCopy">
            <p className="label">Field research / Public systems / Applied policy</p>
            <h1>
              Policy begins where people meet systems<span>.</span>
            </h1>
            <p className="heroIntro">
              I study the distance between how institutions design programs and
              how people experience them, using field research, policy interpretation,
              program practice, and writing to make that distance visible.
            </p>
            <a className="textLink" href="#work">
              View selected investigations <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="systemMap" aria-hidden="true">
            <span className="route routeA" />
            <span className="route routeB" />
            <span className="route routeC" />
            <span className="contours contourA" />
            <span className="contours contourB" />
            <span className="node nodeA" />
            <span className="node nodeB" />
            <span className="node nodeC" />
            <span className="node nodeD" />
          </div>
        </div>

        <div className="methodRail shell" aria-label="Practice framework">
          <div><span>Field</span><strong>Listen closely</strong></div>
          <div><span>System</span><strong>Trace the rules</strong></div>
          <div><span>Decision</span><strong>Make evidence usable</strong></div>
        </div>
      </header>

      <section className="questions section shell" id="questions">
        <div className="sectionIntro questionIntro">
          <p className="label">Questions I&apos;m working on</p>
          <h2>A practice organized by inquiry.</h2>
          <p>
            These are active questions, not finished positions. Each connects
            evidence already gathered with work that remains to be done.
          </p>
        </div>
        <div className="workingQuestionList">
          {workingQuestions.map((item) => (
            <a href="/ideas#questions" className="workingQuestion" key={item.number}>
              <span className="questionNumber">{item.number}</span>
              <div><span className="questionTheme">{item.theme}</span><h3>{item.question}</h3></div>
              <span className="questionConnection">{item.connection}</span>
              <span className="questionArrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="work section shell" id="work">
        <div className="sectionIntro">
          <p className="label">Selected investigations</p>
          <h2>Public questions, followed all the way through.</h2>
          <p>
            Each case moves from lived experience to institutional structure
            to a decision someone could actually make.
          </p>
        </div>

        <div className="investigations">
          {investigations.map((project) => (
            <article className="investigation" key={project.number}>
              <div className="projectMeta">
                <span className="projectNumber">{project.number}</span>
                <span>{project.place}</span>
              </div>
              <div className="projectCore">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="methodTags" aria-label="Project methods and scale">
                  {project.methods.map((method) => <li key={method}>{method}</li>)}
                </ul>
              </div>
              <dl className="projectLogic">
                <div><dt>Field</dt><dd>{project.field}</dd></div>
                <div><dt>System</dt><dd>{project.system}</dd></div>
                <div><dt>Decision</dt><dd>{project.decision}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="note section" id="notes">
        <div className="shell noteGrid">
          <div>
            <p className="label labelLight">Current policy note / Transportation</p>
            <h2>The pass rate is not the outcome.</h2>
          </div>
          <div className="noteBody">
            <p className="noteLead">
              A practical framework for evaluating whether BC&apos;s Mandatory
              Entry-Level Training program produces consistent training,
              work-ready graduates, and a system that learns from carrier evidence.
            </p>
            <div className="noteStats">
              <div><strong>26,873</strong><span>road tests examined by BCTA</span></div>
              <div><strong>63%</strong><span>post-MELT first-attempt pass rate</span></div>
              <div><strong>4</strong><span>proposed evaluation lenses</span></div>
            </div>
            <p className="boundary">
              Independent concept note based on public aggregate information.
              It does not claim completed primary research or assess individual providers.
            </p>
          </div>
        </div>
      </section>

      <section className="fieldNote section shell" id="field-note">
        <div className="fieldNoteHead">
          <p className="label">From the field / 01</p>
          <span>Gastown, Vancouver / 2024</span>
        </div>
        <div className="fieldNoteGrid">
          <div className="fieldObservation">
            <p className="fieldKicker">One observation. One policy question. Evidence still needed.</p>
            <h2>Agreement was hiding inside the disagreement.</h2>
          </div>
          <dl className="fieldSequence">
            <div><dt>Observed tension</dt><dd>Businesses described safety and disorder. Service providers described poverty, harm reduction, and insufficient low-barrier support.</dd></div>
            <div><dt>Closer finding</dt><dd>Both groups identified a failure of rapid, dependable communication between businesses and outreach teams.</dd></div>
            <div><dt>Policy question</dt><dd>Can a shared operating protocol create progress when ideological consensus is unlikely?</dd></div>
            <div><dt>Evidence needed next</dt><dd>Response-time data, incident pathways, participant interviews, and a limited protocol pilot.</dd></div>
          </dl>
        </div>
        <p className="evidenceStrip"><strong>Evidence status:</strong> Field observation drawn from a mixed-methods project with 16 service providers and 36 businesses. The proposed protocol remains a recommendation, not an evaluated intervention.</p>
      </section>

      <section className="pathways section" id="pathways">
        <div className="shell">
          <div className="sectionIntro compact">
            <p className="label">Explore by theme</p>
            <h2>Different forms. Recurring concerns.</h2>
          </div>
          <div className="pathwayGrid">
            {pathways.map((item, index) => (
              <article className="pathway" key={item.title}>
                <span className="pathwayNumber">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.prompt}</p>
                <ul>{item.links.map((link) => <li key={link}>{link}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="writing section shell" id="writing">
        <div className="sectionIntro compact">
          <p className="label">Ideas &amp; writing</p>
          <div>
            <h2>Arguments, poems, and questions still being worked through.</h2>
            <a className="textLink libraryLink" href="/ideas">Explore the complete library <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="writingList">
          {libraryPreview.map((item) => (
            <article key={item.title}>
              <span>{item.type}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="photography section" id="photography">
        <div className="shell photoHeader">
          <p className="label labelLight">Photography</p>
          <h2>Observation before explanation.</h2>
          <p>
            Photographs are not decoration for the policy work. They are a separate
            practice of attention, context, and memory.
          </p>
        </div>
        <div className="photoGrid shell">
          <figure className="photoLarge">
            <img src="/portfolio/jharkhand-fieldwork.jpg" alt="A field interview taking place beneath a veranda in Jharkhand" />
            <figcaption>Jharkhand / field research / 2022</figcaption>
          </figure>
          <figure>
            <img src="/portfolio/delhi-corridor.jpg" alt="A long black-and-white corridor after rain in Delhi" />
            <figcaption>Delhi / after rain</figcaption>
          </figure>
          <figure>
            <img src="/portfolio/room-desk.jpg" alt="A lived-in room with a desk, books, maps, and a framed photograph" />
            <figcaption>A Room Held / private archive</figcaption>
          </figure>
        </div>
      </section>

      <section className="about section shell" id="about">
        <div className="aboutStatement">
          <p className="label">About the practice</p>
          <h2>I work between the field note and the briefing note.</h2>
        </div>
        <div className="aboutBody">
          <p>
            I am a Vancouver-based policy researcher and writer with experience
            in program implementation, stakeholder engagement, regulatory interpretation,
            mixed-methods research, and public communication.
          </p>
          <p>
            My work has moved through Indigenous workforce programming, homelessness
            and public-space policy, maternal-health access, gender-based violence,
            and sustainable development. Across those contexts, the question remains
            consistent: how can institutions understand people without reducing them
            to what a form, metric, or funding agreement can hold?
          </p>
          <div className="contactLinks">
            <a href="mailto:yatindua144@gmail.com">yatindua144@gmail.com</a>
            <a href="https://www.linkedin.com/in/yatin-dua/">LinkedIn</a>
            <span>Vancouver, British Columbia</span>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <span>© 2026 Yatin Dua</span>
        <a href="#top">Return to top ↑</a>
      </footer>
    </main>
  );
}
