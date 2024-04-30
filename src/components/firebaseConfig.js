import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGJrZA8Bt9cw6AYA1LXmzLn5WY3BMmh08",
    authDomain: "galileo-g2.firebaseapp.com",
    databaseURL: "https://galileo-g2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "galileo-g2",
    storageBucket: "galileo-g2.appspot.com",
    messagingSenderId: "310661878440",
    appId: "1:310661878440:web:82a3c622e62f73c2bce89d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; // Para que puedas importar db en otros archivos y acceder a Firestore
