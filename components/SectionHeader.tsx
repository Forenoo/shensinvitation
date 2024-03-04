interface SectionHeaderProps {
  tag: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  tag,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-[1.25rem] flex flex-col gap-[0.3125rem] text-center md:mb-[1.875rem] md:gap-[0.625rem] xl:mb-[2.5rem]">
      <span className="mx-auto w-fit rounded-full bg-blurple bg-opacity-10 px-[0.75rem] py-[0.25rem] font-raleway text-[0.875rem] font-semibold text-blurple md:px-[1rem] md:py-[0.375rem] md:text-[1rem]">
        {tag}
      </span>
      <h2 className="font-raleway text-[1.25rem] font-bold text-primary md:text-[1.5rem] xl:text-[2.25rem]">
        {title}
      </h2>
      <p className="mx-auto max-w-[34.375rem] text-[0.875rem] text-gray md:text-[1rem]">
        {description}
      </p>
    </div>
  );
}
