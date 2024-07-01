<script setup>
import { RouterLink } from "vue-router";
import Button from "@/components/UI/Button.vue";
import { IconDropdown } from "@/components/icons/icons";
import useFetch from "@/services/api";
import { useProgrammListStore } from "@/stores/programmListStore";
const { data, isFetching, fetchData } = useFetch();

fetchData("program/list/");

const programmListStore = useProgrammListStore();
programmListStore.setProgrammList(data);

const menuToggle = ref(false);
const dropdownList = ref(false);
</script>

<template>
  <nav class="nav">
    <div class="container">
      <RouterLink
        to="/"
        class="nav__logo"
        @click="(menuToggle = false), (dropdownList = false)"
        ><img src="@/assets/img/logo.svg" alt=""
      /></RouterLink>
      <div class="nav__menu" :class="{ active: menuToggle }">
        <ul class="nav__list">
          <li class="nav__item">
            <span class="nav__link" @click="dropdownList = !dropdownList"
              >Программы <IconDropdown
            /></span>
            <ul class="nav__dropdown" :class="{ active: dropdownList }">
              <li
                class="nav__dropdown-item"
                v-for="item in data"
                :key="item.id"
              >
                <RouterLink
                  :to="'/course/' + item.id"
                  class="nav__dropdown-link"
                  @click="(menuToggle = false), (dropdownList = false)"
                  >{{ item.name }}</RouterLink
                >
              </li>
            </ul>
          </li>
          <li class="nav__item">
            <RouterLink
              to="/cases"
              class="nav__link"
              @click="(menuToggle = false), (dropdownList = false)"
              >Кейсы</RouterLink
            >
          </li>
          <li class="nav__item">
            <RouterLink
              to="/about"
              class="nav__link"
              @click="(menuToggle = false), (dropdownList = false)"
              >О компании</RouterLink
            >
          </li>
          <li class="nav__item">
            <RouterLink
              to="/contacts"
              class="nav__link"
              @click="(menuToggle = false), (dropdownList = false)"
              >Контакты</RouterLink
            >
          </li>
        </ul>
        <a href="#!" download>
          <Button bg="rgba(26, 43, 50, 0.15)" color="var(--primary-color)"
            >Скачать шаблон</Button
          >
        </a>
      </div>
      <div
        class="nav__burger"
        @click="(menuToggle = !menuToggle), (dropdownList = false)"
      >
        <span class="nav__burger-line" :class="{ active: menuToggle }"></span>
      </div>
    </div>
  </nav>
</template>
