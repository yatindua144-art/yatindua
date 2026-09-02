import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV",
  description: "Experience, education, field research, and selected work by Vancouver-based policy and program analyst Yatin Dua.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "CV | Yatin Dua",
    description: "Experience, education, field research, and selected work by Vancouver-based policy and program analyst Yatin Dua.",
    url: "/cv",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV | Yatin Dua",
    description: "Experience, education, field research, and selected work by Vancouver-based policy and program analyst Yatin Dua.",
  },
};

const roles = [
  {
    period: "Jan 2025 - Mar 2026",
    title: "Policy and Program Analyst",
    organization: "Squamish Nation, Training & Trades Centre",
    location: "North Vancouver, BC",
    text: "I coordinated workforce and trades programming, managed reporting and compliance across 4 to 5 concurrent federal and provincial contribution agreements, tracked budgets and variances, prepared briefing materials, and worked with learners, funders, training providers, post-secondary institutions, ministries, and industry partners.",
  },
  {
    period: "Jun 2024 - Dec 2024",
    title: "Policy and Advocacy Coordinator",
    organization: "Gastown Business Improvement Society",
    location: "Vancouver, BC",
    text: "I conducted mixed-methods policy research on homelessness, public-space safety, harm reduction, and community care, consulting 16 service providers and 36 local businesses. I also coordinated stakeholder engagement, supported events and communications, and secured and administered $12,000 in project funding.",
  },
  {
    period: "Nov 2023 - Apr 2024",
    title: "Policy Evaluation Research Assistant",
    organization: "Adler University",
    location: "Vancouver, BC",
    text: "I completed a 300-plus-hour mixed-methods evaluation of Indigenous women's access to maternal health care in British Columbia, using qualitative analysis, Stata, GBA+, and distinctions-based and intersectional approaches.",
  },
  {
    period: "Feb 2023 - Aug 2023",
    title: "Educational Programs Coordinator",
    organization: "Help Change My City",
    location: "Metro Vancouver, BC",
    text: "I coordinated K-12 community-based educational programming, including learning materials, participant tracking, logistics, scheduling, and partner communication.",
  },
  {
    period: "Jan 2022 - Aug 2022",
    title: "Research Associate - Human Rights and Gender-Based Violence",
    organization: "Association of Social and Human Awareness (ASHA)",
    location: "Jharkhand, India",
    text: "I conducted community-led field research on gender-based violence, poverty, displacement, and witch-hunting, completing more than 100 interviews and analysing more than 150 surveys while maintaining informed consent, confidentiality, and participant dignity.",
  },
];

const education = [
  ["2024", "Master of Public Policy and Administration, International and Global Justice Studies", "Adler University, Vancouver"],
  ["2022", "Master of Arts, Sustainable Development Practices", "TERI School of Advanced Studies, New Delhi"],
  ["2018", "Bachelor of Arts (Honours), Philosophy", "Hindu College, University of Delhi"],
];

export default function CVPage() {
  return (
    <main className="writingPage" id="top">
      <nav className="nav shell libraryNav" aria-label="CV navigation">
        <Link className="identity" href="/">
          <strong>Yatin Dua</strong>
          <span>Policy / Research / Programs</span>
        </Link>
        <div className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/writing">Writing</Link>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="mailto:yatindua144@gmail.com">Contact</a>
        </div>
      </nav>

      <header className="writingHero shell">
        <p className="label">CV / Experience</p>
        <h1>Work across policy, programs, research, and public systems.</h1>
        <p>I have worked in First Nations program delivery, municipal policy and advocacy, evaluation research, youth programming, and community-based field research.</p>
        <p><a className="archiveDoor" href="/Yatin_Dua_CV.pdf" download><strong>Download CV as PDF</strong><b aria-hidden="true">↓</b></a></p>
      </header>

      <section className="writingArchive shell" id="experience" aria-labelledby="experience-title">
        <div className="editorialSectionHead"><div><p className="label">Experience</p><h2 id="experience-title">Roles and responsibilities.</h2></div></div>
        {roles.map((role) => (
          <article className="archiveItem" key={`${role.organization}-${role.period}`}>
            <div className="archiveMeta"><span>{role.period}</span><span>{role.location}</span></div>
            <div><h3>{role.title}</h3><p><strong>{role.organization}</strong></p><p>{role.text}</p></div>
            <span className="archiveArrow" aria-hidden="true">•</span>
          </article>
        ))}
      </section>

      <section className="openQuestions section" id="field-research">
        <div className="shell">
          <div className="editorialSectionHead questionsHead">
            <div><p className="label">Field research</p><h2>Jharkhand, India.</h2></div>
          </div>
          <div className="questionNotebook">
            <article className="notebookEntry">
              <span>01</span>
              <div><h3>Witch-hunting, gender, poverty, and local power</h3><p>My MA research and work with ASHA combined interviews, surveys, community knowledge, government data, NGO records, and literature. I learned to treat the first available explanation, such as superstition alone, as a hypothesis rather than a conclusion.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="writingArchive shell" id="education" aria-labelledby="education-title">
        <div className="editorialSectionHead"><div><p className="label">Education</p><h2 id="education-title">Graduate training in policy and sustainable development.</h2></div></div>
        {education.map(([year, degree, school]) => (
          <article className="archiveItem" key={degree}>
            <div className="archiveMeta"><span>{year}</span><span>Education</span></div>
            <div><h3>{degree}</h3><p>{school}</p></div>
            <span className="archiveArrow" aria-hidden="true">•</span>
          </article>
        ))}
      </section>

      <footer className="footer shell">
        <span>© 2026 Yatin Dua</span>
        <div className="footerLinks">
          <Link href="/writing">Writing</Link>
          <a href="mailto:yatindua144@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/yatindua17/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="#top">Return to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
