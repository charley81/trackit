import TimeFeature from '@/components/my-tasks/time-feature'
import QuoteFeature from '@/components/my-tasks/quote-feature'

export default function MyTasksPage() {
  return (
    <div className="mt-20">
      <div className="md:flex md:items-center md:gap-8">
        <TimeFeature />
        <QuoteFeature />
      </div>
    </div>
  )
}
