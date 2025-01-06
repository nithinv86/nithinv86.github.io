import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Menu, MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, MenuModule, TooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent implements AfterViewInit {
  public items: MenuItem[] | undefined;
  @ViewChild('menu') menu!: Menu;

  constructor() {
    this.items = [
      {
        label: 'About',
        icon: '&nbsp;',
        routerLink: '/about',
        shortcut: '⌘+A',
      },
      {
        label: 'Projects',
        icon: '&nbsp;',
        routerLink: '/projects',
        shortcut: '⌘+P',
      },
      {
        label: 'Contact',
        icon: '&nbsp;',
        routerLink: '/contact',
        shortcut: '⌘+C',
      },
    ];
  }

  ngAfterViewInit(): void {
    const firstMenuItem = this.menu.el.nativeElement.querySelector('.p-menu-item');

    if (firstMenuItem) {
      firstMenuItem.classList.add('p-focus');
    }
  }
}
