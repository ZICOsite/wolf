<script setup>
import Typography from "@/components/UI/Typography.vue";
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Button from "@/components/UI/Button.vue";
import { IconArrow } from "@/components/icons/icons";
import Modal from "@/components/UI/Modal.vue";
import Form from "@/components/UI/Form.vue";
import Input from "@/components/UI/Input.vue";
import useFetch from "@/services/api";
import Skeleton from "@/components/UI/Skeleton.vue";
const modules = ref([Navigation, Autoplay, Pagination]);
const navigationButtons = {
  nextEl: ".sales__swiper-next",
  prevEl: ".sales__swiper-prev",
};
const modal = ref(false)
const { data, isFetching, fetchData } = useFetch();

fetchData("common/main-page/");
</script>

<template>
  <section class="sales">
    <div class="container">
      <Skeleton :loader="isFetching" :count="1">
        <template #default>
        <swiper :navigation="navigationButtons" :modules="modules" :autoplay="true" class="mySwiper sales__swiper"
          :loop="true" :pagination="true" :spaceBetween="10">
            <swiper-slide class="sales__swiper-slide" v-for="item in data" :key="item">
              <div class="sales__swiper-item">
                <div class="sales__swiper-content">
                  <Typography tagName="h2" class="sales__swiper-title title">
                    {{ item.title }}
                  </Typography>
                  <Typography tagName="p" class="sales__swiper-txt">
                    {{ item.description }}
                  </Typography>
                  <Button @click="modal = true" bg="var(--primary-color)" color="var(--white)"
                    class="sales__swiper-btn">Записаться на онлайн
                    экскурсию</Button>
                </div>
                <img :src="item.image" alt="" class="sales__swiper-img" />
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
        </template>
      </Skeleton>
    </div>
    <Teleport to="#body" v-if="modal">
      <Modal @click="modal = false">
        <Form @click.stop>
          <Typography tagName="h2" class="form__title">Закажите отдел продаж</Typography>
          <Typography tagName="p" class="form__txt">Постройте систему в отделе продаж и увеличите оборот компании в два
            раза</Typography>
          <Input placeholder="Имя" />
          <Input placeholder="Номер телефона" />
          <Input placeholder="Электронная почта" />
          <Button bg="var(--white)" color="var(--primary-color)">Записаться на экскурсию</Button>
        </Form>
      </Modal>
    </Teleport>
  </section>
</template>
