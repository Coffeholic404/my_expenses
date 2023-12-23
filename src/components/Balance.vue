<template>
    <div class=" text-center px-4 my-6">
    <h4 class="text-white text-2xl">Your Balance</h4>
    <h1 class=" mt-6 text-white text-3xl" id="balance">${{ total }}</h1>
</div>
</template>

<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        total: {
            type:Number,
            required: true
        }
    })
</script>