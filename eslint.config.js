import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";

export default [{ ignores: ["dist/**"] }, ...tseslint.configs.recommended, prettier];
