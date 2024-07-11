import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import Dotenv from "dotenv-webpack";

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
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new CompressionPlugin(),
    new Dotenv(),
  ],
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    // filename: "bundle.js",
    filename: "scripts/[name].[fullhash:8].bundle.js",
    chunkFilename: "scripts/[name].[fullhash:8].bundle.js",
    publicPath: "/",
  },
};
