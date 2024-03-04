import Image from "next/image";
import placeholder from "@/public/placeholderweddingcard.jpg";
import Button from "./Button";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";

export default function UndanganCard() {
  return (
    <div className="flex flex-col items-center justify-center rounded-[0.75rem] border border-gray border-opacity-20 bg-white px-[1.25rem] pb-[1.875rem] pt-[1.25rem]">
      <Image
        src={placeholder}
        width={220}
        height={220}
        alt="Foto Undangan"
        className="h-[13.75rem] w-[13.75rem] rounded-[0.5rem] xl:h-[18.75rem] xl:w-[18.75rem]"
      />
      <div className="mt-[1.25rem] flex flex-col justify-center text-center">
        <span className="text-[0.75rem] font-medium text-blurple xl:text-[0.875rem]">
          @shensinvitation
        </span>
        <h3 className="text-[1rem] font-semibold text-secondary xl:text-[1.5rem]">
          TEMA SHP-001
        </h3>
      </div>
      <div className="my-[0.9375rem] h-[0.125rem] w-full bg-gray bg-opacity-30"></div>
      <div className="flex w-full flex-col justify-center gap-[0.3125rem]">
        <Button buttonType="primary" roundedType={"rounded"}>
          <IoCartOutline size={"1.2rem"} /> Order Now
        </Button>
        <Button buttonType="secondary" roundedType={"rounded"}>
          <FaRegEye size={"1.2rem"} /> Preview
        </Button>
      </div>
    </div>
  );
}
