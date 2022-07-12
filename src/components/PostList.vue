<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';
import SinglePost from './SinglePost.vue';
import Spinner from './Spinner.vue';
export default {
  props: ['posts'],
  components: { SinglePost, Spinner },
  setup(props) {},
};
</script>

<style></style>
