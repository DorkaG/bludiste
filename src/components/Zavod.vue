<template>
  <div class="okno">
        <hr>
        <div class="sekce">
        <div class="hra">
                <div class="vyskakovaci-okno-vyhra" v-if="vyhra === true">Jupi, sikulka</div>   
                <div class="vyskakovaci-okno-prohra" v-if="prohra === true">Zkus to znovu</div>     
            <img class="cil" v-bind:src="require(`./../assets/images/cil.jpg`)" alt="Cilová páska">
            <transition name="start">
                <img v-bind:class="{zavodnik: posunuto}" v-bind:src="require(`./../assets/images/zavod1.png`)" alt="Raketa1">
            
            </transition>
            <hr>
            <transition name="odstartuj">
                <div v-bind:style="{marginLeft: marginLeft + '8px'}">
                <img v-bind:class="{odstartuj: posunuto}" v-bind:src="require(`./../assets/images/raketa1.png`)" alt="Raketa2">
                </div>
            </transition>
            <hr>
            <!--v-on:keyup.ArrowRight="odlet()" -->
            <!--v-on:keyup.enter="odlet()"-->
           
            <button  v-on:keyup.39="odlet()" v-on:click="start()" v-if="marginLeft !== 54">Start</button>
        </div> 

       <!--<div class="pokyny"> Hurá, čeká tě vesmírný závod! Stiskni start a mačkej rychle šipku doprava. Předleť svou lodí soupeře. </div>-->
        </div>           
  </div>
</template>

<script>
export default {
    props: ["vyhra", "prohra", "znovuNacist"],   

    data () {
        return {
            posunuto: false,
            marginLeft: -3,
            timeoutID: null,
        }
    },

    methods: {

        start(){
            this.odstartuj();
            this.odlet();
            clearTimeout(this.timeoutID);
            this.timeoutID = setTimeout(this.vyhodnot,24000);           
        },

        odstartuj(){
            this.posunuto = !this.posunuto
        },

        odlet(){
            this.marginLeft++;
            this.pocitej();
        },

        restartuj(){
            this.marginLeft = -3;
            this.posunuto = false;
            clearTimeout(this.timeoutID);
        },

        pocitej(){
            if (this.marginLeft >= 54){
                this.posunuto = false;
                this.vyhodnot();
                clearTimeout(this.timeoutID);
            }
        },

        vyhodnot() {                   
            if (this.marginLeft === 54) {
                this.$emit("vyhrani");
                               
            }
            else {
                this.$emit("prohrani");
            }
        },

        znovuNactiHru(){
            this.restartuj();
            this.$emit("prestan-nacitat")
        }

    },

    watch: {
        znovuNacist(newVal) {
            if (newVal === true) {
            this.znovuNactiHru() }
        }
    },
}
</script>

<style>

.okno {
    text-align: left;
    width: 100%;
}

.zavodnik {
    transition: all 35s ease;
    transform: translateX(65vh);

}

.odstartuj {
    margin-left: 0;

}


.cil{

    position: absolute;
    margin-top: 1%;
    margin-left: 70vh;
    height: 30%;
}

.hra {
    background-image: url("./../../src/assets/images/pozadi3.jpg");

    width: 100%;
    height: 45vh;
    background-color: white;
    border: 10px double rgb(241, 229, 159);
}





</style>