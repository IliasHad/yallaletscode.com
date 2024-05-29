import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { loadProjects } from '@/lib/mdx'

function Projects({ projects }) {
  return (
    <>
      <SectionIntro title="Our Projects " className="mt-24 sm:mt-32 lg:mt-40">
        <p></p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn key={project.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <Link href={project.href}>
                  <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                    <time
                      dateTime={project.date.split('-')[0]}
                      className="font-semibold"
                    >
                      {project.date.split('-')[0]}
                    </time>
                    <span className="text-neutral-300" aria-hidden="true">
                      /
                    </span>
                    <span>Project</span>
                  </p>
                  <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                    {project.title}
                  </p>
                  <p className="mt-4 text-base text-neutral-600">
                    {project.description}
                  </p>
                </Link>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let projects = (await loadProjects()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Yalla Create
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            A web development studio, we specialize in creating innovative and
            robust Shopify apps tailored to meet the unique needs of our
            clients.
          </p>
        </FadeIn>
      </Container>

      <Projects projects={projects} />
    </>
  )
}
