<script setup>
import Typography from "@/components/UI/Typography.vue";
</script>

<template>
  <section class="money">
    <div class="container">
      <Typography tagName="h2" class="money__title">
        Сколько денег мы помогли заработать нашим клиентам
      </Typography>
      <div class="money__content">
        <div class="money__item money__item_white">
          <p class="money__item-abovetitle">Помогли заработать</p>
          <h3 class="money__item-title">75 млрд. сумов</h3>
        </div>
        <div class="money__item">
          <p class="money__item-abovetitle">Цель – помочь заработать</p>
          <h3 class="money__item-title">120 трлн. сумов</h3>
        </div>
      </div>
      <p class="money__txt">Последнее обновление: 25 май, 2024 год</p>
    </div>
  </section>
</template>
