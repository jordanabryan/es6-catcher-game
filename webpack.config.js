const path = require('path');

module.exports = {
	entry: ['./app/index.js'],
	output: {
		path: path.resolve(__dirname, './build'),
		//path: __dirname + './build', #this also works
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ 
				test: /\.js$/, //look for all .js files
				loader: 'babel-loader',  
				exclude: /node_modules/, //exclude all of the node modules from the build
			},
		],
	},
	//dev server
	devServer: {
		host: 'localhost', //set the development host to localhost
		port: 8080, //set the development port to 8080
		contentBase: './build',
		inline: true //allows for automatic updates
	}
}