<template>
  <div class="facebook-post">
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <p class="text-base mb-2">{{ message }}</p>
    <p v-if="author" class="text-sm italic tracking-wide text-gray-700 font-medium">{{ author }}</p>
  </div>
</template>

<script>
export default {
  name: 'FacebookPost',

  props: {
    author: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
