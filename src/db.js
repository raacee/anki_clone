const { UserLearningPackage, LearningFact } = require('./models.js')

async function fetchAllLearningPackages(){
    return await UserLearningPackage.findAll()
}

async function getAllLearningPackages(){
    const ulps = await fetchAllLearningPackages()
    const res = []
    for(const ulp of ulps){
        let ULP = {
            id:ulp.ULP_id,
            category: ulp.ULP_category,
            description: ulp.ULP_description,
            title: ulp.ULP_title,
            difficultyLevel: ulp.ULP_difficultyLevel,
            isAchieved : ulp.ULP_isAchieved,
            isStudyProgram  : ulp.ULP_isStudyProgram
        }
        const lfs = await getUlpLearningFacts(ulp.ULP_id)
        const questions = []
        for(const lf of lfs){
            questions.push({
                id:lf.LF_ID,
                question:lf.LF_question,
                answer:lf.LF_answer,
            })
        }
        ULP.questions = questions
        res.push(ULP)
    }
    return res
}

async function addNewLearningFact(lf){
    const LP = {
        LF_question: lf.question,
        LF_answer: lf.answer,
        LF_image: lf.selectedImage ? lf.selectedImage : null,
        LF_reviewCount:0,
        LF_confidenceLevel:null,
        LF_lastReviewedDate:null,
        LF_nextDate:null
    }
    return LearningFact.create(LP)
}

async function getULP(id){
    return await UserLearningPackage.findOne({
        where:{
            ULP_id : id
        }
    })
}

async function ulpWithQuestions(id){
    const ulp = await getULP(id)
    const ulpObj = {
        id:ulp.ULP_id,
        category: ulp.ULP_category,
        description: ulp.ULP_description,
        title: ulp.ULP_title,
        difficultyLevel: ulp.ULP_difficultyLevel,
        isAchieved : ulp.ULP_isAchieved,
        isStudyProgram  : ulp.ULP_isStudyProgram
    }
    const lfs = await getUlpLearningFacts(ulp.ULP_id)
    const questions = []
    for(const lf of lfs){
        questions.push({
            id:lf.LF_ID,
            question:lf.LF_question,
            answer:lf.LF_answer,
            reviewCount:lf.LF_reviewCount,
            confidenceLevel:lf.LF_confidenceLevel,
            lastReviewedDate:lf.LF_lastReviewedDate,
            nextDate:lf.LF_nextDate
        })
        ulpObj.questions = questions
    }
    return ulpObj
}

async function getUlpLearningFacts(packageId){
    return await LearningFact.findAll({
        where:{
            ULP_id:packageId
        }
    })
}

async function getInactiveLearningPackages(){
    const nonStudyPackages = []
    const inactiveLP =  await UserLearningPackage.findAll({
        where : {
            ULP_isStudyProgram : false
        }
    })
    for(const ulp of inactiveLP){
        let ULP = {
            id:ulp.ULP_id,
            category: ulp.ULP_category,
            description: ulp.ULP_description,
            title: ulp.ULP_title,
            difficultyLevel: ulp.ULP_difficultyLevel,
            isAchieved : ulp.ULP_isAchieved,
            isStudyProgram  : ulp.ULP_isStudyProgram
        }
        nonStudyPackages.push(ULP)
    }
    return nonStudyPackages
}

async function getLearningFact(id){
    return await LearningFact.findAll({
        where:{
            LF_ID:id
        }
    })
}

async function addNewLearningPackage(lp){
    const ULP = {
        ULP_title: lp.title,
        ULP_desc: lp.description,
        ULP_category: lp.category,
        ULP_difficultyLevel: lp.difficultyLevel,
        ULP_startDate: null,
        ULP_expectedEndDate: null,
        ULP_isAchieved: false
    }
    return UserLearningPackage.create(ULP)
}

async function addLearningFactToLearningPackage(lf_id, lp_id){
    const lf = await LearningFact.update({ULP_id: lp_id},{
        where:{
            LF_ID:lf_id
        }
    })
}

async function editPackageByID(lf_id, changes){
    console.log('CHANGES ARE : ')
    console.log(changes)
    const changes_LF = {
        LF_answer: changes.answer,
        LF_question: changes.question
    }
    return await LearningFact.update(changes_LF, {
        where :{
            LF_ID : lf_id
        }
    })
}

async function deletePackage(lf_id){
    await LearningFact.destroy({
        where:{
            LF_ID:lf_id
        }
    })
}

module.exports = {
    getLearningFact,
    deletePackage,
    addNewLearningFact,
    addLearningFactToLearningPackage,
    addNewLearningPackage,
    editPackageByID,
    getInactiveLearningPackages,
    ulpWithQuestions,
    getAllLearningPackages
}
