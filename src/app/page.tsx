import AppHeader from "@/components/layout/app.header";
import Image from "next/image";
import { NextUIProvider } from "@nextui-org/system";
import AppBody from "./AppBody";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <AppHeader></AppHeader>
        <AppBody></AppBody>
      </NextUIProvider>
    </>
  );
}
