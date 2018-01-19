<template>
    <div class="input-group">
        <div class="input-group-radio">
            <div class="radio-btn radio-btn-primary">
                <input type="radio" name="rate" value="poco" id="poco">
                <label for="poco">Poco</label>
            </div>
        </div>
        <div class="input-group-radio">
            <div class="radio-btn radio-btn-primary">
                <input type="radio" checked name="rate" value="masomenos" id="masomenos">
                <label for="masomenos"> Más o menos</label>
            </div>
        </div>
        <div class="input-group-radio">
            <div class="radio-btn radio-btn-primary">
                <input type="radio" name="rate" value="mucho" id="mucho">
                <label for="mucho">Mucho</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Input-radio',
    props: {
    },
    components: {
    },
    methods: {
    }
}
</script>


<style scoped>
    .input-group{
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
   
    .radio-btn label {
        height: 46px;
        margin: auto;
        max-width: 160px;
        border-radius: 70px;
        border: 1px solid rgb(255, 255, 255);
        font-family: sans-serif;
        font-weight: bold;
        font-size: 15px;
        line-height: 3em;
        cursor: pointer;
        display: inline-block;
        padding: 10px 30px;
        text-align: center;
        white-space: nowrap;
        color: rgb(240, 240, 240);

    }

    .radio-btn:hover label {
       
    }

    .input-group-radio input[type="radio"]:empty {
        display: none;
    }

    .input-group-radio input[type="radio"]:checked~label {
        border-color: rgb(255, 255, 255);
    }

    .input-group>.input-group-radio:first-child:not(:last-child) label {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }

    .input-group>.input-group-radio:last-child:not(:first-child) label {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
    }

    .input-group>.input-group-radio:not(:first-child):not(:last-child) label {
        border-radius: 0;
    }


    .input-group-radio .radio-btn-primary input[type="radio"]:checked~label {
        color: blueviolet;
        background-color: rgb(255, 255, 255);
    }
</style>