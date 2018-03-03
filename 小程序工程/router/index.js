// 路由管理
const Util = require('../util/index');
const router = {
    loading: '../loading/loading',
    index: '../index/index',
    detail: '../detail/detail',
    list: '../list/list'
};

/**
 * query  对象
 * { param1: 'xxx', param2: 'yyy'}
 * 调用方式 routeTo('targetUrl', { param1: 'xxx', param2: 'yyy' })
 */
module.exports = {
    routeTo: (url, query) => {
        let params = Util.handleParams(query);
        wx.navigateTo({
            url: router[url] + params
        });
    }
}; 