<template>
    <div class="telo-cil">
        <div class="kontejner-cil">
            <div class="pocet-bodu-cil">
                <h3>Gratulujeme, tvá cesta vesmírem je u konce.</h3> 
                <p>Doma na Zemi se všichni těší, na tvé vesmírné vyprávění. </p>
                <p>V této hře ti naše vesmírná kalkulačka počítala body.</p> 
                <p>Tady jsou: </p>
                <p>{{body}} </p>

                <p> V minulém kole to bylo: </p>

                <p> {{old}} </p>
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
        background-color: rgb(4, 8, 27);
        height: 600px;
        padding: 100px 0;
    }

    .kontejner-cil {
        width: 600px;
        height: 500px;
        font-family: 'Turret Road', cursive;
        font-size: 16;
        color: rgb(235, 226, 176);
        border: 20px double rgb(235, 226, 176);
        margin: 0 auto;
        text-align: center;

    }

    .pocet-bodu-cil {


    }

</style>
