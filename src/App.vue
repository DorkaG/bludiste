<template>
  <div id="app">
    
      
    
    <router-view/>
  </div>
</template>




<style>


.okno {
    
    width: 75%;
    height: 75vh;
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
    width: 20%;
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
    border-top: 10px double rgb(241, 229, 159); 

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
  background-color: green;

}

.btn-yellow {
  background-color:yellow;

}

.btn-red {
  background-color: red;
}

.btn-blue {
  background-color:blue;
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

</style>
