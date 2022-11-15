const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.set("json spaces", 2);

const signs = [
  {
    id: 1,
    signName: "aries",
    element: 'fire',
    representedBy: 'ram'
  },
  {
    id: 2,
    signName: "taurus",
    element: 'earth',
    representedBy: 'bull'
  },
  {
    id: 3,
    signName: "gemini",
    element: 'air',
    representedBy: 'twins'
  },
  {
    id: 4,
    signName: "cancer",
    element: 'water',
    representedBy: 'crab'
  },
  {
    id: 5,
    signName: "leo",
    element: "fire",
    representedBy: 'lion',
  },
  {
    id: 6,
    signName: "virgo",
    element: 'earth',
    representedBy: 'virgin'
  },
  {
    id: 7,
    signName: "libra",
    element: 'air',
    representedBy: 'scales'
  },
  {
    id: 8,
    signName: "scorpio",
    element: 'water',
    representedBy: 'scorpion'
  },{
    id: 9,
    signName: "sagitarius",
    element: 'fire',
    representedBy: 'archer'
  },
  {
    id: 10,
    signName: "capricon",
    element: 'earth',
    representedBy: 'goat'
  },
  {
    id: 11,
    signName: "aquarius",
    element: 'air',
    representedBy: 'water bearer'
  },
  {
    id: 12,
    signName: "pisces",
    element: 'water',
    representedBy: 'fish'
  },
];


app.get("/zodiac", (_req, res) => res.send(signs));

app.get("/zodiac/:signName", (req, res) => {
  res.send(
    signs.filter(sign => sign.signName === req.params.signName)
  )
  res.end()
})


app.listen(2000, () => {
  console.log(
    `Scheduling server listening on port 2000}...`
  );
});