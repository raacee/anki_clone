import { Injectable } from '@angular/core';

export interface LearningPackage {
    id:number;
    category: string;
    desc:string;
    title: string;
    difficultyLevel: number;
    questions: LearningFact[];
    isAchieved?: boolean;
    isStudyProgram?:boolean;
    }
  export interface LearningFact {
    id:number
    question: string;
    answer:string;
  /*  image:string;
    reviewCount:number;
    confidenceLevel:number;
    lastReviewedDate:Date;
    nextDate:Date;
  */
  }

@Injectable({
  providedIn: 'root'
})

export class LearningPackageService {
  private learningPackages: LearningPackage[] = [
    {
      id:1,
      category: 'Programming',
      desc: 'Study module about TypeScript',
      title: 'TypeScript',
      difficultyLevel: 5,
      questions: [
          { id:1, question: "Qu'est-ce que TypeScript et comment se différencie-t-il de JavaScript?", answer: "TypeScript est un sur-ensemble de JavaScript qui ajoute des types statiques." },
          { id:2, question: "Comment déclarer une variable de type chaîne de caractères en TypeScript?", answer: "let nomVariable: string;" },
          { id:3, question: "Quelle est la syntaxe pour créer une interface en TypeScript?", answer: "interface NomInterface { propriete: type; }" },
          { id:4, question: "Peut-on utiliser TypeScript avec des frameworks JavaScript comme React ou Angular?", answer: "Oui, TypeScript est compatible avec la plupart des frameworks JavaScript." },
          { id:5, question: "Quel est l'avantage principal de l'utilisation des types en TypeScript?", answer: "Il améliore la fiabilité du code en ajoutant une vérification de type au moment de la compilation." },
      ],
      isAchieved:false,
      isStudyProgram:true,
  },
    {
      id:2,
      category: 'Back-end Development',
      desc: 'Study module about NodeJS',
      title: 'NodeJS',
      difficultyLevel: 6,
      questions: [
          { id:1, question: "Qu'est-ce que Node.js?", answer: "Node.js est un environnement d'exécution JavaScript côté serveur basé sur le moteur V8 de Chrome." },
          { id:2, question: "Comment peut-on lire un fichier de manière asynchrone en Node.js?", answer: "En utilisant fs.readFile() de la bibliothèque fs (file system)." },
          { id:3, question: "Qu'est-ce qu'un middleware dans le contexte de Express.js, un framework Node.js?", answer: "Un middleware est une fonction qui a accès aux objets request et response et au prochain middleware dans le cycle de requête-réponse." },
          { id:4, question: "Comment gérer les versions de Node.js pour différents projets?", answer: "En utilisant des outils comme NVM (Node Version Manager)." },
          { id:5, question: "Quel est le rôle du package.json dans un projet Node.js?", answer: "Il sert à définir les métadonnées, les dépendances et les scripts du projet." },
      ],
      isAchieved:false,
      isStudyProgram:false,
  },
  {
    id:3,
    category: 'Front-end Framework',
    desc: 'Study module about Angular',
    title: 'Angular',
    difficultyLevel: 7,
    questions: [
        { id:1, question: "Qu'est-ce qu'un composant dans Angular?", answer: "Un composant est une classe avec un décorateur @Component, qui encapsule les données et la logique de présentation." },
        { id:2, question: "Comment créer un service dans Angular?", answer: "En utilisant la commande CLI 'ng generate service nomService'." },
        { id:3, question: "Quel est le rôle du data binding dans Angular?", answer: "Le data binding permet une communication bidirectionnelle entre le modèle et la vue." },
        { id:4, question: "Comment gérer la navigation dans une application Angular?", answer: "En utilisant le système de routing d'Angular." },
        { id:5, question: "Qu'est-ce qu'un module en Angular et à quoi sert-il?", answer: "Un module est un moyen de regrouper des composants, des directives, des services, etc., et organise le code en blocs fonctionnels." }
  ],
  isAchieved:false,
  isStudyProgram:true,
},
{
  id:4,
  category: 'CSS Framework',
  desc: 'Study module about Bootstrap',
  title: 'Bootstrap',
  difficultyLevel: 3,
  questions: [
      { id:1, question: "Quel est le principal avantage de l'utilisation de Bootstrap?", answer: "Bootstrap facilite la création de designs web réactifs et esthétiques avec moins d'effort." },
      { id:2, question: "Comment intégrer Bootstrap dans un projet web?", answer: "En ajoutant le lien CDN dans le fichier HTML ou en installant via npm." },
      { id:3, question: "Qu'est-ce qu'un système de grille dans Bootstrap?", answer: "Un système de grille permet de créer des mises en page réactives en utilisant des rangées et des colonnes." },
      { id:4, question: "Donnez un exemple de classe utilitaire en Bootstrap.", answer: "La classe 'text-center' pour centrer le texte." },
      { id:5, question: "Comment Bootstrap gère-t-il la responsivité?", answer: "Avec des classes préfixées pour différentes tailles d'écran (ex. col-md-6)." },
  ],
  isAchieved:false,
  isStudyProgram:false,
},
{
  id:5,
  category: 'Web Development',
  desc: 'Study module about API',
  title: 'API',
  difficultyLevel: 8,
  questions: [
      { id:1, question: "Qu'est-ce qu'une API RESTful?", answer: "Une API qui suit les principes REST, utilisant des requêtes HTTP pour la communication." },
      { id:2, question: "Comment transmettre des données dans une requête GET?", answer: "En utilisant des paramètres dans l'URL." },
      { id:3, question: "Quelle est la différence entre une réponse HTTP 200 et 404?", answer: "200 indique un succès, 404 indique que la ressource n'a pas été trouvée." },
      { id:4, question: "Comment sécuriser une API?", answer: "En utilisant des méthodes comme l'authentification OAuth, des tokens JWT, etc." },
      { id:5, question: "Qu'est-ce qu'un JSON Web Token (JWT) et à quoi sert-il?", answer: "Un JWT est un moyen sécurisé de transmettre des informations entre parties sous forme de JSON. Il est souvent utilisé pour l'authentification." },
  ],
  isAchieved:false,
  isStudyProgram:true,
},
 ];

