import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Vancouver election question nobody is asking",
  description:
    "The mayoral race will dominate Vancouver's 2026 election. For organizations with a file at City Hall, the more useful question is what will still move after October 17.",
};

const sources = [
  {
    label: "City of Vancouver: 2026 election and nomination dates",
    href: "https://vancouver.ca/your-government/2026-election.aspx",
  },
  {
    label: "Research Co.: August 2026 Vancouver mayoral poll",
    href: "https://researchco.ca/2026/08/04/vanpoli-2/",
  },
  {
    label: "City of Vancouver: 2022 municipal election results",
    href: "https://vancouver.ca/news-calendar/unofficial-2022-vancouver-election-results.aspx",
  },
  {
    label: "City of Vancouver: June 2026 permitting and licensing update",
    href: "https://vancouver.ca/news-calendar/permitting-easier-multiplex-approvals-faster-june-2026.aspx",
  },
  {
    label: "City of Vancouver: council structure and responsibilities",
    href: "https://vancouver.ca/your-government/vancouver-city-council.aspx",
  },
  {
    label: "Elections BC: registered local elector organizations",
    href: "https://elections.bc.ca/news/new-and-updated-local-elector-organizations/",
  },
  {
    label: "Global News: Rebecca Bligh removed from the ABC caucus",
    href: "https://globalnews.ca/news/11020156/abc-expels-rebecca-bligh/",
  },
];

