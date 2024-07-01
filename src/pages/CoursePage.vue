<script setup>
import SalesBannerView from "@/views/salesBannerView/SalesBannerView.vue";
import ResultInfoView from "@/views/resultInfoView/ResultInfoView.vue";
import ProblemsView from "@/views/problemsView/ProblemsView.vue";
import ResultsView from "@/views/resultsView/ResultsView.vue";
import FreetourView from "@/views/freetourView/FreetourView.vue";
import useFetch from "@/services/api";
import { useRoute } from "vue-router";

const { data, isFetching, fetchData } = useFetch();

const route = useRoute()

fetchData(`program/detail/${route.params.id}/`);

</script>
<template>
  <main>
    <SalesBannerView :info="data" />
    <ResultInfoView />
    <ProblemsView />
    <ResultsView
      title="Посмотрите результаты компаний, которые уже прошли курс"
    />
    <FreetourView
      inputBg="var(--secondary-color)"
      inputColor="var(--primary-color)"
      sectionBg="var(--white)"
      titleColor="var(--primary-color)"
      btnBg="var(--primary-color)"
      btnColor="var(--white)"
    />
  </main>
</template>
