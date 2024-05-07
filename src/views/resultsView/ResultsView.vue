<script setup>
import Card from "@/components/UI/Card.vue";
import Typography from "@/components/UI/Typography.vue";
</script>

<template>
  <section class="results">
    <div class="container">
      <Typography tagName="h2" class="results__title title">
        Посмотрите результаты компаний, которым мы построили отдел продаж
      </Typography>
      <div class="results__cards">
        <Card class="results__card" v-for="item in 3" :key="item">
          <RouterLink class="results__card-link">
            <img src="@i/card-img.png" alt="" class="results__card-img" />
            <Typography tagName="h3" class="results__card-title">
              Milliard Club
            </Typography>
            <p class="results__card-txt">
              Подняли перформанс команды на 26% и помогли вырасти в 2х больше
            </p>
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
