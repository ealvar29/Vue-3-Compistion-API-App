<template>
  <div>
    <PostList v-if="showPosts" :posts="posts"/>
    <button @click="showPosts = !showPosts">Toggle Posts</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed } from 'vue';
import PostList from '../components/PostList.vue';

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([
      { title: 'Welcome to the blog', body: 'Lorem Ipsum', id: 1},
      { title: 'Top 5 CSS Tips', body: 'Lorem Ipsum', id: 2}
    ]);
    const showPosts = ref(true);

  return { posts, showPosts } 
  },
}
</script>
