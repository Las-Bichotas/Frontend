module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    //proxy: 'https://ilenguageapi.azurewebsites.net',
    proxy: 'http://localhost:5001'
  },
};
