<template>
  <div class="home">
    <h1>Home</h1>
    <PostList :posts="posts" v-if="showPosts" />
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue';
import { ref } from '@vue/reactivity';

export default {
  name: 'HomeView',
  setup() {
    const posts = ref([
      {
        title: 'welcome to the blog',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In atque iste error voluptatem! Error nobis praesentium blanditiis illo quidem, cupiditate deserunt distinctio molestias non, dolorum sit asperiores esse harum iure aperiam? Debitis facere obcaecati hic quibusdam, modi error esse dolores reiciendis laborum magni eaque adipisci praesentium laboriosam inventore quo.',
        id: 1,
      },
      {
        title: 'top 5 CSS tips',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In atque iste error voluptatem! Error nobis praesentium blanditiis illo quidem, cupiditate deserunt distinctio molestias non, dolorum sit asperiores esse harum iure aperiam? Debitis facere obcaecati hic quibusdam, modi error esse dolores reiciendis laborum magni eaque adipisci praesentium laboriosam inventore quo.',
        id: 2,
      },
    ]);
    const showPosts = ref(true);
    return { posts, showPosts };
  },
  components: { PostList },
};
</script>
