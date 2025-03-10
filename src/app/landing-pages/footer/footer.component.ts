import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
    footerContent = {
        color: '#3D72B4',
        interestedTitle: 'Intéressé par nos services ?',
        interestedDescription: 'Contactez-nous dès aujourd\'hui !',
        contactButtonText: 'Contactez-nous',
        logoUrl: 'assets/img/logo.png',
        usefulLinks: [
          { label: 'Accueil', link: '/', subMenu: [] },
          { label: 'À Propos', link: '/about', subMenu: [
            { id: 'who-we-are', label: 'Qui sommes-nous' },
            { id: 'why-us', label: 'Pourquoi choisir ETS VAN’S SERVICES' },
          ] },
          { label: 'Carrières', link: '/career', subMenu: [] },
          { label: 'Contacts', link: '/contact', subMenu: [] }
        ],
        whatWeDo: [
          { id: 1, label: 'Vente des pièces détachées et accessoires de véhicules', link: '/service' },
          { id: 2, label: 'Vente des mèches brésiliennes et indiennes', link: '/service' },
          { id: 3, label: 'Vente des matériaux d’électricité', link: '/service' },
          { id: 4, label: 'Pressing', link: '/service' }
        ],
        address: 'Ndokoti, Douala - Cameroun',
        phone: '+237 690624449 / +237 653383054',
        email: 'ovanluv@yahoo.fr',
        copyright: 'ETS VAN’S SERVICES © 2023'
    };
  menuItemSelected: { label: string, link: string, subMenu: { id: number, label: string }[] };
  dropdownVisible = false;

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
  }

  toggleDropdown(menuItem: { label: string, link: string, subMenu: { id: number, label: string }[] }): void {
      this.menuItemSelected = menuItem;
      this.dropdownVisible = !this.dropdownVisible;
      console.log(this.menuItemSelected.subMenu);
  }
}
