"use client";
import Image from "next/image";
import Link from "next/link";
import { usePageLoader } from "@/hooks/usePageLoader";
import { usePathname } from "next/navigation";

const Logo: React.FC = () => {
  const { navigateWithLoader } = usePageLoader();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (pathname !== "/") {
      e.preventDefault();
      navigateWithLoader("/");
    }
  };

  return (
    <Link href="/" className="inline-block" onClick={handleClick}>
      {/* Light mode */}
      <Image
        src="/images/logo/Screenshot_from_2025-11-17_00-56-19-removebg-preview.png"
        alt="Company Logo"
        width={220}
        height={72}
        priority
        className="
          block dark:hidden
          h-14 w-auto
          sm:h-16
          lg:h-14
          xl:h-16
          2xl:h-18
          object-contain transition-all duration-300 hover:opacity-90
        "
      />

      {/* Dark mode */}
      <Image
        src="/images/logo/Screenshot_from_2025-11-18_15-25-35-removebg-preview.png"
        alt="Company Logo"
        width={220}
        height={72}
        priority
        className="
          hidden dark:block
          h-14 w-auto
          sm:h-16
          lg:h-14
          xl:h-16
          2xl:h-18
          object-contain transition-all duration-300 hover:opacity-90
        "
      />
    </Link>
  );
};

export default Logo;
