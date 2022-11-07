import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {

  apiKey: "AIzaSyDVvbuWmpmxb0yuM0RAm1CIWY_zoYTGSYQ",

  authDomain: "whatsapp-clone-2c849.firebaseapp.com",

  projectId: "whatsapp-clone-2c849",

  storageBucket: "whatsapp-clone-2c849.appspot.com",

  messagingSenderId: "344832934479",

  appId: "1:344832934479:web:814cfbfb4d11d39970203a",

  measurementId: "G-QZ0DVJGHHC"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth()

export {app, auth}
