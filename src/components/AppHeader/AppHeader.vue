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

<style module>
.headerContainer{
    padding: 35px 40px;
    text-align: center;
    background-color: #8882da;

   
}
.headerText{

    font-weight: bold;
    color: white;
    font-size: 20px;
    margin: 0;

}
</style>
