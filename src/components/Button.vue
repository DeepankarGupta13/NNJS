<template>
  <button @click="initButton()"> init model </button>
</template>

<script>
import { initModel } from '../App.js'

export default {
    name: 'Button',
    methods: {
        initButton() {
            initModel();
        }
    }
}
</script>

<style>

</style>