<template>
    <div id="container">
        <div
            v-for="(squareColor, index) in squareColors"
            :key="index"
            class="square"
            :style="{
                backgroundColor: !guessed ? squareColor.value : baseColor,
                opacity: squareColor.alreadyPicked ? 0 : 1
            }"
            @click="selectSquare(squareColor)"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'SquareList',
    props: {
        squareColors: {
            type: Array,
            required: true
        },
        baseColor: {
            type: String,
            required: true
        },
        guessed: {
            type: Boolean,
            required: false
        }
    },
    methods: {
        selectSquare(squareColor) {
            this.$emit('select-color', squareColor)
        },
        setAllColorsTo(color) {
            for (let i = 0; i < this.squareColors.length; i++) {
                this.squareColors[i].value = color
            }
        }
    }
}
</script>

<style scoped>
#container {
    margin: 20px auto;
    max-width: 600px;
}
.square {
    width: 30%;
    background: blue;
    padding-bottom: 30%;
    float: left;
    margin: 1.66%;
    border-radius: 10%;
    transition: background 0.8s;
    -webkit-transition: background 0.8s;
    -moz-transition: background 0.8s;
}
</style>