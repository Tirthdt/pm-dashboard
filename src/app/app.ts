import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ButtonModule, Header],
})
export class App {
  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
  }
}
