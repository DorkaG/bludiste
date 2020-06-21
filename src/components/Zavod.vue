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
            <!--v-on:keyup.ArrowRight="odlet()" -->
            <!--v-on:keyup.enter="odlet()"-->
           
            <button v-on:keyup.39="odlet()" v-on:click="start()">Start</button>
            
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
                this.marginLeft = -3;
                this.vyhodnot();
                clearTimeout(this.timeoutID);
            }
        },

        vyhodnot() {                   
            if (this.marginLeft >= 54) {
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


.zavodnik {
    transition: all 35s ease;
    transform: translateX(65vh);

}

.odstartuj {
    margin-left: 0;

}


.cil{
    position: absolute;
    margin-top: 0;
    margin-left: 70vh;
    height: 50%;
}

.vyskakovaci-okno-vyhra {
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 40%; 
    background-color: lightgreen;
    z-index: 10;
}

.vyskakovaci-okno-prohra {
    position: absolute;
    left: 0;
    top: 0;
    width: 40%;
    height: 40%;
    background-color: palevioletred;
    z-index: 10;
}




</style>