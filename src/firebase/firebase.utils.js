import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyDzkwjZ1HaTinOZx0u8KcydTZybpPzTHJk",
	authDomain: "crwn-db-1ae55.firebaseapp.com",
	projectId: "crwn-db-1ae55",
	storageBucket: "crwn-db-1ae55.appspot.com",
	messagingSenderId: "897843762517",
	appId: "1:897843762517:web:6441de79a04f33fde18bdc",
	measurementId: "G-Z5LRSSRPFV",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const {displayName, email} = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user ", error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
