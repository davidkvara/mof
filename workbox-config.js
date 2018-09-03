module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{woff2,png,html,svg,js,css}"],
  swDest: "./dist/sw.js",
  clientsClaim: true,
  skipWaiting: true
};
