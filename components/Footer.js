export default function Footer() {
  return (
    <footer className="bg-black h-28 flex items-center justify-center text-stone-300 font-inter_lights font-light text-xs">
      &copy; {new Date().getFullYear()} Paolo Dapul, all rights reserved.
    </footer>
  )
}
