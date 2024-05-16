import Content from "@/components/Content/Content";

export default async function Page({ params, searchParams }) {
  try {
    console.log('blah')
    return (
      <>
        <Content />
      </>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return <div>Failed to load data. {error}</div>;
  }
}
