module.exports = {
    get: (url, callback) => {
        wx.request({
            url: url,
            method: 'GET',
            success(res) {},
            fail(res) {},
            complete(res) {
                callback(res);
            }
        });
    }
};