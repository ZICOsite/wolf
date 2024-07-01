<script setup>
import HeaderLayout from "@/layouts/header/HeaderLayout.vue";
import FooterLayout from "@/layouts/footer/FooterLayout.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <HeaderLayout />
    <RouterView v-slot="{ Component }">
      <component :is="Component" :key="$route.fullPath"></component>
    </RouterView>
    <FooterLayout />
  </div>
</template>
