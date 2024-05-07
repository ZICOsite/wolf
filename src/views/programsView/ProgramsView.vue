<script setup>
import Button from "@/components/UI/Button.vue";
import Card from "@/components/UI/Card.vue";
import Typography from "@/components/UI/Typography.vue";
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
        <Card v-for="item in 3" :key="item" class="programs__card">
          <div class="programs__card-content">
            <p class="programs__card-abovetitle">Индивидуальный консалтинг</p>
          <h3 class="programs__card-title">SDR</h3>
          <p class="programs__card-txt ellipsis">
            Консалтинг по построению системы в отделе продаж для владельцев
            бизнеса с индивидуальным подходом
          </p>
          </div>
          <RouterLink to="/" class="programs__card-link">
            <Button bg="var(--white)" color="var(--primary-color)">Подробнее -></Button>
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
