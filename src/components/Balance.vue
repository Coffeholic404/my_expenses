<template>
    <div class=" border-2 border-red-500 w-full h-full text-center px-4 my-6 xs:py-6 lg:flex lg:flex-col">
    <h4 class="text-white text-2xl border-2 lg-mb-4">Your Balance</h4>
    <h1 class=" border-2 mt-6 text-white text-3xl lg:mb-2" id="balance">${{ total }}</h1>
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