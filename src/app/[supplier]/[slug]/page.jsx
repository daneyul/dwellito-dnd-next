import Content from '@/components/Content/Content';
import { findSupplierName, SUPPLIER_SLUGS } from '@/utils/constants/names/names';

export async function generateMetadata({ params }) {
  const supplierSlug = params.supplier;
  const supplierName = findSupplierName(supplierSlug);

  const title = `Configurator - ${supplierName}`;
  let iconPath;
  switch (supplierSlug) {
    case SUPPLIER_SLUGS.CUSTOM_CUBES:
      iconPath = '/favicon/custom-cubes.png';
      break;
    case SUPPLIER_SLUGS.AT_AND_S:
      iconPath = '/favicon/at-and-s.png';
      break;
    case SUPPLIER_SLUGS.COMPACT_COTTAGES:
      iconPath = '/favicon/compact-cottages.png';
      break;
  }

  return {
    title,
    icons: {
      icon: iconPath,
    },
  };
}

export default async function Page({ params, searchParams }) {
  const supplier = params.supplier;
  const slug = params.slug;
  const querySelectionData = searchParams.data;

  try {
    return (
      <Content
        data={{
          slug,
          supplier,
          querySelectionData,
        }}
      />
    );
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return <div>Failed to load data. {error}</div>;
  }
}
