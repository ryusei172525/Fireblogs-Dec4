import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgAc5rJtX9788JS-9CXpNblSlnNj8ag-M",
  authDomain: "fireblogsyt-e0eb0.firebaseapp.com",
  projectId: "fireblogsyt-e0eb0",
  storageBucket: "fireblogsyt-e0eb0.appspot.com",
  messagingSenderId: "30199423477",
  appId: "1:30199423477:web:9543e93a5eb008ca0940bc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();