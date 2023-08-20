# Project setup

-   npm init -y

# devDependencie (npm install -D)

- typescript
- tsc-watch
- eslint
- prettier
- eslint-config-prettier
- eslint-plugin-prettier
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
- @types/node
- @types/express

# dependencies (npm install)
- express
- dotenv

# Configuring File for typescript
- npx tsc --init
- baseUrl: './src' // all files are going to be in the source folder
- Outdir: 'dist'
- "paths": {
      "@/resources/*" : ["resources/*"], this is where controllers, models etc will be
      "@/utils/*" : ["utils/*"],
      "@/middleware/*" : ["middleware/*"],
    }, 