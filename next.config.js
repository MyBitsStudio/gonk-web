/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false, net: false, tls: false }
        config.externals.push("pino-pretty", "encoding")
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resourceQuery: /icon/,
            use: ["@svgr/webpack"],
        })
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            resourceQuery: { not: [/icon/] },
            loader: "next-image-loader",
            options: { assetPrefix: "" },
        })
        return config
    },
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "app.aave.com",
            "images.unsplash.com",
            "cloudflare-ipfs.com",
            "gateway.ipfs.io",
        ],
    },
}

module.exports = nextConfig
