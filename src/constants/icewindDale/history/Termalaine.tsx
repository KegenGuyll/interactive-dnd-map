import { IcewindDaleLocations } from "@/components/layers/icewindDale/locations";
import { forgottenRealmsBaseUrl } from "@/constants/urls/wiki";
import { Settlement } from "@/types/settlement";


const Termalaine = (): Settlement => {
  return {
    name: IcewindDaleLocations.Termalaine,
    settlementIcon: "/static/warped-icewind-dale-map/images/termalaine-settlementIcon.webp",
    description: () => (
      <>
      <p>
        <b>Termalaine</b> was the second-northernmost settlement of <a href={`${forgottenRealmsBaseUrl}/wiki/Ten_Towns`} title="Ten Towns">Ten Towns</a>, and the third largest in the region in the 1300s. It was thought to be the gem of <a href={`${forgottenRealmsBaseUrl}/wiki/Icewind_Dale`} title="Icewind Dale">Icewind Dale</a>; a charming little village surrounded by striking natural beauty. As delightful as it was, the town maintained a bitter fishing rivalry with the walled settlement of <a href={`${forgottenRealmsBaseUrl}/wiki/Targos`} title="Targos">Targos</a>. The city gets its name from <a href={`${forgottenRealmsBaseUrl}/wiki/Tourmaline`} title="Tourmaline">tourmaline</a> mining.
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
      exports: [
        "Tourmaline"
      ],
      imports: []
    },
    politics: {
      type: "Autocracy",
      ruleType: "Speaker",
      allegiances: ["Ten Towns"],
    },
    society: {
      races: ["Humans"],
      religions: []
    },
    history: {
      speaker: [
        {
          name: "Agorwal",
          year: 1351,
        },
        {
          name: "Shaelen Masthew",
          year: 1485,
        },
        {
          name: "Oarus Masthew",
          year: 1489,
        }
      ],
      population: [
        {
          number: 600,
          year: 1485,
        }, 
        {
          number: 600,
          year: 1489,
        }, 
      ],
      description: () => null
    } 
  }
}

export default Termalaine;