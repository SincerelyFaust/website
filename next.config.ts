import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
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
  ],
};

export default nextConfig;
