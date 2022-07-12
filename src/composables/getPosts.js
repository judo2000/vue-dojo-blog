import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';
import { query, getDocs, orderBy, collection } from 'firebase/firestore';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const postsRef = collection(projectFirestore, 'posts');
      const q = query(postsRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      //console.log(querySnapshot.docs, 'this is snapshot');
      posts.value = querySnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