export default function VancouverElectionQuestionPage() {
  return (
    <main className="articlePage" id="top">
      <nav className="nav shell libraryNav" aria-label="Article navigation">
        <a className="identity" href="/">
          <strong>Yatin Dua</strong>
          <span>Vancouver, BC</span>
        </a>
        <div className="navLinks">
          <a href="/">Portfolio</a>
          <a href="/ideas">Ideas &amp; writing</a>
          <a href="#stakes">The file</a>
          <a href="#fragmentation">Fragmentation</a>
          <a href="#actions">What to do</a>
        </div>
      </nav>

      <header className="articleHero shell">
        <p className="label">Municipal affairs / Public affairs</p>
        <h1>The Vancouver election question nobody is asking</h1>
        <p className="articleStandfirst">
          Everyone wants to know who wins on October 17. If your organization
          has a file at City Hall, ask what will still move on October 18.
        </p>
        <div className="articleMeta">
          <span>Yatin Dua</span>
          <span>August 14, 2026</span>
          <span>Vancouver, British Columbia</span>
        </div>
      </header>

      <div className="articleLayout shell">
        <aside className="articleRail" aria-label="Article contents">
          <span className="label">In this essay</span>
          <a href="#stakes">The file at stake</a>
          <a href="#fragmentation">How fragmentation changes the work</a>
          <a href="#actions">What to do before October 17</a>
          <p>Sources are listed at the end. Permitting results are identified as City-reported measures.</p>
        </aside>

        <article className="articleBody">
          <p className="articleLead">
            Vancouver votes on October 17, and seven candidates have declared
            their intention to run for mayor, although nominations do not close
            until September 11. Ken Sim is defending a job he won decisively in
            2022, when ABC captured the mayoralty, seven of ten council seats,
            six of seven Park Board seats, and five of nine school trustee positions.
          </p>

          <p>The field looks very different now.</p>

          <p>
            An August Research Co. poll placed Sim at 30 per cent among decided
            voters, with Kareem Allam and Pete Fry tied at 19 per cent. But
            26 per cent of likely voters remained undecided, and 39 per cent
            could not identify which challenger was best positioned to defeat Sim.
          </p>

          <p>
            That combination is more revealing than the headline number. Sim
            has a lead, but no challenger has consolidated the opposition.
            Vancouver does not have a two-person contest. It has a fragmented field.
          </p>

          <p>
            The fragmentation extends beyond the mayoral race. Allam, who
            managed ABC&apos;s 2022 campaign and briefly served as Sim&apos;s chief of
            staff, now leads the Vancouver Liberals. Rebecca Bligh, elected with
            ABC and removed from its caucus in 2025, leads Vote Vancouver. Three
            ABC Park Board commissioners broke with the party during the fight
            over abolishing the board; two have since joined the Liberals.
            Vancouver&apos;s school board chair also left ABC and later joined the
            Liberals to pursue a council nomination.
          </p>

          <p>
            Add ABC, COPE, OneCity, the Greens, TEAM, and the newly registered
            Conservative Electors Association, and the next council contest
            increasingly resembles a multi-party system.
          </p>

          <p>
            Most election coverage will focus on who becomes mayor. For
            organizations that actually need something from City Hall, that is
            only the beginning of the analysis.
          </p>

          <section id="stakes">
            <p className="articleSectionNumber">01 / The administrative stake</p>
            <h2>The file that is actually at stake</h2>

            <p>
              Permitting has been one of Vancouver&apos;s most persistent business
              complaints. Over the past four years, the City reports substantial
              improvement.
            </p>

            <p>
              According to figures released in June, business licences are now
              being issued in two days, compared with 16 weeks in 2022. The City
              says 92 per cent of simple renovation permits are issued within
              three days. Laneway home processing has fallen from 200 days to
              100, while single-detached home permits have fallen from 250 days
              to 160. Development permit processing for multi-family and mid-rise
              housing declined from 18.1 months in 2023 to 9.8 months in 2025.
              Approximately 70 per cent of potential development permit conditions
              were eliminated, simplified, or moved to risk-based review.
            </p>

            <p>
              These are City-reported performance measures, not an independent
              audit. But the direction and scale matter. For anyone building
              housing, renovating commercial space, or opening a business, time
              at the permitting counter represents real money.
            </p>

            <p>
              Those results were not produced by one council motion. They came
              from administrative work: redesigned processes, new digital tools,
              simplified requirements, staffing decisions, and a greater
              willingness to assess applications according to risk.
            </p>

            <p>
              That is why the important election question is not simply which
              party wins. It is whether this reform program retains political
              attention, staffing capacity, and administrative momentum after
              the election.
            </p>

            <p>
              Administrative reform is unusually fragile. It rarely has an
              organized constituency. It seldom becomes a defining campaign
              promise. It can slow down without anyone deciding to reverse it,
              simply because the same people are redirected toward newer and
              more visible priorities.
            </p>

            <blockquote className="articlePull">
              Nobody is campaigning for slower permits. That is not the risk.
              The risk is that permitting reform becomes everybody&apos;s general
              commitment and nobody&apos;s immediate responsibility.
            </blockquote>
          </section>

          <section id="fragmentation">
            <p className="articleSectionNumber">02 / The political structure</p>
            <h2>Fragmentation changes the work</h2>

            <p>
              Vancouver does not operate under a strong-mayor model. The mayor
              chairs council, carries a city-wide mandate, and has substantial
              political influence. But the mayor is still one member of an
              11-member council.
            </p>

            <p>
              ABC began the current term with a clear council majority. The next
              council may require coalitions assembled issue by issue. For an
              organization with a rezoning, partnership, grant, procurement,
              regulatory change, or service proposal before the City, that
              changes the work in three ways.
            </p>

            <h3>One party is no longer enough</h3>
            <p>
              Speaking to one party will no longer provide political coverage.
              The coalition supporting a housing proposal may not be the
              coalition supporting a public-safety measure, cultural investment,
              or business regulation. Effective advocacy will require credible
              relationships across council, including with people who disagree
              on other issues.
            </p>

            <h3>The transition window matters</h3>
            <p>
              New councillors will spend their opening months learning files,
              procedures, stakeholders, and the boundaries between political
              direction and administrative authority. A clear, nonpartisan
              briefing delivered during the transition can shape how an issue is
              understood before positions harden. By the time a contentious file
              reaches council, the basic framing may already have been established.
            </p>

            <h3>Permanent staff become more important</h3>
            <p>
              Most of the officials responsible for permitting, planning,
              licensing, finance, and service delivery will remain after election
              day. They hold the institutional memory: what has already been
              attempted, which constraints are real, and what can be implemented
              without creating another bottleneck.
            </p>

            <p>
              A relationship strategy focused entirely on elected officials is
              therefore a relationship with the least durable layer of City Hall.
            </p>
          </section>

          <section id="actions">
            <p className="articleSectionNumber">03 / Before election day</p>
            <h2>What to do before October 17</h2>

            <p>Three things, none of them especially expensive.</p>

            <h3>Map the decision</h3>
            <p>
              Identify every consequential City decision your organization may
              need during the next 24 months. Determine whether each decision is
              political, administrative, regulatory, or budgetary, and identify
              the staff work that must happen before it reaches council. Move
              genuinely time-sensitive matters before the transition where possible.
            </p>

            <h3>Prepare the briefing</h3>
            <p>
              Prepare a 10-minute, nonpartisan briefing for candidates and party
              policy teams. Explain the sector, the decision, the public interest,
              and the practical consequences. Use the same evidence across
              parties. Campaigns currently need people who can explain complicated
              files clearly; after the election, access will become scarcer.
            </p>

            <h3>Watch the council, not only the mayor</h3>
            <p>
              Watch council slates and transition priorities, not only mayoral
              polls. The first budget, committee assignments, and staff work plan
              will reveal more about the future of a file than campaign rhetoric alone.
            </p>

            <p className="articleClosing">
              Election night will tell Vancouver who won. For anyone who needs
              City Hall to act, the more useful question is what the new political
              arrangement allows the institution to keep doing.
            </p>
          </section>

          <footer className="articleByline">
            <p>
              <strong>Yatin Dua</strong> is a Vancouver-based policy researcher
              and writer focused on how public institutions work in practice.
            </p>
          </footer>

          <section className="articleSources" aria-labelledby="sources-title">
            <p className="articleSectionNumber">Research record</p>
            <h2 id="sources-title">Sources</h2>
            <ol>
              {sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} target="_blank" rel="noreferrer">
                    {source.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ol>
          </section>
        </article>
      </div>

      <footer className="footer shell">
        <span>© 2026 Yatin Dua</span>
        <div className="footerLinks">
          <a href="/ideas">Ideas &amp; writing</a>
          <a href="https://www.linkedin.com/in/yatindua17/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="#top">Return to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
