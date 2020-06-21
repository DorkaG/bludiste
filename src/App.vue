<template>
  <div id="app">
    
      
    
    <router-view/>
  </div>
</template>




<style>

.okno {
    
    width: 95%;
    background-color: rgb(241, 229, 159);
    font-family: 'Lato', sans-serif;
    text-align: center;
}

.palubniDeska {
    margin: 2% 2% 3% 3%;
    width: 92%;
    height: 15vh;
    background-color: rgb(6, 11, 36);
    border: 10px double rgb(241, 229, 159);
}

.pokyny {
    margin: 3% 3% 1% 3%;
    width: 30%;
    height: 45vh;
    background-color: white;
    border: 10px double rgb(241, 229, 159);
}

.hra {
    background-image: url("./../src/assets/images/pozadi3.jpg");
    margin: 3% 2% 1% 3%;
    width: 70%;
    height: 45vh;
    background-color: white;
    border: 10px double rgb(241, 229, 159);
}

.sekce {
    display: flex;
    background-color: rgb(241, 229, 159);
}

p{
    padding: 15px;
    color: black;

}

.sablona-kontejner {
  background-color: rgb(241, 229, 159);
}


.body {
  background-color: rgb(241, 229, 159);
}

.btn {
  background-color: rgb(241, 229, 159);
}

.btn-green {
  background-color: rgb(75, 240, 75);

}

.btn-yellow {
  background-color:rgb(243, 229, 38);

}

.btn-red {
  background-color: rgb(199, 6, 6);
}

.btn-blue {
  background-color:rgb(83, 83, 179);
}

.btn-grey {
  background-color: grey;

}

.border-grey {
  border: solid 5px grey;
  

}

.border-yellow {
  border: solid 5px rgb(241, 229, 159);

}

.vyskakovaci-okno-vyhra{
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 50%; 
    background-color: rgb(46, 139, 46);
    z-index: 10;

}

.vyskakovaci-okno-prohra{
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 50%;
    background-color: rgb(212, 50, 104);
    z-index: 10;

}

</style>
