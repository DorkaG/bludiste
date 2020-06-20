<template>
  <div>
      <img class="ovoce" v-for="(polozka, index) in obrazky"
                        v-bind:key="index"
                        v-bind:src="polozka.obrazek"
                        v-on:click="vyhodnot(index)"
                        >

    <p>{{hod}}</p>
    <button v-on:click="hodKostkou()">HOĎ KOSTKOU</button>

  </div>
</template>

<script>
export default {

    data() {
        return {
            hod: 0,
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
            this.hod = Math.floor(Math.random() * 6 + 0.5);
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

    }

    

}
</script>

<style>

</style>