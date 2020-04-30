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

    <div class="mb-8 sm:mb-16 px-4 sm:px-0" v-html="$page.allHero.edges[0].node.content" />

    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 row-gap-8 sm:row-gap-12 px-4 sm:px-0">
      <facebook-post
        v-for="post in $page.allPost.edges"
        :key="post.id"
        :post="post.node"
      />
    </div>
  </Layout>
</template>

<page-query>
query {
  allHero {
    edges {
      node {
        id,
        content
      }
    }
  }
  allPost {
    edges {
      node {
        id,
        author,
        message,
        image
      }
    }
  }
}
</page-query>

<script>
import FacebookPost from '@/components/FacebookPost'

export default {
  name: 'Homepage',
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
