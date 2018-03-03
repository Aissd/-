const $http = require('./index');
const $apiUrl = require('./apiUrl');
const Util = require('../util/index');

// 获取品牌列表
const getBrands = (callback, params = '') => $http.get($apiUrl.brands + Util.handleParams(params), (res) => { callback(res); });

module.exports = {
    getBrands: getBrands
};