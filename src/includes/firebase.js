import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD9I89FK_cPgtuVHXkUYPf0JmWFEMzoaIU',
  authDomain: 'invoice-app---john-komarnicki.firebaseapp.com',
  projectId: 'invoice-app---john-komarnicki',
  storageBucket: 'invoice-app---john-komarnicki.appspot.com',
  messagingSenderId: '298549270784',
  appId: '1:298549270784:web:9dc8baff8d8a77461fbbe5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
