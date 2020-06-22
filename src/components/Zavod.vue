<template>
    <div class="okno">

        <div class="sekce">
            <div class="hra">
                <div class="vyskakovaci-okno-vyhra" v-if="vyhra === true">Jupi, sikulka</div>
                <div class="vyskakovaci-okno-prohra" v-if="prohra === true">Zkus to znovu</div>
                <img class="cil" v-bind:src="require(`./../assets/images/cil.jpg`)" alt="Cilová páska">
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

            <button class="startovaci" v-on:keyup.39="odlet()" v-on:click="start()" v-if="marginLeft !== 54">START
            </button>
            <div class="pravidla">Hurá, čeká tě vesmírný závod! Stiskni start a mačkej rychle šipku doprava <span
                    class="sipka">→</span> a předleť svou lodí soupeře.
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        props: ["vyhra", "prohra", "znovuNacist"],
        data() {
            return {
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
                if (this.marginLeft >= 52) {
                    this.posunuto = false;
                    this.vyhodnot();
                    clearTimeout(this.timeoutID);
                }
            },
            vyhodnot() {
                if (this.marginLeft === 52) {
                    this.$emit("vyhrani");

                } else {
                    this.$emit("prohrani");
                }
            },
            znovuNactiHru() {
                this.restartuj();
                this.$emit("prestan-nacitat")
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

    .okno {
        text-align: left;
        width: 90%;
    }

    .zavodnik {
        transition: all 35s ease;
        transform: translateX(61vh);
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
        height: 20vh;
        border: 10px double rgb(59, 163, 233);
    }

    .startovaci {
        width: 150px;
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
