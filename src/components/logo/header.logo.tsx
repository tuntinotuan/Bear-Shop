import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
        src="/bear.svg"
        alt="Bear Logo"
        width={42}
        height={42}
        priority
      />
    </Link>
  );
};

export default HeaderLogo;
