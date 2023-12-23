<template>
  <div class="inc-exp-container p-5 mx-5 rounded-3xl bg-[#FFF] flex justify-between shadow-md text-center ">
    <div class="border-r-2 w-44 flex ">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px"><g fill="#3dd82d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M25,7.21875l-1.40625,1.4375l-9.90625,9.875c-0.78516,0.78516 -0.78516,2.05859 0,2.84375c0.78516,0.78516 2.05859,0.78516 2.84375,0l6.46875,-6.5v25.125c-0.01172,0.72266 0.36719,1.39063 0.99219,1.75391c0.62109,0.36719 1.39453,0.36719 2.01563,0c0.625,-0.36328 1.00391,-1.03125 0.99219,-1.75391v-25.125l6.46875,6.5c0.78516,0.78516 2.05859,0.78516 2.84375,0c0.78516,-0.78516 0.78516,-2.05859 0,-2.84375l-9.90625,-9.875z"></path></g></g></svg>
          <div>
      <h4>Income</h4>
          <p id="money-plus" class="money plus">${{income}}</p>
        </div>
        </div>
        <div class="w-44 flex">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px"><g fill="#fa5252" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M24.78125,7.96875c-1.03125,0.11328 -1.80469,0.99609 -1.78125,2.03125v25.09375l-6.59375,-6.53125c-0.37891,-0.38281 -0.89844,-0.59766 -1.4375,-0.59375c-0.82812,-0.00781 -1.57031,0.49609 -1.875,1.26172c-0.30469,0.76953 -0.10547,1.64453 0.5,2.20703l10,9.875l1.40625,1.40625l1.40625,-1.40625l10,-9.875c0.79297,-0.77734 0.80859,-2.05078 0.03125,-2.84375c-0.77734,-0.79297 -2.05078,-0.80859 -2.84375,-0.03125l-6.59375,6.53125v-25.09375c0.00781,-0.54297 -0.20312,-1.0625 -0.58594,-1.44531c-0.38281,-0.38281 -0.90234,-0.59375 -1.44531,-0.58594c-0.0625,-0.00391 -0.125,-0.00391 -0.1875,0z"></path></g></g></svg>
          <div>
          <h4>Expense</h4>
          <p id="money-minus" class="money minus">${{expenses}}</p>
        </div>
        </div>
      </div>
</template>


<script setup>
  import { defineProps } from 'vue';
  // import upArrow from '../assets/icons8-up.svg'
  // const upArrow = '../assets/icons8-up.svg';
  const props = defineProps({
    income: {
      type: Number,
      required: true
    },
    expenses: {
      type: Number,
      required: true
    },
  })
</script>