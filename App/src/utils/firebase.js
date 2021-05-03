
import firebase from 'firebase'
import axios from 'axios'

var firebaseConfig = {
  apiKey: "AIzaSyB47AK0bcA3hNuU3HRhXzALYxP3mB8MxSg",
  authDomain: "bavd-ecommerce.firebaseapp.com",
  projectId: "bavd-ecommerce",
  storageBucket: "bavd-ecommerce.appspot.com",
  messagingSenderId: "613194161870",
  appId: "1:613194161870:web:96f6808176a9d6cd75ba9f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default axios.create({
  baseURL: "https://bavd-ecommerce-default-rtdb.europe-west1.firebasedatabase.app/"
})