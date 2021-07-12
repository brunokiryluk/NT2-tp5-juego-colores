<template>
    <main class="main">
        <div id="navigator">
            <button
                v-if="!guessed"
                id="reset"
                @click="$emit('select-new-colors')"
            >
                New colors
            </button>
            <button
                v-if="guessed"
                id="reset"
                @click="$emit('play-again')"
            >
                Play Again
            </button>

            <span id="message">{{
                guessed
                    ? 'You picked right!'
                    : guessed != null
                    ? 'Try Again'
                    : ''
            }}</span>

            <button
                id="easy"
                :class="{ selected: !isHard }"
                @click="selectMode('easy')"
            >
                easy
            </button>
            <button
                id="hard"
                :class="{ selected: isHard }"
                @click="selectMode('hard')"
            >
                hard
            </button>
        </div>
        <square-list
            :squareColors="squareColors"
            :baseColor="baseColor"
            :guessed="guessed"
            @select-color="selectColor"
        ></square-list>
    </main>
</template>

<script>
import SquareList from './Squares'

export default {
    name: 'TheMain',
    props: {
        isHard: {
            type: Boolean,
            required: true
        },
        squareColors: {
            type: Array,
            required: true
        },
        guessed: {
            type: Boolean,
            required: false
        },
        baseColor: {
            type: String,
            required: true
        }
    },
    components: {
        SquareList
    },
    methods: {
        selectMode(mode) {
            this.$emit('select-mode', mode)
        },
        selectColor(squareColor) {
            this.$emit('select-color', squareColor)
        }
    }
}
</script>

<style scoped>
#navigator {
    background: #ffffff;
    height: 30px;
    text-align: center;
    margin: 0;
    margin-top: -30px;
}

#message {
    color: #000;
    display: inline-block;
    width: 20%;
}

#messageBox {
}

.selected {
    background-color: steelblue;
    color: white;
}
</style>