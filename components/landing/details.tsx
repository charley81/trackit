import Link from 'next/link'
import { Button } from '../ui/button'

export default function Details() {
  return (
    <section className="mt-10 flex-1">
      <p className="text-base tracking-wide text-muted-foreground">
        Your streamlined approach form managing today’s task, helping you stay
        organized and focused
      </p>
      <Button className="w-full mt-5">
        <Link href="/my-tasks">Get Started</Link>
      </Button>
    </section>
  )
}
