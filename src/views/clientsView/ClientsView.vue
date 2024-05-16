<script setup>
import Typography from "@/components/UI/Typography.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const modules = [Autoplay];

const breakpoints = {
  320: {
    slidesPerView: 2.5,
  },
  850: {
    slidesPerView: 5.5,
  },
};
</script>

<template>
  <section class="clients">
    <div class="container">
      <Typography class="clients__title title" tagName="h2"
        >Среди наших клиентов</Typography
      >
      <div class="clients__carousel">
        <Swiper
          class="clients__carousel-slider"
          :modules="modules"
          :spaceBetween="16"
          :breakpoints="breakpoints"
          :autoplay="{
            delay: 0,
          }"
        >
          <SwiperSlide v-for="item in 20" :key="item">
            <img src="@i/logo.svg" alt="" class="clients__carousel-image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>
