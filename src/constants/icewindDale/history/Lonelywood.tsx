import { IcewindDaleLocations } from "@/components/layers/icewindDale/locations";
import { forgottenRealmsBaseUrl } from "@/constants/urls/wiki";
import { Settlement } from "@/types/settlement";


const Lonelywood = (): Settlement => {
  return {
    name: IcewindDaleLocations.Lonelywood,
    settlementIcon: "/static/warped-icewind-dale-map/images/lonelywood-settlementIcon.webp",
    description: () => (
      <>
      <p>
        <b>Lonelywood</b> was a town in <a href={`${forgottenRealmsBaseUrl}/wiki/Ten_Towns`} title="Ten Towns">Ten Towns</a> within the cold region of <a href="/wiki/Icewind_Dale" title="Icewind Dale">Icewind Dale</a>. It was known as being the &quot;first choice&quot; for rogues seeking a refuge in Icewind Dale.
      </p>
      </>
    ),
    geography: {
      aliases: ["Home of the Halfing Hero"],
      type: "Settlement",
      region: ["Ten Towns"],
      size: "Hamlet",
    },
    commerce: {
      exports: [
        "Furs",
        "Kuncklehead Trout",
        "Scrimshaw",
        "Lumber",
        "Pelts"
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
          name: "Baldemar Thurlow",
          year: 1281,
        },
        {
          name: "Regis",
          year: 1351,
        },
        {
          name: "Muldoon",
          year: 1351,
        },
        {
          name: "Regis",
          year: 1369,
        },
        {
          name: "Avandro Perth",
          year: 1485,
        },
        {
          name: "Nimsy Huddle",
          year: 1489,
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
      description: () => null
    } 
  }
}

export default Lonelywood;