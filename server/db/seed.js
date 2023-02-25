const { dbConnection, Plant, Site, User } = require("./index");

const seed = async () => {
  await dbConnection.sync({ force: true });
  console.log("db synced!");


  //USERS
  //#1 USER
  await User.create({
    username: 'jes123',
    password: '123',
    firstName: 'Jesthine',
    lastName:'Disla',
    email:'jes@gmail.com',
    isAdmin: false
    // imageUrl: faker.image.people(),
   
  })

//#2 USER
  await User.create({
    username: 'joe123',
    password: '123',
    firstName: 'Joseph',
    lastName:'Williams',
    email:'joe@gmail.com',
    isAdmin: false
    // imageUrl: faker.image.people(),
   
  })

//#3 - Admin User
  await User.create({
    username: 'jen123',
    password: '123',
    firstName: 'Jen',
    lastName:'Diaz',
    email:'jen@gmail.com',
    isAdmin: true
    // imageUrl: faker.image.people(),
   
  })

  // //Sites
  const entry = await Site.create({
    name: "Entry Hallway",
    lighting: "Shade/Dark",
    userId: 1,
  });

  const livingRoom = await Site.create({
    name: "Living Room",
    lighting: "Part Sun, part shade",
    userId: 1,
  });



const bedroom = await Site.create({
    name: "Bedroom",
    lighting: "Part Sun, part shade",
    userId: 2,
  });
  const kitchen = await Site.create({
    name: "Kitchen",
    lighting: "Full Sun",
    userId: 2,
  });

  // // //Plants
  const spiderPlant = await Plant.create({
    name: "Spider Plant",
    imageUrl:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71OpsoutL7L._AC_SX466_.jpg",
    amazonLink:
      "https://www.amazon.com/Succulents-Bonnie-Spider-Naturally-Purifying/dp/B005J66JMI?ref_=ast_sto_dp",
    category: "Wishlist",
    lighting:"Shade/Dark",
    siteId: livingRoom.id,
    userId: 1,
  });

  const jadePlant = await Plant.create({
    name: "Jade Plant",
    imageUrl:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61GzpzR5hBL._AC_SX466_.jpg",
    amazonLink:
      "https://www.amazon.com/Sunset-Jade-Plant-Crassula-House/dp/B0044FQDRG?ref_=ast_sto_dp",
    category: "Purchased",
    lighting: "Part Sun, part shade",
    siteId: entry.id,
    userId: 1,
  });


  const stringOfPearls = await Plant.create({
    name: "String of Pearls",
    imageUrl:
      "https://m.media-amazon.com/images/I/51azht3fisL._AC_SX425_.jpg",
    amazonLink:
      "https://www.amazon.com/String-Pearls-Senecio-rowleyanus-Succulent/dp/B07P1CKKT3?ref_=ast_sto_dp",
    category: "Purchased",
    lighting: "Part Sun, part shade",
    siteId: bedroom.id,
    userId: 2,
  });

  const hoyaKerri = await Plant.create({
    name: "Hoya kerri",
    imageUrl:
      "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61GzpzR5hBL._AC_SX466_.jpg",
    amazonLink:
      "https://www.amazon.com/Amazing-Sweetheart-Waxplant-kerri-House/dp/B086Z1YHVF?ref_=ast_sto_dp",
    category: "Purchased",
    lighting: "Part Sun, part shade",
    siteId: kitchen.id,
    userId: 2,
  });






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
