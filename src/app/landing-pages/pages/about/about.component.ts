import { ActivatedRoute } from '@angular/router';
import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {

  heroContent = {
    title: "À propos",
    spanText: "de nous",
    backgroundImage: 'assets/img/bg_pressing.jpg'
  };

  aboutContent: { title: string, description: { text: string }[], imageUrl: string } = {
    title: "Qui sommes-nous ?",
    description: [
      {
        text: `ETS VAN’S SERVICES, votre partenaire de confiance, vous propose une gamme variée de produits et services de qualité pour répondre à tous vos besoins :`
      },
      {
        text: `✅ Vente de pièces détachées et accessoires pour véhicules – Des produits fiables et performants pour assurer la longévité et la sécurité de votre automobile.`
      },
      {
        text: `✅ Vente de mèches brésiliennes et indiennes – Des mèches 100% naturelles, de haute qualité, pour une chevelure sublime et soignée.`
      },
      {
        text: `✅ Vente de matériaux d’électricité – Un large choix de produits électriques adaptés aux professionnels et aux particuliers, garantissant sécurité et efficacité.`
      },
      {
        text: `✅ Service de pressing – Un nettoyage soigné et professionnel pour vos vêtements et textiles, avec des produits respectueux des fibres et de l’environnement.`
      },
      {
        text: `📍Avec ETS VAN’S SERVICES, bénéficiez d’un service client à l’écoute et de produits sélectionnés avec soin pour vous offrir le meilleur.`
      }
    ],
    imageUrl: "assets/img/logo_van (2).png"
  };

  aboutId: string | null = null;

  constructor(public appMain: MainComponent, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.aboutId = params.get('id');
        console.log(this.aboutId);
    });
    AOS.init();
  }

  ngAfterViewInit(): void {
    if (this.aboutId) {
      setTimeout(() => {
        this.scrollTo(this.aboutId);
      }, 500); // Ajout d'un délai pour s'assurer que le DOM est prêt
    }
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
