<template>
    <div class="telo-cil"> 
        <div class="pocet-bodu-cil">
            Ted
            {{body}}
            
            Predtim
            {{old}}
        </div>
       
        <!-- <button>Chci zahrát znovu </button> -->
        <button class="btn btn-green" v-if="jeDalsiLevel" v-on:click="dalsiLevel">Chci další level </button>
    </div>
</template>


<script>
export default {
    props: ["body", "jeDalsiLevel"],
    data() {
        return {
            old: 0
        }
    },

    methods: {
        dalsiLevel() {
            this.$emit("dalsi-level");
            this.$emit("close");
        }

    }, 

    created() {
        this.old = localStorage.getItem('predchozi')
        localStorage.setItem('predchozi', this.body)
    },
}
</script>



<style scoped>
.telo-cil {
    width: 100%;
    height: 500px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    border: 20px double rgb(235, 226, 176);
}

.pocet-bodu-cil {
    
    
    
    color: white;

}

</style>