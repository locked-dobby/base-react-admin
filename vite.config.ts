import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

type BuildType = "LOCAL" | "DEV" | "STG" | "PROD";

// TODO: 뉴렐릭 설치 시 사용
// const getSnippetNewrelic = (buildType: BuildType) => {
//   if (buildType === "PROD") {
//     return `<script src="https://public-assets.tpirates.com/_common/script/newrelic/payment-hub-web.js"></script>`;
//   } else if (buildType === "DEV") {
//     return `<script src="https://public-assets.tpirates.com/_dev/_common/script/newrelic/payment-hub-web.js"></script>`;
//   } else {
//     return ``;
//   }
// };

// TODO: GA 설치 시 사용
// const getSnippetGA = (buildType: BuildType) => {
//   if (buildType === "PROD") {
//     return `<script async src="https://www.googletagmanager.com/gtag/js?id=G-1ER2PF4GHW"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-1ER2PF4GHW');</script>`;
//   } else {
//     return ``;
//   }
// };

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const buildType = env.VITE_BUILD_TYPE as BuildType;

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            // snippetNewrelic: getSnippetNewrelic(buildType),
            // snippetGA: getSnippetGA(buildType),
          },
        },
      }),
    ],
    esbuild: {
      pure: buildType === "PROD" ? ["console.log"] : [],
    },
  };
});
