const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const webpack = require("webpack");
require('dotenv').config()

const nextConfig = {
    webpack: (config, { defaultLoaders }) => {
        config.node = {
            fs: "empty",
            net: "empty",
            tls: "empty"
        };
        return config;
    },
    env: {
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
    }
};

module.exports = withPlugins([
    [optimizedImages, {
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        webp: {
            preset: 'default',
            quality: 75,
        }
    }],
    [withCSS], [withFonts],
],nextConfig);