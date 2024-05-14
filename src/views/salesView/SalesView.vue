<script setup>
import Typography from "@/components/UI/Typography.vue";
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay,Pagination } from "swiper/modules";
import Button from "@/components/UI/Button.vue";
import { IconArrow } from "@/components/icons/icons";
const modules = ref([Navigation, Autoplay,Pagination]);
const navigationButtons = {
  nextEl: ".sales__swiper-next",
  prevEl: ".sales__swiper-prev",
};
</script>

<template>
  <section class="sales">
    <div class="container">
      <swiper
        :navigation="navigationButtons"
        :modules="modules"
        :autoplay="true"
        class="mySwiper sales__swiper"
        :loop="true"
        :pagination="true"
        :spaceBetween="10"
      >
        <swiper-slide class="sales__swiper-slide" v-for="item in 3" :key="item">
          <div class="sales__swiper-item">
            <div class="sales__swiper-content">
              <Typography tagName="h2" class="sales__swiper-title title">
                Построение отделов продаж под ключ за 4 месяца
              </Typography>
              <Typography tagName="p" class="sales__swiper-txt">
                Запишитесь на бесплтную онлайн-экскурсию в наш отдел продаж и
                получите новый взгляд, каким может быть крутой отдел продаж.
              </Typography>
              <Button
                bg="var(--primary-color)"
                color="var(--white)"
                class="sales__swiper-btn"
                >Записаться на онлайн экскурсию</Button
              >
            </div>
            <img src="@i/slider-sales.jpg" alt="" class="sales__swiper-img" />
          </div>
        </swiper-slide>
        <div class="sales__swiper-buttons">
          <button class="sales__swiper-prev">
            <IconArrow direction="left" color="var(--white)" />
          </button>
          <button class="sales__swiper-next">
            <IconArrow direction="right" color="var(--white)" />
          </button>
        </div>
      </swiper>
    </div>
  </section>
</template>
