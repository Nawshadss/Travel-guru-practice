// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrfX03jITwlqcoHJMbswBt-tvJDKmsl0s",
  authDomain: "travel-guru-d24d1.firebaseapp.com",
  projectId: "travel-guru-d24d1",
  storageBucket: "travel-guru-d24d1.appspot.com",
  messagingSenderId: "324690697777",
  appId: "1:324690697777:web:caf45734952ea50b2ebf10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
