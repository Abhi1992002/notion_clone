import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => (
  <div className="hidden md:flex items-center gap-x-2">
    <Image
      src="/logo.svg"
      width="40"
      height="40"
      alt="logo"
      className="dark:hidden"
    />
    <Image
      src="/logo-dark.svg"
      width="40"
      height="40"
      alt="logo"
      className="dark:block hidden"
    />
    <p className={cn("font-semibold", font.className)}>Jotion</p>
  </div>
);
