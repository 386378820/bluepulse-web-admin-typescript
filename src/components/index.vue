<template>
    <div>
        <h1 @click="onClick">{{word}}</h1>
        <el-input></el-input>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component } from 'vue-property-decorator'
    @Component
    export default class Index extends Vue {
        private  word = '天涯共此时'
        onClick(): void {
            window.alert(this.word)
        }
        mounted(): void {
            console.log(1)
        }
    }

</script>

<style scoped>

</style>
