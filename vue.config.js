let path = require("path");
module.exports = {
	//代理
	devServer: {
	  proxy: {
	    '/api': {
	      target: "http://localhost:3000",
	      changeOrigin: true,
	      pathRewrite: {
	        '^/api': '/api'
	      }
	    }
	  },
	},
	configureWebpack: (config) => {
    	config.resolve = { 
      		extensions: ['.js', '.json', '.vue'],
      		alias: {
       	 		'@': path.resolve(__dirname, './src'),
      		}
    	}
  	}
}