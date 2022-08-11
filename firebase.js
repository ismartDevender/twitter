import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDsLtrxqN3A0PZ9Ccn-_lpf6BbrX4w4IgI',
  authDomain: 'twitter011-58d71.firebaseapp.com',
  projectId: 'twitter011-58d71',
  storageBucket: 'twitter011-58d71.appspot.com',
  messagingSenderId: '327495706799',
  appId: '1:327495706799:web:44416a6f9535de7a7b0c5a',
  measurementId: 'G-MHTSGC1KV5',
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
