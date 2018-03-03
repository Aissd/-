Component({
    properties: {
        list: {
            type: Array
        }
    },
    methods: {
        // 关闭
        closeModal() {
            this.triggerEvent('tap', { key: 'close', val: false });
        },
        // 点击查看详情
        viewDetailFn(e) {
            console.log(e);
            this.triggerEvent('tap', { key: 'item', val: e.currentTarget.dataset.item });
        }
    }
});