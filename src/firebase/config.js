// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, serverTimestamp } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  // Your configuration that you get from Firebase Console
  apiKey: 'AIzaSyBD0p_OBD1cj_3PUhahVGtHtLorsOtCizU',
  authDomain: 'vue-firebase-sites-54aa6.firebaseapp.com',
  projectId: 'vue-firebase-sites-54aa6',
  storageBucket: 'vue-firebase-sites-54aa6.appspot.com',
  messagingSenderId: '397775656833',
  appId: '1:397775656833:web:f77b2aeed2d196630d3a80',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();

// export firestore
export { projectFirestore, timestamp };
