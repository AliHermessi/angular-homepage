import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
   
  cardsData = [
    
    {
      imageUrl: '../assets/springboot-angular-.jpg',
      title: 'Springboot / Angular',
      description: '350Dt/mois'
    },
    {
      imageUrl: '../assets/flutter-firebase.png',
      title: 'Flutter / Firebase',
      description: '500Dt/mois'
    },
    {
      imageUrl: '../assets/nodejs-react.png',
      title: 'Node.js / React',
      description: '500Dt/mois'
    },
    {
      imageUrl: '../assets/ai.jpg',
      title: 'Artificial intelligence',
      description: '400Dt/mois'
    },
    {
      imageUrl: '../assets/devops.png',
      title: 'Devops',
      description: '200Dt/mois'
    },
    {
      imageUrl: '../assets/Business-intelligence.jpg',
      title: 'Business intelligence ',
      description: '100Dt/mois'
    },
    
  ];
}
