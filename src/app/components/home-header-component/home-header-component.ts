import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-header-component',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './home-header-component.html',
  styleUrl: './home-header-component.css',
})
export class HomeHeaderComponent {
  isDarkMode = false;
  mobileMenuOpen: boolean = false;

  navLinks = [
    {
      id: 1,
      name: 'Medicine',
      url: '/medicine',
      icon: 'ti ti-medicine-syrup',
    },
    {
      id: 2,
      name: 'Find Doctors',
      url: '/',
      icon: 'ti ti-user',
    },
    {
      id: 3,
      name: 'Find Labs',
      url: '/',
      icon: 'ti ti-microscope',
    },
    {
      id: 4,
      name: 'Health records',
      url: '/',
      icon: 'ti ti-heartbeat',
    },
    {
      id: 5,
      name: 'Offers',
      url: '/',
      icon: 'ti ti-discount',
    },
    {
      id: 6,
      name: 'Healthcare',
      url: '/',
      icon: 'ti ti-pills',
    },
  ];

  constructor() {}

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
}
