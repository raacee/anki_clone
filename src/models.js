const { Sequelize, DataTypes } = require('sequelize');

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
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    session_id: {
        type:DataTypes.UUIDV4,
        allowNull: true
    }
});

const UserLearningPackage = sequelize.define('UserLearningPackage', {
    ULP_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
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
    ULP_isAchieved: {             
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
    LF_ID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
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
        allowNull: true,
    },
    LF_nextDate: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
    },
});

const LearningSession = sequelize.define('LearningSession', {
    LS_id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
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

UserLearningPackage.hasMany(LearningFact, {foreignKey:'ULP_id'});
LearningFact.belongsTo(UserLearningPackage, {foreignKey:'ULP_id'});
User.hasMany(UserLearningPackage, {foreignKey:'user_id'});
UserLearningPackage.belongsTo(User, {foreignKey:'user_id'});
User.hasMany(LearningSession);
LearningSession.belongsTo(User);


module.exports = {
    sequelize,
    LearningFact,
    LearningSession,
    UserLearningPackage,
    User
}
