import Button from "@/components/Button";
import Image from "next/image";
import imageHeader from "@/public/katalogheader.png";
import logo from "@/public/logo.png";
import shensbagSouvenirLogo from "@/public/shensbagundanganlogo.png";

import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";
import BenefitGrid from "@/components/BenefitGrid";
import UndanganCard from "@/components/UndanganCard";
import PricingCard from "@/components/PricingCard";
import Carousel from "@/components/Carousel";

import { FaStar } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { benefitData } from "@/lib/data";
import { pricingTypes } from "@/lib/data";
import CatalogList from "@/components/CatalogList";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="relative">
        <Image
          src={imageHeader}
          width={390}
          height={80}
          quality={100}
          alt="header"
          className="h-[5rem] w-full border-b-[0.1875rem] border-[#EEEEEE] md:h-[9.375rem] xl:h-[12rem] 2xl:h-[14rem]"
        />
        <div className="absolute left-1/2 top-[2.5rem] -translate-x-1/2 transform rounded-full border-[0.1875rem] border-[#EEEEEE] bg-white md:top-[5.625rem] xl:top-[7.1875rem] 2xl:top-[9.375rem]">
          <Image
            src={logo}
            width={80}
            height={80}
            alt="logo"
            className="h-auto w-[5rem] md:w-[6.25rem] xl:w-[7.5rem]"
          />
          <MdVerified className="absolute bottom-0 right-1 h-auto w-auto text-blurple transition-all hover:scale-110 md:w-[1.25rem] xl:w-[1.5625rem]" />
        </div>
      </header>

      <main className="maxContainer paddingContainer">
        {/* Hero Section */}
        <section className="pt-[4rem] text-center">
          <div className="flex flex-col items-center gap-[0.9375rem]">
            <h1 className="font-raleway text-[1.5rem] font-semibold uppercase text-primary md:text-[2rem] xl:text-[2.1875rem]">
              Shensinvitation
            </h1>
            <p className="text-[0.875rem] font-medium text-gray md:max-w-[30.625rem] md:text-[1.125rem]">
              Buat dan sebar{" "}
              <span className="font-semibold">undangan pernikahan</span> kalian
              jadi lebih cepat menggunakan Undangan Website dari{" "}
              <span className="font-semibold">Shens Invitation</span>. Dengan
              hasil design yang{" "}
              <span className="font-semibold">Premium & Elegant</span>
            </p>
            <div className="flex gap-x-[0.1875rem]">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className="size-5 text-primary transition-all hover:scale-110 hover:text-secondary md:size-6"
                />
              ))}
            </div>
          </div>
          <div className="mx-auto mt-[1.5625rem] flex max-w-[11.25rem] flex-col justify-center gap-[0.3125rem] md:max-w-none md:flex-row">
            <Button
              roundedType={"rounded-full"}
              buttonType={"primary"}
              className="!justify-normal"
              linkHref="https://wa.me/6289697002110?text=Hallo%20kak%2C%20saya%20pingin%20konsultasi%20desain%20undangan%20pernikahan%20dari%20Shensinvitation."
            >
              <IoLogoWhatsapp className="size-[1.3rem]" /> Konsultasi Gratis
            </Button>
            <Button
              roundedType={"rounded-full"}
              buttonType={"primary"}
              className="!justify-normal"
              linkHref="#catalog"
            >
              <IoIosArrowDown className="size-[1.3rem]" /> Katalog Undangan
            </Button>
          </div>
        </section>

        {/* Benefit Section */}
        <SectionContainer>
          <SectionHeader
            tag="Fitur dan Benefit"
            title="Benefit Yang Didapatkan"
            description="Tentunya setelah menggunakan undangan online dari kami, kamu akan mendapatkan benefit yang melimpah dari kami "
          />
          <div className="grid grid-cols-2 gap-[0.3125rem] font-raleway md:grid-cols-4 xl:gap-[0.625rem]">
            {benefitData.map((item, index) => (
              <BenefitGrid
                key={index}
                icon={item.icons}
                title={item.title}
                className={
                  index === 0 || index === 1 || index === 10 || index === 11
                    ? "md:col-span-2"
                    : ""
                }
              />
            ))}
          </div>
        </SectionContainer>

        {/* Catalog Section */}
        <SectionContainer sectionId="catalog">
          <SectionHeader
            tag="Catalog Undangan"
            title="Lihat Design Undangan"
            description="Temukan keindahan dalam catalog undangan online kami. Buat momen spesial Anda lebih istimewa dengan undangan digital dari kami!"
          />
          <div className="grid grid-cols-1 gap-[1.25rem] md:grid-cols-2 xl:grid-cols-3 xl:gap-[1.5625rem]">
            <CatalogList />
          </div>
          <div className="flex justify-center">
            <Button
              roundedType={"rounded"}
              buttonType={"primary"}
              linkHref="/catalog"
              className="mt-[1.875rem]"
            >
              Lihat Selengkapnya
            </Button>
          </div>
        </SectionContainer>

        {/* Pricing Section */}
        <SectionContainer>
          <SectionHeader
            tag="Dapatkan Undanganmu"
            title="Price List Undangan"
            description="Layanan undangan pernikahan online kami ditujukan untuk memberikan kemudahan dan kepraktisan dalam membuat undangan pernikahan impian anda."
          />
          <div className="mt-[1.25rem] grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-3 xl:gap-[1.875rem]">
            {pricingTypes.map((card, index) => (
              <PricingCard
                key={index}
                type={card.type}
                className={card.className}
              />
            ))}
          </div>
        </SectionContainer>

        {/* Testimonial Section */}
        <SectionContainer>
          <SectionHeader
            tag="Testimonials"
            title="Apa Kata Mereka?"
            description="Shensinvitation sudah membuat banyak pasangan yang membutuhkan undangan digital bahagia untuk hari spesial mereka."
          />
          <Carousel />
        </SectionContainer>

        {/* Supported Section */}
        <SectionContainer>
          <h2 className="text-center font-raleway text-[1.25rem] font-semibold text-primary md:text-[1.5rem] xl:text-[1.75rem]">
            Powered & Supported By
          </h2>
          <Image
            src={shensbagSouvenirLogo}
            width={300}
            height={300}
            className="mx-auto w-[15.625rem] xl:w-[20rem]"
            alt="logo-shensbag"
          />
        </SectionContainer>
      </main>
    </>
  );
}
