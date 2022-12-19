import * as auth from 'firebase/auth'
import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { User } from '../models/User';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';


@Injectable({
    providedIn:'root'
})
export class AuthService{

    userData:any

    constructor(
        public angularFireStore: AngularFirestore,
        public angularFireAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone
    ){
        this.angularFireAuth.authState.subscribe((user) => {
            if(user){
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user')!);
            }
            else{
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        })
    }

    signUp(email:string, password: string){
        return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            this.sendVerificationMail();
            this.setUserData(result.user);
        })
        .then(() => {
            window.confirm("Thanks for Registering. Please verify your email address.");
        })
    }

    sendVerificationMail(){
        return this.angularFireAuth.currentUser
        .then((u:any) => u.sendEmailVerification())
    }

    setUserData(user:any){
        const userRef: AngularFirestoreDocument<any> = this.angularFireStore.doc(`users/${user.uid}`);

        const userData: User = {
            uid:user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        
        return userRef.set(userData, {
            merge:true,
        });
    }

    signIn(email:string, password:string){
        return this.angularFireAuth
        .signInWithEmailAndPassword(email,password)
        .then((result) =>{
            this.setUserData(result.user);
        })
        .catch((error)=>{
            window.alert(error);
        });
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user')!);
        return user != null && user.emailVerified !== false ? true : false;
    }

    // getToken(){
    //     const user = JSON.parse(localStorage.getItem('user')!);
    //     const token = user !== null ? user.stsTokenManager.accessToken : null;
    //     return token;
    // }
}