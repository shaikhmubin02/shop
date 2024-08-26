/** @type {import('next').NextConfig} */

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: { 
        remotePatterns: [{ protocol: 'https', hostname: 'img.clerk.com' }],
        domains: ['aceternity.com']
    }
};

export default nextConfig;