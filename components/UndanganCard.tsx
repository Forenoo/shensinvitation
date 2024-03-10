import Image, { StaticImageData } from "next/image";
import placeholder from "@/public/placeholderweddingcard.jpg";
import Button from "./Button";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";

interface UndanganCardProps {
  picture: StaticImageData | string;
  themeId: string;
  invitationType: string;
}

export default function UndanganCard({
  picture,
  themeId,
  invitationType,
}: UndanganCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[0.75rem] border border-gray border-opacity-20 bg-white px-[1.25rem] pb-[1.875rem] pt-[1.25rem]">
      <Image
        src={picture}
        width={220}
        height={220}
        quality={100}
        alt="Foto Undangan"
        className="h-[13.75rem] w-fit rounded-[0.5rem] xl:h-[18.75rem]"
      />
      <div className="mt-[1.25rem] flex flex-col justify-center text-center">
        <span className="text-[0.75rem] font-medium text-blurple xl:text-[0.875rem]">
          @shensinvitation
        </span>
        <h3 className="text-[1rem] font-semibold text-secondary xl:text-[1.5rem]">
          TEMA {themeId.toUpperCase()}
        </h3>
      </div>
      <div className="my-[0.9375rem] h-[0.125rem] w-full bg-gray bg-opacity-30"></div>
      <div className="flex w-full flex-col justify-center gap-[0.3125rem]">
        <Button
          buttonType="primary"
          roundedType={"rounded"}
          linkHref={`https://wa.me/6289697002110?text=Hallo%20kak%2C%20saya%20ingin%20mengorder%20undangan%20digital%20dengan%20kode%20tema%20${themeId}%20pada%20paket%20${invitationType}.%20Mohon%20bantuannya%20kak.`}
        >
          <IoCartOutline size={"1.2rem"} /> Order Now
        </Button>
        <Button
          buttonType="secondary"
          roundedType={"rounded"}
          linkHref={`/${themeId}`}
        >
          <FaRegEye size={"1.2rem"} /> Preview
        </Button>
      </div>
    </div>
  );
}
