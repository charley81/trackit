export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="text-center p-4 text-base">
      Designed & Developed:{' '}
      <span className="text-primary">
        <a href="https://www.chrisharley.io">chrisharley.io</a>
      </span>{' '}
      &copy;{year}
    </footer>
  )
}
