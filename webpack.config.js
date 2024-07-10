import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { fileURLToPath } from "url";

// To-do: Agregar soporte css
// To-do: Agregar soporte SCSS
// To-do: Agregar soporte env vars
// To-do: Agregar soporte imagenes
// To-do: Agregar soporte lazy loading/code splitting
// To-do: Agregar soporte en optimizaciones

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcPath = path.resolve(__dirname, "src");

export default {
  entry: `${srcPath}/index.jsx`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
};