  constructor() {}
  getLearningPackages(): LearningPackage[] {
    return this.learningPackages;
  }  
  getPackageById(id: number): LearningPackage | undefined {
    return this.learningPackages.find(p => p.id === id);
  }
  getNextId(): number {
    return this.learningPackages.length > 0
      ? Math.max(...this.learningPackages.map(p => p.id)) + 1
      : 1;
  }
  addPackage(newPackage: LearningPackage) { // for creation
    console.log("Before adding:", this.learningPackages);
    this.learningPackages.push(newPackage);
    console.log("After adding:", this.learningPackages);
  }
  deletePackage(id: number): void {
    this.learningPackages = this.learningPackages.filter(p => p.id !== id);
  }
  achievePackage(id: number): void {
    const pkg = this.learningPackages.find(p => p.id === id);
    if (pkg) {
      pkg.isAchieved = true;
      console.log(`Package ${id} achieved`, pkg);

    }
  }
  addPackageToStudy(id: number): void {
    const pkg = this.learningPackages.find(p => p.id === id);
    if (pkg) {
      pkg.isStudyProgram = true;
    }
  }
  updateFact(packageId: number, updatedFact: LearningFact): void {
    const pkgIndex = this.learningPackages.findIndex(p => p.id === packageId);
    if (pkgIndex !== -1) {
      const factIndex = this.learningPackages[pkgIndex].questions.findIndex(f => f.id === updatedFact.id);
      if (factIndex !== -1) {
        this.learningPackages[pkgIndex].questions[factIndex] = updatedFact;
      }
    }
  }
  addFactToPackage(packageId: number, newFact: LearningFact) {
    const pkg = this.getPackageById(packageId);
    if (pkg) {
      pkg.questions.push(newFact);
      console.log("Fact added :",newFact)
    }
  }
  getNonActiveLearningPackages(): LearningPackage[] {
    return this.learningPackages.filter(p => !p.isStudyProgram);
  }
  getActiveLearningPackages(): LearningPackage[] {
    return this.learningPackages.filter(p => !p.isAchieved && p.isStudyProgram);
  }
  getAchievedLearningPackages(): LearningPackage[] {
    return this.learningPackages.filter(p => p.isAchieved);
  }
}