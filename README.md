# Modules-test

This is a test repo that will help me understand modules before starting on React

## Webpack
start the to use webpack by using the terminal.

´´´
 npm init -y
´´´

in terminal to make an package.json file

´´´
 npm install webpack webpack-cli --save-dev
´´´

in terminal to install webpack at dev

´´´
 npm install --save-dev html-webpack-plugin
´´´

in terminal to install html webpack

then go into package.json at script and write 
´´´
 "build": "webpack"
´´´


Then make a new file called "webpack.config.js" and put

´´´
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

    module.exports = {
        mode: "production",
        entry: './index.js',
        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html',
                filename: './index.html'
            }),
        ],
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        }
    };
´´´    

after this use
´´´

npm run build
´´´

in terminal to run the build so it makes a dist file with index.html and main.js in it.  

The problem with webpack is that it takes the index.js with it that we use at  
 live server. u just have to go in your index.html at remove or comment out the script line at build again.

´´´
npm install --save-dev style-loader css-loader
´´´

To make css in webapck...  

go in your webpack.config.js file and add 

'''
module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
'''

so you dont get an error when using 
´´´
npm run build
´´´


