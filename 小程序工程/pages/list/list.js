const router = require('../../router/index');
Page({
    data: {
        allBrandList: []
    },

    onReady() {
        let app = new getApp();
        this.setData({
            allBrandList: app.globalData.allBrandList
        });
    },

    onPageEvent(e) {
        router.routeTo('detail', {
            item: JSON.stringify(e.detail)
        });
    }
});