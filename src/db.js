const { UserLearningPackage, LearningFact } = require('./models.js')

async function fetchLearningPackages(){
    return await UserLearningPackage.findAll()
}

async function getLearningFactsByULP(ulp_id){
    return await LearningFact.findAll(
        {
            where:{
                ULP_id:ulp_id
            }
        }
    )
}

async function getAllLearningPackages(){
    const res = []
    const ulps = await fetchLearningPackages()
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
        const lfs = await getLearningFactsByULP(ulp.ULP_id)
        const questions = []
        for(const lf of lfs){
            questions.push({
                id:lf.LF_ID,
                question:lf.LF_question,
                answer:lf.LF_answer
            })
        }
        ULP.questions = questions
        res.push(ULP)
    }
    return res
}

async function addNewLearningFact(){

}

async function addNewLearningPackage(){

}



module.exports = {
    getAllLearningPackages
}
