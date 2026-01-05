import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        routerLink: '/',
      },

      {
        label: 'Projects',
        icon: PrimeIcons.ENVELOPE,
        routerLink: 'projects/',
      },

      {
        label: 'Toggle',
        icon: PrimeIcons.SUN,
        command: (event) => this.toggleDarkMode(),
      },
    ];
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
  }
}
