<template>
    <div id="app">
        <the-header :baseColor="baseColor" :guessed="guessed"></the-header>
        <the-main
            :isHard="isHard"
            :squareColors="squareColorsAux"
            :baseColor="baseColor"
            :guessed="guessed"
            @select-mode="selectMode"
            @select-color="selectColor"
            @select-new-colors="selectNewColors"
            @play-again="restart"
        ></the-main>
    </div>
</template>

<script>
import TheHeader from './components/Header'
import TheMain from './components/Main'
import { createNewColors, getNumberOfSquaresByMode } from './utils/colors'

export default {
    name: 'App',
    components: {
        TheHeader,
        TheMain
    },
    data() {
        return {
            isHard: true,
            guessed: null,
            squareColorsAux: []
        }
    },
    beforeMount() {
        this.squareColorsAux = this.squareColors
    },
    computed: {
        squareColors() {
            let colors = createNewColors(getNumberOfSquaresByMode(this.isHard))
            colors = colors.map(
                (color) => ({
                    value: color,
                    alreadyPicked: false
                })
            )
            return colors
        },
        baseColor() {
            const rndIndex = this.pickColor()
            return this.squareColors[rndIndex].value
        }
    },
    watch: {
        guessed(val) {
            if (val || val === null) {
                this.squareColorsAux = this.squareColors
            }
        },
        squareColors(val) {
            this.squareColorsAux = val
        }
    },
    methods: {
        selectMode(mode) {
            if (mode !== this.getCurrentMode()) {
                this.restart(mode)
            }
        },
        selectColor(squareColor) {
            if (!this.guessed) {
                this.guessed = this.baseColor === squareColor.value
                if (!this.guessed) {
                    this.squareColorsAux = this.squareColorsAux.map((current) => ({
                        value: current.value,
                        alreadyPicked: current.alreadyPicked || current.value === squareColor.value
                    }))
                }
            }
        },
        selectNewColors() {
            this.restart(this.getCurrentMode())
        },
        pickColor() {
            const quantity = getNumberOfSquaresByMode(this.isHard)
            return Math.floor(Math.random() * quantity)
        },
        restart(selectedMode = this.getCurrentMode()) {
            this.restartIsHard(selectedMode)
            this.restartGuessed()
        },
        restartIsHard(mode = 'hard') {
            this.isHard = null
            this.isHard = mode === 'hard'
            console.log(this.isHard)
        },
        restartGuessed() {
            this.guessed = null
        },
        getCurrentMode() {
            return this.isHard ? 'hard' : 'easy'
        }
    }
}
</script>

<style>
body {
    background: #232323;
    margin: 0;
    font-family: 'Montserrat', 'Avenir';
}

h1 {
    font-weight: normal;
    line-height: 1.1;
    padding: 20px 0;
}

button {
    border: none;
    background-color: white;
    font-family: 'Montserrat', 'Avenir';
    text-transform: uppercase;
    height: 100%;
    font-weight: 700;
    letter-spacing: 1px;
    color: steelblue;
    transition: all 0.3s;
    outline: none;
}
button:hover {
    color: white;
    background-color: steelblue;
}
</style>
