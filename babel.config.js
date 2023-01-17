module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: ["tsconfig-paths-module-resolver"],
  env: {
    production: {
      plugins: ["react-native-paper/babel"],
    },
  },
};
