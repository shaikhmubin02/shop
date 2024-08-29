/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    images: { 
        remotePatterns: [{ protocol: 'https', hostname: 'img.clerk.com' }],
        domains: ['aceternity.com', 'pbs.twimg.com']
    }
};

export default nextConfig;