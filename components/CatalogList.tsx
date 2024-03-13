import UndanganCard from "@/components/UndanganCard";

interface CatalogItem {
  id: string;
  picture: string;
  themeId: string;
  type: string;
}

export default async function CatalogList() {
  const getCatalogData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/undangan", {
        cache: "no-cache",
        method: "GET",
      }).then((res) => res.json());

      const data = await res;
      return data.slice(0, 6);
    } catch (error) {
      console.log(error);
    }
  };

  const catalogData = await getCatalogData();

  return (
    <>
      {catalogData?.map((item: CatalogItem) => (
        <UndanganCard
          key={item.id}
          picture={item.picture}
          themeId={item.themeId}
          invitationType={item.type}
        />
      ))}
    </>
  );
}
