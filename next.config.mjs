import path from 'path';
const __dirname = new URL('.', import.meta.url).pathname;

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    webpack: (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, './src/'),
        };

        return config;
    },
};

export default nextConfig;
