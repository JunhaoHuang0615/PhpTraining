const autoprefixer = require('autoprefixer');
const pcImport = require('postcss-import');
const cssnano = require('cssnano');
const cssnext = require('postcss-cssnext');

module.exports = {
    plugins : [
        autoprefixer(
            {
                browsers : [' > 0% '] //这一条的意思是给所有浏览器添加上前缀，-wevbit-等，我们只要写tansform属性，前缀会自动生成
            }
        ),
        pcImport,
        cssnano,
        cssnext
    ]
};