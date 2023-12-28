const {sequelize, User, UserLearningPackage, LearningFact, LearningSession} = require('./models')

UserLearningPackage.hasMany(LearningFact);
LearningFact.belongsTo(UserLearningPackage, { foreignKey: 'ULP_id', targetKey: 'ULP_id'});
User.hasMany(UserLearningPackage);
UserLearningPackage.belongsTo(User, {foreignKey: 'user_id',targetKey: 'user_id'});
User.hasMany(LearningSession);
LearningSession.belongsTo(User, { foreignKey: 'user_id',targetKey: 'user_id'});

const learningPackages = [
    {
        title: 'TypeScript',
        category: 'Programming',
        difficultyLevel: 5,
        questions: [
            { question: "Qu'est-ce que TypeScript et comment se différencie-t-il de JavaScript?", answer: ["TypeScript est un sur-ensemble de JavaScript qui ajoute des types statiques."] },
            { question: "Comment déclarer une variable de type chaîne de caractères en TypeScript?", answer: ["let nomVariable: string;"] },
            { question: "Quelle est la syntaxe pour créer une interface en TypeScript?", answer: ["interface NomInterface { propriete: type; }"] },
            { question: "Peut-on utiliser TypeScript avec des frameworks JavaScript comme React ou Angular?", answer: ["Oui, TypeScript est compatible avec la plupart des frameworks JavaScript."] },
            { question: "Quel est l'avantage principal de l'utilisation des types en TypeScript?", answer: ["Il améliore la fiabilité du code en ajoutant une vérification de type au moment de la compilation."] },
        ],
    },
    {
        title: 'NodeJS',
        category: 'Back-end Development',
        difficultyLevel: 6,
        questions: [
            { question: "Qu'est-ce que Node.js?", answer: ["Node.js est un environnement d'exécution JavaScript côté serveur basé sur le moteur V8 de Chrome."] },
            { question: "Comment peut-on lire un fichier de manière asynchrone en Node.js?", answer: ["En utilisant fs.readFile() de la bibliothèque fs (file system)."] },
            { question: "Qu'est-ce qu'un middleware dans le contexte de Express.js, un framework Node.js?", answer: ["Un middleware est une fonction qui a accès aux objets request et response et au prochain middleware dans le cycle de requête-réponse."] },
            { question: "Comment gérer les versions de Node.js pour différents projets?", answer: ["En utilisant des outils comme NVM (Node Version Manager)."] },
            { question: "Quel est le rôle du package.json dans un projet Node.js?", answer: ["Il sert à définir les métadonnées, les dépendances et les scripts du projet."] },
        ],
    },
    {
        title: 'Angular',
        category: 'Front-end Framework',
        difficultyLevel: 7,
        questions: [
            { question: "Qu'est-ce qu'un composant dans Angular?", answer: ["Un composant est une classe avec un décorateur @Component, qui encapsule les données et la logique de présentation."] },
            { question: "Comment créer un service dans Angular?", answer: ["En utilisant la commande CLI 'ng generate service nomService'."] },
            { question: "Quel est le rôle du data binding dans Angular?", answer: ["Le data binding permet une communication bidirectionnelle entre le modèle et la vue."] },
            { question: "Comment gérer la navigation dans une application Angular?", answer: ["En utilisant le système de routing d'Angular."] },
            { question: "Qu'est-ce qu'un module en Angular et à quoi sert-il?", answer: ["Un module est un moyen de regrouper des composants, des directives, des services, etc., et organise le code en blocs fonctionnels."] },
        ],
    },
    {
        title: 'Bootstrap',
        category: 'CSS Framework',
        difficultyLevel: 3,
        questions: [
            { question: "Quel est le principal avantage de l'utilisation de Bootstrap?", answer: ["Bootstrap facilite la création de designs web réactifs et esthétiques avec moins d'effort."] },
            { question: "Comment intégrer Bootstrap dans un projet web?", answer: ["En ajoutant le lien CDN dans le fichier HTML ou en installant via npm."] },
            { question: "Qu'est-ce qu'un système de grille dans Bootstrap?", answer: ["Un système de grille permet de créer des mises en page réactives en utilisant des rangées et des colonnes."] },
            { question: "Donnez un exemple de classe utilitaire en Bootstrap.", answer: ["La classe 'text-center' pour centrer le texte."] },
            { question: "Comment Bootstrap gère-t-il la responsivité?", answer: ["Avec des classes préfixées pour différentes tailles d'écran (ex. col-md-6)."] },
        ],
    },
    {
        title: 'API',
        category: 'Web Development',
        difficultyLevel: 8,
        questions: [
            { question: "Qu'est-ce qu'une API RESTful?", answer: ["Une API qui suit les principes REST, utilisant des requêtes HTTP pour la communication."] },
            { question: "Comment transmettre des données dans une requête GET?", answer: ["En utilisant des paramètres dans l'URL."] },
            { question: "Quelle est la différence entre une réponse HTTP 200 et 404?", answer: ["200 indique un succès, 404 indique que la ressource n'a pas été trouvée."] },
            { question: "Comment sécuriser une API?", answer: ["En utilisant des méthodes comme l'authentification OAuth, des tokens JWT, etc."] },
            { question: "Qu'est-ce qu'un JSON Web Token (JWT) et à quoi sert-il?", answer: ["Un JWT est un moyen sécurisé de transmettre des informations entre parties sous forme de JSON. Il est souvent utilisé pour l'authentification."] },
        ],
    },
];
async function createLearningPackagesAndFacts() {

    const users = [];

    const user1 = await User.create({username: 'seb', password: '123'});
    users.push(user1);
    const user2 = await User.create({username: 'racel', password: '123'});
    users.push(user2);
    const user3 = await User.create({username: 'hayal', password: '123'});
    users.push(user3);
    const user4 = await User.create({username: 'jack', password: '123'});
    users.push(user4);


    for (let i = 0; i < learningPackages.length; i++) {
        const pkg = learningPackages[i];
        const startDate = new Date();
        startDate.setHours(1, 0, 0, 0);

        const user = users[i];

        if (user) {
            const userLearningPackage = await UserLearningPackage.create({
                ULP_title: pkg.title,
                ULP_desc: `Description for ${pkg.title}`,
                ULP_category: pkg.category,
                ULP_difficultyLevel: pkg.difficultyLevel,
                ULP_startDate: startDate,
                ULP_expectedEndDate: new Date(startDate.getTime() + 2 * 7 * 24 * 60 * 60 * 1000),
                user_id: users[i].get('user_id'),
            })

            for (const q of pkg.questions) {
                await LearningFact.create({
                    LF_question: q.question,
                    LF_answer: q.answer,
                    LF_lastReviewedDate: startDate,
                    LF_nextDate: startDate,
                    ULP_id: userLearningPackage.get('ULP_id'),
                });
            }
        }
    }
}
async function initializeDatabase() {
    try {
        await sequelize.sync();
        console.log('Tables created successfully!');
        await createLearningPackagesAndFacts();
        console.log('Learning packages and facts created successfully!');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

await initializeDatabase();
