var count = 0;
window.localStorage.setItem("recordNum",count);
var recordVue = new Vue({
    el:"#record",
    data:{
        recordNum:0
    },
    methods:{
        addCount(){
            count++;
            recordNum = count;
            window.localStorage.setItem("recordNum",count);
        }
    },
});
