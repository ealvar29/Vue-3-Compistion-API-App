import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB6ZPssq5xvR8LDUh8EX_Co5jk6WN3QeTo",
  authDomain: "vue-firebase-6699c.firebaseapp.com",
  projectId: "vue-firebase-6699c",
  storageBucket: "vue-firebase-6699c.appspot.com",
  messagingSenderId: "1079614699944",
  appId: "1:1079614699944:web:5b36887af4e409ad3e459d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

// export firestore
export { projectFirestore }