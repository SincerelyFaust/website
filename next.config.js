/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: "https://twitter.com/@sincerelyfaust",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/sincerelyfaust",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://linkedin.com/in/marinhedes",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/marinhedes",
        permanent: true,
      },
      {
        source: "/cdw",
        destination:
          "https://github.com/SincerelyFaust/crowdin-discord-webhook",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;