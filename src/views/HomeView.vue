<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>LOADING...</div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import { ref } from '@vue/reactivity';

export default {
  name: 'HomeView',
  setup() {
    const posts = ref([]);
    const showPosts = ref(true);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts');
        if (!data.ok) {
          throw Error('No data available');
        }
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
      }
    };

    load();

    return { posts, error };
  },
  components: { PostList },
};
</script>
