<script setup>
import Typography from "@/components/UI/Typography.vue";
</script>
<template>
  <section class="problems">
    <div class="container">
      <Typography tagName="h2" class="problems__title title">
        С чем сталкиваются наши клиенты
      </Typography>
      <Typography tagName="p" class="problems__txt">
        99% наших клиентов, сталкиваются с подобными сложностями в бизнесе
      </Typography>
       <img src="@i/card-img.png" alt="" class="problems__banner">
       <div class="problems__content">
        <div class="problems__item" v-for="item in 3" :key="item">
          <div class="problems__item-icon">1</div>
           <h3 class="problems__item-title">Бизнес процессы</h3>
           <p class="problems__item-txt">ниш в кейсах: услуги, производства, оптовые и розничные продажи, онлайн школы</p>
        </div>
       </div>
    </div>
  </section>
</template>
