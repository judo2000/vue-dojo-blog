import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      // simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });

      const postRef = doc(projectFirestore, 'posts', id);
      let postSnapshot = await getDoc(postRef);
      console.log(postSnapshot);
      if (!postSnapshot._document) {
        throw Error('That post does not exist');
      }
      post.value = { ...postSnapshot.data(), id: postSnapshot.id };
    } catch (err) {
      error.value = err.message;
      console.log(err);
    }
  };

  return { post, error, load };
};

export default getPost;
