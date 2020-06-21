<template>
  <div id="app">
    
      
    
    <router-view/>
  </div>
</template>




<style>


.okno {
    
    width: 75%;
    height: 75vh;
    background-image: url("./../src/assets/images/pozadi3.jpg");
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
    margin: 3% 2% 1% 3%;
    width: 70%;
    height: 45vh;
    background-color: white;
    border: 10px double rgb(241, 229, 159);
}

.sekce {
    display: flex;
}

p{
    padding: 15px;
    border-top: 10px double rgb(223, 197, 49); 

}



.body {
  
}

.btn {

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
  border: solid 5px grey

}

.border-yellow {
  border: solid 5px gold

}

</style>
