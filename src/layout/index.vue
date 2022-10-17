<template lang="pug">
Header(:isBlock="isFixed")
router-view
ContactForm(v-if="!hiddenInput")
Footer
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/Header/index.vue'
import ContactForm from '@/components/ContactForm/index.vue'
import Footer from '@/components/Footer/index.vue'

const route = useRoute()
const isFixed = computed(() => {
  return !!route.meta.fixed
})
const hiddenInput = computed(() => {
  return !!route.meta.hiddenInput
})
</script>

<style scoped>

</style>
