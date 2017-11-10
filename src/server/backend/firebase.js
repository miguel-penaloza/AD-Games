import Firebase from 'firebase';
import Configuration from '../configuration';

Firebase.initializeApp(Configuration.firebaseConfiguration);
export default Firebase;
