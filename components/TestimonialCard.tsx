import Image from "next/image";
import placeholder from "@/public/placeholdertestimoni.jpg";
import { FaStar } from "react-icons/fa6";

interface TestimonialCardProps {
  testimoniDate: string;
  userRating: number;
  userComment: string;
  username: string;
}

export default function TestimonialCard({
  testimoniDate,
  userRating,
  userComment,
  username,
}: TestimonialCardProps) {
  return (
    <div className="flex w-full flex-col gap-[0.625rem] rounded-[1.25rem] border border-gray border-opacity-20 bg-white px-[1.25rem] py-[1.25rem] transition-all md:gap-[1.25rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px] md:gap-[15px]">
          <Image
            src={placeholder}
            width={35}
            height={35}
            alt="user"
            className="h-auto w-[2.1875rem] rounded-full xl:w-[3.125rem]"
          />
          <div className="flex flex-col">
            <span className="text-[0.875rem] font-semibold text-primary md:text-[1rem]">
              {username}
            </span>
            <p className="text-[12px] md:text-[0.875rem]">{testimoniDate}</p>
          </div>
        </div>
        <div className="flex gap-[0.125rem] md:gap-1">
          {[...Array(userRating)].map((_, index) => (
            <FaStar
              key={index}
              className="size-[0.875rem] text-[#F59E0B] transition-all hover:scale-110 hover:text-secondary md:size-[1rem]"
            />
          ))}
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray bg-opacity-30"></div>
      <p className="text-[12px] leading-[140%] text-black md:text-[0.875rem]">
        {userComment}
      </p>
    </div>
  );
}
