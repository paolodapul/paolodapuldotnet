export default function Main({ children }) {
  return (
    <main className="antialiased container px-8 lg:px-auto mx-auto lg:w-2/5 2xl:w-2/5 py-20 h-min">
      {children}
    </main>
  );
}
