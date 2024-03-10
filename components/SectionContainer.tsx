interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  sectionId?: string;
}

export default function SectionContainer({
  children,
  className,
  sectionId,
}: SectionContainerProps) {
  return (
    <section
      id={sectionId}
      className={`mt-[3.125rem] md:mt-[5rem] xl:mt-[8.75rem] ${className}`}
    >
      {children}
    </section>
  );
}
