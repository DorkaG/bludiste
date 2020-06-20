<template>
  <div>
        <hr>
        <div id="let">
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
            <button v-on:click="odstartuj">Start</button>
            <button v-on:click="odlet()">Leť</button>
            <button v-on:click="restartuj">Znovu</button>
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
        }
    },

    methods: {
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
        },

        pocitej(){
            if (this.marginLeft >= 101){
                this.posunuto = false;
                this.vyhodnot();
            }
        },

        vyhodnot() {                   
            if (this.marginLeft >= 101) {
                this.$emit("vyhrani");               
            }
            else {
                this.$emit("prohrani");
            }
        },

    }
}
</script>

<style>


.zavodnik {
    transition: all 45s ease;
    transform: translateX(115vh);

}

.odstartuj {
    margin-left: 0;

}


.cil{
    position: absolute;
    margin-top: 0;
    margin-left: 120vh;
    height: 20%;
}

.vyskakovaci-okno-vyhra {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    background-color: lightgreen;
    z-index: 10;
}

.vyskakovaci-okno-prohra {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: palevioletred;
    z-index: 10;
}




</style>