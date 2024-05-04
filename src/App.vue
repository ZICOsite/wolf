<script setup>
import HeaderLayout from "@/layouts/header/HeaderLayout.vue";
import FooterLayout from "@/layouts/footer/FooterLayout.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <HeaderLayout />
    <RouterView />
    <FooterLayout />
  </div>
</template>
