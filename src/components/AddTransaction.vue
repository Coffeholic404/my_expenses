<template>
  <div class=" flex flex-col space-y-4 ">
    <h3 class=" mt-4 font-bold text-2xl">Add new transaction</h3>
      <form class=" flex flex-col gap-3" id="form" @submit.prevent="onSubmit">
        <div class="form-control space-y-1  rounded-md pb-2">
          <label class=" inline-block text-xl" for="text">Text</label>
          <input class=" rounded-md w-full h-12 block p-[10px]  focus:outline-none shadow-md" type="text" id="text" v-model="text" placeholder="Enter text..." />
        </div>
        <div class="form-control space-y-1 ">
          <label class=" inline-block text-xl" for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input class=" rounded-md block p-[10px] w-full h-12 focus:outline-none shadow-md" type="text" id="amount" v-model="amount" placeholder="Enter amount..." />
        </div>
        <button class="btn cursor-pointer bg-purple-500 shadow-sm text-white block rounded-md text-xl p-2 w-full mt-2 mx-0 mb-5">Add transaction</button>
      </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import {useToast} from 'vue-toastification';

    const text = ref('')
    const amount = ref('')
    const emit = defineEmits(['transactionSubmitted']);
    const toast = useToast();
    const onSubmit= () => {
        if(!text.value || !amount.value){
            toast.error('Both fields must be filled');
            return;
        }

        const transactionData = {
            text:text.value,
            amount: parseFloat(amount.value)
        }

        emit('transactionSubmitted', transactionData);
        text.value = '';
        amount.value = '';
    }

</script>