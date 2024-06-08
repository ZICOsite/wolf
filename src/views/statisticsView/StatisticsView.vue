<script setup>
import Typography from "@/components/UI/Typography.vue";
import Card from "@/components/UI/Card.vue";
import useFetch from "@/services/api";
const { data, isFetching, fetchData } = useFetch();

fetchData("common/number-about-us/");




</script>

<template>
  <section class="statistics">
    <div class="container">
      <Typography tagName="h2" class="statistics__title title">Несколько цифр о нашей работе</Typography>
      <div class="statistics__cards">
        <Card class="statistics__card" v-for="item in data" :key="item">
          <Typography tagName="h3" class="statistics__card-title">{{ item.statistic_number }}</Typography>
          <Typography tagName="p" class="statistics__card-txt">{{item.description}}</Typography>
        </Card>
      </div>
      <Typography tagName="p" class="statistics__txt">–Жестко контролируем вас и вашу команду во время проекта: ежедневные
        созвоны, проверки, ведение до результата</Typography>
    </div>
  </section>
</template>
