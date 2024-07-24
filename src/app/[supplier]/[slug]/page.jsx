import Content from '@/components/Content/Content';
import Script from 'next/script';

export async function generateMetadata() {
  return {
    title: `Configurator - Custom Cubes`,
    icons: {
      icon: '/favicon/custom-cubes.png',
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
