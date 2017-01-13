const gulp = require("gulp"),
webpack = require("webpack"),
ExtractTextPlugin = require('extract-text-webpack-plugin'),
path = require('path'),
sassLoaders = [
	'css-loader',
	'postcss-loader',
	`sass-loader?includePaths[]=${path.resolve(__dirname, '../src')}`
],
node_modules = path.resolve(__dirname, 'node_modules'),
pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

gulp.task("webpack", function(callback) {
	console.log('Running webpack');
	webpack({	
			entry: {
				app: [ path.resolve(__dirname, '../src/index') ]
			},
			devtool: 'source-map' ,
			module: {
				loaders: [
							{ test: /\.jsx?$/, loader: ['babel-loader'], exclude: /(node_modules)/, query: { presets: ['react', 'es2015', 'stage-0'] } }, // JSX
							{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!')) }, // SASS
                    		{ test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
                    		{ test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
                    		{ test: /bootstrap\/dist\/css\/.css$/, loader: 'css-loader' }
						]
			},
			output: {
				path: path.join(__dirname, '../build'),
				filename: "app.js"
			},
			sassLoader: {
		        includePaths: [path.resolve(__dirname, "../src/styles")]
		    },
 			postcss: () => {
		        return [
		            require('precss'),
		            require('autoprefixer')
		        ];
		    },
			plugins: [
				new ExtractTextPlugin('[name].css'),
                new webpack.ProvidePlugin({
                    jQuery: 'jquery',
                    $: 'jquery',
                    jquery: 'jquery'
                })
			],
			resolve: {
				extensions: ['', '.js', '.scss'],
				root: [path.join(__dirname, '../src')],
        		modulesDirectories: ['../node_modules', '../src']
			}
		}, function(err, stats) {
			if(err) throw new gutil.PluginError("webpack", err);
			console.log("[webpack]", stats.toString({ /*EXECUTAR CASO DE ERRO*/  }));
			callback();
		}
	);
});