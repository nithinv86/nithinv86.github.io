import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Portfolio',
      description: 'My personal portfolio website.',
      link: 'https://your-portfolio.com',
    },
    {
      name: 'E-commerce App',
      description: 'An online shopping platform.',
      link: 'https://ecommerce.com',
    },
  ];
}
