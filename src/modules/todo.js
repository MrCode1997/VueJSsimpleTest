export default {
    name : 'ToDo',
    data () {
        return {
            msgModule : 'Hello from Module'
        }
    },
    methods : {
        initModule () {
            console.log(this.msgModule);
        }
    },
    created () {
        this.initModule();
    }
}
