/** @type {import('@types/eslint').Linter.BaseConfig} */
module.exports = {
  extends: [
    "@locked-dobby/eslint-config/typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "@locked-dobby/eslint-config/react",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "*.config.cjs", "app/**", "*.md"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./src/*"],
    tsconfigRootDir: __dirname,
  },
  // TODO: 컴포넌트(jsx | tsx) export default가 없으면 에러띄우는 룰 찾아보기
  rules: {
    "@typescript-eslint/no-misused-promises": "off",
  },
};
