<template>
    <div> 
        Ted
        {{body}}
        <br>
        Predtim
        {{old}}
    </div>
</template>


<script>
export default {
    props: ["body"],
    data() {
        return {
            old: 0
        }
    },
    created() {
        this.old = localStorage.getItem('predchozi')
        localStorage.setItem('predchozi', this.body)
    },
}
</script>



<style>

</style>