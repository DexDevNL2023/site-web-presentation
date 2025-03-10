import { Component, ElementRef, HostListener } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  headerContent = {
    color: '#3D72B4',
    logoUrl: 'assets/img/logo_van.png',
    menuItems: [
      { label: 'Accueil', link: '/', subMenu: [] },
      {
        label: 'À Propos',
        link: '/about',
        subMenu: [
          { id: 'who-we-are', label: 'Qui sommes-nous' },
          { id: 'why-us', label: 'Pourquoi choisir ETS VAN’S SERVICES' }
        ]
      },
      {
        label: 'Ce Que Nous Faisons',
        link: '/service',
        subMenu: [
          { id: 1, label: 'Vente des pièces détachées et accessoires de véhicules' },
          { id: 2, label: 'Vente des mèches brésilienne et indiennes' },
          { id: 3, label: 'Ventes des matériaux d’électricité' },
          { id: 4, label: 'Pressing' }
        ]
      },
      { label: 'Carrières', link: '/career', subMenu: [] }
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
