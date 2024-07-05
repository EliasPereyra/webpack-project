# React.js with Webpack from scratch

En un solo archivo podemos configurar todo lo que se necesita para configurar y hacer uso de Webpack.

Webpack es un bundler, que significa que empaca todos los archivos .js en un uno solo. Lo hace realizando optimizaciones.

Webpack cuenta con una gran variedad de plugins, el cual amplia las funcionalidades y personalizar el comportamiento del bundler.

Y también necesitamos de Babel para una "conexión" de Webpack con React.js. Babel se encarga de transpilar el código JSX a JavaScript que sea compatible con los navegadores.

## ¿Cómo funciona Webpack y cómo se configura?

Trabajamos con webpack a través de un archivo `webpack.config.js`. Aquí realizamos diferentes configuraciones, unas principales para que funcione correctamente y otras que son opcionales, y extienden funcionalidades con herramientas que son externas, por ej. usar SCSS, es algo ajeno de Webpack. También tiene que compilarse, por lo tanto, necesitamos de un plugin para que trabaje juntamente con Webpack.

Primero necesitamos de una entrada (`input`), que especifica el punto de entrada del proyecto. Desde aquí comienza a trabajar Webpack con los módulos.

Segundo tenemos la Resoluciónd de módulos (`module`), que sirve para encontrar y enlazar los módulos que se encuentran en el proyecto. Esto lo hace cuando escribes la sintaxis `import` y `export`.

Tercero, tenemos `Loaders`, que es donde hacemos uso de los módulos que estan disponibles para usarlos con Webpack. Por ej., el módulo `babel-loader`, que es uno de los principales para que funcione todo el proyecto, para transpilar todo el código JSX a JavaScript compatible para con los navegadores.

Cuarto, tenemos `plugins`, funcionalidades que son ajenas de los módulos principales de webpack, extensiones de las cuales podemos hacer uso y trabajar con herramientas de tercero. Por ej. `html-webpack-plugin`.

Quinto, esta es la salida que ofrece Webpack después de haber realizado todo el proceso de los pasos anteriores. Es un archivo o un conjunto de archivos (dependiendo del caso) que contiene(n) todos los modulos requeridos para tu proyecto.

## Requisitos

Necesitas Node.js para poder ejecutar el proyecto.

Y para comenzar a trabajar, necesitamos instalar los siguientes paquetes:

- `webpack` y `webpack-cli`
- `@babel/core`, `@babel/present-env`, `@babel/preset-react`, `babel-loader`
- `react` y `react-dom`

```bash
  npm i webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader react react-dom
```

Una vez teniendo todo el proyecto configurado, podemos proceder a construir el proyecto usando Webpack:

```sh
  npx webpack --config webpack.config.js
```

## Troubleshooting

- `SyntaxError: Cannot use import statement outside a module`: Asegurate que tu package.json tiene la opción `type: module`.
