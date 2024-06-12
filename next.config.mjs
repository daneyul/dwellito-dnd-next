import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [
      path.join(path.dirname(new URL(import.meta.url).pathname), 'styles'),
    ],
    prependData: `@import "~@utils/variables.scss";`,
  },
};

export default nextConfig;
