import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: typescriptPlugin.configs.recommended,
});

const eslintConfig = [
  {
    // 为TypeScript文件配置解析器
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
      },
    },
    // 添加TypeScript插件
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
  },
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "airbnb",
    "airbnb-typescript"
  ),
  // 你的自定义规则...
];

export default eslintConfig;
