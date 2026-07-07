import { Link, useParams } from 'react-router-dom'
import { getLessonBySlug } from '../content/lessons'
import { LessonPlayer } from '../engine/LessonPlayer'

export function LessonPage() {
  const { slug } = useParams()
  const lesson = slug ? getLessonBySlug(slug) : undefined

  if (!lesson) {
    return (
      <Shell>
        <p className="mt-10 text-center text-ink-soft">
          That episode doesn't exist.{' '}
          <Link to="/" className="font-semibold text-grove underline">
            Back to the porch
          </Link>
        </p>
      </Shell>
    )
  }

  if (lesson.status !== 'available') {
    return (
      <Shell>
        <div className="mt-10 rounded-3xl border-2 border-ink/15 bg-paper p-8 text-center">
          <h1 className="font-display text-2xl font-bold text-ink-soft">
            {lesson.title}
          </h1>
          <p className="mt-2 text-ink-soft">{lesson.tagline}</p>
          <p className="mt-4 text-sm font-semibold tracking-wide text-coral uppercase">
            Coming soon — same porch, next week
          </p>
          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-ink px-6 py-2.5 font-semibold text-paper hover:bg-grove"
          >
            Back to the porch
          </Link>
        </div>
      </Shell>
    )
  }

  return (
    <Shell>
      <header className="mb-6">
        <p className="font-display text-sm tracking-wide text-grove uppercase">
          Episode {lesson.number} · about {lesson.minutes} min
        </p>
        <h1 className="mt-1 font-display text-3xl font-bold">{lesson.title}</h1>
        <p className="mt-1 text-ink-soft">{lesson.tagline}</p>
      </header>
      <LessonPlayer lesson={lesson} />
    </Shell>
  )
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16">
      <nav className="pt-6">
        <Link
          to="/"
          className="font-display text-sm font-bold tracking-widest text-grove uppercase hover:text-ink"
        >
          ← Compound
        </Link>
      </nav>
      <div className="mt-6">{children}</div>
    </div>
  )
}
