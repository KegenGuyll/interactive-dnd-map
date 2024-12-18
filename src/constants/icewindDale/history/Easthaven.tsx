import { IcewindDaleLocations } from "@/components/layers/icewindDale/locations";
import { forgottenRealmsBaseUrl } from "@/constants/urls/wiki";
import { Settlement } from "@/types/settlement";


const Easthaven = (): Settlement => {
  return {
    name: IcewindDaleLocations.Easthaven,
    settlementIcon: "/static/warped-icewind-dale-map/images/easthaven-settlementIcon.webp",
    description: () => (
      <>
        <p>
          Originally just a small hamlet, the building of the <a href={`${forgottenRealmsBaseUrl}/wiki/Eastway`} title="Eastway">Eastway</a> trade road connecting Easthaven with the Bryn Shander―the largest settlement of the Ten Towns―proved to be a boon to the village. Over time it became fastest-growing community in the region with a fishing fleet rivaling that of its greatest competitor, <a href={`${forgottenRealmsBaseUrl}/wiki/Caer-Dineval`} title="Caer-Dineval">Caer-Dineval</a>. 
        </p>
        <p>
          It was considered among the most comfortable of the Ten Towns, with good amenities that were uncommon among the settlements of Icewind Dale. Its people were seen as fairly friendly in comparison to their neighbors.
        </p>
        <p>A breakwater protected most of the piers that reached out into Lac Dinneshere.</p>
      </>
    ),
    geography: {
      aliases: [],
      type: "Settlement",
      region: ["Ten Towns", "Icewind Dale"],
      size: "",
    },
    commerce: {
      imports: [],
      exports: ["Fish","Knucklehead trout", "Scrimshaw"],
    },
    politics: {
      type: "Autocracy",
      ruleType: "Speaker",
      allegiances: ["Ten Towns"],
    },
    society: {
      races: ["Humans"],
      religions: ["Tempus"]
    },
    history: {
      speaker: [
        {
          name: "Hrothgar",
          year: 1281,
        },
        {
          name: "Glensather",
          year: 1356,
        },
        {
          name: "Danneth Waylen",
          year: 1489,
        }
      ],
      population: [
        {
          number: 850,
          year: 1485,
        }, 
        {
          number: 750,
          year: 1489,
        }, 
      ],
      description: () => null
    } 
  }
}

export default Easthaven;