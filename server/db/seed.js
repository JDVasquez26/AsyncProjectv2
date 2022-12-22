const { dbConnection, Plant, Site } = require("./index");

const seed = async () => {
  await dbConnection.sync({ force: true });

  //Sites
  const Bedroom = await Site.create({
    name: "Bedroom",
    lighting: "Part Sunny",
  });

  const Entry = await Site.create({
    name: "Entry Hallway",
    lighting: "Dark",
  });

  const livingRoom = await Site.create({
    name: "Living Room",
    lighting: "Part Sunny",
  });
  // const kitchen await Site.create({
  //      name: "Kitchen",
  //      lighting:"Shade"
  //   })

  // //Plants
  const spiderPlant = await Plant.create({
    name: "Spider Plant",
    imageUrl:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71OpsoutL7L._AC_SX466_.jpg",
    amazonLink:
      "https://www.amazon.com/Succulents-Bonnie-Spider-Naturally-Purifying/dp/B005J66JMI?ref_=ast_sto_dp",
    purchased: false,
    siteId: livingRoom.id,
  });

  const jadePlant = await Plant.create({
    name: "Jade Plant",
    imageUrl:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61GzpzR5hBL._AC_SX466_.jpg",
    amazonLink:
      "https://www.amazon.com/Sunset-Jade-Plant-Crassula-House/dp/B0044FQDRG?ref_=ast_sto_dp",
    purchased: true,
    siteId: Entry.id,
  });

  //  const stringPlant = await Plant.create({
  //     name: "String of Pearls",
  //     imageUrl:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51azht3fisL._AC_SX466_.jpg",
  //     amazonLink:"https://www.amazon.com/String-Pearls-Senecio-rowleyanus-Succulent/dp/B07P1CKKT3?ref_=ast_sto_dp",
  //     purchased: false,
  //    siteId:
  //  });

  dbConnection.close();
  console.log(`
      Seeding successful
    `);
};

seed().catch((err) => {
  dbConnection.close();
  console.log(`
    
        Error seeding:
    
        ${err.message}
    
        ${err.stack}
    
      `);
});
