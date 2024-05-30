export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="text-center p-4 text-sm">
      Designed & Developed:{' '}
      <span className="text-primary">
        <a href="https://www.chrisharley.io" target="_blank">
          chrisharley.io
        </a>
      </span>{' '}
      &copy;{year}
    </footer>
  )
}
