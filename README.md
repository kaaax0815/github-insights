# Github Insights

## 💻 Usage

Install the package as a dependency from [npm](https://www.npmjs.com/package/github-insights):

With NPM:
```txt
npm install --save github-insights
```

With YARN:
```txt
yarn add github-insights
```

## 📄 Documentation

Documentation is available [here](https://kaaax0815.github.io/github-insights/)  
The "API" Module is most Important, "INDEX" just exports it

## 📖 Example

```ts
import { traffic } from 'github-insights';

async function main() {
  const clones = traffic.clones('<user>', '<repo>', '<username>', '<password>');
  console.log(clones);
}

main();
```

## 📄 License

MIT © Bernd Storath
