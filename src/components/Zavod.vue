<template>
    <div class="okno">

        <div class="sekce">
            <div class="hra">

                <div class="vyskakovaci-okno-vyhra" v-if="vyhra === true"><img class="vesely"
                                                                               v-bind:src="require(`./../assets/images/smile.png`)"
                                                                               alt="Veselá tvář">
                <div class="vyhodnoceni">
                        <h5>HURÁ</h5>
                        <p> Získáváš BOD a můžeš pokračovat dál. Nebo si klidně zahraj znovu.</p></div>
                </div>
                <div class="vyskakovaci-okno-prohra" v-if="prohra === true"><img class="smutny"
                                                                                 v-bind:src="require(`./../assets/images/neutral.png`)"
                                                                                 alt="Smutná tvář">
                <div class="vyhodnoceni">
                        <h5>A JÉJE</h5>
                        <p> To se úplně nepovedlo, ale můžeš to zkusit znovu.</p></div>
                </div>

                <!-- <img class="cil" v-bind:src="require(`./../assets/images/cil.jpg`)" alt="Cilová páska"> -->
                <transition name="start">
                    <img v-bind:class="{zavodnik: posunuto}" v-bind:src="require(`./../assets/images/zavod1.png`)"
                         alt="Raketa1">

                </transition>
                <hr>
                <transition name="odstartuj">
                    <div v-bind:style="{marginLeft: marginLeft + '8px'}">
                        <img v-bind:class="{odstartuj: posunuto}" v-bind:src="require(`./../assets/images/raketa1.png`)"
                             alt="Raketa2">
                    </div>
                </transition>

                <!--v-on:keyup.ArrowRight="odlet()" -->
                <!--v-on:keyup.enter="odlet()"-->
            </div>
        </div>
        <div class="zavodni">

            <button class="zavodniTlacitka" v-on:keyup.39="odlet()" v-on:click="start()" v-if="marginLeft !== 54">START
            </button>
            <div class="pravidla"><p class=textPravidla>Hurá, čeká tě vesmírný závod! Stiskni start a mačkej rychle šipku doprava<span
                    class="sipka">→</span> a předleť svou lodí soupeře.</p>
            </div>
            <div class="zvukovaStopa">
                    <button class="zavodniTlacitka" v-on:click="play" >NÁPOVĚDA</button>
                    <audio ref="audioElm" src='./../assets/zvuky/zavod.mp3'></audio>
            </div>


        </div>


    </div>
</template>

<script>
    export default {
        props: ["vyhra", "prohra", "znovuNacist"],
        data() {
            return {
                zvuk: {nahravka: require("./../assets/zvuky/zavod.mp3"), id: "zavod"},
                posunuto: false,
                marginLeft: -3,
                timeoutID: null,
            }
        },
        methods: {
            start() {
                this.odstartuj();
                this.odlet();
                clearTimeout(this.timeoutID);
                this.timeoutID = setTimeout(this.vyhodnot, 28000);
            },
            odstartuj() {
                this.posunuto = !this.posunuto
            },
            odlet() {
                this.marginLeft++;
                this.pocitej();
            },
            restartuj() {
                this.marginLeft = -3;
                this.posunuto = false;
                clearTimeout(this.timeoutID);
            },
            pocitej() {
                if (this.marginLeft >= 54) {
                    this.posunuto = false;
                    this.vyhodnot();
                    clearTimeout(this.timeoutID);
                }
            },
            vyhodnot() {
                if (this.marginLeft === 54) {
                    this.$emit("vyhrani");

                } else {
                    this.$emit("prohrani");
                }
            },
            znovuNactiHru() {
                this.restartuj();
                this.$emit("prestan-nacitat")
            },

            play: function(){
                this.$refs.audioElm.play();
            }
        },
        watch: {
            znovuNacist(newVal) {
                if (newVal === true) {
                    this.znovuNactiHru()
                }
            }
        },
    }
</script>

<style scoped>

    .textPravidla{
        margin: 0;
        padding: 0;
    }

    .okno {
        text-align: left;
        width: 90%;
    }

    .vyhodnoceni{
        text-align: center;
    }

    .zavodnik {
        transition: all 35s ease;
        transform: translateX(63vh);
    }

    .odstartuj {
        margin-left: 0;
    }

    .cil {

        position: absolute;
        margin-top: 0.7%;
        margin-left: 68vh;
        height: 32%;
    }

    .hra {
        width: 100%;
        /* height: 20vh; */
        height: 180px; /*pridano */
        border: 10px double rgb(59, 163, 233);
        background-image: url("./../assets/images/cil_pozadi.png");     /*pridano */
        background-repeat: repeat-y;
        background-position: right;
       
    }

      @media (min-height: 900px) {  /*pridano*/
         .hra {
             height: 20vh;
         }
      }
      

    .zavodniTlacitka {
        width: 150px;
        height: 16vh;
        background-color: rgb(6, 11, 36);
        border: 10px double rgb(59, 163, 233);
        color: rgb(241, 229, 159);
    }

    .zavodni {
        padding-top: 40px;
        display: flex;
        justify-content: space-evenly;
    }


    .pravidla {
        width: 400px;
        height: 10vh; 
        border: 10px double rgb(59, 163, 233);
        padding-top: 35px;
        text-align: center;
        background-color: rgb(6, 11, 36);
    }

     

    .sipka {
        font-size: 30px;
    }


</style>
