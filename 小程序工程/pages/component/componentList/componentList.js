Component({
    properties: {
        listData: {
            type: Array,
            value: []
        }
    },
    methods: {
        onComponentEvent(e) {
            console.log(e.currentTarget.dataset.item);
            this.triggerEvent('tap', e.currentTarget.dataset.item);
        }
    }
});