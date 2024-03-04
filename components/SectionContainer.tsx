interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <section
      className={`mt-[3.125rem] md:mt-[5rem] xl:mt-[8.75rem] ${className}`}
    >
      {children}
    </section>
  );
}
