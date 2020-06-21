<template>
  <div id="app">
    
      
    
    <router-view/>
  </div>
</template>




<style>

.okno {
    padding: 40px;
    height: 100%;
    background-color: rgb(59, 163, 233);
    font-family: 'Lato', sans-serif;
    text-align: center;
}

.palubniDeska { 
    align-items: center;
    width: 97.5%;
    height: 15vh;
    background-color: rgb(6, 11, 36);
    border: 10px double rgb(59, 163, 233);
}

.pokyny {  
    width: 30%;
    height: 40vh;
    background-color: rgb(6, 11, 36);
    border: 10px double rgb(59, 163, 233);
    color: rgb(241, 229, 159);
}

.hra {
    background-color: rgb(6, 11, 36);
  /*
    background-image: url("./../src/assets/images/pozadi3.jpg");*/
    
    width: 70%;
    height: 40vh;
    
    border: 10px double rgb(59, 163, 233);
}

.sekce {
    margin:0;
    padding:0;
    display: flex;
    background-color: rgb(59, 163, 233);
}

p{
    padding: 15px;
    

}

.sablona-kontejner {
  margin: 0;
  padding: 0;
  background-color: rgb(59, 163, 233);
}


.body {
  background-color: rgb(59, 163, 233);
}

.btn {
  background-color: rgb(59, 163, 233);
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
  border: 10px double rgb(59, 163, 233);

}

.border-yellow {
  border: 10px double rgb(59, 163, 233);

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
