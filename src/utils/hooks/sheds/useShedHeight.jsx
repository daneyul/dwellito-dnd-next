import { useMemo } from 'react';

function useShedHeight(slug) {
  return useMemo(() => {
    // Regular expression to capture the pattern "one-story" or "two-story" at the beginning of the slug
    const match = slug.match(/^(one-story|two-story)/);

    // If there's a match, return the captured height; otherwise, return null
    return match ? match[0] : null;
  }, [slug]);
}

export default useShedHeight;