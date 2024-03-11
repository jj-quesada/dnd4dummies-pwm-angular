import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AuthenticationFirebaseService } from './services/firebase/authentication/authentication-firebase.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConf } from '@data/constanst/environment';
import { FirestoreService } from './services/firebase/firestore/firestore.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    provideFirebaseApp(() => initializeApp(firebaseConf)),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers:[
    ScreenTrackingService,
    UserTrackingService,
    AuthenticationFirebaseService,
    FirestoreService
  ],
  exports: []
  
})
export class CoreModule { }