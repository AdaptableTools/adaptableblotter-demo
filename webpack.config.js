﻿var webpack = require('webpack');
var path = require('path');
var failPlugin = require('webpack-fail-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PACKAGE = require('./package.json');

module.exports = {
    entry: {
        'index': ["./index.js"],
        hypergriddemo: "./src/HypergridDemo.ts",
        hypergridbasicdemo: "./src/HypergridBasicDemo.ts",
        hypergridchartingdemo: "./src/HypergridChartingDemo.ts",
        aggriddemo: "./src/agGridDemo.ts",
        aggridbasicdemo: "./src/agGridBasicDemo.ts",
        aggridconfigdemo: "./src/agGridConfigDemo.ts",
        aggridthemingdemo: "./src/agGridThemingDemo.ts",
        aggridworldstatschartingdemo: "./src/aggridworldstatschartingdemo.ts",
        aggridgroupingdemo: "./src/agGridGroupingDemo.ts",
        aggridmultiplegriddemo: "./src/agGridMultipleGridDemo.ts",
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: "[name]",
        libraryTarget: 'umd'
    },
    // Turn on sourcemaps
    devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "ag-grid-community/dist/lib/entities/gridOptions": "agGrid",
        "ag-grid-community/dist/lib/grid": "agGrid",
     
    },

    plugins: [
        failPlugin,
        new webpack.DefinePlugin({
            'process.env.packageVersion':  JSON.stringify(PACKAGE.version)
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "hypergriddemo.html",
            template: 'DemoPage/hypergriddemo.ejs',
            inject: false,
           'harnessJs': PACKAGE.version + "/adaptableblotterhypergrid-bundle.min.js",
            'demoJs': "hypergriddemo.js",
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "hypergridbasicdemo.html",
            template: 'DemoPage/hypergridbasicdemo.ejs',
            inject: false,
           'harnessJs': PACKAGE.version + "/adaptableblotterhypergrid-bundle.min.js",
            'demoJs': "hypergridbasicdemo.js",
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "hypergridchartingdemo.html",
            template: 'DemoPage/hypergridchartingdemo.ejs',
            inject: false,
           'harnessJs': PACKAGE.version + "/adaptableblotterhypergrid-bundle.min.js",
            'demoJs': "hypergridchartingdemo.js",
        }),
         new HtmlWebpackPlugin({
            chunks: [],
            filename: "aggriddemo.html",
            template: 'DemoPage/aggriddemo.ejs',
            inject: false,
            'harnessJs': PACKAGE.version + "/adaptableblotteraggrid-bundle.min.js",
            'demoJs': "aggriddemo.js",
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "aggridbasicdemo.html",
            template: 'DemoPage/aggridbasicdemo.ejs',
            inject: false,
            'harnessJs': PACKAGE.version + "/adaptableblotteraggrid-bundle.min.js",
            'demoJs': "aggridbasicdemo.js",
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "aggridconfigdemo.html",
            template: 'DemoPage/aggridconfigdemo.ejs',
            inject: false,
            'harnessJs': PACKAGE.version + "/adaptableblotteraggrid-bundle.min.js",
            'demoJs': "aggridconfigdemo.js",
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "aggridthemingdemo.html",
            template: 'DemoPage/aggridthemingdemo.ejs',
            inject: false,
            'harnessJs': PACKAGE.version + "/adaptableblotteraggrid-bundle.min.js",
            'demoJs': "aggridthemingdemo.js",
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "aggridworldstatschartingdemo.html",
            template: 'DemoPage/aggridworldstatschartingdemo.ejs',
            inject: false,
            'harnessJs': PACKAGE.version + "/adaptableblotteraggrid-bundle.min.js",
            'demoJs': "aggridworldstatschartingdemo.js",
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "aggridgroupingdemo.html",
            template: 'DemoPage/aggridgroupingdemo.ejs',
            inject: false,
            'harnessJs': PACKAGE.version + "/adaptableblotteraggrid-bundle.min.js",
            'demoJs': "aggridgroupingdemo.js",
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "aggridmultiplegriddemo.html",
            template: 'DemoPage/aggridmultiplegriddemo.ejs',
            inject: false,
            'harnessJs': PACKAGE.version + "/adaptableblotteraggrid-bundle.min.js",
            'demoJs': "aggridmultiplegriddemo.js",
        }),
        new HtmlWebpackPlugin({
            chunks: [],
            filename: "index.html",
            template: 'DemoPage/index.ejs',
            inject: false,
            'version': PACKAGE.version,
            'versiondate': new Date().toISOString().slice(0, 10)
        }),
        //this makes sure we package it in the dist folder and make it available for the webpack dev server
        // new CopyWebpackPlugin([{ context: 'node_modules/adaptableblotter/dist/adaptable-blotter-themes', from: '**/*', to: 'adaptable-blotter-themes' }]),
        new CopyWebpackPlugin([{ context: 'node_modules/adaptableblotter/dist', from: '*', to: PACKAGE.version + '/' }]),
        new CopyWebpackPlugin([{ from: 'ExtLibs/**/*', to: '' }]),
        new CopyWebpackPlugin([{ from: 'images/*', to: '' }]),
        new CopyWebpackPlugin([{ from: 'node_modules/adaptableblotter/LICENSE.md', to: '' }]),
        new CopyWebpackPlugin([{ from: 'DemoPage/*', to: '', flatten: true }]),
        new CopyWebpackPlugin([{ from: 'DataSets/Json/*.json', to: '', flatten: true }]),
        new CopyWebpackPlugin([{ from: 'src/DataSets/**/*.json', to: '', flatten: true }]),
       // new CopyWebpackPlugin([{ from: 'src/configs/*.json', to: '', flatten: true }]),
        new CopyWebpackPlugin([{ from: 'app*.json', to: '', flatten: true }])
    ],
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            // note that babel-loader is configured to run after ts-loader
            {
                exclude: /node_modules/,
                test: /\.ts(x?)$/, loader: 'babel-loader?presets[]=es2015&plugins[]=transform-runtime!ts-loader'

            }
        ]
    },
    devServer: {
        proxy: {
            '/auditlog': {
                target: 'http://127.0.0.1:6767',
                secure: false
            },
            '/adaptableblotter-config': {
                target: 'http://127.0.0.1:3000',
                secure: false
            },
            '/adaptableblotter-teamsharing': {
                target: 'http://127.0.0.1:3000',
                secure: false
            }
        }
    }
}