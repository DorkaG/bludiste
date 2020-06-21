<template>
  <div class="okno">
      <div class="sekce">
      <div class="hra">

      <h3>Vítej na planetě Kokosmánie!</h3>
        <p class="pohadka" v-bind="precetl()">
        Pozor! Při přistávání to bude trochu skákat, protože tato planeta má trochu nestabilní i když chutné jádro. 
        Obyvateli této planety jsou Kokosky. Přátelská stvoření a je s nimi vždy legrace, pokud si ovšem neděláte legraci z kokosů… Tak opatrně.
        V chrámu z kokosových vláken je socha prastarého Kokosky, který drží posvátný Kokos. Tam by tvé kroky měly směřovat jako první. Vzdát úctu a hold této posvátné plodině. 
        Na hostině, kterou ti Kokosky připraví, se najíš určitě dosyta. A až ti bude lézt kokos i ušima, spláchni ho dobře vychlazeným kokosovým mlékem. Není nic více osvěžujícího.
        Při loučení s Kokoskami, obdržíš spoustu darů, pochopitelně kokosových. Kokosový klobouk nos hrdě, alespoň, než planetu opustíš. 
        Přeji příjemný průzkum.
        </p>
      </div>
      <div class="pokyny"></div>
      </div>

  </div>
</template>

<script>

export default {
props: ["vyhra", "prohra", "znovuNacist"],

    data(){
        return{
            precteno: false

        }
    },

    methods: {

        precetl(){
            setTimeout(this.vyhodnot,15000);
            this.precteno = true;
            },


        vyhodnot() {                   
            if (this.precteno === true) {
                this.$emit("vyhrani");
                               
            }
            else {
                this.$emit("prohrani");
            }
        }
}}

</script>

<style scope>

p{
    color: white;
}

</style>