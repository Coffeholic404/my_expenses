<template>
  <div class=" flex flex-col space-y-4">
  <h3 class="mt-4 font-bold text-2xl">History</h3>
  <ul id="list" class="list list-none p-0 space-y-2">
    <li class="bg-[#fff] shadow-md flex justify-between relative p-3 rounded-lg mx-3" v-for="transaction in transactions" v-bind:key="transaction.id"
      v-bind:class="transaction.amount < 0 ? 'minus' : 'plus'">
      {{ transaction.text }} <span>${{ transaction.amount }}</span><button @click="deleteTransaction(transaction.id)" class="delete-btn">x</button>
    </li>
  </ul>
</div>
</template>

<script setup>
  import { defineProps } from 'vue';

  const emit = defineEmits(['transactionDeleted'])
  const props = defineProps({
    transactions: {
      type: Array,
      required: true,
    }
  });

  const deleteTransaction = (id) => {
    emit('transactionDeleted', id)
  }
</script>