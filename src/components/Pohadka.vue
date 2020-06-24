<template>
    <div class="okno">
        <div class="sekce">
            <div class="hra">

                <h3>Vítej na planetě Kokosmánie!</h3>
                <p class="pohadka" v-bind="precetl()">
                <p>Pozor! Při přistávání to bude trochu skákat, protože tato planeta má trochu nestabilní, i když chutné
                    jádro. </p>
                <p>Obyvateli této planety jsou Kokosky. Přátelská stvoření a je s nimi vždy legrace, pokud si ovšem
                    neděláte legraci z kokosů… Tak opatrně.</p>

                <p>V chrámu z kokosových vláken je socha prastarého Kokosky, který drží posvátný Kokos. Tam by tvé kroky
                    měly směřovat jako první. Vzdát úctu a hold této posvátné plodině.
                    Na hostině, kterou ti Kokosky připraví, se najíš určitě dosyta. A až ti bude lézt kokos i ušima,
                    spláchni ho dobře vychlazeným kokosovým mlékem. Není nic více osvěžujícího.</p>

                <p>Při loučení s Kokoskami obdržíš spoustu darů, pochopitelně kokosových. Kokosový klobouk nos hrdě,
                    alespoň než planetu opustíš. </p>
                <br>
                <p>Přeji příjemný průzkum.</p>

            </div>
            <div class="pokyny">
                <img class="kokosak" v-bind:src="require(`./../assets/images/coconut.png`)" alt="Posvátný kokos">
                <div class="zvukovaStopa">
                    <button class="btnPohadka" v-on:click="play">KOKOSMÁNIE</button>
                    <audio ref="audioElm" src='./../assets/zvuky/pohadka-1.mp3'></audio>
               </div>

            </div>
        </div>

    </div>
</template>

<script>

    export default {
        props: ["vyhra", "prohra", "znovuNacist"],
        data() {
            return {
                zvuk: {nahravka: require("./../assets/zvuky/pohadka-1.mp3"), id: "pohadka"},
                precteno: false
            }
        },
        methods: {
            precetl() {
                setTimeout(this.vyhodnot, 15000);
                this.precteno = true;
            },
            vyhodnot() {
                if (this.precteno === true) {
                    this.$emit("vyhrani");
                } else {
                    this.$emit("prohrani");
                }
            },
            play: function(){
                this.$refs.audioElm.play();
            }

        }
    }

</script>

<style scoped>

    .kokosak {
        margin-top: 80px;
    }

    h3{
        margin: 10px;
    }
    p {
        color: rgb(232, 235, 217);
        margin: 0 15px;
        padding: 1px;
        text-align: justify;
        font-size: 13px;;
    }

    .btnPohadka {
        margin-top: 15px;
        width: 150px;
        height: 7vh;
        background-color: rgb(4, 8, 27);
        border: 10px double rgb(59, 163, 233);
        color: rgb(241, 229, 159);
        font-family: 'Turret Road', cursive;
        font-weight: 800;
        
    }

</style>
