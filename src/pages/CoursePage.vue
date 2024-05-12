<script setup>
import SalesBannerView from "@/views/salesBannerView/SalesBannerView.vue";
import ResultInfoView from "@/views/resultInfoView/ResultInfoView.vue";
import ProblemsView from "@/views/problemsView/ProblemsView.vue";
import ResultsView from "@/views/resultsView/ResultsView.vue";
</script>
<template>
  <main>
    <SalesBannerView />
    <ResultInfoView />
    <ProblemsView />
    <ResultsView title="Посмотрите результаты компаний, которые уже прошли курс"/>
  </main>
</template>
