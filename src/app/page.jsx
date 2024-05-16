import Content from "@/components/Content/Content";
import { getSupplierData } from "@/utils/api";

export default async function Page({ params, searchParams }) {
  try {
    const supplierData = await getSupplierData();
    console.log(supplierData)
    return (
      <Content />
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div>Failed to load data. {error}</div>;
  }
}
