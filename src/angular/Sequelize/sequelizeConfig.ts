import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize(
  'LearningFactDb',
  'learningDbUser',
  'password',
  {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  });

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
const LearningPackage = sequelize.define('LearningPackage', {
  LearnPack_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  LearnPack_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LearnPack_desc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  LearnPack_category: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Uncategorized yet',
  },
  LearnPack_target: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 5,
    validate: { min: 5, max: 99 },
  },
  LearnPack_difficultyLevel: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 1, max: 20 },
  },
});
const LearningFact = sequelize.define('LearningFact', {
  LearnFact_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  LearnFact_desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userAnswer: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  result: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
const UserPackageLearning = sequelize.define('UserPackageLearning', {
  UPL_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UPL_startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  UPL_expectedEndDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  UPL_minutesPerDayObjective: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const StatsLearningFact = sequelize.define('StatsLearningFact', {
  SLF_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  SLF_reviewCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  SLF_confidenceLevel: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  SLF_lastReviewedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

const LearningSession = sequelize.define('LearningSession', {
  LearnSess_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});

LearningPackage.hasMany(LearningFact);
LearningFact.belongsTo(LearningPackage, { foreignKey: 'LearnPack_id', targetKey: 'LearnPack_id'});

User.hasMany(UserPackageLearning);
UserPackageLearning.belongsTo(User, {foreignKey: 'user_id',targetKey: 'user_id'});

LearningPackage.hasMany(UserPackageLearning);
UserPackageLearning.belongsTo(LearningPackage, {foreignKey: 'LearnPack_id',targetKey: 'LearnPack_id'});

LearningFact.hasMany(StatsLearningFact);
StatsLearningFact.belongsTo(LearningFact, { foreignKey: 'LearnFact_id',targetKey: 'LearnFact_id'});

UserPackageLearning.hasMany(LearningSession);
LearningSession.belongsTo(UserPackageLearning, { foreignKey: 'UPL_id',targetKey: 'UPL_id'});

StatsLearningFact.hasMany(LearningSession);
LearningSession.belongsTo(StatsLearningFact, { foreignKey: 'SLF_id',targetKey: 'SLF_id'});

const learningPackages = [
  {
    title: 'TypeScript',
    category: 'Programming',
    target: 'Developers',
    difficultyLevel: 5,
    questions: [
      { desc: "Qu'est-ce que TypeScript et comment se différencie-t-il de JavaScript?", answer: ["TypeScript est un sur-ensemble de JavaScript qui ajoute des types statiques."] },
      { desc: "Comment déclarer une variable de type chaîne de caractères en TypeScript?", answer: ["let nomVariable: string;"] },
      { desc: "Quelle est la syntaxe pour créer une interface en TypeScript?", answer: ["interface NomInterface { propriete: type; }"] },
      { desc: "Peut-on utiliser TypeScript avec des frameworks JavaScript comme React ou Angular?", answer: ["Oui, TypeScript est compatible avec la plupart des frameworks JavaScript."] },
      { desc: "Quel est l'avantage principal de l'utilisation des types en TypeScript?", answer: ["Il améliore la fiabilité du code en ajoutant une vérification de type au moment de la compilation."] },
    ],
  },
  {
    title: 'NodeJS',
    category: 'Back-end Development',
    target: 'Web Developers',
    difficultyLevel: 6,
    questions: [
      { desc: "Qu'est-ce que Node.js?", answer: ["Node.js est un environnement d'exécution JavaScript côté serveur basé sur le moteur V8 de Chrome."] },
      { desc: "Comment peut-on lire un fichier de manière asynchrone en Node.js?", answer: ["En utilisant fs.readFile() de la bibliothèque fs (file system)."] },
      { desc: "Qu'est-ce qu'un middleware dans le contexte de Express.js, un framework Node.js?", answer: ["Un middleware est une fonction qui a accès aux objets request et response et au prochain middleware dans le cycle de requête-réponse."] },
      { desc: "Comment gérer les versions de Node.js pour différents projets?", answer: ["En utilisant des outils comme NVM (Node Version Manager)."] },
      { desc: "Quel est le rôle du package.json dans un projet Node.js?", answer: ["Il sert à définir les métadonnées, les dépendances et les scripts du projet."] },
    ],
  },
  {
    title: 'Angular',
    category: 'Front-end Framework',
    target: 'Front-end Developers',
    difficultyLevel: 7,
    questions: [
      { desc: "Qu'est-ce qu'un composant dans Angular?", answer: ["Un composant est une classe avec un décorateur @Component, qui encapsule les données et la logique de présentation."] },
      { desc: "Comment créer un service dans Angular?", answer: ["En utilisant la commande CLI 'ng generate service nomService'."] },
      { desc: "Quel est le rôle du data binding dans Angular?", answer: ["Le data binding permet une communication bidirectionnelle entre le modèle et la vue."] },
      { desc: "Comment gérer la navigation dans une application Angular?", answer: ["En utilisant le système de routing d'Angular."] },
      { desc: "Qu'est-ce qu'un module en Angular et à quoi sert-il?", answer: ["Un module est un moyen de regrouper des composants, des directives, des services, etc., et organise le code en blocs fonctionnels."] },
    ],
  },
  {
    title: 'Bootstrap',
    category: 'CSS Framework',
    target: 'Web Designers and Developers',
    difficultyLevel: 3,
    questions: [
      { desc: "Quel est le principal avantage de l'utilisation de Bootstrap?", answer: ["Bootstrap facilite la création de designs web réactifs et esthétiques avec moins d'effort."] },
      { desc: "Comment intégrer Bootstrap dans un projet web?", answer: ["En ajoutant le lien CDN dans le fichier HTML ou en installant via npm."] },
      { desc: "Qu'est-ce qu'un système de grille dans Bootstrap?", answer: ["Un système de grille permet de créer des mises en page réactives en utilisant des rangées et des colonnes."] },
      { desc: "Donnez un exemple de classe utilitaire en Bootstrap.", answer: ["La classe 'text-center' pour centrer le texte."] },
      { desc: "Comment Bootstrap gère-t-il la responsivité?", answer: ["Avec des classes préfixées pour différentes tailles d'écran (ex. col-md-6)."] },
    ],
  },
  {
    title: 'API',
    category: 'Web Development',
    target: 'API Developers',
    difficultyLevel: 8,
    questions: [
      { desc: "Qu'est-ce qu'une API RESTful?", answer: ["Une API qui suit les principes REST, utilisant des requêtes HTTP pour la communication."] },
      { desc: "Comment transmettre des données dans une requête GET?", answer: ["En utilisant des paramètres dans l'URL."] },
      { desc: "Quelle est la différence entre une réponse HTTP 200 et 404?", answer: ["200 indique un succès, 404 indique que la ressource n'a pas été trouvée."] },
      { desc: "Comment sécuriser une API?", answer: ["En utilisant des méthodes comme l'authentification OAuth, des tokens JWT, etc."] },
      { desc: "Qu'est-ce qu'un JSON Web Token (JWT) et à quoi sert-il?", answer: ["Un JWT est un moyen sécurisé de transmettre des informations entre parties sous forme de JSON. Il est souvent utilisé pour l'authentification."] },
    ],
  },
];
async function createLearningPackagesAndFacts() {
  for (const pkg of learningPackages) {
    // Création du LearningPackage
    const learningPackage = await LearningPackage.create({
      LearnPack_title: pkg.title,
      LearnPack_desc: `Description for ${pkg.title}`,
      LearnPack_category: pkg.category,
      LearnPack_target: pkg.target,
      LearnPack_difficultyLevel: pkg.difficultyLevel,
    });

    // Création des LearningFact associés
    for (const q of pkg.questions) {
      await LearningFact.create({
        LearnFact_desc: q.desc,
        userAnswer: q.answer,
        result: 0,
        LearnPack_id: learningPackage.get('LearnPack_id'), // Utilisation de .get() pour accéder à l'ID
      });
    }
  }
}
async function createUserAndAssociations() {
  const user = await User.create({ username: 'seb', password: '123' });
  const startDate = new Date();
  const endDate = new Date(startDate.getTime());
  endDate.setDate(startDate.getDate() + 14);

  const titles = ['TypeScript', 'NodeJS', 'Angular', 'API'];
  for (const title of titles) {
    const learningPackage = await LearningPackage.findOne({ where: { LearnPack_title: title } });
    if (learningPackage) {
      await UserPackageLearning.create({
        UPL_startDate: startDate,
        UPL_expectedEndDate: endDate,
        UPL_minutesPerDayObjective: 10,
        user_id: user.get('user_id'),
        LearnPack_id: learningPackage.get('LearnPack_id'),
      });
    }
  }
}
async function initializeDatabase() {
  try {
    await sequelize.sync();
    console.log('Tables created successfully!');
    await createLearningPackagesAndFacts();
    console.log('Learning packages and facts created successfully!');
    await createUserAndAssociations();
    console.log('User and associations created successfully!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}
initializeDatabase();

module.exports = {
  UserPackageLearning,
  LearningPackage,
  LearningFact,
  User,
  LearningSession,
  StatsLearningFact
};
