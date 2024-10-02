import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { 
    globals: {
      ...globals.browser,
      ...globals.node, // 添加这一行以支持 Node.js 全局变量
    }
  }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-undef": "off" // 如果你不希望禁用这个规则，可以删除这一行
    }
  }
];