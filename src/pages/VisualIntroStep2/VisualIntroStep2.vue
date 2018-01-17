<template>
    <div :class="$style.background">
        <app-header></app-header>
        <p :class="$style.likeText">Y te gustaría que tenga...</p>
         <div :class="$style.iconitos">
            <div :class="$style.iconitoWrapper">
                <div :class="$style.iconitoStyle">
                    <icon name="wifi" :size="50"/>
                    <span>WIFI</span>                    
                </div>
            </div> 
              <div :class="$style.iconitoWrapper">
                  <div :class="$style.iconitoStyle">
                    <icon name="food" :size="50"/>
                     <span>Cocina</span>                    
            </div>
              </div>

            <div :class="$style.iconitoWrapper">
                <div :class="$style.iconitoStyle">
                 <icon name="bag" :size="50"/>
                  <span>Take Away</span> 
                  </div>                   
             </div>
               <div :class="$style.iconitoWrapper">
            <div :class="$style.iconitoStyle">
                  <icon name="laptop" :size="50"/>
                 <span>Coworking</span>    
            </div>                

            </div>
            
        </div>
        <div :class="$style.wrapperCuantoPagar">
              <p :class="$style.likeTextCuantoPagar">Cuánto querés gastar?</p>
              <div :class="$style.wrapperRadio">
                <InputRadio :class="$style.inputRadio" ></InputRadio>
              </div>
        </div>
        <div :class="$style.button">
            <button-general :class="$style.buttonWidth" button-text="Continuar" size="large" @click="handleClick"></button-general>
        </div>
    </div>
       

</template>

<script>
import AppHeader from "../../components/AppHeader/AppHeader"
import ButtonGeneral from "../../components/ButtonGeneral/ButtonGeneral"
import Icon from "../../components/Icon/Icon"
import InputRadio from "../../components/InputRadio/InputRadio.vue"

export default {
  name: "VisualIntroStep2",
  components: {
    AppHeader,
    ButtonGeneral,
    Icon,
    InputRadio
  },
  methods: {
    handleClick() {
      this.$router.push("/map")
    }
  }
}
</script>

<style module>
.likeText {
  font-weight: bold;
  font-size: 25px;
  margin: 0 auto;
  max-width: 60%;
  color: white;
  margin-bottom: 10%;
  text-align: center;
}

.background {
  background-color: #8882da;
  height: 100%;
  width: 100%;
  padding: 25px 0px;
}

.iconitos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 48px 40px;
}

.iconitoWrapper {
  flex: 0 0 50%;
  height: auto;
  color: white;
}

.iconitoStyle {
  width: 100px;
  height: 100px;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 14px;
  margin: 0 auto 15px;
}

.iconitoStyle svg path {
  fill: white;
}

.likeTextCuantoPagar {
  font-weight: bold;
  font-size: 25px;
  margin: 0 auto;
  max-width: 60%;
  color: white;
  margin-bottom: 25px;
  text-align: center;
}

.wrapperCuantoPagar {
  width: 100%;
  margin: 0 auto;
  margin-top: 25px;
  padding-top: 50px;
  border-top: 1px solid rgba(255,255,255,0.3);
  text-align: center;
}

.wrapperRadio {
  width: 100%;
  margin: 50px auto;
}


.button {
  text-align: center;
}
</style>
