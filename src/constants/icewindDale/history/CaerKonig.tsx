import { IcewindDaleLocations } from "@/components/layers/icewindDale/locations";
import { Settlement } from "@/types/settlement";


const CaerKonig = (): Settlement => {
  return {
    name: IcewindDaleLocations.CaerKonig,
    settlementIcon: "/static/warped-icewind-dale-map/images/caer-konig-settlementIcon.webp",
    description: () => (
      <>
        <p>
          The town straddled the round harbor in a semicircle, with a line of buildings at the edge of the harbor, an uphill slope, and a circular round with buildings. 
        </p>
      </>
    ),
    geography: {
      aliases: ["Home of the Halfing Hero"],
      type: "Settlement",
      region: ["Ten Towns"],
      size: "Village",
    },
    commerce: {
      exports: [],
      imports: []
    },
    politics: {
      type: "Autocracy",
      ruleType: "Speaker (Council Spokesman)",
      allegiances: ["Ten Towns"],
    },
    society: {
      races: ["Humans (Barbarians)"],
      religions: []
    },
    history: {
      speaker: [
        {
          name: "Dorim Lugar",
          year: 1356,
        },
        {
          name: "Schermount",
          year: 1356,
        },
        {
          name: "Revjak",
          year: 1358,
        },
        {
          name: "Alden Lowell",
          year: 1485,
        },
        {
          name: "Trovus",
          year: 1489,
        }
      ],
      population: [
        {
          number: 200,
          year: 1485,
        }, 
        {
          number: 150,
          year: 1489,
        }, 
      ],
      description: () => null
    } 
  }
}

export default CaerKonig;