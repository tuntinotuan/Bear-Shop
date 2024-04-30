import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import HeaderLogo from "../logo/header.logo";
import { Avatar } from "@nextui-org/react";

const AppHeader = () => {
  return (
    <section className="flex items-center justify-between px-5 py-2">
      <HeaderLogo />
      <div className="flex items-center gap-4">
        <Avatar
          size="sm"
          isBordered
          color="primary"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpGkWA9kGSfI4MtFzCVeatQKmvbK03LFfkTJNte6MS-kdeC5e2"
        />
        <span className="font-bold">Zalo:</span>
        <p>081.4411.007</p>
      </div>
    </section>
  );
};
export default AppHeader;
