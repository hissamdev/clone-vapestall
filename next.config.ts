import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "vapstall.ae",
                port: "",
                pathname: "/cdn/shop/files/**",
            },
        ],
    },
};

export default nextConfig;
