<template>
  <div :class="$style.background">
    <app-header></app-header>
    <p :class="$style.likeText">Y te gustaría que tenga...</p>
    <div :class="$style.miniIcons">
      <FilterButton name="wifi" button-text="Wifi" :iconSize="50"/>
      <FilterButton name="food" button-text="Cocina" :iconSize="50"/>
      <FilterButton name="bag" button-text="Take away" :iconSize="50"/>
      <FilterButton name="laptop" button-text="Coworking" :iconSize="50"/>
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
import FilterButton from "../../components/FilterButton/FilterButton"
import InputRadio from "../../components/InputRadio/InputRadio.vue"

export default {
  name: "VisualIntroStep2",
  components: {
    AppHeader,
    ButtonGeneral,
    FilterButton,
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
  background-color: blueviolet;
  height: 100%;
  width: 100%;
  padding: 25px 0px;
}

.miniIcons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 48px 40px;
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
  border-top: 1px solid rgba(255, 255, 255, 0.3);
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
