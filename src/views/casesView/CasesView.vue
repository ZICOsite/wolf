<script setup>
import Card from "@/components/UI/Card.vue";
import Typography from "@/components/UI/Typography.vue";
import { IconArrow } from "@/components/icons/icons";
import axios from "axios";

const casesList = [
  {
    name: "Все",
    type: "",
  },
  {
    name: "Услуги",
    type: "Service",
  },
  {
    name: "Производство",
    type: "Production",
  },
  {
    name: "Товары",
    type: "Products",
  },
];

const activeList = ref(0);

const ts = ref(null);

const test = async (type = "") => {
  const res = await axios.get(
    `http://45.153.70.250:8000/api/v1/site/case/list/?type=${type}`
  );
  console.log(res);
  ts.value = res.data;
};

test();

const onClickHandler = (page) => {
  console.log(page);
};

const currentPage = ref(1);
</script>

<template>
  <section class="cases">
    <div class="container">
      <Typography tagName="h2" class="cases__title title">Посмотрите результаты компаний, в которых мы построили отдел продаж</Typography>
      <div class="cases__content">
        <ul class="cases__content-list">
          <li
            class="cases__content-item"
            v-for="(item, index) in casesList"
            @click="test(item.type), (activeList = index)"
            :key="item.name"
            :class="{ active: activeList == index }"
          >
            {{ item.name }}
          </li>
        </ul>
        <div class="cases__content-cards">
          <Card class="cases__card" v-for="item in ts" :key="item">
            <img src="@i/card-img.png" alt="" class="cases__card-image" />
            <Typography tagName="h3" class="cases__card-title">Milliard Club</Typography>
            <Typography tagName="p" class="cases__card-txt">Подняли перформанс команды на 26% и помогли вырасти в 2х больше</Typography>
          </Card>
        </div>
        <vue-awesome-paginate
          class="cases__content-paginate"
          :total-items="ts.length"
          :items-per-page="9"
          :max-pages-shown="5"
          v-model="currentPage"
          :on-click="onClickHandler"
        >
          <template #prev-button>
            <span>
              <IconArrow direction="left"/>
            </span>
          </template>
          <template #next-button>
            <span>
                <IconArrow direction="right"/>
            </span>
          </template>
        </vue-awesome-paginate>
      </div>
    </div>
  </section>
</template>
