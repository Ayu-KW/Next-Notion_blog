/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  // Next.jsのwebpack設定を拡張する
  webpack(config) {
    // CSSをグローバルに読み込む
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"],
    });

    return config;
  },
};
