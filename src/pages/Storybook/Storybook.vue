<script src="./Storybook.js"></script>

<template>
	<div>
        <h1>{{ title }}</h1>

        <div class="component">
            <h2>Icon</h2>
            <h3>Normal</h3>
            <icon name="heart"/>
            <icon name="wifi"/>
            <icon name="twitter"/>
            <icon name="filter"/>
           

            <icon name="food"/>
            <icon name="bag"/>
            <icon name="laptop"/>

            <h3>With color</h3>
            <icon name="heart" color="#C00"/>
            <icon name="wifi" color="#C00"/>
            <icon name="twitter" color="#C00"/>
            <icon name="filter" color="#C00"/>
            
            <h3>Variable Size</h3>

            <icon name="twitter" color="#F0C" :size="100" />
            <icon name="twitter" color="#F0C" :size="50" />
            <icon name="twitter" color="#F0C" :size="20" />

            <h3>With circle</h3>
            <icon name="filter" color="#FFF" circle="#7971D9"/>
            

        </div>
        <div class="component">
            <h2>Visual Rating</h2>
            <visual-rating :value="4" />
            <visual-rating :value="3" />
        </div>
        <div class="component">
            <h2>Input Dropdown</h2>
            <div><input-dropdown /></div>
            <div><input-dropdown :compact="true" /></div>
        </div>

        <div class="component"><h2>ButtonGeneral</h2><ButtonGeneral button-text="HOLA" size="large"/></div>
        <div class="component"><h2>ButtonMore</h2><ButtonMore button-text="Ver más"/></div>
        <div class="component"><h2>FilterButton</h2>
        <FilterButton name="wifi" button-text="Wifi" />
        <FilterButton name="food" button-text="Cocina" />
        <FilterButton name="bag" button-text="Take away" />
        <FilterButton name="laptop" button-text="Coworking" />
        </div>
        <div class="component"><h2>ButtonIcon</h2><ButtonIcon /></div>
        <div class="component"><h2>InputRadio</h2><InputRadio /></div>
        <div class="component"><h2>VisualSliderItem</h2><VisualSliderItem /></div>
        <div class="component"><h2>VisualSlider</h2><VisualSlider /></div>
        <div class="component"><h2>Range Slider</h2><RangeSlider /></div>
        <div class="component"><h2>Loader1</h2><Loader1 /></div>
        <div class="component"><h2>Loader2</h2><Loader2 /></div>
        <div class="component"><h2>Loader3</h2><Loader3 /></div>


	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    display: block;
    font-size: 30px;
    border-bottom: 2px solid #ccc
}
.component {
    padding: 16px;
}
span {
    display: block;
    font-size: 15px;
    font-weight: bold;
}
</style>