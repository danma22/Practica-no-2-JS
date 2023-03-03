'use strict'

var buton = document.getElementById("btn1")
const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      clave: "adasdfas",
      price: 15.99,
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      clave: "adsfadsf",
      price: 13.99,
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      clave: "adsfasdg",
      price: 6.99,
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      clave: "yetyetyw",
      price: 20.99,
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      clave: "rtyerhfgh",
      price: 22.99,
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      clave: "ktyliulut",
      price: 18.99,
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      clave: "qwrqwfdgr",
      price: 8.99,
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      clave: "qtrdsdfre",
      price: 12.99,
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      clave: "bnvdjdbncf",
      price: 16.99,
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      clave: "wrgdftgsfdhw",
      price: 22.99,
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];



function fillTable(){
    let table = document.getElementById("contentTable")
    let contentTable = menu.map(function (p) {
        return '<tr><td>'+p.title+'</td><td>'+p.desc+'</td><td>'+p.clave+'</td><td>'+p.price+'</td></tr>'
    });

    contentTable = contentTable.join("");

    table.innerHTML = contentTable
}

document.addEventListener("DOMContentLoaded", function() {
  buton.addEventListener("click", function(){
    fillTable()
  })
	
});
