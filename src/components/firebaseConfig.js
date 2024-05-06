import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCznBE6lrZygi8cRovE5S3Hxas3PU7T4G8",
    authDomain: "reactfirebasegalilleo.firebaseapp.com",
    projectId: "reactfirebasegalilleo",
    storageBucket: "reactfirebasegalilleo.appspot.com",
    messagingSenderId: "147453531107",
    appId: "1:147453531107:web:15e207fea82068c72746d6",
    measurementId: "G-PM7H9GRF0R"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; // Para que puedas importar db en otros archivos y acceder a Firestore
