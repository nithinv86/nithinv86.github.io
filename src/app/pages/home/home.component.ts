import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public squares = Array(10).fill('');
  public iconClass =
    'flex align-items-center justify-content-center w-3rem h-3rem -mt-4 -ml-4 border-circle absolute icon text-white text-4xl';
  public skills = [
    {
      label: 'HTML',
      icon: 'fa-brands fa-html5',
      color: '#e94108',
      skill: 4.5,
    },
    {
      label: 'CSS',
      icon: 'fa-brands fa-css3-alt',
      color: '#5600f5',
      skill: 4.5,
    },
    {
      label: 'JavaScript',
      icon: 'fa-brands fa-js',
      color: '#f0f108',
      skill: 4.5,
    },
    {
      label: 'Angular',
      icon: 'fa-brands fa-angular',
      color: '#dd0031',
      skill: 4,
    },
    {
      label: 'React js',
      icon: 'fa-brands fa-react',
      color: '#08c889',
      skill: 3,
    },
    {
      label: 'Node js',
      icon: 'fa-brands fa-node-js',
      color: '#6fd208',
      skill: 3.5,
    },
    {
      label: 'Express js',
      icon: 'fa-brands fa-js',
      color: '#7fddff',
      skill: 4,
    },
    {
      label: 'MongoDB',
      icon: 'fa-solid fa-database',
      color: '#44b1fa',
      skill: 3,
    },
  ];
}
