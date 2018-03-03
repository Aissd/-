const Util = require('../../util/index');
const router = require('../../router/index');
const service = require('../../http/service');
Page({
    /**
     * 页面的初始数据
     */
    data: {
        hotBrandList: [], // 热门品牌数据
        interfaceFinish: false, // 接口是否完成flag
        modalShow: false // 模态框是否显示flag
    },
    /**
     * 生命周期函数--监听页面加载
     * options 可以获取从上一个页面带过来的参数
     * 
     */
    onLoad(options) {
        // console.log(options.from);
        // console.log(options.to);
        this.getBrandsFn();
    },

    // 请求接口获取数据
    getBrandsFn() {
        service.getBrands((res) => {
            if(res.data.code === 0) {
                let app = new getApp();
                app.globalData.allBrandList = res.data.data;
                this.getHotBrandFn(res.data.data);
            }
        } 
        // ,{
        //     query: 'condition1' // 举例有参数时的做法
        // }
        );
    },

    // 获取热门品牌数据
    getHotBrandFn(all) {
        let array = all.filter(item => item.isHotBrand === 1);
        this.setData({
            hotBrandList: array,
            interfaceFinish: true
        });
    },

    // // 这里可以接收到子组件传递的值
    // viewDetailFn(e) {
    //     router.routeTo('detail', {
    //         item: JSON.stringify(e.currentTarget.dataset.item)
    //     });
    // },

    // 打开模态框
    viewDetailFn() {
        this.setData({
            modalShow: true
        });
    },

    modalCallback(e) {
        // console.log(e.detail); // 接收从子组件传回来的值
        let detail = e.detail;
        switch(detail.key){
            case 'close':
                this.setData({
                    modalShow: e.detail.val
                });
            break;
            case 'item':
                router.routeTo('detail', {
                    item: JSON.stringify(e.detail.val)
                });
            break;
        }
    },

    // 查看全部品牌
    viewAllFn() {
        router.routeTo('list');
    }
});