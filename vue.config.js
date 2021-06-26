module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: 'https://ilenguageapi.azurewebsites.net',
  },
};
