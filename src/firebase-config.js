// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCznBE6lrZygi8cRovE5S3Hxas3PU7T4G8",
  authDomain: "reactfirebasegalilleo.firebaseapp.com",
  projectId: "reactfirebasegalilleo",
  storageBucket: "reactfirebasegalilleo.appspot.com",
  messagingSenderId: "147453531107",
  appId: "1:147453531107:web:15e207fea82068c72746d6",
  measurementId: "G-PM7H9GRF0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default db; // Para que puedas importar db en otros archivos y acceder a Firestore
