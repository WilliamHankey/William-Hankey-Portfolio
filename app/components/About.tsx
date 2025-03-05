export default function About() {
  return (
    <section className='p-20 flex flex-row gap-8'>
      <div className='w-1/3 flex flex-col justify-between'>
          <h1 className="mb-8 text-5xl font-semibold tracking-tighter">
            About Me
          </h1>
          <p className="mb-4">
            {`Currently leading design at Atlassian on the Growth team as an IC Director.
            Before that, I worked at Statsig as Head of Design, Director. My career
            started at Facebook where I successfully launched highly impactful product
            features, reaching one of the fastest promotion track and exceptional
            ratings at the company.`}
          </p>
          <p className="mb-4">
            {`I first got into design when I decided to pursue Master's in HCI degree at
              Georgia Institute of Technology. From then on, my passion towards design
              had sparked greatly which allowed me to spend countless days and nights
              improving my skills and knowledge.`}
          </p>
          <p className="mb-4">
            {`Currently leading design at Atlassian on the Growth team as an IC Director.
            Before that, I worked at Statsig as Head of Design, Director. My career
            started at Facebook where I successfully launched highly impactful product
            features, reaching one of the fastest promotion track and exceptional
            ratings at the company.`}
          </p>
      </div>
      <div className='w-1/3'>
          <h1 className="mb-8 text-5xl font-semibold tracking-tighter">
            Experience
          </h1>
          <div>
            February 2024 — Current
          </div>
          <div>
            Director IC, Product Design - MeiFlume
          </div>
          <p className="mb-4">
            {`As a Director-level Designer on the Growth team, I report directly to VP, Head of Design
to lead various types of strategic growth design work across the company`}
          </p>
      </div>
 
    </section>
  )
}

