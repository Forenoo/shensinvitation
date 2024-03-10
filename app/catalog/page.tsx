import CatalogPagination from "@/components/CatalogPagination";
import SectionContainer from "@/components/SectionContainer";
import SectionHeader from "@/components/SectionHeader";

export default function CatalogPage() {
  return (
    <main className="paddingContainer maxContainer">
      <SectionContainer>
        <SectionHeader
          tag="Catalog Undangan"
          title="Lihat Semua Design Undangan"
          description="Temukan keindahan dalam catalog undangan online kami. Buat momen spesial Anda lebih istimewa dengan undangan digital dari kami!"
        />
        <div className="grid grid-cols-1 gap-[1.25rem] md:grid-cols-2 xl:grid-cols-3 xl:gap-[1.5625rem]"></div>
      </SectionContainer>

      <CatalogPagination />
    </main>
  );
}
