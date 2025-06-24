# Excel Web Table
This is a web app that has some of the most used functions of Microsoft Excel and Google Sheets.
<br /> <br />


# Features

### Displaying structured data in the table
![image](https://github.com/user-attachments/assets/2ee0dc26-63e8-44df-ae1b-d2523d2c46c4)

### Light and Dark modes with Tailwind CSS
![image](https://github.com/user-attachments/assets/232aa21d-658d-4c9a-ba2e-3aebb751976b)

### Sorting data in each column 
https://github.com/user-attachments/assets/18c3503d-1e59-405e-a019-baf0aca6360d

### search for words or numbers in the table
https://github.com/user-attachments/assets/dd3b7019-0609-4f16-a9cc-82263af92842

### Setting decimal places for numbers in the table
https://github.com/user-attachments/assets/29c459b0-5ccd-49d5-bfee-75d86536b5ee





# Technologies

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.<br/>
Currently, two official plugins are available:

- [Typescript](https://www.typescriptlang.org/)
- [ReactJS](https://react.dev/)
- [vite](https://vite.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs/)
- [Shadcn UI](https://ui.shadcn.com/docs/)
  
<br />

# How to run
You need to have up-to-date NodeJs installed.

1- Install dependencies
```
npm install
pnpm install
```

2- Run the app
```
npm run dev
pnpm run dev
```
The project will start on port 3000. You can access it through the url: "http://localhost:3000/"

<br />

## Custom ESLint configuration
The eslint.config.js file has been improved and new libs have been added for a better engineering experience.

```js
export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    files: [
      '**/*.{ts,tsx,js,jsx}'
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@stylistic': stylistic,
      'import-x': importX,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@stylistic/indent': ['warn', 2],
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/jsx-quotes': ['warn', 'prefer-double'],
      '@stylistic/semi': ['warn', 'never'],
      '@stylistic/no-extra-semi': ['error'],
      '@stylistic/max-len': ['warn', { code: 100, ignoreStrings: true }],
      'import-x/newline-after-import': ['error', { count: 3 }],
    },
  },
)
```
<br/>


### Run Eslint to fix errors or warnings
```
npm run lint:fix
pnpm run lint:fix

```
