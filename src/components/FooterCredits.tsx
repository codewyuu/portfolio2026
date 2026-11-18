import Image from 'next/image'

export default function FooterCredits() {
  return (
    <footer className="sm:px-8 px-4 py-3 sm:py-4">
      <div className="flex items-center justify-center">
        <img
          src="/footer.png"
          alt="Footer credits"
          className="w-full max-w-2xl h-auto opacity-95"
          loading="lazy"
        />
      </div>
    </footer>
  )
}
