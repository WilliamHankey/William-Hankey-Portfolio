import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProfile } from "@/lib/site-data";
import { getProjectBySlug } from "./data";
import styles from "./project-detail.module.css";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const fallbackEmail = "william@meiflume.com";

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return {};

  return {
    title: `${project.title} | William Hankey`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
  };
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { slug } = await params;
  const [project, profile] = await Promise.all([
    getProjectBySlug(slug),
    getProfile(),
  ]);

  if (!project) notFound();

  const email = profile?.email || fallbackEmail;
  const eyebrow = project.techStack
    .slice(0, 2)
    .map((technology) => technology.name)
    .join(" · ");
  const hasShowcase = project.showcase.length > 0;

  return (
    <div className={styles.page}>
      <main className={styles.wrap}>
        <Link className={styles.back} href="/#work">
          <span aria-hidden="true">&larr;</span> Back to work
        </Link>

        <section className={styles.hero} aria-labelledby="project-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{eyebrow || "Project case study"}</p>
            <h1 id="project-title">{project.title}</h1>
            <p className={styles.heroDescription}>{project.description}</p>
            {project.techStack.length > 0 && (
              <div className={styles.meta} aria-label="Project technologies">
                {project.techStack.slice(0, 3).map((technology) => (
                  <span key={technology.name}>{technology.name}</span>
                ))}
              </div>
            )}
            {project.link && (
              <a
                className={styles.button}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit live website <span aria-hidden="true">&nearr;</span>
              </a>
            )}
          </div>

          <div className={styles.heroArt}>
            {project.image && (
              <Image
                src={project.image}
                alt={`${project.title} project cover`}
                fill
                className={styles.heroImage}
                priority
                sizes="(max-width: 760px) 100vw, 52vw"
              />
            )}
          </div>
        </section>

        <section id="overview" className={`${styles.section} ${styles.intro}`}>
          <div>
            <p className={styles.label}>01 / Overview</p>
            <h2>From idea to impact.</h2>
          </div>
          <p className={styles.introCopy}>{project.shortOverview}</p>
        </section>

        {project.challenges.length > 0 && (
          <section className={styles.section}>
            <p className={styles.label}>02 / The approach</p>
            <h2>The work behind the outcome.</h2>
            <div className={styles.cards}>
              {project.challenges.map((challenge, index) => (
                <article className={styles.card} key={`${challenge.title}-${index}`}>
                  <p className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {hasShowcase && (
          <section id="work" className={styles.section}>
            <div className={styles.showcaseHeading}>
              <div>
                <p className={styles.label}>03 / Selected screens</p>
                <h2>Explore the project</h2>
              </div>
              <p>
                A closer look at the key experiences and decisions that shaped
                the final product.
              </p>
            </div>

            <div className={styles.showcaseList}>
              {project.showcase.map((item, index) => (
                <article
                  className={`${styles.feature} ${
                    index % 2 === 1 ? styles.featureReverse : ""
                  }`}
                  key={`${item.title}-${index}`}
                >
                  <div className={styles.shot}>
                    <div className={styles.browser}>
                      <div className={styles.browserBar} aria-hidden="true">
                        <b />
                        <b />
                        <b />
                      </div>
                      <div className={styles.screenshot}>
                        {item.image && (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className={styles.showcaseImage}
                            sizes="(max-width: 760px) 100vw, 57vw"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={styles.featureCopy}>
                    <p className={styles.featureIndex}>
                      {String(index + 1).padStart(2, "0")} / SCREEN
                    </p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {project.techStack.length > 0 && (
          <section className={styles.section}>
            <p className={styles.label}>
              {hasShowcase ? "04" : "03"} / Under the hood
            </p>
            <h2>Built with the right tools for the job.</h2>
            <p>
              The technology stack supporting the experience, performance, and
              ongoing evolution of the project.
            </p>
            <div className={styles.techList}>
              {project.techStack.map((technology) => (
                <span key={technology.name}>{technology.name}</span>
              ))}
            </div>
          </section>
        )}

        <aside className={styles.cta}>
          <div>
            <h2>Have a project in mind?</h2>
            <p>Let&apos;s make your next digital experience easier to use.</p>
          </div>
          <a className={styles.button} href={`mailto:${email}`}>
            Get in touch <span aria-hidden="true">&nearr;</span>
          </a>
        </aside>
      </main>

    </div>
  );
}
