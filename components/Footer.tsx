import Image from "next/image";
import logo from "@/public/logo.png";

import { FaInstagram } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function Footer() {
  const contactInfo = [
    { icon: IoLogoWhatsapp, text: "(+62) 896-9700-2110" },
    { icon: FaInstagram, text: "@shensbagsouvenir" },
    { icon: AiOutlineGlobal, text: "shensinvitation.com" },
    { icon: MdOutlineEmail, text: "shensinvitation@gmail.com" },
  ];

  return (
    <>
      {/* Footer */}
      <footer className="mt-[8.75rem]">
        <div className="h-[1px] w-full bg-[#E5E5E5]"></div>
        <div className="maxContainer paddingContainer my-[80px] flex flex-col justify-between gap-[30px] xl:flex-row xl:gap-0">
          <div className="flex flex-col gap-[12px] md:gap-[1.875rem]">
            <div className="flex items-center">
              <Image
                src={logo}
                width={50}
                height={50}
                alt="logo"
                className="-ml-2 h-auto w-[3rem] md:-ml-5 md:w-[5rem]"
              />
              <h1 className="font-raleway text-[1rem] font-semibold text-primary md:text-[1.5rem]">
                SHENSINVITATION
              </h1>
            </div>
            <p className="max-w-[500px] text-[0.875rem] text-gray md:text-[1rem]">
              Shensinvitation adalah penyedia jasa pembuatan undangan pernikahan
              digital. Kami menyediakan undangan website dengan memberikan
              banyak benefit dan fitur yang lengkap.
            </p>
            <div>
              <span className="text-[0.875rem] text-gray md:text-[1rem]">
                CONTACT
              </span>
              <h2 className="text-[1rem] font-semibold text-primary md:text-[20px]">
                shensinvitation@gmail.com
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-[3.125rem]">
            <h2 className="hidden text-[1.25rem] font-medium text-primary xl:flex">
              Lebih Dekat Dengan Kami
            </h2>
            <ul className="flex flex-col gap-[0.9375rem]">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li
                    key={index}
                    className="flex items-center gap-[0.625rem] text-[0.875rem] text-primary md:text-[1rem]"
                  >
                    <Icon className="size-7 rounded-full bg-blurple bg-opacity-10 p-1 text-blurple" />{" "}
                    {info.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="paddingContainer maxContainer h-[1px] w-full bg-[#E5E5E5]"></div>
        <p className="py-[1.25rem] text-center text-[0.75rem] md:text-[0.875rem] xl:text-[1rem]">
          Copyright © 2024{" "}
          <span className="font-medium text-black">Shensinvitation</span>. All
          rights reserved
        </p>
      </footer>
    </>
  );
}
