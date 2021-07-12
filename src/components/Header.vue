<template>
    <header class="header" :style="{backgroundColor: guessed ? baseColor : originalBg}">
        <h1>
            The Great <br />
            <span id="colorDisplay">{{ baseColor }}</span>
            <br />
            Guessing Game
        </h1>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
    props: {
      baseColor: {
        type: String,
        required: true
      },
      guessed: {
          type: Boolean,
          required: false
      }
    },
    data() {
        return {
            originalBg: 'steelblue'
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
.header {
    transition: all 0.3s;
    background: steelblue;
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    color: white;
}
#colorDisplay {
	font-size: 200%;
}
</style>
