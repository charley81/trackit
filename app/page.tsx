import Details from '@/components/landing/details'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="lg:flex lg:items-center lg:gap-x-8 lg:mt-40 lg:justify-between mx-auto">
      <div className="relative h-80 mt-20 lg:mt-0 w-full flex-1">
        <Image
          src="https://utfs.io/f/82fcfc8d-bad0-46fb-9579-3082ed0cfc49-6npzhe.svg"
          alt=""
          fill
          className="object-contain rounded"
          priority
        />
      </div>
      <Details />
    </main>
  )
}
