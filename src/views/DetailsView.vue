<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick">Delete Post</button>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import getPost from '../composables/getPost';
import Spinner from '@/components/Spinner.vue';
import { useRoute, useRouter } from 'vue-router';
import { getFirestore, doc, deleteDoc } from 'firebase/firestore';

export default {
  props: ['id'],
  setup(props) {
    const route = useRoute();
    const { post, error, load } = getPost(route.params.id);
    load();

    const router = useRouter();

    const handleClick = async () => {
      const db = getFirestore();

      const docRef = doc(db, 'posts', props.id);
      console.log(docRef);
      await deleteDoc(docRef);
      router.push({ name: 'Home' });
    };
    return { post, error, handleClick };
  },
  components: { Spinner },
};
</script>

<style>
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
</style>
