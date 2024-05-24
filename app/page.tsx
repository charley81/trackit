import Details from '@/components/landing/details'
import TopMenu from '@/components/shared/top-menu'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="px-4">
      <TopMenu />
      <div className="relative h-80 mt-20">
        <Image
          src="https://utfs.io/f/82fcfc8d-bad0-46fb-9579-3082ed0cfc49-6npzhe.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover rounded"
          priority
        />
      </div>
      <Details />
    </main>
  )
}
