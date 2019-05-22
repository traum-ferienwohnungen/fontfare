/** global require **/
const webfontsGenerator = require('webfonts-generator');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const sass = require('node-sass');
const timestamp = Date.now();

const iconList = [];
const iconDir = './icons';

const fontname = 'FontFare';
const iconPrefix = 'ff';
const scssOutput = './dist/scss/_fontfare.scss';

fs.readdirAsync(iconDir).then((files) => {
    files.forEach((file) => {
        iconList.push(iconDir + "/" + file)
    });
    webfontsGenerator({
            fontName: fontname,
            files: iconList,
            types: ['woff', 'woff2', 'eot', 'ttf', 'svg'],
            startCodepoint: 0xE000,
            normalize: true,
            fontHeight: 10000,

            css: true,
            cssDest: scssOutput,
            cssTemplate: 'templates/scss.hbs',
            cssFontsUrl: './dist/fonts/',
            cssClass: iconPrefix,

            html: true,
            htmlDest: './dist/preview/index.html',
            htmlTemplate: './templates/html.hbs',
            templateOptions: {
                cacheBuster: timestamp,
                fontDir: '../fonts/',
                classPrefix: iconPrefix + '-',
                baseSelector: iconPrefix
            },
            dest: 'dist/fonts/',
        }, function (error) {
            if (error) {
                console.log('Error creating font ', error);
            } else {
                sass.render({
                    file: scssOutput,
                    outFile: 'main.css',
                }, function (error, result) {
                    if (!error) {
                        fs.writeFile('dist/preview/main.css', result.css, () => {
                            console.log('Preview created')
                        })
                    }
                });
            }
            console.log('Fonts were generated!');
        }
    )
});
