import { useMemo } from 'react';

function useShedSize(slug) {
  return useMemo(() => {
    // Regular expression to capture the pattern "number x number" at the end of the slug
    const match = slug.match(/(\d+x\d+)$/);

    // If there's a match, return the captured size; otherwise, return null
    return match ? match[0] : null;
  }, [slug]);
}

export default useShedSize;