import { defineConfig } from 'eslint/config';
import nextConfig from 'eslint-config-next';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...nextConfig.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "react/react-in-jsx-scope": "off"
    },
  }
);
