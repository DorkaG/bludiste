<template>
  <div>
        <hr>
        <div id="let">
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
            <button v-on:click="marginLeft++">Leť</button>
            <button v-on:click="restartuj">Znovu</button>
        </div>           
  </div>
</template>

<script>
export default {
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

        restartuj(){
          this.marginLeft = -3;
          this.posunuto = false;
        },

        
    },
}
</script>

<style>


.zavodnik {
    transition: all 35s ease;
    transform: translateX(115vh);
}

.odstartuj {
    /*transform: translateX(10px);*/
    margin-left: 0;

}

.cil{
    position: absolute;
    margin-top: 0;
    margin-left: 120vh;
    height: 20%;
}


</style>