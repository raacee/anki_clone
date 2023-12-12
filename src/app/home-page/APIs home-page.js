const express = require('express');
const app = express();
const { UserPackageLearnings, LearningPackages } = require('../../Sequelize/sequelizeConfig');
app.get('/api/user/:userId/learning-packages', async (req, res) => {
  const userId = 1//req.params.userId;
  try {
    const userPackages = await UserPackageLearnings.findAll({
      where: { user_id: userId },
      include: [LearningPackages]
    });
    res.json(userPackages);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
