<script setup>
import Typography from "@/components/UI/Typography.vue";
import Button from "@/components/UI/Button.vue";
import Modal from "@/components/UI/Modal.vue";
import Input from "@/components/UI/Input.vue";
import Form from "@/components/UI/Form.vue";
const props = defineProps({
  inputBg: String,
  inputColor: String,
  sectionBg: String,
  titleColor: String,
  btnBg:String,
  btnColor:String
});
const modal = ref(false)
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
      <form class="freetour__form" action="" @submit.prevent="modal = true">
        <input type="text" class="freetour__inp" placeholder="Имя" required />
        <input type="text" class="freetour__inp" placeholder="Номер телефона" required />
        <Button class="freetour__btn" :bg="btnBg" :color="btnColor"
          >Записаться на экскурсию</Button
        >
      </form>
    </div>
    <Teleport to="#body" v-if="modal">
      <Modal @click="modal = false">
        <Form @click.stop>
            <Typography tag-name="h2" class="form__title">Введите код подтверждения</Typography>
            <Input placeholder="Код подтверждения" />
            <Button bg="var(--white)" color="var(--primary-color)">Скачать</Button>
        </Form>
    </Modal>
    </Teleport>
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
