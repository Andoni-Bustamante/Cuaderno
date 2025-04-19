import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAYVQnRZZuvcCIjGvNbvspKstLjpXCRhfw",
  authDomain: "cuadernofriki.firebaseapp.com",
  projectId: "cuadernofriki",
  storageBucket: "cuadernofriki.firebasestorage.app",
  messagingSenderId: "1068489135368",
  appId: "1:1068489135368:web:d7dac2089943ec2d3288bd",
  measurementId: "G-BP63D9J91X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Manhwas';
}
