const path = require('path')
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    entry: "./dev/main.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: ASSET_PATH,
    },
}