/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? './server.ts'
      : undefined,
  serverBuildPath: '.netlify/functions-internal/server.js',
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  publicPath: '/build/',
  // serverModuleFormat: 'cjs',
  // tailwind: true,
  // serverBuildPath: "build/index.js",
  // future: {
  //   v2_errorBoundary: true,
  //   v2_headers: true,
  //   v2_meta: true,
  //   v2_normalizeFormMethod: true,
  //   v2_routeConvention: true,
  // },
};
