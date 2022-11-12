const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.set("json spaces", 2);

const signs = [
  {
    id: 1,
    signName: "Aries",
    element: 'Fire',
    representatedBy: 'Ram'
  },
  {
    id: 2,
    signName: "Taurus",
    element: 'Earth',
    representatedBy: 'Bull'
  },
  {
    id: 3,
    signName: "Gemini",
    element: 'Air',
    representatedBy: 'Twins'
  },
  {
    id: 4,
    signName: "Cancer",
    element: 'Water',
    representatedBy: 'Crab'
  },
  {
    id: 5,
    signName: "Leo",
    element: 'Lion',
  },
  {
    id: 5,
    signName: "Virgo",
    element: 'Earth',
    representatedBy: 'Virgen'
  },
  {
    id: 7,
    signName: "Libra",
    element: 'Air',
    representatedBy: 'Scales'
  },
  {
    id: 8,
    signName: "Scorpio",
    element: 'Water',
    representatedBy: 'Scorpion'
  },{
    id: 9,
    signName: "Sagitarius",
    element: 'Fire',
    representatedBy: 'Archer'
  },
  {
    id: 2,
    signName: "Capricon",
    element: 'Earth',
    representatedBy: 'Goat'
  },
  {
    id: 10,
    signName: "Aquarius",
    element: 'Air',
    representatedBy: 'Water bearer'
  },
  {
    id: 11,
    signName: "Pisces",
    element: 'Water',
    representatedBy: 'Fish'
  },
];


app.get("/zodiac", (_req, res) => res.send(signs));

// app.get("/appointments", (_req, res) => res.send(appointments));

// app.get("/appointments/:serviceId", (req, res) => {
//   res.send(
//     appointments
//       .filter((appt) => appt.serviceId === parseInt(req.params.serviceId))
//       .map(({ id, serviceName, apptStartTime, apptDuration }) => ({
//         id,
//         serviceName,
//         apptStartTime,
//         apptDuration,
//       }))
//   );
//   res.end();
// });

app.listen(process.env.SERVERPORT || 2000, () => {
  console.log(
    `Scheduling server listening on port ${process.env.SERVERPORT || 2000}...`
  );
});