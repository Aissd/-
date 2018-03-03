const router = require('../../router/index');
const Util = require('../../util/index');
Page({
    data: {

    },
    onLoad(options) {
        setTimeout(() => {
            // wx.reLaunch 无返回按钮的跳转
            // wx.reLaunch({
            //     url: '../index/index'
            // });
            router.routeTo('index', {
                from: 'loading',
                to: 'index'
            });
        }, 0);
    }
});