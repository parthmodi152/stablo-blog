import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
      </div>
      <div className="text-center text-sm">
        This site is not a part of the Facebook website or Facebook
        Inc. Additionally, This site is NOT endorsed by Facebook in
        any way. FACEBOOK is a trademark of FACEBOOK, Inc.
      </div>
      <div className="mt-2 flex items-center justify-center">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
