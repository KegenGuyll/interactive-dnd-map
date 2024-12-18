import { IcewindDaleLocations } from "@/components/layers/icewindDale/locations";
import { Settlement } from "@/types/settlement";


const GoodMead = (): Settlement => {
  return {
    name: IcewindDaleLocations.GoodMead,
    settlementIcon: "/static/warped-icewind-dale-map/images/goodmead-settlementIcon.webp",
    description: () => null,
    geography: {
      aliases: [],
      type: "Settlement",
      region: ["Ten Towns", "Icewind Dale"],
      size: "Hamlet",
    },
    commerce: {
      exports: ["Knucklehead trout", "Scrimshaw", "Mead"],
      imports: []
    },
    politics: {
      type: "Autocracy",
      ruleType: "Speaker",
      allegiances: [],
    },
    society: {
      races: ["Humans"],
      religions: []
    },
    history: {
      speaker: [
        {
          name: "Kendrick Rielsbarrow",
          year: 1485,
        },
      ],
      population: [
        {
          number: 150,
          year: 1485,
        }, 
        {
          number: 100,
          year: 1489,
        }, 
      ],
      description: () => (
        <>
         <p>
          For many years, Good Mead and Dougan&apos;s Hole enjoyed a healthy rivalry with each other.
          </p>
        </>
       )
    } 
  }
}

export default GoodMead;