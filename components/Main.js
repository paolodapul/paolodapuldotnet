export default function Main({ children }) {
  return (
    <main className="antialiased container px-8 lg:px-auto mx-auto lg:w-6/12 2xl:w-6/12 py-20 h-min">
      {children}
    </main>
  );
}
