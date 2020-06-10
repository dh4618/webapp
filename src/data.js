import img1 from "./assets/images/facebook.png";
import img2 from "./assets/images/ae.png";


export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "facebook",
      slug: "facebook",
      symbol:"FB",
      sector: "social",
      subindustry: "communication",
      price:100,
      featured:true,
      wishlist: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",

      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        }
    ]
  }
},
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "AE",
      slug: "AE",
      symbol:"AEO",
      sector: "clothings",
      subindustry: "clothing",
      price: 200,
      featured:true,
      wishlist: false,
      description:
        "american eagle Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        }
        ]
    }
  }
];