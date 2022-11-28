# TechHelper-BackEnd-atividades

Atividades de Programação orientada a Objetos (POO) realizadas no PS Fullstack web develop da Growdev 8ª ed.

## Iniciando Node

```
$ npm init -y
```

### Instalando devDependecies

```
$ npm install -D typescript

$ npm install -D ts-node-dev

$ npm install -D @types/node
```

### Estrutura do package.json e exemplo de script

```JSON
{
    "name": "nome do teu projeto",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "dev": "ts-node-dev --respawn --transpile-only ./src/meuArquivo.ts" // meuArquivo - é o arquivo que voce vai executar com ts-node-dev
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@types/node": "^18.7.10",
        "ts-node-dev": "^2.0.0",
        "typescript": "^4.7.4"
    }
}
```

## iniciando tsconfig

```
$ npx tsc --init
```

### Estrutura do tsconfig.json

```JSON
{
    "compilerOptions": {
        /* Language and Environment */
        "target": "es2022" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,       
        /* Modules */
        "module": "commonjs" /* Specify what module code is generated. */,
        "rootDir": "./src" /* Specify the root folder within your source files. */,    
        "outDir": "./dist" /* Specify an output folder for all emitted files. */,    
        "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,      
        "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,
        /* Type Checking */
        "strict": true /* Enable all strict type-checking options. */,    
        "skipLibCheck": true /* Skip type checking all .d.ts files. */
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}
```

## Executar ts-node-dev

```
$ npm run dev
```
Lembre-se de estar na pasta do projeto
