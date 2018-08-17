module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{woff2,woff,ttf,png,html,svg,js,css}"],
  swDest: "./dist/sw.js",
  clientsClaim: true,
  skipWaiting: true
};
