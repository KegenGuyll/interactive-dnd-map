import { IcewindDaleLocations } from "@/components/layers/icewindDale/locations";
import { Settlement } from "@/types/settlement";


const Bremen = (): Settlement => {
  return {
    name: IcewindDaleLocations.Bremen,
    settlementIcon: "/static/warped-icewind-dale-map/images/bremen-settlementIcon.webp",
    description: () => null,
    geography: {
      aliases: [],
      type: "Settlement",
      region: ["Ten Towns"],
      size: "Hamlet",
    },
    commerce: {
      exports: ["Gold", "Textiles"],
      imports: []
    },
    politics: {
      type: "Autocracy",
      ruleType: "Spokesman",
      allegiances: ["Ten Towns"],
    },
    society: {
      races: ["Humans"],
      religions: []
    },
    history: {
      speaker: [
        {
          name: "Revjak",
          year: 1356,
        },
        {
          name: "Gil Haerngen",
          year: 1370,
        },
        {
          name: "Dorbulgruf Shalescar",
          year: 1485,
        },
      ],
      population: [
        {
          number: 300,
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

export default Bremen;