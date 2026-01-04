import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
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
        icon: 'pi pi-home',
      },

      {
        label: 'Projects',
        icon: 'pi pi-search',
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
    ];
  }
}
