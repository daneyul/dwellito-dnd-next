import Content from "@/components/Content/Content";
import { getMaterialsData, getSupplierData, getThumbnailsData } from "@/utils/api";

export default async function Page({ params, searchParams }) {
  const slug = params.slug;

  try {
    // const supplierData = await getSupplierData();
    // const materialsData = await getMaterialsData();
    // const thumbnailsData = await getThumbnailsData();
    return (
      <Content
      data={{
        slug
      }}
        // data={{
        //   supplierData,
        //   materialsData,
        //   thumbnailsData
        // }}
      />
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div>Failed to load data. {error}</div>;
  }
}
