Page({
    data: {
        brandDetail: {}
    },

    onLoad(options) {
        console.log(options);
        this.setData({
            brandDetail: JSON.parse(options.item)
        });
    },

    onReady() {
        
    }
});