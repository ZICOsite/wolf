<script setup>
import Button from "@/components/UI/Button.vue";
import Card from "@/components/UI/Card.vue";
import Typography from "@/components/UI/Typography.vue";
import useFetch from "@/services/api";
import { useProgrammListStore } from "@/stores/programmListStore";
const { data, isFetching, fetchData } = useFetch();

fetchData("program/list/");

const programmListStore = useProgrammListStore();
programmListStore.setProgrammList(data);
</script>

<template>
  <section class="programs">
    <div class="container">
      <Typography tagName="h2" class="programs__title title"
        >Программы для владельцев бизнеса и руководителей
      </Typography>
      <Typography tagName="p" class="programs__txt"
        >Консалтинговые образовательные программы с гарантией достижения
        результата, индивидуальным подходом и сопровождением
      </Typography>
      <div class="programs__cards">
        <Card v-for="item in data" :key="item.id" class="programs__card">
          <div class="programs__card-content">
            <p class="programs__card-abovetitle">{{ item.type }}</p>
            <h3 class="programs__card-title">{{ item.name }}</h3>
            <p class="programs__card-txt ellipsis">
              {{ item.short_description }}
            </p>
          </div>
          <RouterLink :to="'/course/' + item.id" class="programs__card-link">
            <Button bg="var(--white)" color="var(--primary-color)"
              >Подробнее -></Button
            >
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
