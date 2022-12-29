const router = require("express").Router();
const { Plant, Site } = require("../db/index");

// GET localhost:3001/api/plants
router.get("/", async (req, res, next) => {
  try {
    res.send(
      await Plant.findAll({
        include: [Site],
        order: [ //order by the plant name, ascending (a-z) 
          ["name", "ASC"] //https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#ordering
        ]
      })
    );
  } catch (error) {
    next(error);
  }
});

//GET localhost:3001/api/plants/:id
router.get("/:id", async (req, res, next) => {
  try {
    res.send(
      await Plant.findByPk(req.params.id, {
        include: [Site],
      })
    );
  } catch (error) {
    next(error);
  }
});

//POST localhost:8088/api/plants
// NOT WORKING: router.post('/', async (req, res, next) => { 
//   console.log("post plants: ", req.body)
//   try {
//     res.status(201).send(await Plant.create(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/", async (req, res, next) => {
  console.log("post plants: ", req.body);
  try {
    
      const plant = await Plant.findOrCreate({
        where: {
           name: req.body.name,
          imageUrl: req.body.imageUrl || null,
          amazonLink: req.body.amazonLink || null,
        }
      });    //source for code for this part: https://medium.com/@jasmine.esplago.munoz/feeling-the-magic-with-sequelize-magic-methods-e9cc89ecdcc5
    const currentSite = await Site.findByPk(req.body.siteId);
    // console.log("magic methods:" , Object.keys(currentSite.__proto__));
    await currentSite.addPlant(plant[0]);
    res.json(plant[0]);
  } catch (error) {
    next(error);
  }
});




// PUT localhost:3001/api/plants/:id
  router.put('/:id', async (req, res, next) => {
    try {
      const plant = await Plant.findByPk(req.params.id);
      console.log("put id: ", req.params.id)
      console.log('plant put req.body', req.body)
      res.send(await plant.update(req.body));
    } catch (error) {
      next(error);
    }
  });

  // DELETE localhost:3001/api/plants/:id
  router.delete('/:id', async (req, res, next) => {
    try {
      const plant = await Plant.findByPk(req.params.id);
      await plant.destroy();
      res.send(plant);
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
