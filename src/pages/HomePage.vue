<script setup>
import StatisticsView from "@/views/statisticsView/StatisticsView.vue";
import ProgramsView from "@/views/programsView/ProgramsView.vue";
import ResultsView from "@/views/resultsView/ResultsView.vue";
import MoneyView from "@/views/moneyView/MoneyView.vue";
import SalesView from "@/views/salesView/SalesView.vue";

</script>

<template>
  <main>
    <SalesView/>
    <StatisticsView />
    <ProgramsView />
    <ResultsView title="Посмотрите результаты компаний, которым мы построили отдел продаж"/>
    <MoneyView />
   
  </main>
</template>
