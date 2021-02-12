const path = require('path');
module.exports = {

	resolver: {
		extraNodeModules: new Proxy({}, {
			get: (target, name) => path.join(process.cwd(), `node_modules/${name}`),
		}),
	},

	projectRoot: path.resolve(__dirname),
	watchFolders: [
	// here you can add your shared module to make the watcher to be able to see it 
		path.resolve(__dirname, "../shared") 
	]
}