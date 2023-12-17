import { Component, OnInit } from '@angular/core';

type ShownFacts = {
  [key: string]: boolean;
};
interface LearningPackage {
  title: string;
  category: string;
  difficultyLevel: number;
  description: string;
  facts: LearningFact[];
}
interface LearningFact {
  question: string;
  answer:string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  shownFacts: ShownFacts = {};
  learningPackages: LearningPackage[] = [
    {
      title: 'TypeScript',
      category: 'Programming',
      difficultyLevel: 5,
      description: 'Description of TypeScript',
      facts: [
        { question: "Qu'est-ce que TypeScript et comment se différencie-t-il de JavaScript?", answer:"TypeScript est un sur-ensemble de JavaScript qui ajoute des types statiques."},
        { question: "Comment déclarer une variable de type chaîne de caractères en TypeScript??", answer:"let nomVariable: string;"},
      ]
    },
    {
      title: 'NodeJS',
      category: 'Back-end Development',
      difficultyLevel: 6,
      description: 'Description of NodeJS',
      facts: [
        { question: "Qu'est-ce que Node.js?", answer:"Node.js est un environnement d'exécution JavaScript côté serveur basé sur le moteur V8 de Chrome."},
        { question: "Comment peut-on lire un fichier de manière asynchrone en Node.js?", answer:"En utilisant fs.readFile() de la bibliothèque fs (file system)."}
      ]
    }
  ];

  quotes: string[] = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Learning never exhausts the mind. – Leonardo da Vinci",
    "Develop a passion for learning. If you do, you will never cease to grow. – Anthony J. D'Angelo"
  ];
  currentQuote!: string;

  ngOnInit(): void {
    this.setCurrentQuote();
  }

  toggleFacts(factsId: string): void {
    this.shownFacts[factsId] = !this.shownFacts[factsId];
  }

  setCurrentQuote(): void {
    const weekNumber = this.getWeekNumber(new Date());
    this.currentQuote = this.quotes[weekNumber % this.quotes.length];
  }

  getWeekNumber(date: Date): number {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }
}
