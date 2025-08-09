const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = (env) => {
  const isProduction = env.NODE_ENV === "production";
  const envFile = isProduction ? ".env.production" : ".env.development";
  const envPath = path.resolve(__dirname, envFile);
  const envVars = require("dotenv").config({ path: envPath }).parsed || {};

  return {
    entry: "./src/app/bootstrap.ts", // Entry point for React app
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx", ".mjs", ".json"], // Automatically resolve these extensions
      // conditionNames: ['import', 'require', 'default'],
      // exportsFields: ['exports'],
    },
    output: {
      publicPath: "/",
      path: path.resolve(__dirname, "dist"), // Output directory
      filename: "[name].[contenthash].js", // Name of the output bundle
      clean: true, // Clean output folder before each build
    },
    mode: "development", // Use 'production' for optimized builds
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          include: path.resolve(__dirname, "src"),
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto", // This ensures `.mjs` files are handled correctly as ES modules
        },
        {
          test: /\.css$/, // Match CSS files
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ],
    },

    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Remove console logs for production
            },
          },
        }),
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html", // HTML template
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(envVars),
      }),
      new WorkboxPlugin.GenerateSW({
        // These options help in faster page loads and better offline support
        clientsClaim: true,
        skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com/,
            handler: "StaleWhileRevalidate",
          },
          {
            urlPattern: /.*\.(?:js|css|html|json)$/,
            handler: "NetworkFirst",
          },
        ],
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public",
            to: "",
            globOptions: { ignore: ["**/index.html"] },
          },
        ],
      }),
      new CompressionPlugin({
        algorithm: "gzip",
        test: /\.(js|css|html|svg)$/,
        threshold: 8192, // Compress files larger than 8kb
      }),

      new SitemapPlugin({
        base: "https://your-website.com", // Your website URL
        paths: ["/home", "/about", "/contact"], // List of paths you want to include in the sitemap
        options: {
          lastmod: true, // Add the last modified date
          changefreq: "monthly", // How often the page content is likely to change
          priority: 0.5, // Page priority
        },
      }),
    ],

    devServer: {
      port: 3000,
      hot: true, // Enable Hot Module Replacement (HMR)
      open: true,
      historyApiFallback: true, // Fix for React Router 404s in development
      allowedHosts: [".dev.local", "localhost"],
    },
  };
};
