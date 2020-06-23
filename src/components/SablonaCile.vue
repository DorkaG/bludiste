<template>
    <div class="telo-cil">
        <div class="kontejner-cil">
            <div class="pocet-bodu-cil">
                <p> Gratulujeme, tvá cesta vesmírem je u konce.</p> 
                <p>Doma na Zemi, se všichni těší na tvé vesmírné vyprávění. </p>
                <p> V této hře se ti podařilo získat: </p>
                <p>{{body}} bodů.</p>

                <p> V minulém kole to bylo: </p>

                <p> {{old}} bodů. </p>
            </div>

            <button class="btn btn-green" v-if="jeDalsiLevel" v-on:click="dalsiLevel">Ledaže ... chceš další bludiště.</button>
        </div>
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
        background-color: blue;
        height: 600px;
        padding: 100px 0;
    }

    .kontejner-cil {
        width: 600px;
        height: 500px;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        color: white;
        border: 20px double rgb(235, 226, 176);
        margin: 0 auto;
        text-align: center;

    }

    .pocet-bodu-cil {


    }

</style>
