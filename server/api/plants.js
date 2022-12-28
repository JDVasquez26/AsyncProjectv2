const router = require("express").Router();
const { Plant, Site } = require("../db/index");

// GET localhost:3001/api/plants
router.get("/", async (req, res, next) => {
  try {
    res.send(
      await Plant.findAll({
        include: [Site],
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
// router.post('/', async (req, res, next) => {
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
    res.status(201).send(
      await Plant.create({
          name: req.body.name,
          imageUrl: req.body.imageUrl || null,
          amazonLink: req.body.amazonLink || null,
          // siteId: req.body.siteId
      })
    
      );
    // const currentSite = await Site.findById(req.body.siteId);
    // console.log("magic methods:" , Object.keys(currentSite.__proto__));
    // await currentSite.addPlant(newPlant[0]);
    // res.json(Plant[0]);
  } catch (error) {
    next(error);
  }
});

//   // PUT localhost:3001/api/plants/:id
//   router.put('/:id', async (req, res, next) => {
//     try {
//       const plant = await Plant.findByPk(req.params.id);
//       console.log("put id: ", req.params.id)
//       res.send(await plant.update(req.body));
//     } catch (error) {
//       next(error);
//     }
//   });

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
