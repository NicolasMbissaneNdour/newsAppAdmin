import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsAppAdmin';

  firebaseConfig = {
    apiKey: "AIzaSyC16Yns8q-W21MqwlykDXlpooYru5_cHAo",
    authDomain: "newsapp-ionic.firebaseapp.com",
    databaseURL: "https://newsapp-ionic.firebaseio.com",
    projectId: "newsapp-ionic",
    storageBucket: "newsapp-ionic.appspot.com",
    messagingSenderId: "16958730643",
    appId: "1:16958730643:web:62c080ab97d86e43ebf866",
    measurementId: "G-NLTS8LLQEH"
  };

  app = firebase.initializeApp(this.firebaseConfig);
  analytics = firebase.analytics();
}
