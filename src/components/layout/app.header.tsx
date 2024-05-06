import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import HeaderLogo from "../logo/header.logo";
import { Avatar } from "@nextui-org/react";
import Hotline from "../contact/Hotline";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const AppHeader = () => {
  return (
    <section className="flex items-center justify-between px-5 py-2 max-sm:flex-col">
      <div className="flex items-center gap-4">
        <HeaderLogo />
        <div className="flex items-center gap-2 font-bold max-md:flex-col">
          <div className="flex items-center gap-2">
            <p>Pass Gấu bông</p>
            <FavoriteOutlinedIcon
              color="error"
              fontSize="large"
            ></FavoriteOutlinedIcon>
          </div>
          Khu vực Tân Phú - HCM
        </div>
      </div>
      <a
        href="https://zalo.me/0814411007"
        target="_blank"
        className="flex items-center gap-4"
      >
        <Avatar
          size="sm"
          isBordered
          color="primary"
          className="animate-bounce"
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRpGkWA9kGSfI4MtFzCVeatQKmvbK03LFfkTJNte6MS-kdeC5e2"
        />
        <Hotline />
      </a>
    </section>
  );
};
export default AppHeader;
