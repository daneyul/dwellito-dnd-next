import Content from "@/components/Content/Content";
import { getMaterialsData, getSupplierData, getThumbnailsData } from "@/utils/api";

export default async function Page({ params, searchParams }) {
  try {
    const supplierData = await getSupplierData();
    const materialsData = await getMaterialsData();
    const thumbnailsData = await getThumbnailsData();
    return (
      <Content
        data={{
          supplierData,
          materialsData,
          thumbnailsData
        }}
      />
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div>Failed to load data. {error}</div>;
  }
}
