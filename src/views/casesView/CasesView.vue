<script setup>
import Card from "@/components/UI/Card.vue";
import Skeleton from "@/components/UI/Skeleton.vue";
import Typography from "@/components/UI/Typography.vue";
import { IconArrow } from "@/components/icons/icons";
import useFetch from "@/services/api";

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

const { data, isFetching, fetchData } = useFetch();

const test = (type = "") => {
  fetchData("case/list/?type=" + type);
};

fetchData("case/list/");

const onClickHandler = (page) => {
  fetchData("case/list/?page=" + page);
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
          <Skeleton :loader="isFetching" :count="6">
            <template #default>
              <RouterLink
                :to="'/case/' + item.id"
                v-for="item in data?.results"
                :key="item.id"
                class="cases__content-link"
              >
                <Card class="cases__card">
                  <img :src="item.case_author.image" alt="" class="cases__card-image" />
                  <Typography tagName="h3" class="cases__card-title">{{
                    item.case_author.company_name
                  }}</Typography>
                  <Typography v-if="true" tagName="p" class="cases__card-txt">{{
                    item.title
                  }}</Typography>
                </Card>
              </RouterLink>
            </template>
          </Skeleton>
        </div>
        <vue-awesome-paginate
          class="cases__content-paginate"
          :total-items="+data?.count"
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
