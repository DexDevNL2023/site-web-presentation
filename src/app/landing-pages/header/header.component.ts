import { Component, ElementRef, HostListener } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  headerContent = {
    color: '#3D72B4',
    logoUrl: 'assets/img/logo.png',
    menuItems: [
      { label: 'Accueil', link: '/', subMenu: [] },
      {
        label: 'À Propos',
        link: '/about',
        subMenu: [
          { id: 'who-we-are', label: 'Qui sommes-nous' },
          { id: 'why-us', label: 'Pourquoi choisir IT-Consulting Teleo' }
        ]
      },
      {
        label: 'Ce Que Nous Faisons',
        link: '/service',
        subMenu: [
          { id: 1, label: 'Cloud computing' },
          { id: 2, label: 'Cybersécurité' },
          { id: 3, label: 'Ingénierie Réseau' },
          { id: 4, label: 'Formation' },
          { id: 5, label: 'Développement Web' },
          { id: 6, label: 'Développement d\'Applications' },
          { id: 7, label: 'Intelligence Artificielle' }
        ]
      },
      { label: 'Carrières', link: '/career', subMenu: [] }/* ,
      { label: 'Contacts', link: '/contact', subMenu: [] } */
    ]
  };
  menuItemSelected: { label: string, link: string, subMenu: { id: number, label: string }[] } = { label: 'Home', link: '/', subMenu: [] };
  dropdownVisible = false;
  mobileMenuVisible = false;

  constructor(public appMain: MainComponent, private el: ElementRef) {
    // Ajoutez l'écouteur d'événement de défilement à la fenêtre
    window.addEventListener('scroll', () => this.onWindowScroll());
  }

  ngOnInit(): void {
    this.menuItemSelected = { label: 'Home', link: '/', subMenu: [] };
  }

  // Fonction pour gérer le défilement de la page
  onWindowScroll() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
      // Vérifiez si le clic n'est pas à l'intérieur du menu
      if (!this.el.nativeElement.contains(event.target)) {
          this.dropdownVisible = false;
      }
  }

  toggleDropdown(menuItem: { label: string, link: string, subMenu: { id: number, label: string }[] }): void {
      this.menuItemSelected = menuItem;
      this.dropdownVisible = !this.dropdownVisible;
  }

  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }
}
