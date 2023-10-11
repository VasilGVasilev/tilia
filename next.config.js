/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    // optimization: {
    //     minimizer: [
    //         new TerserPlugin({
    //             terserOptions: {
    //                 compress: {
    //                     drop_console: true,
    //                 },
    //             },
    //         }),
    //     ],
    // },
}

module.exports = nextConfig
