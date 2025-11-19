/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const useStaticExport = process.env.NEXT_STATIC_EXPORT === "true";

const nextConfig = {
  ...(useStaticExport
    ? {
        output: "export",
        trailingSlash: true,
      }
    : {}),
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
        env: {
          NEXT_PUBLIC_BASE_PATH: basePath,
        },
      }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
