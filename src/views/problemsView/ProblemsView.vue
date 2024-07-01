<script setup>
import Typography from "@/components/UI/Typography.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import sliderImg1 from "@/assets/img/slider-1.png";
import sliderImg2 from "@/assets/img/slider-2.png";
import sliderImg3 from "@/assets/img/slider-3.png";
import sliderImg4 from "@/assets/img/slider-4.png";
const paginationInfo = [
  {
    id: 1,
    pagination: "Это Асад, ему 35 и он предприниматель",
    text: "Неплохо зарабатывает, ездит на немецкой машине и изредка отправляется отдохнуть на хорошие курорты. Уже слегка не в форме и постоянно себе обещает серьезно заняться спортом. Носит удобную рубашку и джинсы.",
    img: sliderImg1,
  },
  {
    id: 2,
    pagination: "Чувствует себя заложником в своем бизнесе",
    text: "И вроде все хорошо, но Асад понимает, что у него гораздо больше потенциала, нежели его результаты. Он создавал бизнес для свободы, но по факту получилось практически наоборот - стал заложником своего бизнеса.",
    img: sliderImg2,
  },
  {
    id: 3,
    pagination: "Всё в ручном управлении и держится на нём",
    text: "Асаду хочется больше свободы, стабильности и денег, но в его бизнесе все держится на нем и если он надолго уедет, то все развалится. Ему приходится постоянно погружаться в операционку и самому руководить своим отделом продаж.",
    img: sliderImg3,
  },
  {
    id: 4,
    pagination: "Менеджеры его раздражают и он хочет их сжечь",
    text: "Он слушает разговоры своих менеджеров в отделе продаж и иногда возникает желание их сжечь, но приходится это терпеть, так как он и так уже несколько раз перестраивал",
    img: sliderImg4,
  },
];
const pagination = {
  el: ".swiper-pagination",
  clickable: true,
  renderBullet: function (index, className) {
    return `<li class="${className}">${paginationInfo[index].id}.   ${paginationInfo[index].pagination}  "</li>`;
  },
};
const modules = [Pagination];
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
      <!-- <img src="@i/card-img.png" alt="" class="problems__banner">-->
      <div class="problems__swiper">
        <ul class="swiper-pagination"></ul>
        <swiper :pagination="pagination" :modules="modules" class="">
          <swiper-slide v-for="item in paginationInfo" :key="item">
            <span>{{ item.text }}</span>
            <img :src="item.img" alt="" />
          </swiper-slide>
        </swiper>
      </div>

      <div class="problems__content">
        <div class="problems__item" v-for="item in 3" :key="item">
          <div class="problems__item-icon">1</div>
          <h3 class="problems__item-title">Бизнес процессы</h3>
          <p class="problems__item-txt">
            ниш в кейсах: услуги, производства, оптовые и розничные продажи,
            онлайн школы
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
