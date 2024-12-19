import { IcewindDaleLocations } from "@/components/layers/icewindDale/locations";
import { Settlement } from "@/types/settlement";


const BrynShander = (): Settlement => {
  return {
    name: IcewindDaleLocations.BrynShander,
    url: "/icewind-dale/bryn-shander",
    settlementIcon: "/static/warped-icewind-dale-map/images/brynshander-settlementIcon.webp",
    description: () => (
      <>
        <p>
          The circular walled town itself was placed upon a hill, with snowy plains stretching in all directions. There were three gates: north, south, and east. City Hill sat just outside the wall to the northeast of the city.
        </p>
      </>
    ),
    geography: {
      aliases: [],
      type: "Settlement",
      region: ["Ten Towns"],
      size: "Small Town",
    },
    commerce: {
      imports: [
        "Dye",
        "Food",
        "Herb",
        "Lumber",
        "Spices",
        "Textiles",
        "Wine"
      ],
      exports: ["Scrimsaw"],
    },
    politics: {
      type: "Autocracy",
      ruleType: "Speaker",
      allegiances: [],
    },
    society: {
      races: [
        "Humans",
        "Orcs",
        "Shield Dwarves"
      ],
      religions: []
    },
    history: {
      speaker: [
        {
          name: "Cassius",
          year: 1351,
        },
        {
          name: "Duvessa Shane",
          year: 1485,
        },
      ],
      population: [
        {
          number: 1200,
          year: 1485,
        }, 
      ],
      description: () => null
    } 
  }
}

export default BrynShander;