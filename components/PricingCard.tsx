import { FaArrowRight, FaCheck } from "react-icons/fa6";
import Button from "./Button";

interface PricingCardProps {
  type: "standard" | "premium" | "diamond";
  className?: string[] | string;
}

const benefitList = [
  "Tampilan Minimalist",
  "Unlimited Revisi",
  "Mendapat Semua Benefit",
  "Masa Aktif 3 Bulan",
  "Gratis Filter Instagram",
  "Mendapat Galery Foto/Video",
  "Konsultasi Custom Design",
];

const typeDetails = {
  standard: {
    checkedIndex: 4,
    startingPrice: "Rp 119.000",
    discountPrice: "Rp 74.000",
    description: "Nikmati momen spesialmu dengan gaya minimalist!",
    chatLink:
      "https://wa.me/6289697002110?text=Hallo%20kak%2C%20saya%20ingin%20memesan%20undangan%20digital%20paket%20*Standard*.%20Bisa%20dibantu%3F",
  },
  premium: {
    checkedIndex: 6,
    startingPrice: "Rp 149.000",
    discountPrice: "Rp 99.000",
    description: "Nikmati momen spesialmu dengan gaya modern!",
    chatLink:
      "https://wa.me/6289697002110?text=Hallo%20kak%2C%20saya%20ingin%20memesan%20undangan%20digital%20paket%20*Premium*.%20Bisa%20dibantu%3F",
  },
  diamond: {
    checkedIndex: 7,
    startingPrice: "Rp 249.000",
    discountPrice: "Rp 199.000",
    description: "Nikmati momen spesialmu sesuai dengan gaya design impianmu!",
    chatLink:
      "https://wa.me/6289697002110?text=Hallo%20kak%2C%20saya%20ingin%20memesan%20undangan%20digital%20paket%20*Diamond*.%20Bisa%20dibantu%3F",
  },
};

export default function PricingCard({ type, className }: PricingCardProps) {
  const { checkedIndex, startingPrice, discountPrice, description, chatLink } =
    typeDetails[type];

  return (
    <div
      className={`undanganCardShadow rounded-[0.625rem] bg-white px-[1.5625rem] py-[1.5625rem] ${className}`}
    >
      <div className="flex h-[1.875rem] items-center justify-between font-raleway">
        <span className="text-[1rem] font-bold capitalize text-blurple md:text-[1.25rem]">
          {type}
        </span>
        {type === "premium" && (
          <span className="rounded-full bg-blurple bg-opacity-10 px-[1rem] py-[0.375rem] text-[0.875rem] font-semibold text-blurple">
            Terlaris
          </span>
        )}
      </div>
      <div className="mt-[0.625rem] flex flex-col">
        <span className="text-[1rem] font-medium leading-loose text-black line-through">
          {startingPrice}
        </span>
        <h3 className="text-[2rem] font-bold leading-none text-primary xl:text-[2.5rem]">
          {discountPrice}
        </h3>
      </div>
      <p className="mt-[0.9375rem] text-[0.875rem] text-gray xl:text-[1rem]">
        {description}
      </p>
      <div className="my-[0.9375rem] h-[1px] w-full bg-gray bg-opacity-30"></div>
      <ul className="flex flex-col gap-[0.4375rem]">
        {benefitList.map((benefit, index) => (
          <li
            key={index}
            className={`flex items-center gap-x-[0.625rem] text-[0.875rem]`}
          >
            <FaCheck
              className={`size-4 ${checkedIndex > index ? "text-blurple" : "text-gray"}`}
            />
            <span
              className={`${checkedIndex > index ? "text-secondary" : "text-gray"} text-[0.875rem] xl:text-[1rem] `}
            >
              {benefit}
            </span>
          </li>
        ))}
      </ul>
      <Button
        buttonType={"primary"}
        roundedType={"rounded"}
        linkHref={chatLink}
        className="mt-[0.9375rem] w-full !py-[0.6875rem]"
      >
        Pesan Sekarang <FaArrowRight />
      </Button>
    </div>
  );
}
