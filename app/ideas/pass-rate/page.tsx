import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The pass rate is not the outcome",
  description:
    "A practical evaluation blueprint for moving British Columbia's Mandatory Entry-Level Training conversation from test completion to first-job readiness and early safety performance.",
};

export default function PassRatePage() {
  return (
    <main className="articlePage" id="top">
      <nav className="nav shell libraryNav" aria-label="Article navigation">
        <Link className="identity" href="/">
          <strong>Yatin Dua</strong>
          <span>Writer and Researcher</span>
        </Link>
        <div className="navLinks">
          <Link href="/">Home</Link>
          <a href="/ideas">Writing</a>
          <a href="#signal">The signal</a>
          <a href="#evaluation">Evaluation</a>
          <a href="#pilot">Pilot</a>
        </div>
      </nav>

      <header className="articleHero shell">
        <p className="label">Commercial transportation / Evaluation</p>
        <h1>The pass rate is not the outcome</h1>
        <p className="articleStandfirst">
          A practical evaluation blueprint for moving British Columbia&apos;s
          Mandatory Entry-Level Training conversation from test completion to
          first-job readiness, early safety performance, and continuous improvement.
        </p>
        <div className="articleMeta">
          <span>Yatin Dua</span>
          <span>July 16, 2026</span>
          <span>Independent concept note</span>
        </div>
      </header>

      <div className="articleLayout shell">
        <aside className="articleRail" aria-label="Article contents">
          <span className="label">In this note</span>
          <a href="#signal">What the pass rate tells us</a>
          <a href="#evaluation">Four evaluation lenses</a>
          <a href="#questions">Questions for carriers</a>
          <a href="#pilot">A 30-day pilot</a>
          <p>This is a framework for inquiry, not a completed program evaluation.</p>
        </aside>

        <article className="articleBody">
          <p className="articleLead">
            The BC Trucking Association&apos;s April 2026 analysis of Class 1
            road-test data found that the first-attempt pass rate rose after
            Mandatory Entry-Level Training, or MELT. That is useful evidence.
            It is not yet evidence that training is consistent across providers,
            that graduates are ready for their first assignment, or that
            early-career safety outcomes have improved.
          </p>

          <p>
            BCTA examined 26,873 Class 1 road tests. It reported an overall
            first-attempt pass rate of 60 per cent, rising from 56 per cent before
            MELT to 63 per cent after the program was introduced.
          </p>

          <blockquote className="articlePull">
            Passing the test is an output. Safe, work-ready entry into the
            industry is the outcome.
          </blockquote>

          <section id="signal">
            <p className="articleSectionNumber">01 / The signal</p>
            <h2>What changed?</h2>

            <p>
              A licensing system can improve test preparation without resolving
              variation in instruction, employer retraining burdens, or the
              transition from a controlled assessment to commercial operations.
              The reported increase should therefore open the next round of
              questions, not close the file.
            </p>

            <p>
              The distinction matters because the road test captures performance
              at one point in time. Employers encounter the graduate in a
              different setting: unfamiliar equipment, operational schedules,
              weather, supervision, customer requirements, and the accumulating
              pressures of a first commercial assignment.
            </p>
          </section>

          <section id="evaluation">
            <p className="articleSectionNumber">02 / Evaluation frame</p>
            <h2>Follow the driver beyond the test</h2>

            <p>
              A useful evaluation would connect administrative data with
              structured evidence from carriers, training providers, instructors,
              and newly licensed drivers. Four lenses can convert a pass-rate
              debate into an improvement system.
            </p>

            <h3>Training variation</h3>
            <p>
              Determine where delivered hours, equipment, instructor practice,
              and assessment standards differ across providers. Possible measures
              include hours delivered, instructor turnover, equipment access,
              completion patterns, and retests.
            </p>

            <h3>First-job readiness</h3>
            <p>
              Identify which competencies carriers must reteach and how much
              supervised time graduates require before independent assignment.
              Measures could include remedial training, supervised hours,
              onboarding cost, and time to independent duty.
            </p>

            <h3>Early performance</h3>
            <p>
              Examine patterns in incidents, near misses, supervision needs,
              probation outcomes, and retention during the first year. These
              measures require careful definitions and privacy protections, but
              they are closer to the outcome the program is meant to produce.
            </p>

            <h3>The accountability loop</h3>
            <p>
              Test whether experience from the road reaches providers,
              regulators, and program decision-makers quickly enough to shape
              improvement. Feedback frequency matters, but so do response time,
              curriculum changes, and whether recurring issues are actually closed.
            </p>
          </section>

          <section id="questions">
            <p className="articleSectionNumber">03 / Member evidence</p>
            <h2>Ask where the training meets the road</h2>

            <p>
              A short carrier pulse survey could establish an initial evidence
              base without imposing a heavy reporting burden. The questions
              should produce decisions, not merely opinions:
            </p>

            <ol className="articleQuestionList">
              <li>Which entry-level competencies most often required additional employer training in the past 12 months?</li>
              <li>How many supervised hours did a newly licensed Class 1 driver typically require before independent assignment?</li>
              <li>Which differences between training providers, if any, were visible in graduate job readiness?</li>
              <li>Which early safety or performance indicators could employers report consistently and responsibly?</li>
              <li>What single change to curriculum, assessment, or oversight would create the greatest operational value?</li>
            </ol>
          </section>

          <section id="pilot">
            <p className="articleSectionNumber">04 / Lean pilot</p>
            <h2>A useful first answer should not take a year</h2>

            <p>
              A time-bounded pilot could determine whether the identified gaps
              are isolated, provider-specific, or systemic before BCTA and its
              partners invest in a larger evaluation.
            </p>

            <h3>Days 1 to 7: define</h3>
            <p>
              Confirm priority questions with a small carrier reference group.
              Establish privacy rules, common definitions, and a minimum data set.
            </p>

            <h3>Days 8 to 21: collect</h3>
            <p>
              Deploy the carrier pulse, conduct a limited set of structured
              interviews, and compare the themes with available administrative data.
            </p>

            <h3>Days 22 to 30: decide</h3>
            <p>
              Validate the findings with participants and produce a short brief
              separating immediate actions, medium-term changes, and questions
              that still require evidence.
            </p>

            <p className="articleClosing">
              Evidence earns its keep when someone can act on it. The purpose of
              this pilot is not to produce a definitive score for MELT. It is to
              build a repeatable feedback loop between the test, the first job,
              and the people responsible for improving both.
            </p>
          </section>

          <footer className="articleByline">
            <p>
              <strong>Evidence boundary:</strong> This independent concept note
              uses public aggregate figures and does not assess any individual
              training provider, employer, instructor, or driver. A full
              evaluation would require representative participation,
              privacy-conscious data governance, validation with affected
              parties, and careful treatment of confounding factors.
            </p>
          </footer>

          <section className="articleSources" aria-labelledby="sources-title">
            <p className="articleSectionNumber">Research record</p>
            <h2 id="sources-title">Source</h2>
            <ol>
              <li>
                <a
                  href="https://bctrucking.com/four-years-of-melt-are-bcs-drivers-better-trained/"
                  target="_blank"
                  rel="noreferrer"
                >
                  BC Trucking Association, “Four Years of MELT: Are BC&apos;s
                  Drivers Better Trained?”, April 2026 <span aria-hidden="true">↗</span>
                </a>
              </li>
            </ol>
          </section>
        </article>
      </div>

      <footer className="footer shell">
        <span>© 2026 Yatin Dua</span>
        <div className="footerLinks">
          <a href="/ideas">All writing</a>
          <a href="https://www.linkedin.com/in/yatindua17/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="#top">Return to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
