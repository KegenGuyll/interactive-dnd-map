import { IcewindDaleLocations } from "@/components/layers/icewindDale/locations";
import { forgottenRealmsBaseUrl } from "@/constants/urls/wiki";
import { Settlement } from "@/types/settlement";


const DougansHole = (): Settlement => {
  return {
    name: IcewindDaleLocations.DouganHole,
    settlementIcon: "/static/warped-icewind-dale-map/images/dougan-hole-settlementIcon.webp",
    geography: {
      aliases: ["Dougan's Hold"],
      type: "Settlement",
      region: ["Ten Towns", "Icewind Dale"],
      size: "Hamlet",
    },
    description: () => null,
    commerce: {
      imports: [],
      exports: ["Knucklehead trout", "Scrimshaw"],
    },
    politics: {
      type: "Autocracy",
      ruleType: "Speaker",
      allegiances: ["Ten Towns"],
    },
    society: {
      races: ["Humans"],
      religions: [],
    },
    history: {
      speaker: [
        {
          name: "Freya Grynstead",
          year: 1360,
        },
        {
          name: "Edgra Durmoot",
          year: 1485,
        }
      ],
      population: [
        {
          number: 100,
          year: 1360,
        }, 
        {
          number: 100,
          year: 1485,
        }, 
        {
          number: 50,
          year: 1489,
        }
      ],
      description: () => (
        <>
         <p>
           The hamlet of Dougan&apos;s Hole was founded by <a href={`${forgottenRealmsBaseUrl}/wiki/Dougan_Dubrace`} title="Dougan Dubrace">Dougan Dubrace</a>, 
           when he found a great spot to fish on the shore of Redwaters lake.
         </p>
         <p>During the 1360s DR, the spokesman was Freya Grynstead, 
            the widow of the previous spokesman who had died while fishing out on the lake. Freya lived in a house in the middle of town connected to the fishhouse by a boardwalk.
          </p>
          <p>
            Some one hundred years later, around the <a href={`${forgottenRealmsBaseUrl}/wiki/1485_DR`} title="1485 DR">Year of the Iron Dwarf&apos;s Vengeance, 1485 DR</a>, 
            the speaker was the outspoken and gruff trapper <a href={`${forgottenRealmsBaseUrl}/wiki/Edgra_Durmoot`} title="Edgra Durmoot">Edgra Durmoot</a>.
          </p>
        </>
       )
    } 
  }
}

export default DougansHole;