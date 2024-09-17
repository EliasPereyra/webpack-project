# React.js con Webpack desde cero

> [!NOTE]
> Este proyecto fue configurado usando módulos **ECMAScript** y no los **Common Modules**, porque los módulos ESM son mayormente soportados por los navegadores modernos y es la forma recomendada de escribir código JavaScript hoy en día. Por lo tanto, la sintaxis `require`, `module`, `exports`, `__filename` y `__dirname` no están disponibles módulos ESM.

En un sólo archivo podemos definir todo lo que se necesita para configurar y hacer uso de Webpack.

[Webpack](https://webpack.js.org/) es un bundler (empaquetador), el cual permite empacar todos los archivos `.js` en un uno solo, y también otros archivos como css o assets como imágenes, también permitiéndonos realizar optimizaciones.

La librería Webpack cuenta con una gran variedad de plugins, el cual nos permite ampliar las funcionalidades y la personalización del comportamiento del bundler.

Y también necesitamos de [Babel](https://babeljs.io/) para que el código empaquetado lo pueda procesar el navegador. Babel se encarga de transpilar el código JSX a la sintaxis de JavaScript que sea compatible con los navegadores.

## 💁 ¿Cómo funciona Webpack y cómo se configura?

Trabajamos con webpack a través de un archivo `webpack.config.js`. Aquí realizamos diferentes configuraciones, unas principales para que funcione correctamente y otras que son opcionales.

Extienden funcionalidades con herramientas que son externas, por ej. usar SCSS, es algo ajeno de Webpack. También tiene que compilarse, por lo tanto, necesitamos de un plugin para que trabaje juntamente con Webpack y procese estas funcionalidades extras.

### 🐾 Pasos

Primero, necesitamos de una entrada (`input`), que especifica el punto de entrada del proyecto. Desde aquí comienza a trabajar Webpack con los módulos.

Segundo, tenemos la Resolución de módulos (`module`), que sirve para encontrar y enlazar los módulos que se encuentran en el proyecto. Esto lo hace cuando escribes la sintaxis `import` y `export`.

Tercero, tenemos `plugins`, funcionalidades que son ajenas de los módulos principales de webpack, extensiones de las cuales podemos hacer uso y trabajar con herramientas de tercero. Por ej. `html-webpack-plugin`.

Cuarto, el `outuput` es la salida que ofrece Webpack después de haber realizado todo el proceso de los pasos anteriores. Es un archivo o un conjunto de archivos (dependiendo del caso) que contiene(n) todos los modulos requeridos para tu proyecto.

Estos son las configuraciones principales que webpack necesita para poder trabajar (a excepción del tercero, que es opcional).

## 🦶 Paso extra: la transpilación

Webpack solo no funcionaría, porque sólo se encarga de empaquetar, pero utiliza sintaxis que un navegador no puede entender. Necesitamos transpilar el código para que sea posible que un navegador lo entienda y lo procese.

Para ello necesitamos a [Babel](https://babeljs.io/). Simplemente creamos un archivo de configuración donde especificamos qué "plugin" necesitamos transpilar, en nuestro caso, toda la sintaxis JSX a que pase ser JS nativo.

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

## 📑 Requisitos

Se recomienda que utilices la última versión LTS de [Node.js](https://nodejs.org) para poder ejecutar el proyecto.

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

Con esto ya tenemos una página que se renderiza en la web, aunque solamente el texto. Si queremos agregar estilos, imágenes, vídeos, etc., necesitamos realizar otras configuraciones.

## 🖌️ Agregar soporte CSS a nuestro proyecto

Necesitamos de dos módulos:

- El `css-loader` es el que hace posible importar archivos `.css` en archivos `.js`. Nos permite usar las funciones nativas de css como `@import` y `url()`.
- El `style-loader` es el módulo que permite la inyección de los estilos en el objeto DOM.

Con estos dos módulos por lo tanto podemos realizar `./import.css` en nuestros archivos `.js`.

```sh
  npm i css-loader style-loader
```

## Configuraciones extras

### Agregar soporte de carga de archivos

Utilizamos los paquetes `file-loader` y `url-loader` para poder importar imágenes, con la sintaxis `import()`.

```sh
  npm i file-loader url-loader -D
```

### Agregar soporte para Code Splitting

// To-do

### Agregar soporte para compresión

Soporte de compresión de assets.

```sh
  npm i compression-webpack-plugin -D
```

Para más información, consulta el [repo](https://github.com/webpack-contrib/compression-webpack-plugin) oficial.

### Agregar soporte para variables de entorno

```sh
  npm i dotenv-webpack -D
```

Al usar el plugin dotenv-wepback tenemos la posibilidad de utilizar variables de entorno, que se encuentran en nuestro proyecto. La ventaja de este plugin es que solo expone la variable de entorno cuando se solicita explicitamente la variable, por razones de seguridad.

Para más información, consulta el [repo](https://github.com/mrsteele/dotenv-webpack) oficial.

## 🪛 Problemas que pueden surgir

- `SyntaxError: Cannot use import statement outside a module`: Asegúrate que tu `package.json` tiene la opción `type: module`.
