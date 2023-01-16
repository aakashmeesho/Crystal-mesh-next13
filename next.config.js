/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["@meesho/crystal"]);

const nextConfig = {
  reactStrictMode: false,
};

module.exports = withTM(nextConfig);
