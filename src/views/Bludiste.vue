<template>
  <div id="app">
      <router-link to='/'>Domů</router-link>
    <div class="supercontainer"> 
      <div class="container">

          <img class="raketa obrazek" alt="raketa" 
          v-bind:src="raketa.obrazek"
          v-bind:style="umistiObjekt(raketa)">

          <img class="saturn obrazek" alt="saturn" 
          v-bind:src="planeta.obrazek"
          v-bind:style="umistiObjekt(planeta)">

          <img class="hvezda obrazek" alt="hvezda" 
          v-bind:src="hvezda.obrazek"
          v-bind:style="umistiObjekt(hvezda)">

          <img class="hvezda2 obrazek" alt="hvezda" 
          v-bind:src="hvezda2.obrazek"
          v-bind:style="umistiObjekt(hvezda2)">

          <img class="ufoun obrazek" alt="ufoun" 
          v-bind:src="ufoun.obrazek"
          v-bind:style="umistiObjekt(ufoun)">

          <div class="radek" v-for="(radek, indexRadku) in bludiste"
          v-bind:key="indexRadku" >
              <div class="ctverecek" v-for="(ctverec, indexCtverce) in bludiste[indexRadku]"
              v-bind:key="indexCtverce" 
              v-bind:class="{zed : ctverec === 1, cesta : ctverec === 0}">
              </div>
              
          </div>
      </div>

    </div>
    
  </div>
</template>



<script>
import pole from "./../assets/data.js"

export default {


  data() {
    return{
      bludiste: pole, 

      zdi: [],

      raketa: {
        x: 80,
        y: 140,
        sirka: 40,
        vyska: 27,
        obrazek: require("./../assets/images/sipka_doprava.png")
      },
       planeta: {
        x: 0,
        y: 0,
        sirka: 90,
        vyska: 51,
        obrazek: require("./../assets/images/saturn.png")
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

       ufoun: {
           x: 0,
           y: 0,
           sirka: 90,
           vyska: 46,
           obrazek: require("./../assets/images/ufoun.png")
       }




    }
  },



  methods: {
    posunRaketu(event) {
            if (event.code === "ArrowRight") {
                this.posun(60, -60, "doprava", "x")
            }

            else if (event.code === "ArrowLeft") {
                this.posun(-60, 60, "vlevo", "x")              
                }

            else if (event.code === "ArrowUp") {               
                this.posun(-60, 60, "nahoru", "y")           
                }   
            
             else if (event.code === "ArrowDown") {             
                this.posun(60, -60, "dolu", "y")               
                }

                this.potkejObjekt(this.planeta)
                this.potkejObjekt(this.ufoun)
        }, 

        posun(cisloPosunu, cisloKolize, smer, osa) {
                this.raketa[osa] += cisloPosunu;
                this.raketa.obrazek = require(`./../assets/images/sipka_${smer}.png`);

                    for (let zed of this.zdi) {
                        if (this.jeKolize(this.raketa, zed)){
                         this.raketa[osa] += cisloKolize;}
                }   
            },

        potkejObjekt(objekt) {
          if (this.jeKolize(this.raketa, objekt)) {
            alert("ZELENÁ PLANETA POKRYTÁ SLIZEM");
          }
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
                        
                        console.log(this.planeta.x);
                        console.log(this.planeta.y)
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
        this.zjistiSouradniceObjektu(2, this.planeta)
        this.zjistiSouradniceObjektu(3, this.ufoun)
        
        
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
