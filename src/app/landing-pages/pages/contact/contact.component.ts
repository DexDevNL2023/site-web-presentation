import { MainComponent } from '../../main/main.component';
import { Component } from '@angular/core';
import AOS from "aos";
import { EmailService } from '../../../utilities/services/email.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent {

  heroContent = {
    title: "Nous sommes là",
    spanText: "pour vous aider",
    description: "Vous avez des questions ou besoin d'assistance ? N'hésitez pas à nous contacter pour obtenir des réponses rapides et précises. Nous sommes à votre écoute pour vous offrir le meilleur service possible.",
    buttonText: "ETS VAN’S SERVICES",
    buttonLink: "",
    backgroundImage: 'assets/img/banners/banner-contact.jpg'
  };

  contactContent = {
    title: "Prenez Contact",
    description: "Nous serions ravis de répondre à toutes vos questions et de discuter de vos besoins. Voici comment vous pouvez nous joindre :",
    headquarters: {
      label: "Siège Social",
      address: "Ndokoti, Douala - Cameroun",
      phone: "+237 690624449 / +237 653383054",
      email: "ovanluv@yahoo.fr"
    },
    shops: [
      {
        name: "Boutique Pièces Détachées",
        address: "Obala, sis garage Ongono",
        phone: "+237 6 40 25 80 44"
      },
      {
        name: "Boutique Alimentation",
        address: "Nkolguem, lieu dit face prévention routière",
        phone: "+237 6 90 64 69 86"
      },
      {
        name: "Pressing",
        address: "Newbell, Terminus Saint-Michel",
        phone: "+237 6 90 59 36 43"
      }
    ]
  };

  lastname: string = '';
  firstname: string = '';
  email: string = '';
  company: string = '';
  phone: string = '';
  message: string = '';

  constructor(public appMain: MainComponent, private messageService: MessageService, private emailService: EmailService) { }

  ngOnInit(): void {
    AOS.init();
  }

    sendMessage() {
      // Envoyer l'email au service commercial
      this.messageService.add({
        severity: 'success',
        summary: 'Succès',
        detail: 'Votre message a été transmis au service commercial.'
      });
      console.log("okay");
    }
}
