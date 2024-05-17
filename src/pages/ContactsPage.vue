<script setup>
import ContactsView from "@/views/contactsView/ContactsView.vue";
import FreetourView from "@/views/freetourView/FreetourView.vue";
import CommunicationView from "@/views/communicationView/CommunicationView.vue";
</script>

<template>
  <main>
    <ContactsView />
    <FreetourView
    inputBg="#24353C"
    inputColor="var(--white)"
    sectionBg="var(--primary-color)"
    titleColor="var(--white)"
    btnBg="var(--white)"
    btnColor="var(--primary-color)"
    />
    <CommunicationView />
  </main>
</template>
