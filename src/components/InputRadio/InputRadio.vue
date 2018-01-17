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
        width: 80%;
        margin: 0 auto;
    }
    .input-group-radio {
        
        position: relative;
        white-space: nowrap;
        display: table-cell;
    }

    .input-group-radio .radio-btn {
        margin-left: -1px
    }

    .radio-btn label {
        height: 46px;
        width: 120px;
        border-radius: 70px;
        border: 1px solid rgb(255, 255, 255);
        font-family: sans-serif;
        font-weight: bold;
        font-size: 15px;
        line-height: 3em;
        cursor: pointer;
        display: inline-block;
        padding: 10px 20px;
        text-align: center;
        white-space: nowrap;
        color: rgb(240, 240, 240);
    }

    .radio-btn:hover label {
        border-color: rgb(173, 173, 173);
        color:rgb(173, 173, 173);
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