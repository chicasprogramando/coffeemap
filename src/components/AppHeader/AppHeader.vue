<template>
    <header>

        <div :class="$style.headerContainer" >
            <h1 :class="$style.headerText">#CoffeeMap</h1>
        </div>

    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style module lang="postcss">
@import '../../styles/variables.css';
/* @value colors: '../../styles/variables.css';
 @value purplecoffee, fontsize from colors; */

.headerContainer{
    padding: 35px 40px;
    text-align: center;
    background-color: purplecoffee; 
}
.headerText{
    font-weight: bold;
    color: white;
    font-size: fs-m;
    margin: 0;
}
</style>
