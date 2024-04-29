import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src="/next.svg"
        alt="Next.js Logo"
        width={90}
        height={37}
        priority
      />
    </Link>
  );
};

export default HeaderLogo;
