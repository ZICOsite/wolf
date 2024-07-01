<script setup>
import Button from "@/components/UI/Button.vue";

const props = defineProps({
  info: Object
})

</script>

<template>
  <section class="sales-banner">
    <div class="container">
      <div class="sales-banner__content">
        <p class="sales-banner__abovetitle">{{ info?.name }}</p>
        <h1 class="sales-banner__title title">{{ info?.short_description }}</h1>
        <p class="sales-banner__txt">
          {{ info?.description }}
        </p>
      </div>
      <RouterLink to="/contacts">
        <Button
          class="sales-banner__btn"
          bg="var(--white)"
          color="var(--primary-color)"
          >Построить систему</Button
        >
      </RouterLink>
    </div>
  </section>
</template>
