import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import HeaderLogo from "../logo/header.logo";

const CreateHeader = () => {
  return (
    <section className="sticky top-0 flex items-center justify-between bg-white p-3">
      <HeaderLogo></HeaderLogo>
      <div className="flex gap-4">
        <Button bgBtn="secondary" textColor="text-blue-500">
          Sign up
        </Button>
        <Button bgBtn="secondary" textColor="text-gray-500">
          Preview
        </Button>
        <Button bgBtn="primary">Publish</Button>
      </div>
    </section>
  );
};
export default CreateHeader;
