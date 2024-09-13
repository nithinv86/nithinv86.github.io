import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public iconClass =
    'flex align-items-center justify-content-center w-3rem h-3rem -mt-4 -ml-4 border-circle absolute bg-black-alpha-30 icon text-white text-4xl';
  public skills = [
    {
      label: 'HTML',
      icon: 'fa-brands fa-html5',
      color: '#e94108',
    },
    {
      label: 'CSS',
      icon: 'fa-brands fa-css3-alt',
      color: '#5600f5',
    },
    {
      label: 'JavaScript',
      icon: 'fa-brands fa-js',
      color: '#f0f108',
    },
    {
      label: 'Angular',
      icon: 'fa-brands fa-angular',
      color: '#dd0031',
    },
    {
      label: 'Vue js',
      icon: 'fa-brands fa-vuejs',
      color: '#08c889',
    },
    {
      label: 'Node js',
      icon: 'fa-brands fa-node-js',
      color: '#6fd208',
    },
    {
      label: 'React js',
      icon: 'fa-brands fa-react',
      color: '#7fddff',
    },
    {
      label: 'Flutter',
      icon: 'fa-brands fa-flutter',
      color: '#44b1fa',
    },
  ];
}
