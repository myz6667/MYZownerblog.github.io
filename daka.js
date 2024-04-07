var recordVue = new Vue({
    el:"#record",
    data:{
        recordNum:0
    },
    methods:{
        addCount(){
            this.recordNum++;
            window.localStorage.setItem("recordNum",this.recordNum);
        },
        getCount(){
            return window.localStorage.getItem("recordNum");
        }
    },
});
