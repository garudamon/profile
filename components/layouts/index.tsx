import { ReactChild, useState } from "react";
import Image from "next/image";

const Layout = ({ children }: { children: ReactChild | ReactChild[] }) => {
  const [meteor] = useState(Array(15).fill("meteor"));
  return (
    <main>
      <div className="star"></div>

      <div className="container">
        <header>
          <Image src="/logo.svg" width={75} height={75} />
        </header>
        {children}
      </div>

    </main>
  );
};

export default Layout;
