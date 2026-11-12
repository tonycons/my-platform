import Collapsible from "./Collapsible"

type Report = {
  id: number,
  text: string,
  kind: "bug" | "feature"
};

function App() {

  const reports: Report[] = [
    {
      id: 3,
      text: "Hello world",
      kind: "feature"
    },
    {
      id: 4,
      text: "Navigation link is broken",
      kind: "bug"
    }];

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <h1>Anthony Constantinescu</h1>
        <h2>Senior Capstone Production Platform Page Test</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4rem" }}>
        <p></p>
        <p>
          This site will present my software projects, engineering decisions,
          and production systems.
        </p>
        <p></p>
      </div>

      <Collapsible title="Summary" initialOpen={true}>
        <p>Driven Computer Science senior with a minor in Cybersecurity and hands-on professional experience building mission critical applications for a strategic defense contractor. Collaborated in Agile teams to write, test, and deploy secure
          software. Skilled in modern software architecture, object-oriented design, and secure development practices across
          C++, Python, and Java. Strong theoretical foundation in algorithms and systems with real-world experience delivering
          reliable code in high-compliance environments.</p>
      </Collapsible>
      <Collapsible title="Skills" initialOpen={false}>
        <ul>
          <li>Excellent problem-solving skills and attention to detail.</li>
          <li>Ability to work collaboratively in a team environment.</li>
          <li>C, C++, C#, Python, Java, JavaScript, Rust, SQL, Jira, Git, GitHub, Typescript, PowerShell, Bash.</li>
          <li>Web frontend with HTML, CSS, TypeScript, & React. Web backend with Flask, SQL, NodeJS. Git, Visual Studio,
            JetBrains, MATLAB, LaTeX, Gradle, CMAKE, MySQL, SQLITE3. REST APIs, HTTP, TCP/IP, UDP, SNMP. </li>
          <li>CI/CD tools such as GitHub Actions. Up to date with emerging trends in software development.</li>
          <li>Data structures and algorithms. Object-oriented programming; procedural, functional, and event-driven
            programming. Windows and Linux shell scripting.</li>
          <li>Embedded systems, microcontrollers, physical sensors.</li>
          <li>Writing clear, efficient and well-documented code with or without AI.</li>
        </ul>
      </Collapsible>
      <Collapsible title="Professional Experience" initialOpen={false}>
        <h3>Software Engineering Intern – VTG Defense, Maritime Division, Manassas, VA, May 26, 2026 – Aug 14, 2026</h3>
        Worked as an intern for software development on VTG’s Platform Integrated Control System (PICS), a next-generation
        maritime command and control solution for naval/submarine warfare missions.
        <ul>
          <li>
            Honed my skills in C++ development, team collaboration, task scheduling (Jira), and version control (Git).
          </li>
          <li>
            Optimized software performance, expanded the codebase, and delivered key UI features requested by the client.
            (Note: specific details about the product are confidential under an NDA)
          </li>
        </ul>

        <h3>Senior project 1 – Grove City College, PA, Aug 2026 – Present</h3>
        As part of a team of 5, currently working on a new full-stack desktop and mobile application in collaboration with PS
        Buehler LLC, a power infrastructure management company, which aims to digitize the tracking of assets and the
        scheduling of maintenance, as well as assist field technicians.
        <ul>
          <li>
            Developing dynamic UI with React, and data models that meet field requirements
          </li>
          <li>
            Version control, automated testing, and CI/CD integration with GitHub and Cloudflare
          </li>
        </ul>

        <h3>ICPC Contestant – Grove City College, PA, Sep 2025 – Nov 2025</h3>
        Participated as one of three students representing Grove City College in the 2025 Intercollegiate Programming
        Competition.

        <h3>Teacher Assistant – Computer Science – Grove City College, PA, Sep 2025 – May 2026 & Sep 2026 – Present</h3>
        Provided grading and Teacher assistance for the Computer Science department.

        <h3>Lifeguard – Grove City College, PA, Aug 2025 – May 2026</h3>
        Lifeguard for the Grove City College competition pool.

        <br></br>
        <br></br>
      </Collapsible>

      <br/>
      <h2 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>Bugs & Feature Requests</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {reports.map((report): React.JSX.Element => {
          return <>
            <br/>
            <i>#{report.id}&nbsp;|&nbsp;{report.kind}</i>
            <b>{report.text}</b>
          </>
        })}
      </div>
    </>
  )
}

export default App
