import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public skills = [
    {
      label: 'HTML',
      icon: 'fa-brands fa-html5',
      class:
        'flex align-items-center justify-content-center w-3rem h-3rem border-circle absolute bg-black-alpha-30 icon text-white text-4xl',
    },
    {
      label: 'CSS',
      icon: 'fa-brands fa-css3-alt',
      class:
        'flex align-items-center justify-content-center w-3rem h-3rem border-circle absolute bg-black-alpha-30 icon text-white text-4xl',
    },
    {
      label: 'JavaScript',
      icon: 'fa-brands fa-js',
      class:
        'flex align-items-center justify-content-center w-3rem h-3rem border-circle absolute bg-black-alpha-30 icon text-white text-4xl',
    },
    {
      label: 'Angular',
      icon: 'fa-brands fa-angular',
      class:
        'flex align-items-center justify-content-center w-3rem h-3rem border-circle absolute bg-black-alpha-30 icon text-white text-4xl',
    },
    {
      label: 'Vue',
      icon: 'fa-brands fa-vuejs',
      class:
        'flex align-items-center justify-content-center w-3rem h-3rem border-circle absolute bg-black-alpha-30 icon text-white text-4xl',
    },
    {
      label: 'Node',
      icon: 'fa-brands fa-node-js',
      class:
        'flex align-items-center justify-content-center w-3rem h-3rem border-circle absolute bg-black-alpha-30 icon text-white text-4xl',
    },
    {
      label: 'React',
      icon: 'fa-brands fa-react',
      class:
        'flex align-items-center justify-content-center w-3rem h-3rem border-circle absolute bg-black-alpha-30 icon text-white text-4xl',
    },
    {
      label: 'Flutter',
      icon: 'fa-brands fa-flutter',
      class:
        'flex align-items-center justify-content-center w-3rem h-3rem border-circle absolute bg-black-alpha-30 icon text-white text-4xl',
    },
  ];
}
