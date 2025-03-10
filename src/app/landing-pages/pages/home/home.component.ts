import { MainComponent } from './../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  heroContent = {
    title: "Venez découvrir nos services",
    spanText: "ETS VAN’S SERVICES",
    description: "Chez ETS VAN’S SERVICES, nous proposons des solutions variées pour répondre à vos besoins. Nous nous engageons à offrir des produits et services de qualité pour améliorer votre quotidien.",
    buttonText: "En savoir plus",
    buttonLink: "about",
    backgroundImage: 'assets/img/bg12.avif'
  };

  servicesContent = {
    title: "Pourquoi choisir ETS VAN’S SERVICES ?",
    description: "Nous vous offrons une large gamme de produits et services, allant de la vente de pièces détachées à la vente de mèches, en passant par des matériaux électriques et des services de pressing de qualité.",
    services: [
      {
        id: 1,
        icon: "assets/img/services/vehicle_parts.jpg", // Icone pour pièces détachées
        title: "Vente des pièces détachées et accessoires de véhicules",
        description: "Nous vous proposons un large choix de pièces détachées et accessoires pour vos véhicules, garantissant qualité et performance pour votre automobile.",
        color: "blue",
        delay: 200
      },
      {
        id: 2,
        icon: "assets/img/services/hair_weaves.jpg", // Icone pour les mèches
        title: "Vente des mèches brésilienne et indiennes",
        description: "Découvrez nos mèches brésiliennes et indiennes, réputées pour leur qualité et leur durabilité, pour sublimer vos cheveux avec élégance.",
        color: "dark-blue",
        delay: 300
      },
      {
        id: 3,
        icon: "assets/img/services/electric_materials.jpg", // Icone pour matériaux d'électricité
        title: "Ventes des matériaux d’électricité",
        description: "Nous vous fournissons des matériaux d'électricité de qualité pour vos installations domestiques et professionnelles.",
        color: "dark-blue",
        delay: 400
      },
      {
        id: 4,
        icon: "assets/img/services/pressing.jpg", // Icone pour Pressing
        title: "Pressing",
        description: "Nous offrons des services de pressing professionnels, assurant des vêtements impeccables et bien entretenus.",
        color: "blue",
        delay: 500
      }
    ]
  };

  aboutContent = {
    title: "À propos de nous",
    description: [
      {
        text: `
          ETS VAN’S SERVICES est une entreprise spécialisée dans le commerce général et les prestations de services. Nous offrons des produits de qualité et des services professionnels pour répondre à tous vos besoins.
        `
      },
      {
        text: `
          Que vous soyez à la recherche de pièces détachées pour votre véhicule, de mèches pour vos besoins de coiffure, de matériaux électriques ou de services de pressing, nous avons les solutions pour vous. Notre équipe travaille avec passion pour vous offrir des produits de qualité supérieure et des services personnalisés.
        `
      }
    ],
    imageUrl: "assets/img/logo_van (2).png"
  };

  testimonialsContent = {
    title: "Ce que disent nos clients !",
    description: "Nos clients satisfaits",
    testimonials: [
      {
        stars: 5,
        comment: "ETS VAN’S SERVICES a été d'une grande aide pour mon véhicule. Les pièces détachées sont de très bonne qualité et le service client est excellent.",
        imageUrl: "assets/img/testimonials/testimonials-1.jpg",
        name: "Jean Dupont",
        position: "Client automobile"
      },
      {
        stars: 4,
        comment: "Les mèches brésiliennes que j'ai achetées sont incroyables ! Elles sont douces et faciles à poser. Je recommande fortement.",
        imageUrl: "assets/img/testimonials/testimonials-2.jpg",
        name: "Marie Lefebvre",
        position: "Client beauté"
      },
      {
        stars: 5,
        comment: "Le service de pressing d'ETS VAN’S SERVICES est parfait. Mes vêtements ressortent impeccables et en parfait état à chaque fois.",
        imageUrl: "assets/img/testimonials/testimonials-3.jpg",
        name: "Paul Martin",
        position: "Client pressing"
      },
      {
        stars: 5,
        comment: "J'ai acheté des matériaux électriques chez ETS VAN’S SERVICES pour rénover mon installation domestique. Les produits sont fiables et l'assistance technique est de qualité.",
        imageUrl: "assets/img/testimonials/testimonials-4.jpg",
        name: "Sophie Durand",
        position: "Client matériaux électriques"
      },
      {
        stars: 5,
        comment: "Les mèches indiennes que j'ai reçues sont magnifiques. Elles ajoutent du volume et de la brillance à mes cheveux. Très satisfait de mon achat !",
        imageUrl: "assets/img/testimonials/testimonials-5.jpg",
        name: "Clara Bernard",
        position: "Client beauté"
      },
      {
        stars: 4,
        comment: "Le service après-vente pour les pièces détachées de mon véhicule était réactif et compétent. Je recommande vivement cette entreprise pour tous vos besoins automobiles.",
        imageUrl: "assets/img/testimonials/testimonials-6.jpg",
        name: "Marc Lefevre",
        position: "Client automobile"
      }
    ]
  };

  constructor(public appMain: MainComponent) { }

  ngOnInit(): void {
    AOS.init();
  }

  getStarsArray(stars: number): number[] {
      return Array(stars).fill(0);
  }
}
