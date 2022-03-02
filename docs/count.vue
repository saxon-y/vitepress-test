<template>
    <div class="count">{{data.count}}</div>
</template>

<script setup>
    import { reactive, ref, onBeforeUnmount } from 'vue';
    const data = reactive({
        count: 0
    })
    const interval = setInterval(() => {
    data.count++;
    }, 1000)

    onBeforeUnmount(() => {
        clearInterval(interval);
    })
</script>

<style scoped>
    .count {
        font-size: 22px;
        color: red;
    }    
</style>