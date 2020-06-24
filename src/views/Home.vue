<template>
    <div class="telo" v-on:click="play">
              
        <img class="hvezda1" v-bind:src="require(`./../../src/assets/images/hvezda1.png`)" alt="hvězda">
        <img class="hvezda2" v-bind:src="require(`./../../src/assets/images/hvezda2.png`)" alt="hvězda">
        <img class="hvezda3" v-bind:src="require(`./../../src/assets/images/hvezda3.png`)" alt="hvězda">
        <img class="hvezda4" v-bind:src="require(`./../../src/assets/images/hvezda4.png`)" alt="hvězda">
        <img class="hvezda5" v-bind:src="require(`./../../src/assets/images/hvezda3.png`)" alt="hvězda">
        <img class="hvezdy1" v-bind:src="require(`./../../src/assets/images/hvezdy1.png`)" alt="hvězda">
        <img class="hvezdy2" v-bind:src="require(`./../../src/assets/images/hvezdy2.png`)" alt="hvězda">
        <img class="hvezdy3" v-bind:src="require(`./../../src/assets/images/hvezdy3.png`)" alt="hvězda">
        <img class="hvezdy4" v-bind:src="require(`./../../src/assets/images/hvezdy4.png`)" alt="hvězda">

  
        <h1>Dobyvatelka vesmíru</h1>

        <div class="uvod">
  

            <p class="textUvod">Cesta odvážné kosmonautky Sabiny, která při toulkách vesmírem prozkoumává vše zajímavé a někdy i trochu nebezpečné.</p>
            <p class="textSabina">"Ahoj, já jsem Sabina, moc ráda tě poznávám. Jsem nadšená, že se spolu můžeme pustit do vesmírného dobrodružství. Klikni na tlačítko HRÁT a můžeme startovat."</p>
            <div>
            <img class="astronautka"  v-bind:src="require(`./../../src/assets/images/astronautka.png`)" alt="astronautka">
            <audio autoplay ref="uvodniHudba" src='./../assets/zvuky/spacemusic.mp3'></audio>  
            </div>
            <router-link to="/bludiste"><button class="uvodniTlacitko">HRÁT</button></router-link>
            <br><br>
            <p>Raketu ovládej šipkami na klávesnici.</p>
           
          <div>
            
          </div>
                  
        </div>
    </div>
</template>




<script>
export default {


  methods: {
    play: function(){
      if (typeof this.$refs.uvodniHudba !== "undefined") {
        console.log("bla")
             this.$refs.uvodniHudba.play();
      }
            },
  }

}
</script>




<style scoped>


.telo{
  margin: 0;
  padding: 0;
  height: 98vh;
  background-size: cover;
  background-image: url("./../../src/assets/images/pozadi6.jpg");
}

.uvod {
  margin: 0 28%;
  padding: 10px;
  font-family: 'Turret Road', cursive;
  text-align: center;
  border: 20px double rgb(235, 226, 176);
  color: rgb(232, 235, 217);
  font-size: 20px;
}

h1 {
    margin:0;
    color: rgb(235, 226, 176);
    text-transform: uppercase;
    text-align: center;
    font-size: 65px;
    padding-top: 5%;
    font-family: 'Turret Road', cursive;
}

p{
  font-size: 16px;
}

.textUvod {
  padding: 0 35px;
}

.textSabina {
  width: 60%;
  border: 3px double rgb(235, 226, 176);
  padding: 13px;
  margin-left: 20%;
  margin-right: 20%;
  border-radius: 35px 35px 35px 0px;
}

.astronautka {
  width: 100px;
  position: absolute;
  margin-left: -17%;
}

.hvezda1 {
  width: 50px;
  position: absolute;
  margin-left: 13%;
  margin-top: 13%
}

.hvezda2 {
  width: 50px;
  position: absolute;
  margin-left: 85%;
  margin-top: 41%;
}

.hvezda3 {
  width: 70px;
  position: absolute;
  margin-left: 9%;
  margin-top: 40%;
}

.hvezda4 {
  width: 50px;
  position: absolute;
  margin-left: 83%;
  margin-top: 30%;
}

.hvezda5 {
  width: 80px;
  position: absolute;
  margin-left: 5%;
  margin-top: 7%;
}
.hvezdy1 {
  width: 70px;
  position: absolute;
  margin-left: 90%;
  margin-top: 7%;
}
.hvezdy2 {
  width: 50px;
  position: absolute;
  margin-left: 3%;
  margin-top: 43%;
}
.hvezdy3 {
  width: 70px;
  position: absolute;
  margin-left: 35%;
  margin-top: 42%;
}
.hvezdy4 {
  width: 50px;
  position: absolute;
  margin-left: 19%;
  margin-top: 5%;
}

.uvodniTlacitko {
  height: 80px;
  width: 250px;
  background-color: rgb(235, 226, 176);
  font-size: 40px;
  font-family: 'Turret Road', cursive;
  font-weight: 800;
  color: rgb(4, 8, 27);
  margin-top: 3%;
  border: 5px double rgb(4, 8, 27);
}



</style>