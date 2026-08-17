import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Community care in action",
  description:
    "What a neighbourhood institution can contribute to Vancouver's response to homelessness, mental health, and substance use, and where its role should end.",
};

const sources = [
  {
    label: "2023 Homeless Count for Greater Vancouver",
    href: "https://hsa-bc.ca/_Library/2023_HC/2023_Homeless_Count_for_Greater_Vancouver.pdf",
  },
  {
    label: "Aubry et al.: Housing First in five Canadian cities",
    href: "https://doi.org/10.1176/appi.ps.201400587",
  },
  {
    label: "Kerr et al.: Supervised injection facilities in Canada",
    href: "https://doi.org/10.1186/s12954-017-0154-1",
  },
  {
    label: "Somers et al.: Housing First in congregate and scattered-site formats",
    href: "https://doi.org/10.1371/journal.pone.0168745",
  },
  {
    label: "Davidson et al.: Evidence and experience in peer support",
    href: "https://doi.org/10.1016/j.wpsyc.2012.05.009",
  },
];

export default function CommunityCarePage() {
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
          <a href="#role">The role</a>
          <a href="#model">The model</a>
          <a href="#limits">The limits</a>
        </div>
      </nav>

      <header className="articleHero shell">
        <p className="label">Homelessness / Community governance</p>
        <h1>Community care in action</h1>
        <p className="articleStandfirst">
          What can a neighbourhood institution contribute to Vancouver&apos;s
          response to homelessness, mental health, and substance use, and where
          should its role end?
        </p>
        <div className="articleMeta">
          <span>Yatin Dua</span>
          <span>November 7, 2024</span>
          <span>Public version of an MPPA capstone</span>
        </div>
      </header>

      <div className="articleLayout shell">
        <aside className="articleRail" aria-label="Article contents">
          <span className="label">In this essay</span>
          <a href="#role">A BIA&apos;s useful role</a>
          <a href="#model">A workable model</a>
          <a href="#limits">Boundaries and accountability</a>
          <p>Adapted from research completed at Adler University in 2024.</p>
        </aside>

        <article className="articleBody">
          <p className="articleLead">
            Homelessness, mental illness, and substance use are often treated as
            three separate files. In a neighbourhood such as Gastown, they appear
            together: in housing insecurity, public-health emergencies, conflict
            in public space, interrupted access to care, and pressure on nearby
            workers and businesses.
          </p>

          <p>
            No neighbourhood organization can solve that combination. A Business
            Improvement Area is not a health authority, a housing provider, or a
            substitute for government. But it occupies a position that matters.
            It sees recurring conditions at street level, maintains relationships
            with businesses and public agencies, and can help information travel
            between people who otherwise meet only during a crisis.
          </p>

          <p>
            My 2024 capstone asked how that position could support community care
            without turning a business organization into an unqualified service
            provider. The answer is narrower than a new program and more demanding
            than a referral list: build the connective infrastructure around the
            services that already exist.
          </p>

          <section id="role">
            <p className="articleSectionNumber">01 / The role</p>
            <h2>Coordination is not the same as care</h2>

            <p>
              Vancouver does not lack organizations doing serious work. Housing
              providers, harm-reduction programs, community health services, and
              peer-led initiatives already carry expertise that a BIA should not
              attempt to reproduce. The gap is often what happens between them:
              an unclear handoff, a service that has changed its hours, a person
              asked to repeat their story, or an urgent need routed to an agency
              that cannot meet it.
            </p>

            <p>
              During my internship with the Gastown Business Improvement Society,
              I worked on policy research, strategic communications, grant writing,
              public information, and an emerging community-safety framework. The
              experience made the institutional question concrete. Businesses were
              encountering social and health crises, but their available responses
              were usually improvised. Service organizations had expertise, but not
              always a direct channel to every employer or worker encountering a
              person in distress.
            </p>

            <p>
              The useful role for a BIA is therefore not diagnosis, treatment, or
              enforcement. It is coordination: maintaining accurate pathways,
              convening partners, identifying repeated system failures, supporting
              training, and carrying evidence to the public bodies responsible for
              funding and delivery.
            </p>

            <blockquote className="articlePull">
              A neighbourhood institution should not try to become the care system.
              It can help the care system become easier to reach.
            </blockquote>
          </section>

          <section id="model">
            <p className="articleSectionNumber">02 / The model</p>
            <h2>Build around the handoff</h2>

            <p>
              Research on Housing First, harm reduction, integrated care, and peer
              support points in the same direction. Stable housing matters.
              Voluntary, person-centred support matters. Services work better when
              people do not have to navigate housing, health, and substance-use
              systems as unrelated bureaucracies. Lived experience belongs in the
              design and delivery of those systems, not at the edge of them.
            </p>

            <p>
              A neighbourhood coordination model could put those principles into
              a modest operating structure.
            </p>

            <h3>Keep one verified service map</h3>
            <p>
              A static directory becomes unreliable quickly. The model needs a
              maintained record of service scope, hours, eligibility, referral
              method, accessibility, and current capacity. Its value depends less
              on the software than on who is responsible for verification.
            </p>

            <h3>Create a warm-handoff protocol</h3>
            <p>
              Workers and businesses need a clear response for common situations,
              including a health emergency, a person requesting shelter, a welfare
              concern, or a conflict that does not require police. A useful protocol
              identifies who to call, what information is necessary, what consent
              is required, and when the referring person&apos;s responsibility ends.
            </p>

            <h3>Pay people with lived experience</h3>
            <p>
              Peer workers can identify barriers that an institutional map misses.
              Their participation should be formal, compensated, and supported by
              training and clear roles. Consultation without power or payment is
              not a substitute for participation.
            </p>

            <h3>Turn recurring failures into policy evidence</h3>
            <p>
              If the same handoff fails repeatedly, the response should not be to
              blame the person navigating the system. Record the pattern without
              collecting unnecessary personal information, validate it with service
              partners, and bring it to the funder or agency able to change the rule.
            </p>

            <h3>Measure continuity, not disappearance</h3>
            <p>
              The easiest neighbourhood metric is whether a visible problem moved
              somewhere else. That is not a care outcome. Better measures include
              successful connection to an appropriate service, continuity of
              support, participant experience, housing stability, and whether the
              same system failure is becoming less common.
            </p>
          </section>

          <section id="limits">
            <p className="articleSectionNumber">03 / Boundaries</p>
            <h2>The model needs limits to be credible</h2>

            <p>
              Community care language can disguise coercion if safety is defined
              only by the people with the most institutional power. A BIA-driven
              model must therefore be explicit about what it will not do. It should
              not collect personal case files, make clinical judgments, condition
              help on compliance, or treat removal from commercial space as a
              successful outcome.
            </p>

            <p>
              Governance should include service providers and people with lived
              experience alongside businesses. Data collection should be minimal
              and purpose-specific. Referral outcomes should be reviewed in
              aggregate. Complaints need an independent route. Public reporting
              should describe both what the partnership accomplished and where
              demand exceeded available services.
            </p>

            <p>
              The larger constraints remain governmental: the supply of affordable
              and supportive housing, access to mental-health and substance-use
              care, durable funding, and the structural overrepresentation of
              Indigenous people among those experiencing homelessness. A local
              coordination model cannot repair those conditions. It can make their
              consequences harder to ignore and reduce some of the friction people
              encounter while larger decisions remain unresolved.
            </p>

            <p className="articleClosing">
              The case for a neighbourhood role is not that proximity creates
              expertise. It is that proximity creates responsibility. The most
              responsible contribution a BIA can make is to strengthen the path to
              qualified, voluntary care while remaining honest about the limits of
              its own mandate.
            </p>
          </section>

          <footer className="articleByline">
            <p>
              <strong>Publication note:</strong> This essay is a substantially
              edited public version of a capstone completed for Adler
              University&apos;s Master of Public Policy and Administration program in
              November 2024. It reflects research and internship experience from
              that period, not an evaluation of a program that was implemented.
            </p>
          </footer>

          <section className="articleSources" aria-labelledby="sources-title">
            <p className="articleSectionNumber">Research record</p>
            <h2 id="sources-title">Selected sources</h2>
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
          <a href="/ideas">All writing</a>
          <a href="https://www.linkedin.com/in/yatindua17/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="#top">Return to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
