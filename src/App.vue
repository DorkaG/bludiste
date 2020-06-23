<template>
  <div id="app">
    
      
    
    <router-view/>
  </div>
</template>




<style>
@import url('https://fonts.googleapis.com/css2?family=Turret+Road:wght@200;400;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;600;700&display=swap');
 .vm--overlay {
        background: rgba(0, 0, 0, 0.6) !important;
    }

h1, h2, h3, h4, h5 {
  font-family: 'Turret Road', cursive;
  color: rgb(235, 226, 176);
}

p{
  font-family: 'Mitr', sans-serif;
  padding: 15px;
  color: rgb(232, 235, 217);
  font-size: 14px;
}


.okno {
    padding: 40px;
    height: 100%;
    background-color: rgb(59, 163, 233);
    text-align: center;
}

.palubniDeska { 
    align-items: center;
    width: 97.5%;
    height: 15vh;
    background-color: rgb(4, 8, 27);
    border: 10px double rgb(59, 163, 233);
}

.pokyny {  
    width: 30%;
    /* height: 40vh; */
    height: 360px; /*pridano*/ 
    background-color: rgb(4, 8, 27);
    border: 10px double rgb(59, 163, 233);
    color: rgb(241, 229, 159);
}

.cara{
  border-top: 10px double rgb(59, 163, 233);
}

.hra {
    background-color: rgb(4, 8, 27); 
   
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


.body {
  background-color: rgb(59, 163, 233);
}

.btn {
  background-color: rgb(59, 163, 233);
  font-size: 30px
}

.btn-green {
  background-color: rgb(73, 151, 73);

}

.btn-yellow {
  background-color:rgb(241, 229, 159);

}
.btn-kostka {
  background-color:white;
  
}

.btn-red {
  background-color: rgb(182, 58, 58);
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
    background-color: rgb(4, 8, 27);
    border: 10px double rgb(59, 163, 233);
    z-index: 10;

}

.vyskakovaci-okno-prohra{
    position: absolute;
    left: 30px;
    top: 30px;
    width: 90%;
    height: 73%;
    background-color: rgb(4, 8, 27);
    border: 10px double rgb(59, 163, 233);
    z-index: 10;

}

</style>
