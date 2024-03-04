"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  roundedType?: "rounded" | "rounded-full";
  buttonType: "primary" | "secondary";
  linkHref?: string;
  className?: string;
}

export default function Button({
  children,
  roundedType,
  buttonType,
  linkHref,
  className,
}: ButtonProps) {
  return (
    <>
      <Link
        href={linkHref || ""}
        target={`${linkHref?.startsWith("http") ? "_blank" : "_self"}`}
      >
        <button
          className={`flex w-full items-center justify-center gap-[0.3125rem] ${buttonType === "primary" ? "bg-primary text-white hover:bg-secondary" : "border border-gray border-opacity-30 bg-transparent text-gray"} px-[1rem] py-[0.5rem] font-raleway text-[0.75rem] font-semibold transition-all hover:scale-105 md:px-[1.5rem] md:py-[0.6875rem] md:text-[0.875rem] xl:px-[1.75rem] ${roundedType === "rounded" ? "rounded-[0.375rem]" : "rounded-full"} ${className}`}
        >
          {children}
        </button>
      </Link>
    </>
  );
}
