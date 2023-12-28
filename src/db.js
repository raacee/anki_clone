const { LearningPackage } = require('src/models.js')

function getAllLearningPackages(req,res){
    LearningPackage.findAll()
        .then((learningPackages) => {
            // Process retrieved learning packages
            res.json(learningPackages);
        })
        .catch((err) => {
            console.error('Error retrieving learning packages:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}

async function getUserLearningPackages(){

}

module.exports = {
    getAllLearningPackages,
    getUserLearningPackages
}
