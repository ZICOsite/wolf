<script setup>
import Modal from '@/components/UI/Modal.vue'
import Input from './Input.vue';
import Typography from './Typography.vue';
import Button from './Button.vue';
import Form from './Form.vue';

</script>
<template>
    <Modal>
        <Form>
            <Typography tag-name="h2" class="form__title">Введите код подтверждения</Typography>
            <Input placeholder="Код подтверждения" />
            <Button bg="var(--white)" color="var(--primary-color)">Скачать</Button>
        </Form>
    </Modal>
</template>


<style lang="scss" scoped>

</style>