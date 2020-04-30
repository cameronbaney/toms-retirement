<template>
  <div class="facebook-post">
    <g-image v-if="postImage" alt="Example image" :src="postImage" />
    <p class="text-base mb-2">{{ post.message }}</p>
    <p v-if="author" class="text-sm italic tracking-wide text-gray-700 font-medium">{{ post.author }}</p>
  </div>
</template>

<script>
export default {
  name: 'FacebookPost',

  props: {
    post: {
      type: Object,
      default: () => {
        return {
          author: '',
          message: '',
          image: ''
        }
      }
    }
  },

  computed: {
    postImage: function() {
      return this.post.image ? this.post.image : ''
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
