<script setup>
import Input from "@/components/UI/Input.vue";
import Typography from "@/components/UI/Typography.vue";
import Form from "@/components/UI/Form.vue";
import Button from "@/components/UI/Button.vue";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__item">
        <RouterLink class="footer__logo"
          ><img src="@i/logo.svg" alt=""
        /></RouterLink>
        <p class="footer__txt">
          Консалтинг по построению системы в отделе продаж для владельцев
          бизнеса с индивидуальным подходом
        </p>
      </div>
      <div class="footer__item">
        <Typography tagName="h3" class="footer__title">
            Категория
        </Typography>
        <ul class="footer__item-list">
            <li><RouterLink to="/" class="footer__item-link">Программы</RouterLink></li>
            <li><RouterLink to="/" class="footer__item-link">Бизнес-энциклопедия</RouterLink></li>
            <li><RouterLink to="/" class="footer__item-link">Мероприятия и вебинары</RouterLink></li>
            <li><RouterLink to="/" class="footer__item-link">Мероприятия и вебинары</RouterLink></li>
            <li><RouterLink to="/" class="footer__item-link">Контакты</RouterLink></li>
        </ul>
      </div>
      <div class="footer__item">
        <Typography tagName="h3" class="footer__title">
            Реквизиты
        </Typography>
        <ul class="footer__item-list">
            <li><RouterLink to="/" class="footer__item-link">ИПР Сбер</RouterLink></li>
            <li><RouterLink to="/" class="footer__item-link">ИНН 213901283019</RouterLink></li>
            <li><RouterLink to="/" class="footer__item-link">ОГР 74567459684</RouterLink></li>
            <li><RouterLink to="/" class="footer__item-link">ОГР 74567459684</RouterLink></li>
            <li><RouterLink to="/" class="footer__item-link">Ташкент, Узбекистан</RouterLink></li>
        </ul>
    </div>
    <Form class="footer__form">
        <Typography tagName="p" class="footer__form-txt">
            Подпишитесь на нашу рассылку и получайте полезные материалы
        </Typography>
        <Input class="footer__form-inp" placeholder="Электронная почта" />
        <Button bg="var(--white)" color="var(--primary-color)" class="footer__form-btn">Подписаться</Button> 
    </Form>
    </div>
  </footer>
</template>
