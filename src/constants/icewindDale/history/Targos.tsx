import { IcewindDaleLocations } from "@/components/layers/icewindDale/locations";
import { forgottenRealmsBaseUrl } from "@/constants/urls/wiki";
import { Settlement } from "@/types/settlement";


const Targos = (): Settlement => {
  return {
    name: IcewindDaleLocations.Targos,
    settlementIcon: "/static/warped-icewind-dale-map/images/targos-settlementIcon.webp",
    description: () => (
      <>
        <p>
          Targos was a sprawling town with uncluttered streets. The buildings had breathing space, being separated by wide avenues. While the inhabitants were used to the sense of privacy provided by these spacious accommodations, they gave off a feeling of solitude for those not used to the town&apos;s life.
        </p>
        <p>
          This, however, changed by the mid-1480s DR, when Targos became abuzz with commerce and industry that brought the city&apos;s expansion. The newer inhabitants started to construct shacks beyond the city&apos;s wooden walls and the town threatened to grow beyond them before long.
        </p>
        <p>
          Unlike Bryn Shander, Targos&apos;s nights were quiet as the fishers went to bed early, in order to be ready for the next day&apos;s early rise. During the day, the Targosans focused on getting the job down and minding their own business, rather than that of everyone else.
        </p>
        <p>
          The travel time for a merchant caravan between Luskan and Targos was approximately twenty-one days via the <a href={`${forgottenRealmsBaseUrl}/wiki/Ten_Trail`} title="Ten Trail">Ten Trail</a>.
        </p>
      </>
    ),
    geography: {
      aliases: [],
      type: "Settlement",
      region: ["Ten Towns", "Icewind Dale"],
      size: "Town",
    },
    commerce: {
      exports: ["Knucklehead trout", "Scrimshaw", "Mead"],
      imports: []
    },
    politics: {
      type: "Autocracy",
      ruleType: "Council Spokesman",
      allegiances: ["Ten Towns"],
    },
    society: {
      races: ["Humans"],
      religions: []
    },
    history: {
      speaker: [
        {
          name: "Ulbrec Dinnesmore",
          year: 1310,
        },
        {
          name: "Giandro Holfast",
          year: 1485,
        },
        {
          name: "Naerth Maxidanarr",
          year: 1489,
        },
      ],
      population: [
        {
          number: 1000,
          year: 1485,
        }, 
        {
          number: 1000,
          year: 1489,
        }, 
      ],
      description: () => null
    } 
  }
}

export default Targos;