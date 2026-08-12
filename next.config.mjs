/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/:path*.hwp",
        headers: [
          {
            key: "Content-Type",
            value: "application/x-hwp",
          },
          {
            key: "Content-Disposition",
            value: "attachment",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
