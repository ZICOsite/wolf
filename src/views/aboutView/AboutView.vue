<script setup>
import Typography from "@/components/UI/Typography.vue";
</script>

<template>
  <section class="about">
    <div class="container">
      <div class="about__desc">
        <Typography class="about__desc-title title" tagName="h2">О компании</Typography>
        <Typography class="about__desc-txt" tagName="p"
          >Чем занимается компания? Мы учим создавать систему в продажах и
          контролируем все внедрения при ее создании. Наши клиенты нанимают
          новых талантливых продавцов, внедряют регламенты, отчеты, CRM-систему,
          скрипты.</Typography
        >
      </div>
      <img src="@i/card-img.png" alt="" class="about__image" />
    </div>
  </section>
</template>
