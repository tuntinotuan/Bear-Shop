import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import HeaderLogo from "../logo/header.logo";
import { Avatar } from "@nextui-org/react";
import Hotline from "../contact/Hotline";

const AppHeader = () => {
  return (
    <section className="flex items-center justify-between px-5 py-2">
      <HeaderLogo />
      <a
        href="https://zalo.me/0814411007"
        target="_blank"
        className="flex items-center gap-4"
      >
        <Avatar
          size="sm"
          isBordered
          color="primary"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpGkWA9kGSfI4MtFzCVeatQKmvbK03LFfkTJNte6MS-kdeC5e2"
        />
        <Hotline />
      </a>
    </section>
  );
};
export default AppHeader;
