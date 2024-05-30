type Quote = {
  _id: string
  content: string
  author: string
  tags: string[]
  authorSlug: string
  length: number
  dateAdded: string
  dateModified: string
}

async function getQuote() {
  const res = await fetch('https://api.quotable.io/random')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function QuoteFeature() {
  const data: Quote = await getQuote()
  return <div className="text-center mt-4">{data.content}</div>
}
