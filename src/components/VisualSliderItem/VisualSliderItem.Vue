<template>
    <div :class="$style.slider">
        <div :class="$style.imagen">Imagen
        </div>
         <div :class="$style.columnas">
            <div :class="$style.informacion">
                <p :class="$style.nombre">Cafetería con<br />nombre largo</p>
                <p><span :class="$style.horario">10-20hs</span> <span :class="$style.green">Abierto</span></p>
                <p :class="$style.direccion">Humboldt 1542<br />+más datos sobre dirección</p>
            </div>
            <div :class="$style['rating-button']">
                <visual-rating :class="$style.rating" :value="0"></visual-rating>
                <button-more :class="$style.vermas" button-text="Ver más"></button-more>
            </div>
        </div>    
    </div>
</template>

<script>
  import ButtonMore from '../ButtonMore/ButtonMore.vue';
  import VisualRating from '../VisualRating/VisualRating.vue';
  export default {
    name: "VisualSliderItem",
    components:{
        VisualRating,
        ButtonMore,
    }

    }


</script>

<style module>
.slider{
    background-color: white;
    width: 320px;
    height: 250px;
    border-radius: 30px;
    overflow: hidden;
    
}
.imagen{
    background-image: url('../../assets/cafevisualslideitem.jpg');
    height:80px;
    
}
.informacion{
    line-height: 17px;
    padding-left: 15px;

}

.informacion{
    width:220px;

}
.columnas{
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
.direccion{
    color:grey;
    font-size:13px;
}
.horario{
    font-weight: bold;
    color:black;
    font-size:13px;
    margin-right: 5px;
}
.nombre{
    color:blueviolet;
    font-size:20px;
    font-weight:bold ;
    line-height: 22px;

}
.rating{
    margin-top: 15px;
    margin-bottom: 90px;
    margin-right:20px;
}
.vermas{
    width:80px;
    margin-right:20px;
}
</style>