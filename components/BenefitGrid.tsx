import Image from "next/image";

interface BenefitGridProps {
  icon: any;
  title: string;
  className?: string;
}

export default function BenefitGrid({
  icon,
  title,
  className,
}: BenefitGridProps) {
  return (
    <div
      className={`group flex flex-col items-center justify-center gap-[0.625rem] rounded-[0.625rem] bg-primary py-[0.938rem] text-center text-[0.75rem] transition-all hover:text-[1rem] md:text-[0.875rem] ${className} transition-all hover:bg-secondary`}
    >
      <Image
        src={icon}
        alt="icon"
        className="h-auto w-auto flex-none transition-all group-hover:scale-110"
      />
      <span
        className="font-medium leading-tight text-white"
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
}
