const router = require("express").Router();
const { Plant, Site } = require("../db/index");

// GET localhost:8088/api/sites
router.get("/", async (req, res, next) => {
    try {
      res.send(await Site.findAll({
        include: [Plant],
    }));
    } catch (error) {
      next(error);
    }
  });
  
  // GET localhost:8088/api/sites/:id
  router.get("/:id", async (req, res, next) => {
    try {
      res.send(await Site.findByPk(req.params.id, {
        include: [Plant]
    }));
    } catch (error) {
      next(error);
    }
  });
  

   //POST http://localhost:3001/api/plants
   router.post('/', async (req, res, next) => {
    console.log("post sites: ", req.body)
    try{
      res.status(201).send(await Site.create(req.body));
    }catch(error){
      next(error)
    }
  })



// // PUT localhost:3001/api/sites/:id
// router.put('/:id', async (req, res, next) => {
//   try {
//     const site = await Site.findByPk(req.params.id);
//     console.log("put id: ", req.params.id)
//     res.send(await site.update(req.body));
//   } catch (error) {
//     next(error);
//   }
// });

// DELETE localhost:3001/api/sites/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const site = await Site.findByPk(req.params.id);
    await site.destroy();
    res.send(site);
  } catch (error) {
    next(error);
  }
});



  module.exports = router;