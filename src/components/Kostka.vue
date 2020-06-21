<template>
  <div class="okno">
      <div class="sekce">
      <div class="hra">

        <div class="vyskakovaci-okno-vyhra" v-if="vyhra === true">Jupi, sikulka</div>   
        <div class="vyskakovaci-okno-prohra" v-if="prohra === true">Zkus to znovu</div>  


      <img class="ovoce" v-for="(polozka, index) in obrazky"
                        v-bind:key="index"
                        v-bind:src="polozka.obrazek"
                        v-on:click="vyhodnot(index)"
                        >

    <p>{{hod}}</p>
      </div>
      <div class="pokyny">

      </div>
      </div>

  </div>
</template>

<script>
export default {
    props: ["vyhra", "prohra", "znovuNacist"],
    data() {
        return {
            hod: null,
            obrazky: [
                {obrazek: require(`./../assets/images/1hruska.jpg`), hodnota: 1},
                {obrazek: require(`./../assets/images/2mrkev.jpg`), hodnota: 2},
                {obrazek: require(`./../assets/images/3meloun.jpg`), hodnota: 3},
                {obrazek: require(`./../assets/images/4ananas.jpg`), hodnota: 4},
                {obrazek: require(`./../assets/images/5kokos.jpg`), hodnota: 5},
                {obrazek: require(`./../assets/images/6jahoda.jpg`), hodnota: 6},
            ]
        }
    },

    methods: {
        hodKostkou(){
            this.hod = Math.floor(Math.random() * 6 + 1);
        },

        vyhodnot(index) {                              
            if (this.hod === this.obrazky[index].hodnota) {
                this.$emit("vyhrani");    
                console.log("vyhra")           
            }

            else {
                this.$emit("prohrani");
                console.log("prohra") 
            }
        },

        znovuNactiHru(){
            this.hodKostkou();
            this.$emit("prestan-nacitat")
        }

    },

    created(){
        this.hodKostkou();
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


</style>