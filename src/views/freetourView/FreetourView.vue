<script setup>
import Typography from "@/components/UI/Typography.vue";
// import Form from "@/components/UI/Form.vue";
import Button from "@/components/UI/Button.vue";
const props = defineProps({
  inputBg: String,
  inputColor: String,
  sectionBg: String,
  titleColor: String,
  btnBg:String,
  btnColor:String
});

</script>
<template>
  <section class="freetour">
    <div class="container">
      <Typography tagName="h2" class="freetour__title title">
        Запишитесь на бесплатную онлайн экскурсию в наш отделпродаж
      </Typography>
      <Typography tagName="p" class="freetour__txt">
        Вы увидите нашу воронку продаж в CRM, систему мотивации менеджеров,
        скрипты, регламенты, систему обучения персонала, систему контроля и
        управления
      </Typography>
      <form class="freetour__form" action="">
        <input type="text" class="freetour__inp" placeholder="Имя" />
        <input type="text" class="freetour__inp" placeholder="Номер телефона" />
        <Button class="freetour__btn" :bg="btnBg" :color="btnColor"
          >Записаться на экскурсию</Button
        >
      </form>
    </div>
  </section>
</template>
<style lang="scss" scoped>
input {
  background: v-bind(inputBg);
  color: v-bind(inputColor);
}
.container {
  background: v-bind(sectionBg);
}
.freetour__title {
  color: v-bind(titleColor);
}
</style>
