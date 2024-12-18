import { IcewindDaleLocations } from "@/components/layers/icewindDale/locations";
import { forgottenRealmsBaseUrl } from "@/constants/urls/wiki";
import { Settlement } from "@/types/settlement";


const CaerDineval = (): Settlement => {
  return {
    name: IcewindDaleLocations.CaerDineval,
    settlementIcon: "/static/warped-icewind-dale-map/images/caer-dineval-settlementIcon.webp",
    description: () => null,
    geography: {
      aliases: [],
      type: "Settlement",
      region: ["Ten Towns", "Icewind Dale"],
      size: "Hamlet",
    },
    commerce: {
      exports: [],
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
          name: "Jensin Brent",
          year: 1356,
        },
        {
          name: "Crannoc Siever",
          year: 1485,
        },
      ],
      population: [
        {
          number: 250,
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
            The Dinev family, displaced from their home in <a href={`${forgottenRealmsBaseUrl}/wiki/Cormyr`} title="Cormyr">Cormyr</a>, originally built the castle in the <a href={`${forgottenRealmsBaseUrl}/wiki/1050_DR`} title="1050 DR">1050&nbsp;DR</a>, hoping to claim all of Icewind Dale for themselves. They abandoned it eight years later in <a href={`${forgottenRealmsBaseUrl}/wiki/1058_DR`} title="1058 DR">1058 DR</a> due to an <a href={`${forgottenRealmsBaseUrl}/wiki/Orc`} title="Orc">orc</a> siege that eliminated the town&apos;s population, either by death or by forcing them to flee. The Dinevs starved after three weeks inside their home and were too weak to fight back when the orcs got inside. A decade later, the castle was retaken from the orcs by the ancestors of the current townsfolk.
          </p>
          <p>
            By the <a href={`${forgottenRealmsBaseUrl}/wiki/1356_DR`} title="1356 DR">Year of the Worm, 1356 DR</a>, young Jensin Brent had become the councilman of the town.  As spokesman, he lived in the Caer and greedily defended fishing rights against Caer-Konig.
          </p>
          <p>
            As of the <a href={`${forgottenRealmsBaseUrl}/wiki/1485_DR`} title="1485 DR">Year of the Iron Dwarf&apos;s Vengeance, 1485 DR</a>, Caer-Dineval was largely the same. Though the town&apos;s feud with Caer-Konig had only just died down thanks to an alliance between the speakers, enmities between the two peoples remained. Their agreement existed only to create a united front against the fishing fleet of <a href={`${forgottenRealmsBaseUrl}/wiki/Easthaven`} title="Easthaven">Easthaven</a>. 
          </p>
        </>
       )
    } 
  }
}

export default CaerDineval;