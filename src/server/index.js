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
    representatedBy: 'ram'
  },
  {
    id: 2,
    signName: "taurus",
    element: 'earth',
    representatedBy: 'bull'
  },
  {
    id: 3,
    signName: "gemini",
    element: 'air',
    representatedBy: 'twins'
  },
  {
    id: 4,
    signName: "cancer",
    element: 'water',
    representatedBy: 'crab'
  },
  {
    id: 5,
    signName: "leo",
    element: "fire",
    representedBy: 'lion',
  },
  {
    id: 5,
    signName: "virgo",
    element: 'earth',
    representatedBy: 'virgin'
  },
  {
    id: 7,
    signName: "libra",
    element: 'air',
    representatedBy: 'scales'
  },
  {
    id: 8,
    signName: "scorpio",
    element: 'water',
    representatedBy: 'scorpion'
  },{
    id: 9,
    signName: "sagitarius",
    element: 'fire',
    representatedBy: 'archer'
  },
  {
    id: 10,
    signName: "capricon",
    element: 'earth',
    representatedBy: 'goat'
  },
  {
    id: 11,
    signName: "aquarius",
    element: 'air',
    representatedBy: 'water bearer'
  },
  {
    id: 12,
    signName: "pisces",
    element: 'water',
    representatedBy: 'Fish'
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