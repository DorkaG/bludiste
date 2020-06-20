<template>
  <div>
      <img  v-bind:src="require(`./../assets/images/1hruska.jpg`)" alt="hruska">
      <img  v-bind:src="require(`./../assets/images/2mrkev.jpg`)" alt="mrkev">
      <img  v-bind:src="require(`./../assets/images/3meloun.jpg`)" alt="meloun">
      <img  v-bind:src="require(`./../assets/images/4ananas.jpg`)" alt="ananas">
      <img  v-bind:src="require(`./../assets/images/5kokos.jpg`)" alt="kokos">
      <img  v-bind:src="require(`./../assets/images/6jahoda.jpg`)" alt="jahoda">

    <p>{{hod}}</p>
    <button v-on:click="hodKostkou()">HOĎ KOSTKOU</button>

  </div>
</template>

<script>
export default {

    data() {
        return {
            hod: 0,

        }
    },

    methods: {
        hodKostkou(){
            this.hod = Math.floor(Math.random() * 6 + 1);
        }


    }

}
</script>

<style>

</style>