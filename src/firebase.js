import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCc0b6bQ2i55deMqh6PrCBUd74gIQxWKbc",
    authDomain: "instagram-clone-eb311.firebaseapp.com",
    projectId: "instagram-clone-eb311",
    storageBucket: "instagram-clone-eb311.appspot.com",
    messagingSenderId: "925893193487",
    appId: "1:925893193487:web:766476a28435eff3eb587a",
    measurementId: "G-EF2E7FW3ND"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()

  export { db, auth, storage }
