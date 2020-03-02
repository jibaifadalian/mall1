module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets'
      }
    }
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/ajax': {//判断路径ajax
        target: 'http://m.maoyan.com',
        changeOrigin: true,
        
      },
      '/jibai': {
        target: 'http://m.maoyan.com',
        changeOrigin: true,
        pathRewrite:{
          "^/jibai":''
        }
      }
    }

  },
}