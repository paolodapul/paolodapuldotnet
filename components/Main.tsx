import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
const inter = Inter({ subsets: ['latin'] });

type MainProps = {
  children: ReactNode;
};

const Main: React.FC<MainProps> = ({ children }: MainProps) => {
  return (
    <main
      className={`${inter.className} antialiased container px-8 lg:px-auto mx-auto lg:w-6/12 2xl:w-6/12 py-20 h-min`}
    >
      {children}
    </main>
  );
};

export default Main;
