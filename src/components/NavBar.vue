<template>
    <ul class="menu">
        <div class="menu-in"
        ></div>
            <li class="menu-item" v-for ="link in links" 
                :key ="link.id" 
                @click="sliderIndicator(link.id)"
                :ref = "'menu-item_' + link.id"
                >
                    <a href="" class="menu-link">
                        <i class = "menu-icon" :class = "link.icon"></i>
                        <span>{{ link.text }}</span>
                    </a>
            </li>
    </ul>
</template>

<script>
export default {

    data(){
        return {
            sliderPosition: 0,
            CurrentElem: 0,
            SelIndex: 0,
            links: [{
                id: 1,
                icon: "fab fa-react",
                text: "React",
            },
            {
                id: 2,
                icon: "fab fa-angular",
                text: "Angular",
            },
            {
                id: 3,
                icon: "fab fa-vuejs",
                text: "Vue",
            },
            {
                id: 4,
                icon: "fab fa-html5",
                text: "HTML",
            },
            {
                id: 5,
                icon: "fab fa-CSS3-alt",
                text: "React",
            },
            {
                id: 6,
                icon: "fab fa-js",
                text: "Javascript",
            },
            
            ],
        }
    }, 
    methods:{
        sliderIndicator(id){
         let el = this.$refs[`menu-item_${id}`][0];
         this.sliderPosition = el.offsetLeft;
         this.CurrentElem = el.offsetWidth;
         this.SelIndex = id;
        }
    },

}
</script>

<style scoped>
    :root{
        --active-color: black;
        --link-text-color: white;
        --active-background-color:  black;

    }
    .menu {
        padding: 0;
        margin: 0;
        position: relative;
        background-color:aqua;
        display: inline-flex;
        border-radius: 2rem;
        list-style-type: none;

    }
    .menu-item {
        display: inline-flex;
    }
    .menu-link{
        padding: 0.5rem 0.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: black;
    }
    .menu-icon {
        height: 1.5rem;
        width: 1.5rem;
        justify-content: center;
        align-items: center;
        display: inline-flex;
        margin-right: 0.2rem;
    }
    .menu-in {
        position: absolute;
        background-color: green;
        height: 0.25rem;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 3rem;
        transition: all ease 0.5s;
    }
</style>