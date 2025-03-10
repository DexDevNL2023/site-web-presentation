import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AOS from "aos";


@Component({
  selector: 'app-whatwedo',
  templateUrl: './whatwedo.component.html'
})
export class WhatwedoComponent {
  heroContent = {
    title: "ETS VAN’S SERVICES",
    spanText: "Des OFFRETS de qualité",
    description: "ETS VAN’S SERVICES est une entreprise de commerce général et de prestations de services, proposant une large gamme de produits et services adaptés à vos besoins. Nous nous engageons à offrir des solutions de qualité et un service client irréprochable.",
    buttonText: "Découvrir nos services",
    buttonLink: "/services",
    backgroundImage: ''
  };

  whatwedoContents = [
    {
        id: 1,
        title: "🚗 Vente des pièces détachées et accessoires de véhicules",
        description: [
          {
            text: "🔧 Nous vous proposons un large choix de pièces détachées et accessoires pour vos véhicules, garantissant qualité et performance pour votre automobile 🏎️💨"
          }
        ],
        imageUrl: "assets/img/services/vehicle_parts.jpg",
        sections: [
          {
            title: "⚙️ Pièces Moteur",
            description: "🔩 Des pièces de moteur adaptées à tous les types de véhicules, avec des prix compétitifs et des réductions 💰 sur les achats en gros.",
            subSections: [
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "💦 Pompe à Eau",
                description: "Pompe à eau compatible avec tous types de moteurs; 💵 Prix : **32 500 FCFA**; Réduction de **10%** sur commande groupée 🔥",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "⛓️ Courroie de Distribution",
                description: "Courroie de distribution haute qualité pour assurer la longévité de votre moteur; 💵 Prix : **22 750 FCFA**; Réduction de **5%** pour les achats en gros ✅",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "🔥 Bougies d’Allumage",
                description: "Bougies haute performance pour une meilleure combustion; 💵 Prix : **9 750 FCFA**; Réduction de **10%** à partir de 4 bougies 🚗💨",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "🛢️ Filtre à Huile",
                description: "Filtre à huile de haute qualité pour moteur essence et diesel; 💵 Prix : **13 000 FCFA**; Remise de **5%** dès 3 unités achetées 🚛",
                color: "blue"
              }
            ]
          },
          {
            title: "🛠️ Accessoires Divers",
            description: "🛒 Une sélection d’accessoires comme des batteries, des pneus et bien plus encore pour améliorer votre confort de conduite.",
            subSections: [
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "🔋 Batteries",
                description: "Batteries haute performance pour tous véhicules; 💵 Prix : **78 000 FCFA**; Garantie **2 ans** ⚡🔌",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "🚗 Pneus",
                description: "Pneus résistants à toutes conditions météorologiques; 💵 Prix : **45 500 FCFA**; Réduction de **15%** pour un lot de **4 pneus** 🏁",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "🚿 Balais d’Essuie-Glace",
                description: "Essuie-glaces résistants aux intempéries 🌧️; 💵 Prix : **16 250 FCFA**; Réduction de **10%** pour **2 paires** 👀",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "🛋️ Tapis de Voiture",
                description: "Tapis antidérapants et résistants; 💵 Prix : **26 000 FCFA**; Réduction de **5%** sur un **set complet** 🏎️💨",
                color: "blue"
              }
            ]
          },
          {
            title: "🚦 Pièces de Freinage",
            description: "🛑 Systèmes de freinage de haute qualité pour garantir **votre sécurité** sur la route.",
            subSections: [
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "🔴 Plaquettes de Frein",
                description: "Plaquettes haute performance pour un freinage optimal; 💵 Prix : **39 000 FCFA**; Réduction de **10%** à partir de **2 jeux** ✅",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "🛠️ Disques de Frein",
                description: "Disques en acier robuste pour une durabilité maximale; 💵 Prix : **52 000 FCFA**; Réduction de **5%** pour **2 unités** 🚗",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "🛢️ Liquide de Frein",
                description: "Liquide de frein DOT 4 haute performance; 💵 Prix : **9 750 FCFA**; Réduction de **5%** sur **3 bouteilles** 🏁",
                color: "dark-blue"
              }
            ]
          },
          {
            title: "💡 Éclairage & Signalisation",
            description: "🌟 Équipements pour **améliorer la visibilité** et la signalisation de votre véhicule de jour comme de nuit.",
            subSections: [
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "🔆 Ampoules LED",
                description: "Ampoules LED ultra-lumineuses pour phares et feux arrière; 💵 Prix : **19 500 FCFA**; Réduction de **10%** pour **2 paires** 🌙",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "🌫️ Feux de Brouillard",
                description: "Feux de brouillard puissants pour une meilleure visibilité; 💵 Prix : **32 500 FCFA**; Réduction de **5%** pour **2 unités** 🚗",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/vehicle_parts.jpg",
                title: "🪞 Rétroviseurs LED",
                description: "Rétroviseurs équipés de LED pour une signalisation optimale; 💵 Prix : **45 500 FCFA**; Réduction de **10%** pour un **lot de 2** 🔦",
                color: "dark-blue"
              }
            ]
          }
        ]
      }
      ,
      {
        id: 2,
        title: "✨ Vente des Mèches Brésiliennes et Indiennes ✨",
        description: [
          {
            "text": "💇‍♀️ Sublimez votre coiffure avec nos mèches brésiliennes et indiennes haut de gamme ! Douces, soyeuses et ultra-résistantes, elles s’adaptent à toutes vos envies 💖."
          }
        ],
        imageUrl: "assets/img/services/hair_weaves.jpg",
        sections: [
          {
            title: "💎 Mèches Brésiliennes - Luxe & Volume",
            description: "Optez pour la perfection avec nos mèches brésiliennes de qualité premium, durables et faciles à coiffer ! ✨",
            subSections: [
              {
                imgSrc: "assets/img/services/hair_weaves.jpg",
                title: "🌟 Mèches Lisses",
                description: "Ultra naturelles et brillantes, parfaites pour un look chic ! Prix : 65 000 FCFA; 🔥 Promo : -10% dès 3 paquets !",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/hair_weaves.jpg",
                title: "💃 Mèches Bouclées",
                description: "Donnez du volume à votre coiffure avec nos mèches bouclées ! Prix : 78 000 FCFA; 🎉 Promo : -15% dès 5 paquets !",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/hair_weaves.jpg",
                title: "🌊 Mèches Ondulées",
                description: "Des ondulations sublimes pour un effet glamour assuré ! Prix : 72 000 FCFA; ⭐ Promo : -10% dès 4 paquets !",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/hair_weaves.jpg",
                title: "🔥 Mèches Frisées",
                description: "Volume & définition pour une coiffure audacieuse ! Prix : 85 000 FCFA; ✨ Promo : -5% dès 3 paquets !",
                color: "blue"
              }
            ]
          },
          {
            title: "🌿 Mèches Indiennes - Douceur & Élégance",
            description: "Découvrez nos mèches indiennes 100% naturelles, légères et soyeuses pour un effet irrésistible ! 💕",
            subSections: [
              {
                imgSrc: "assets/img/services/hair_weaves.jpg",
                title: "🖤 Mèches Lisses",
                description: "Sublimez votre look avec ces mèches ultra-brillantes ! Prix : 58 000 FCFA; 💝 Promo : -5% dès 2 paquets !",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/hair_weaves.jpg",
                title: "💫 Mèches Ondulées",
                description: "Un effet wavy naturel et chic ! Prix : 72 000 FCFA; 🎁 Promo : -10% dès 3 paquets !",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/hair_weaves.jpg",
                title: "🔥 Mèches Frisées",
                description: "Idéal pour un volume XXL et une tenue longue durée ! Prix : 75 000 FCFA; 🛍️ Promo : -10% dès 5 paquets !",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/hair_weaves.jpg",
                title: "✨ Mèches Texturées",
                description: "Un look unique et naturel garanti ! Prix : 65 000 FCFA; 🎊 Promo : -5% dès 4 paquets !",
                color: "blue"
              }
            ]
          }
        ]
      }
      ,
      {
        id: 3,
        title: "⚡ Vente des matériaux d’électricité",
        description: [
          {
            "text": "🔌 Nous vous fournissons des matériaux d'électricité de qualité pour vos installations domestiques et professionnelles."
          }
        ],
        imageUrl: "assets/img/services/electric_materials.jpg",
        sections: [
          {
            title: "⚡ Câbles et Fils",
            description: "🛠️ Câbles et fils électriques pour tous vos projets d'installation, avec des prix attractifs.",
            subSections: [
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "🔋 Câbles à Haute Tension",
                description: "Câbles pour installations à haute tension; 💰 Prix : 130 000 FCFA/mètre; ⚡ Réduction de 10% sur commandes de plus de 100 mètres !",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "🧵 Fils Conducteurs",
                description: "Fils conducteurs pour installations électriques diverses; 💰 Prix : 19 500 FCFA/mètre; 📢 Promo : 5% de remise sur les achats en gros !",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "🌐 Câbles Réseaux",
                description: "Câbles de communication pour réseaux informatiques et téléphoniques; 💰 Prix : 29 250 FCFA/mètre; 🎁 Offre spéciale sur commandes de plus de 50 mètres !",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "🛡️ Câbles Blindés",
                description: "Câbles blindés pour installations en extérieur ou dans des environnements sensibles; 💰 Prix : 48 750 FCFA/mètre; 🔥 Haute durabilité garantie !",
                color: "blue"
              }
            ]
          },
          {
            title: "🔌 Appareils Électriques",
            description: "🛠️ Commutateurs, prises, disjoncteurs et autres appareils électriques pour une installation sécurisée et efficace.",
            subSections: [
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "🎛️ Commutateurs",
                description: "Commutateurs de haute qualité pour diverses applications; 💰 Prix : 9 750 FCFA; 🛍️ Remise de 5% sur achats multiples !",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "🔌 Prises et Disjoncteurs",
                description: "Prises et disjoncteurs pour installations domestiques et professionnelles; 💰 Prix : 32 500 FCFA; 🔥 Réduction de 10% pour commandes de plus de 10 unités !",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "⚙️ Interrupteurs Automatiques",
                description: "Interrupteurs automatiques pour une gestion efficace de l'électricité; 💰 Prix : 26 000 FCFA; 🎯 Promo : 8% de réduction sur achats en gros !",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "📦 Tableaux Électriques",
                description: "Tableaux électriques pour la distribution de l’électricité dans les maisons et bureaux; 💰 Prix : 78 000 FCFA; 🛒 10% de remise pour achats en quantité !",
                color: "blue"
              }
            ]
          },
          {
            title: "💡 Éclairage",
            description: "🔆 Une large gamme d’équipements d’éclairage pour sublimer vos espaces !",
            subSections: [
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "💡 Ampoules LED",
                description: "Ampoules LED pour une consommation d'énergie réduite et une longue durée de vie; 💰 Prix : 5 200 FCFA; 🏷️ 5% de réduction dès 5 pièces achetées !",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "🪟 Plafonniers",
                description: "Plafonniers modernes et élégants pour votre salon ou bureau; 💰 Prix : 32 500 FCFA; 🎁 Offre spéciale sur certains modèles !",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "🔦 Projecteurs LED",
                description: "Projecteurs LED pour éclairage extérieur, parfaits pour jardins ou parkings; 💰 Prix : 48 750 FCFA; ✨ Réduction de 10% pour plus de 5 unités achetées !",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "☀️ Lampes Solaires",
                description: "Lampes solaires pour un éclairage écologique et économique; 💰 Prix : 16 250 FCFA; 🌞 Réduction de 5% pour commandes de 3 pièces et plus !",
                color: "blue"
              }
            ]
          },
          {
            title: "🏠 Matériel pour Installations Domestiques",
            description: "📌 Tout le nécessaire pour sécuriser vos installations électriques domestiques et professionnelles.",
            subSections: [
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "🔌 Prises Murales",
                description: "Prises murales adaptées aux normes de sécurité; 💰 Prix : 6 500 FCFA; 🎯 Remise de 5% pour les achats multiples !",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "🔘 Interrupteurs Muraux",
                description: "Interrupteurs de haute qualité avec un design moderne; 💰 Prix : 13 000 FCFA; 🏷️ Remise spéciale sur commandes en gros !",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/electric_materials.jpg",
                title: "🛡️ Boîtiers de Protection",
                description: "Boîtiers de protection pour sécuriser vos installations électriques; 💰 Prix : 19 500 FCFA; 🎯 Réduction de 10% sur commandes de plus de 15 unités !",
                color: "dark-blue"
              }
            ]
          }
        ]
      }
      ,
      {
        id: 4,
        title: "Pressing 🧺✨",
        description: [
          {
            "text": "Nous offrons des services de pressing professionnels 🔥, garantissant des vêtements toujours impeccables et bien entretenus ! 🏆👕"
          }
        ],
        imageUrl: "assets/img/services/pressing.jpg",
        sections: [
          {
            title: "Services de Pressing 🚿🧼",
            description: "Nos services de pressing sont adaptés à tous types de vêtements, vous garantissant une propreté parfaite et un soin exceptionnel ! 🌟",
            subSections: [
              {
                imgSrc: "assets/img/services/pressing.jpg",
                title: "Pressing Classique 🏠👚",
                description: "Un nettoyage professionnel pour tous vos vêtements à partir de **2 500 FCFA**; 🏷️ **Réduction de 10%** à partir de 10 articles ! 🛍️",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/pressing.jpg",
                title: "Nettoyage à Sec 🌿🧴",
                description: "Traitement sans eau pour préserver la qualité de vos tissus délicats; Prix : **5 000 FCFA** par pièce; 🎁 **Offre spéciale : 4 articles nettoyés, le 5ème offert !** 🎊",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/pressing.jpg",
                title: "Repassage 🔥👔",
                description: "Un repassage soigné pour un look toujours impeccable ! **1 500 FCFA** par pièce; **Réduction de 20%** pour plus de 5 articles 🏆💨",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/pressing.jpg",
                title: "Nettoyage de Tapis 🏡🧹",
                description: "Nettoyage en profondeur et désinfection de vos tapis dès **10 000 FCFA**; **Remise de 15%** pour plus de 3 tapis ! ✨🛋️",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/pressing.jpg",
                title: "Traitement des Peaux et Cuirs 👜👞",
                description: "Entretien de luxe pour vos vestes, sacs et chaussures en cuir **8 000 FCFA** par article; **Réduction de 5%** à partir de 3 pièces ! 🥇🎩",
                color: "blue"
              },
              {
                imgSrc: "assets/img/services/pressing.jpg",
                title: "Service Express ⚡⏳",
                description: "Besoin d’un nettoyage rapide ? Nous traitons vos vêtements en **24h**; Tarif : **3 500 FCFA** par article 🚀✨",
                color: "dark-blue"
              },
              {
                imgSrc: "assets/img/services/pressing.jpg",
                title: "Nettoyage de Couvertures et Rideaux 🛏️🪟",
                description: "Redonnez un coup de neuf à vos couvertures et rideaux dès **7 500 FCFA**; **Réduction de 10%** pour plus de 2 articles ! 🌿💦",
                color: "blue"
              }
            ]
          }
        ]
      }
  ];

  whatwedoContent: any; // This will hold the specific content to display
  whatwedoId: number;

  constructor(public appMain: MainComponent, private route: ActivatedRoute) { }

  ngOnInit(): void {
    AOS.init();
    this.route.paramMap.subscribe(params => {
        this.whatwedoId = +params.get("id");
        switch (this.whatwedoId) {
          case 1:
            this.heroContent.backgroundImage = 'assets/img/services/vehicle_parts.jpg';
            break;
          case 2:
            this.heroContent.backgroundImage = 'assets/img/services/hair_weaves.jpg';
            break;
          case 3:
            this.heroContent.backgroundImage = 'assets/img/services/electric_materials.jpg';
            break;
          case 4:
            this.heroContent.backgroundImage = 'assets/img/services/pressing.jpg';
            break;
          default:
            this.heroContent.backgroundImage = '';
            break;
        }
        this.loadWhatwedos();
    });
  }

  loadWhatwedos() {
    // Trouver le contenu basé sur l'id
    this.whatwedoContent = this.whatwedoContents.find(content => content.id === this.whatwedoId);

    // Assurez-vous que whatwedoContent est défini
    if (!this.whatwedoContent) {
      console.error("Content not found for id:", this.whatwedoId);
    }
    console.log(this.whatwedoContent);
  }

  formatDescription(description: string): string {
    // Séparation de la description par ';' et création d'une liste
    const descriptionList = description.split(';').map(item => {
      item = item.trim();
      return `<li>${item}</li>`;
    }).join('');

    // Gestion des emojis en capturant tout emoji dans le texte
    return `<ul>${descriptionList}</ul>`
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Met en gras les valeurs entre ** **
      .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}]/gu, match => `<span class="emoji">${match}</span>`); // Gestion de tous les emojis
  }
}
