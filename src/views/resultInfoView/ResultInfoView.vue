<script setup>
import Typography from "@/components/UI/Typography.vue";
</script>
<template>
  <section class="result-info">
    <div class="container">
      <Typography tagName="h2" class="result-info__title title">
        В результате обучения вы и ваша команда
      </Typography>  
      <Typography tagName="p" class="result-info__txt">
        Это минимум внедрений, которые вы сделаете за время прохождения программы #реальныйотзыв
      </Typography>
      <div class="result-info__content">
        <div class="result-info__item" v-for="item in 8" :key="item">
          <span class="result-info__item-icon">🏆</span> 
          <p class="result-info__item-txt">Сформулируете лучшее предложение на вашем рынке</p>
        </div>
      </div>
    </div>
  </section>
</template>
