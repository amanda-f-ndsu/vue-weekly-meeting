var vm = new Vue({
    el: "#root",
    data: {
        name: '',
        visible: true,
    },
    methods: {
        displayName(){
            this.visible = !this.visible;
        }
    },
    mounted(){
        this.name = "Bob";
    },
    computed: {
        secret(){
            if(this.name == "Amanda"){
                return "Oh wow, we share the same name!";
            }
            else{
                return "";
            }
        }
    }
})