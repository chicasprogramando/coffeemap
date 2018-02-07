<template>
    <div :class="$style.slider">
        <div :class="$style.image">
        </div>
         <div :class="$style.columns">
            <div :class="$style.info">
                <p :class="$style.nombre">{{coffee.name}}</p>
                <p>
                <!--<span :class="$style.time">{{businessHours[0]}}-{{businessHours[1]}}hs</span>-->
                <span :class="$style.green">Abierto</span></p>
                <p :class="$style.address">{{coffee.address}}<br/><span>{{coffee.website}}</span></p>
            </div>
            <div :class="$style['rating-button']">
                <visual-rating :class="$style.rating" :value="coffee.rating"></visual-rating>
                <button-general :class="$style.seemore" button-text="Ver más" bg-color="#7971d9" text-color="#fff" @click="handleClick(coffee)"></button-general>
            </div>
        </div>    
    </div>
</template>

<script>
  import VueTypes from 'vue-types';
  import ButtonGeneral from '../ButtonGeneral/ButtonGeneral.vue';
  import VisualRating from '../VisualRating/VisualRating.vue';
  
  export default {
    name: "VisualSliderItem",
    components:{
        VisualRating,
        ButtonGeneral,
    },
    props:{
        coffee: VueTypes.object,
        
        /*businessHours: VueTypes.arrayOf(Number),*/
    },
    data() {
        return {
            
        };
    },
    methods: {
        handleClick(coffee){
            console.log(`You clicked: ${coffee.name}`);
            this.$emit("coffeClick", coffee);
        }
    },
}


</script>

<style module>
@import "../../styles/variables.css";
.slider{
    background-color: white;
    width: 300px;
    height: 230px;
    border-radius: 30px;
    overflow: hidden;
    
}
.image{
    background-image: url('../../assets/cafevisualslideitem.jpg');
    height:80px;
    
}
.info{
    line-height: 17px;
    padding-left: 15px;
    width:220px;
}

.columns{
    display:flex;
    flex-direction: row;
    justify-content:center;
}
.rating-button{
    width:100px;
}
.green{
    color:green;
}
.address{
    color:grey;
    font-size:13px;
}
.time{
    font-weight: bold;
    color:black;
    font-size:13px;
    margin-right: 5px;
}
.nombre{
    color:rgb(121,113,217);
    font-size:20px;
    font-weight:bold ;
    line-height: 22px;

}
.rating{
    margin-top: 15px;
    margin-bottom: 70px;
    margin-right:30px;
}
.seemore{
    width:80px;
    margin-right:20px;
}
</style>