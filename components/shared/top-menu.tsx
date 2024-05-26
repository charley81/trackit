import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function TopMenu() {
  return (
    <header className="w-full">
      <nav className="mt-8 flex justify-between items-center">
        <h3 className="text-4xl font-bold">trackIT</h3>
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}
