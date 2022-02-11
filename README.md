install:
npm install
npx husky add .husky/pre-commit "npx lint-staged"
something
