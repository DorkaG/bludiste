<template>
    <div class="okno">
        <div class="sekce"> 
            <div class="hra"> 
                <div class="vyskakovaci-okno-vyhra" v-if="vyhra === true">Jupi, sikulka</div>       <!--PRIDAT DO KAZDE HRY-->
                <div class="vyskakovaci-okno-prohra" v-if="prohra === true">Zkus to znovu</div>     <!--PRIDAT DO KAZDE HRY-->
                <div class="obrazky"> 
                    <img class="herniobrazek" v-for="(polozka, index) in poleObrazku"
                    v-bind:key="index"
                    v-bind:src="polozka.obrazek"
                    v-on:click="vyhodnot(index)"
                    
                    >
                    
                    
                </div>
            </div>
            <div class="pokyny"> Vyber, který obrázek k ostatním obrázkům nepatří. </div>
        </div>
       </div>    
    
</template>





<script>
export default {
    props: ["vyhra", "prohra", "znovuNacist"],             //PRIDAT DO KAZDE HRY

    data() {
        return {       
            patri: [
                [
                {obrazek: require("./../assets/images/banan.jpg")},
                {obrazek: require("./../assets/images/jablko.jpg")},
                {obrazek: require("./../assets/images/kokos.jpg")},
                {obrazek: require("./../assets/images/meloun.jpg")}
                ],

                [
                {obrazek: require("./../assets/images/auto.jpg")},
                {obrazek: require("./../assets/images/lod.jpg")},
                {obrazek: require("./../assets/images/raketazluta.jpg")}
                ],

                [
                {obrazek: require("./../assets/images/hvezdy.jpg")},
                {obrazek: require("./../assets/images/mesic.jpg")},
                {obrazek: require("./../assets/images/slunce.jpg")},
                {obrazek: require("./../assets/images/planeta1.jpg")},
                {obrazek: require("./../assets/images/meteorit.jpg")}
                ]
            ],

            nepatri: [
                    {obrazek: require("./../assets/images/kvetina.jpg")},
                    {obrazek: require("./../assets/images/mic.jpg")},
                    {obrazek: require("./../assets/images/pizza.jpg")},
                    {obrazek: require("./../assets/images/ufo.jpg")},
                    {obrazek: require("./../assets/images/ufon.jpg")}
                        ],
                

            poleObrazku: [],

            indexNepatri: 0,

            

            
        }
    },

    methods: {
        vyberPoleObrazkuPatri() {           //vygeneruje nahodne pole o trech obrazcich, ktere k sobe tematicky patri

            let kopiePatri = JSON.parse(JSON.stringify(this.patri)); //zkopiruju si uvodni pole patri (abych si je nize nepromazavala) - TOM!!!!!
            
            let indexTematu = Math.floor(Math.random() * kopiePatri.length);  //nahodny vyber pole v poli
            

            let x = 1;
            let index = 0;                          //index obrazku ve vybranem poli
            do {
                 index = Math.floor(Math.random() * kopiePatri[indexTematu].length);
                 this.poleObrazku.push(kopiePatri[indexTematu][index]);             //vlozi vybrany obrazek do poleObrazku
                 kopiePatri[indexTematu].splice(index, 1);                              // z puvodniho pole ho smaze, aby se pak nemohl vybrat znovu
                 x++;
                 
             } while (x <= 3)
                       
        },

        pridejObrazekNepatri() {            // nahodne vybere jeden obrazek, co nepatri, a pak ho prida na nhodny index do vygenerovaneho pole obrazku, ktere k sobe patri
            
            let index = Math.floor(Math.random() * this.nepatri.length);        //nahodne vybere obrazek

            this.indexNepatri = Math.floor(Math.random() * 4)          //nahodne vybrani indexu, na ktery se obrazek prida

            this.poleObrazku.splice(this.indexNepatri, 0, this.nepatri[index]);    //pridani obrazku, kt. nepatri, do  poleObrazku na nahodnou pozici
            
        
        },






        vyhodnot(index) {                               //PRIDAT DO KAZDE HRY
            if (index === this.indexNepatri) {
                this.$emit("vyhrani");               
            }

            else {
                this.$emit("prohrani");
            }
        },






         znovuNactiHru() {                       //PRIDAT DO KAZDE HRY
        //    if (this.znovuNacist === true) 
            
                this.poleObrazku = [];
                 this.vyberPoleObrazkuPatri();
                 this.pridejObrazekNepatri();
                 this.$emit("prestan-nacitat")
             
         }

    },
    
    watch: {
        znovuNacist(newVal) {
            if (newVal === true) {
            this.znovuNactiHru() }
        }
    },


    created() {
        this.vyberPoleObrazkuPatri()
        this.pridejObrazekNepatri()
        
        

    }   
    
}

</script>



<style scoped>

/* .kontejnerHry {
    width: 800px;
    height: 500px;
    border: solid blue 5px;
    margin: 0 auto;
} */




/* .tlacitka {
    width: 755px;
    border: solid grey 2px;
    margin: 20px;   
    height: 60px;
    display: flex;
    justify-content: space-between;
} */


.obrazky {
    display: flex;
    width: 500px;
    margin: 60px auto;
    justify-content: center; 
}

.herniobrazek {
    width: 100px;
    height: 100px;  
    margin: 50px 15px;
}







</style>