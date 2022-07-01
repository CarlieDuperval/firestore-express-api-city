import  { initializeApp, cert, getApps } from "firebase-admin/app"
import { getFirestore }  from "firebase-admin/firestore"
import myCredentials from "../../credentials.js"


	
export default function connectDb() {  // if there any app in this project initialize , connect to firestore
    if(getApps().length === 0){
        initializeApp({
            credential: cert(myCredentials)
        })
    }
    return getFirestore();  
}



