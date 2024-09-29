import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
})
export class TopNavComponent implements OnInit {
  public mainNavigation: MenuItem[];
  public darkMode = false;
  public socialNetworks = [
    {
      label: 'Email',
      icon: 'fa-regular fa-envelope',
      url: 'mailto:mails2nithin@gmail.com',
    },
    {
      label: 'LinkedIn',
      icon: 'fa-brands fa-linkedin-in',
      url: 'https://www.linkedin.com/in/nithinvuideveloper',
    },
    { label: 'Twitter', icon: 'fa-brands fa-x-twitter', url: 'https://x.com/Nithin_V86' },
    { label: 'Github', icon: 'fa-brands fa-github', url: 'https://github.com/nithinv86' },
    {
      label: 'Stackoverflow',
      icon: 'fa-brands fa-stack-overflow',
      url: 'https://stackoverflow.com/users/8904502/nithin-v',
    },
    {
      label: 'Facebook',
      icon: 'fa-brands fa-facebook-f',
      url: 'https://www.facebook.com/nithinvuideveloper',
    },
  ];

  ngOnInit() {
    this.mainNavigation = [
      { label: 'Home' },
      { label: 'About me' },
      { label: 'Services' },
      { label: 'Portfolio' },
      { label: 'Resume' },
      { label: 'Contact me' },
    ];
  }

  public toggleDarkMode(): void {
    console.log(this.darkMode);

    if (this.darkMode) {
      document.querySelector('body').setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('body').setAttribute('data-theme', 'light');
    }
  }
}
