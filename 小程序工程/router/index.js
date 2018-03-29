// 路由管理
const Util = require('../util/index');
const router = {
    form: '../form/form',
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
    // 正常路由跳转
    routeTo: (url, query) => {
        let params = Util.handleParams(query);
        wx.navigateTo({
            url: router[url] + params
        });
    },
    // 无返回按钮的跳转
    reLaunchTo: (url) => {
        wx.reLaunch({
            url: router[url]
        });
    },
    // 跳转到指定层数
    navigateBackTo: (index) => {
        wx.navigateBack({
            delta: index
        });
    }
}; 