const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize(
    'anki_clone',
    'anki',
    'anki_clone',
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

const UserLearningPackage = sequelize.define('UserLearningPackage', {
    ULP_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    ULP_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ULP_desc: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    ULP_category: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Uncategorized yet',
    },
    ULP_difficultyLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1, max: 20 },
    },
    ULP_startDate: {
        type: DataTypes.DATE,
        defaultValue: null,
    },
    ULP_expectedEndDate: {
        type: DataTypes.DATE,
        defaultValue: null,
    },
    ULP_isAchieved: {             // If the UPL is achieved or not.
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    ULP_isStudyProgram: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

const LearningFact = sequelize.define('LearningFact', {
    LF_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    LF_question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    LF_answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    LF_image: {
        type: DataTypes.STRING, //store the path of the image
        allowNull: true,
    },
    LF_reviewCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    LF_confidenceLevel: {           //On clique sur un bouton de difficulté ==> renvoie un integer entre 1 et 4
        type: DataTypes.INTEGER,    //Selon le integer, LF_nextDate = SLF_lastReviewedDate + X days
        allowNull: true,
    },
    LF_lastReviewedDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    LF_nextDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

const LearningSession = sequelize.define('LearningSession', {
    LS_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    LS_date: {
        type: DataTypes.DATE,
    },
    LS_nFlippedLF: {
        type: DataTypes.INTEGER,
    },
    LS_openedULP: {
        type: DataTypes.INTEGER,
    },
});

UserLearningPackage.hasMany(LearningFact);
LearningFact.belongsTo(UserLearningPackage);
User.hasMany(UserLearningPackage);
UserLearningPackage.belongsTo(User);
User.hasMany(LearningSession);
LearningSession.belongsTo(User);


module.exports = {
    sequelize,
    LearningFact,
    LearningSession,
    UserLearningPackage,
    User
}
