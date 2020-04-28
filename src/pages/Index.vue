<template>
  <Layout>
    <div class="mb-8">
      <g-image
        class="w-full object-fill"
        alt="Example image"
        src="https://www.fillmurray.com/1280/400"
        width="1024"
      />
    </div>

    <div class="mb-8 sm:mb-16 px-4 sm:px-0">
      <h2 class="text-3xl sm:text-6xl font-bold">Lorem Ipsum</h2>
      <p class="text-xl sm:text-2xl font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe odio totam harum esse cumque, sint sequi dignissimos? Ipsam incidunt, molestias saepe, quas porro sint delectus ut quidem nam officiis excepturi?</p>
    </div>

    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 row-gap-8 sm:row-gap-12 px-4 sm:px-0">
      <facebook-post />
      <facebook-post />
      <facebook-post />
      <facebook-post />
      <facebook-post />
      <facebook-post />
      <facebook-post />
      <facebook-post />
      <facebook-post />
      <facebook-post />
      <facebook-post />
    </div>
  </Layout>
</template>

<script>
import FacebookPost from '@/components/FacebookPost'

export default {
  components: {
    FacebookPost
  },

  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
