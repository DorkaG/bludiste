<template>
  <div id="app">
      <router-link to='/'>Domů</router-link>
      <router-link to='/hra1'>Hra1</router-link>
    <div class="supercontainer"> 
      <div class="container">

          <img class="raketa obrazek" alt="raketa" 
          v-bind:src="raketa.obrazek"
          v-bind:style="umistiObjekt(raketa)">

          <img class="objekt2 obrazek" alt="saturn" 
          v-bind:src="objekt2.obrazek"
          v-bind:style="umistiObjekt(objekt2)"
          v-if="objekt2.zobrazen"
          >

          <img class="objekt3 obrazek" alt="ufoun" 
          v-bind:src="objekt3.obrazek"
          v-bind:style="umistiObjekt(objekt3)"
          v-if="objekt3.zobrazen"
          >

          <img class="hvezda obrazek" alt="hvezda" 
          v-bind:src="hvezda.obrazek"
          v-bind:style="umistiObjekt(hvezda)">

          <img class="hvezda2 obrazek" alt="hvezda" 
          v-bind:src="hvezda2.obrazek"
          v-bind:style="umistiObjekt(hvezda2)">

          

          <div class="radek" v-for="(radek, indexRadku) in bludiste"
          v-bind:key="indexRadku" >
              <div class="ctverecek" v-for="(ctverec, indexCtverce) in bludiste[indexRadku]"
              v-bind:key="indexCtverce" 
              v-bind:class="{zed : ctverec === 1, cesta : ctverec === 0}">
              </div>
              
          </div>
      </div>

    </div>

  <modals-container v-on:close="zavriHru"/>

    
  </div>
</template>



<script>
import pole from "./../assets/data.js"
import SablonaHry from "./../components/SablonaHry.vue"

export default {


  data() {
    return{
      bludiste: pole, 

      zdi: [],

      hraOtevrena: false,

      raketa: {   // pocatecni souradnice rakety museji odpovidat souradnicim ctverecku, jinak to nefunguje
        x: 60,
        y: 120,
        sirka: 60,
        vyska: 40,
        obrazek: require("./../assets/images/raketa_doprava60.png")
      },

      objekt2: {
        x: 0, 
        y: 0, 
        sirka: 90, 
        vyska: 51, 
        obrazek: require("./../assets/images/objekt2.png"),
        zobrazen: true
        },

      objekt3: {
        x: 0, 
        y: 0, 
        sirka: 90, 
        vyska: 46, 
        obrazek: require("./../assets/images/objekt3.png"),
        zobrazen: true
        },
      
       hvezda: {
        x: 0,
        y: 100,
        sirka: 90,
        vyska: 51,
        obrazek: require("./../assets/images/hvezda.png")
       },

       hvezda2: {
        x: 900,
        y: 530,
        sirka: 90,
        vyska: 51,
        obrazek: require("./../assets/images/hvezda.png")
       },

      

    }
  },



  methods: {
    posunRaketu(event) {
            if (this.hraOtevrena) {
              return
            }

            if (event.code === "ArrowRight") {
                this.posun(60, -60, "doprava60", "x")

                if (this.objekt2.zobrazen) {
                  this.potkejObjekt(this.objekt2)
                    }

                if (this.objekt3.zobrazen) {
                  this.potkejObjekt(this.objekt3)
                    }
            }

            else if (event.code === "ArrowLeft") {
                this.posun(-60, 60, "doleva60", "x")  
                
                if (this.objekt2.zobrazen) {
                  this.potkejObjekt(this.objekt2)
                    }

                if (this.objekt3.zobrazen) {
                  this.potkejObjekt(this.objekt3)
                    }        
                }

            else if (event.code === "ArrowUp") { 
                          
                this.posun(-60, 60, "nahoru60", "y") 

                if (this.objekt2.zobrazen) {
                  this.potkejObjekt(this.objekt2)
                    }

                if (this.objekt3.zobrazen) {
                  this.potkejObjekt(this.objekt3)
                    }      
                  
                }   
            
             else if (event.code === "ArrowDown") { 
                           
                this.posun(60, -60, "dolu60", "y")   

                if (this.objekt2.zobrazen) {
                  this.potkejObjekt(this.objekt2)
                    }

                if (this.objekt3.zobrazen) {
                  this.potkejObjekt(this.objekt3)
                    }             
                }

                
        }, 

        posun(cisloPosunu, cisloKolize, smer, osa) {
                this.raketa[osa] += cisloPosunu;
                this.raketa.obrazek = require(`./../assets/images/raketa_${smer}.png`);

                    for (let zed of this.zdi) {
                        if (this.jeKolize(this.raketa, zed)){
                         this.raketa[osa] += cisloKolize;}
                }   
            },

        potkejObjekt(objekt) {
          if (this.jeKolize(this.raketa, objekt)) {
            this.$modal.show(SablonaHry);
            objekt.zobrazen = false;
            this.hraOtevrena = true;
          }
        },

        zavriHru() {
          this.$modal.hide(SablonaHry);
          this.hraOtevrena = false;
        },







        zjistiSouradniceZdi() {
            for (let i = 0; i < this.bludiste.length; i++) {
                for (let a = 0; a < this.bludiste[i].length; a++) {
                    if (this.bludiste[i][a] === 1) {
                        let souradniceX = 0 + (a * 60);
                        let souradniceY = 0 + (i * 60);
                        this.zdi.push({x: souradniceX, y: souradniceY, sirka: 60, vyska: 60});
                        
                    }
                }
            }
            console.log(this.zdi);
        },

        zjistiSouradniceObjektu(cislo, objekt) {
            for (let i = 0; i < this.bludiste.length; i++) {
                for (let a = 0; a < this.bludiste[i].length; a++) {
                    if (this.bludiste[i][a] === cislo) {
                        let souradniceX = 0 + (a * 60);
                        let souradniceY = 0 + (i * 60);
                        objekt.x = souradniceX;
                        objekt.y = souradniceY;
                        
                        console.log(this.objekt2.x);
                        console.log(this.objekt3.y)
                    }
                }
            }
        },

        jeKolize(objektA, objektB) {
          return (!(objektA.x + objektA.sirka <= objektB.x
             || objektB.x + objektB.sirka <= objektA.x
             || objektA.y + objektA.vyska <= objektB.y
             || objektB.y + objektB.vyska <= objektA.y)) 

        },

      umistiObjekt(objekt) {
      return {   left: objekt.x + 'px', top: objekt.y + 'px'    };
        }

     
    },



    created() {
        
        window.addEventListener("keydown", this.posunRaketu),

        this.zjistiSouradniceZdi()
        this.zjistiSouradniceObjektu(2, this.objekt2)
        this.zjistiSouradniceObjektu(3, this.objekt3)
        
        
    }
  
}

</script>





<style>

#app {
  /* width: 880; */
  overflow: hidden; 
  
}

.supercontainer {
  width: 1500px;
  height: 1000px;
  /* background-image: url("./..assets/images/vesmir.jpg"); */
  }

.container { 
    position: relative;
    left: calc((100% - 1055px)/2);
    top: 5%;
    
}

.ctverecek {
    width: 60px;
    height: 60px;
    /* border: solid brown 2px; */
}

.radek {
  display: flex;
}

.zed {
    background-color: rgb(74, 148, 218); 
   
}

.cesta {
  background-color: white;
}

.obrazek {
    position: absolute;
}



</style>
