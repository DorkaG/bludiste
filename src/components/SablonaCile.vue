<template>
    <div> 
        Ted
        {{body}}
        <br>
        Predtim
        {{old}}
        <br>
        <br>
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

</style>