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
    color: rgb(241, 229, 159);
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
    /* height: 40vh; */
    height: 360px; /*pridano*/ 
    background-color: rgb(6, 11, 36);
    border: 10px double rgb(59, 163, 233);
    color: rgb(241, 229, 159);
}

.cara{
  border-top: 10px double rgb(59, 163, 233);
}

.hra {
    background-color: rgb(6, 11, 36); 
   
  /*
    background-image: url("./../src/assets/images/pozadi3.jpg");*/
    
    width: 70%;
    /* height: 40vh;   */
    height: 360px; /*pridano*/ 
    border: 10px double rgb(59, 163, 233);
}

@media (min-height: 900px) {
  .hra {
    height: 40vh;
  }

  .pokyny {
    height: 40vh;
  }
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
.btn-kostka {
  background-color:rgb(243, 38, 216);

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

.vesely, .smutny{
  width: 200px;
  position: absolute;
  left: 100px;
  top: 100px;

}

.vyhodnoceni {
  position: absolute;
  border: 10px double rgb(59, 163, 233);
  right: 100px;
  top: 100px;
  width: 200px;
}


.vyskakovaci-okno-vyhra{
    position: absolute;
    left: 30px;
    top: 30px;
    width: 90%;
    height: 73%; 
    background-color: rgb(6, 11, 36);
    border: 10px double rgb(59, 163, 233);
    z-index: 10;

}

.vyskakovaci-okno-prohra{
    position: absolute;
    left: 30px;
    top: 30px;
    width: 90%;
    height: 73%;
    background-color: rgb(6, 11, 36);
    border: 10px double rgb(59, 163, 233);
    z-index: 10;

}

</style>
