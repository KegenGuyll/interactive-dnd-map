import React from 'react'
import { FeatureGroup, LayerGroup, Polygon } from 'react-leaflet'
import { IcewindDaleLocations } from '../locations'
import { TownService } from '@/types/townServices'
import type { LeafletMouseEvent } from 'leaflet'
import { useAppSelector } from '@/hooks/reduxHooks'

const brynShanderLocations: TownService[] = [
  {
    name: "House of the Morninglord",
    town: IcewindDaleLocations.BrynShander,
    type: 'place of worship',
    services: [],
    owners: ["Cleric Mithann"],
    description: "The House of the Morninglord in Bryn Shander was the town's place of worship for the Keeper of the Eternal Sun, Amaunator. It was overseen by the devout and irrepressible cleric Mithann.",
    voloRating: undefined,
    atmosphere: "",
    architectureStyle: "",
    visible: true,
    polygon: [
        [
          52.961668,
          0.908089,
        ],
        [
          52.945742,
          0.906715,
        ],
        [
          52.942432,
          0.954094,
        ],
        [
          52.934362,
          0.984993,
        ],
        [
          52.93312,
          1.008339,
        ],
        [
          52.937466,
          1.030312,
        ],
        [
          52.941604,
          1.059494,
        ],
        [
          52.952982,
          1.062241,
        ],
        [
          52.961668,
          0.908089,
        ]
      ],
  },
  {
    name: 'The Hooked Knucklehead',
    town: IcewindDaleLocations.BrynShander,
    type: 'inn',
    services: [
      "Rest",
      "Food",
    ],
    owners: ["Barton"],
    description: "The Hooked Knucklehead was a longstanding inn in Bryn Shander.",
    voloRating: {
      pipes: 1,
      coins: 4,
    },
    atmosphere: "The Hooked Knucklehead was mostly frequented by traders from neighboring cities who came to Bryn Shander for business. The owner, Barton, did not interfere with his clients' affairs.",
    architectureStyle: "",
    visible: true,
    polygon: [
      [
        52.922151,
        0.520134,
      ],
      [
        52.933327,
        0.548973,
      ],
      [
        52.904761,
        0.603905,
      ],
      [
        52.888813,
        0.606308,
      ],
      [
        52.887985,
        0.568886,
      ],
      [
        52.901655,
        0.544853,
      ],
      [
        52.898755,
        0.53627,
      ],
      [
        52.910973,
        0.508118,
      ],
      [
        52.91739,
        0.522537,
      ],
      [
        52.922151,
        0.520134,
      ]
  ]
  },
  {
    name: "Rendaril's Emporium",
    town: IcewindDaleLocations.BrynShander,
    type: 'general store',
    services: ["Goods"],
    owners: ["Rendaril"],
    description: "Rendaril's Emporium was the largest and busiest mercantile building in Bryn Shander during the late 15th century DR. It owed its name to its proprietor, the cunning half-elven merchant Rendaril",
    voloRating: undefined,
    atmosphere: "",
    architectureStyle: "",
    visible: true,
    polygon: [
      [
        52.831084,
        0.618324,
      ],
      [
        52.83461,
        0.625877,
      ],
      [
        52.835232,
        0.670509,
      ],
      [
        52.831188,
        0.675831,
      ],
      [
        52.812101,
        0.676517,
      ],
      [
        52.813346,
        0.622101,
      ],
      [
        52.831084,
        0.618324,
      ]
  ],
  },
  {
    name: "Geldenstag's Rest",
    town: IcewindDaleLocations.BrynShander,
    type: 'inn',
    services: [
      'Rest',
      'Food',
    ],
    owners: ["Myrtle"],
    description: "Geldenstag's Rest was one of the oldest inns in Bryn Shander.",
    voloRating: {
      pipes: 1,
      coins: 4,
    },
    atmosphere: "The proprietor, Myrtle, was known to constantly ask her customers about what they were up to each day.",
    architectureStyle: "",
    visible: true,
    polygon: [
      [
        52.769124,
        1.000443,
      ],
      [
        52.762996,
        1.002846,
      ],
      [
        52.761645,
        1.000099,
      ],
      [
        52.75375,
        1.003704,
      ],
      [
        52.753646,
        1.009884,
      ],
      [
        52.749594,
        1.010742,
      ],
      [
        52.748555,
        1.005249,
      ],
      [
        52.740137,
        1.009541,
      ],
      [
        52.740137,
        1.018124,
      ],
      [
        52.735356,
        1.01881,
      ],
      [
        52.739098,
        1.045246,
      ],
      [
        52.746165,
        1.041126,
      ],
      [
        52.747931,
        1.058464,
      ],
      [
        52.758321,
        1.053486,
      ],
      [
        52.75697,
        1.036491,
      ],
      [
        52.765489,
        1.029625,
      ],
      [
        52.769124,
        1.000443,
      ]
  ],
  },
  {
    name: "Town Hall",
    town: IcewindDaleLocations.BrynShander,
    type: 'town hall',
    services: [],
    owners: [],
    description: "",
    voloRating: undefined,
    atmosphere: "",
    architectureStyle: "",
    visible: false,
    polygon: [
      [ 52.742735, 0.366325 ], [ 52.743359, 0.375595 ],
      [ 52.759152, 0.374222 ], [ 52.75936, 0.418167 ],
      [ 52.747308, 0.421944 ], [ 52.749386, 0.447693 ],
      [ 52.74897, 0.457993 ],  [ 52.758113, 0.456276 ],
      [ 52.759983, 0.483055 ], [ 52.726312, 0.502281 ],
      [ 52.723817, 0.471039 ], [ 52.733173, 0.466232 ],
      [ 52.733173, 0.455933 ], [ 52.729847, 0.454216 ],
      [ 52.728184, 0.422974 ], [ 52.716955, 0.425377 ],
      [ 52.715291, 0.380058 ], [ 52.727976, 0.376968 ],
      [ 52.728392, 0.366325 ], [ 52.742735, 0.366325 ]
    ]
  },
  {
    name: "Speaker's Palace",
    town: IcewindDaleLocations.BrynShander,
    type: 'residence',
    services: [],
    owners: ["Cassius", "Duvessa Shane"],
    description: "The Speaker's Palace was the personal residence of the Speaker of Bryn Shander, the individual who represented the settlement to the rest of the Ten Towns.",
    voloRating: undefined,
    atmosphere: "",
    architectureStyle: "Stone building of dwarven architecture",
    visible: true,
    polygon: [
      [ 52.608885, 0.31105 ],
      [ 52.555481, 0.338516 ],
      [ 52.612638, 0.485802 ],
      [ 52.645563, 0.381088 ],
      [ 52.608885, 0.31105 ]
    ],
  },
  {
    name: "Council Hall",
    town: IcewindDaleLocations.BrynShander,
    type: 'town hall',
    services: [],
    owners: [],
    description: "",
    voloRating: undefined,
    atmosphere: "",
    architectureStyle: "",
    visible: false,
    polygon: [
      [ 52.464795, 0.030899 ], [ 52.451616, 0.024033 ],
      [ 52.450151, 0.015793 ], [ 52.434455, 0.00824 ],
      [ 52.432572, 0.018196 ], [ 52.428804, 0.015793 ],
      [ 52.426291, 0.038452 ], [ 52.419801, 0.035706 ],
      [ 52.415404, 0.038109 ], [ 52.411634, 0.068665 ],
      [ 52.415613, 0.071754 ], [ 52.421685, 0.081024 ],
      [ 52.421057, 0.098877 ], [ 52.424826, 0.107803 ],
      [ 52.443873, 0.115013 ], [ 52.45852, 0.11364 ],
      [ 52.460612, 0.091667 ], [ 52.452662, 0.084801 ],
      [ 52.455591, 0.052528 ], [ 52.46354, 0.056305 ],
      [ 52.464795, 0.030899 ]
    ],
  },
  {
    name: "Stables",
    town: IcewindDaleLocations.BrynShander,
    type: 'residence',
    services: [],
    owners: [],
    description: "",
    voloRating: undefined,
    atmosphere: "",
    architectureStyle: "",
    visible: false,
    polygon: [
      [ 52.49616, -0.500908 ],
      [ 52.50243, -0.454903 ],
      [ 52.486334, -0.43499 ],
      [ 52.489261, -0.4216 ],
      [ 52.47107, -0.404434 ],
      [ 52.468979, -0.414391 ],
      [ 52.450151, -0.398598 ],
      [ 52.445966, -0.397224 ],
      [ 52.442409, -0.413704 ],
      [ 52.445548, -0.41954 ],
      [ 52.436967, -0.44838 ],
      [ 52.45329, -0.471039 ],
      [ 52.467305, -0.485458 ],
      [ 52.49616, -0.500908 ]
    ],
  },
  {
    name: "House of the Triad",
    town: IcewindDaleLocations.BrynShander,
    type: 'temple',
    services: [],
    owners: ["Traveling clergy members"],
    description: "The House of the Triad was a temple dedicated to the deities of the Triad in the walled town of Bryn Shander. The stone structure was the largest holy place within the most prominent settlement of the Ten Towns.",
    voloRating: undefined,
    atmosphere: "",
    architectureStyle: "Made of stone in the dwarven style",
    visible: true,
    polygon: [
      [ 52.595228, -0.164795 ],
      [ 52.591786, -0.158443 ],
      [ 52.588449, -0.163422 ],
      [ 52.579062, -0.140762 ],
      [ 52.576037, -0.139732 ],
      [ 52.565708, -0.110722 ],
      [ 52.570925, -0.10231 ],
      [ 52.569256, -0.095272 ],
      [ 52.579062, -0.075703 ],
      [ 52.583547, -0.079651 ],
      [ 52.588866, -0.073986 ],
      [ 52.597209, -0.099735 ],
      [ 52.592308, -0.110378 ],
      [ 52.60555, -0.143337 ],
      [ 52.595228, -0.164795 ]
    ],
  },
  {
    name: "Kevin's Comfort",
    town: IcewindDaleLocations.BrynShander,
    type: 'tavern',
    services: ["Flamebeard's Firebrandy", "Mead from Good Mead"],
    owners: ["Ogden Flamebeard"],
    description: "Kelvin's Comfort was a tavern in Bryn Shander.",
    voloRating: undefined,
    atmosphere: "",
    architectureStyle: "",
    visible: true,
    polygon: [
      [ 52.69969, 0.304871 ],
      [ 52.713627, 0.303154 ],
      [ 52.725689, 0.304527 ],
      [ 52.72652, 0.313454 ],
      [ 52.75188, 0.309334 ],
      [ 52.754997, 0.344009 ],
      [ 52.714667, 0.350189 ],
      [ 52.713211, 0.357056 ],
      [ 52.704475, 0.364609 ],
      [ 52.700106, 0.354309 ],
      [ 52.69969, 0.304871 ]
    ],
  },
  {
    name: "Armory",
    town: IcewindDaleLocations.BrynShander,
    type: 'general store',
    services: [],
    owners: [],
    description: "",
    voloRating: undefined,
    atmosphere: "",
    architectureStyle: "",
    visible: false,
    polygon: [
      [ 52.787815, 0.090637 ],
      [ 52.774316, 0.091667 ],
      [ 52.774109, 0.099564 ],
      [ 52.762476, 0.099907 ],
      [ 52.761853, 0.126686 ],
      [ 52.776601, 0.125313 ],
      [ 52.777016, 0.151749 ],
      [ 52.789683, 0.151062 ],
      [ 52.787815, 0.090637 ]
    ],
  },
  {
    name: "Blackiron Blades",
    town: IcewindDaleLocations.BrynShander,
    type: 'blacksmith',
    services: ["Low-quality weapons"],
    owners: ["Elza", "Garn"],
    description: "Blackiron Blades was a small smithy and weapons shop in Bryn Shander in Icewind Dale. Located a short distance north of the town square, it was known as a one-stop shop for travelers and adventurers.",
    voloRating: undefined,
    atmosphere: "",
    architectureStyle: "",
    visible: true,
    polygon: [
      [ 52.899998, 0.32444 ],
      [ 52.864985, 0.33989 ],
      [ 52.859596, 0.344353 ],
      [ 52.863948, 0.375252 ],
      [ 52.870788, 0.384521 ],
      [ 52.891299, 0.376282 ],
      [ 52.889435, 0.361519 ],
      [ 52.902276, 0.353966 ],
      [ 52.899998, 0.32444 ]
    ],
  },
  {
    name: "The Northlook",
    town: IcewindDaleLocations.BrynShander,
    type: 'inn',
    services: [],
    owners: ["Scramsax"],
    description: "The Northlook was an inn in Bryn Shander",
    voloRating: {
      pipes: 1,
      coins: 4,
    },
    atmosphere: "The Northlook was frequented mostly by adventurers and mercenaries.",
    architectureStyle: "",
    visible: true,
    polygon: [
      [ 53.111957, 0.182648 ],
      [ 53.097529, 0.183678 ],
      [ 53.094643, 0.171318 ],
      [ 53.08289, 0.177498 ],
      [ 53.084746, 0.190887 ],
      [ 53.079796, 0.192261 ],
      [ 53.076909, 0.199814 ],
      [ 53.078765, 0.216637 ],
      [ 53.083714, 0.220757 ],
      [ 53.100415, 0.2211 ],
      [ 53.099384, 0.215607 ],
      [ 53.114224, 0.21286 ],
      [ 53.11546, 0.203934 ],
      [ 53.116284, 0.191231 ],
      [ 53.111957, 0.182648 ]
    ],
  },
]

type BrynShanderLocationsLayerProps = {
  onLocationClick: (e: LeafletMouseEvent, townService?: TownService) => void
}

const BrynShanderLocationsLayer: React.FC<BrynShanderLocationsLayerProps> = ({onLocationClick}: BrynShanderLocationsLayerProps) => {
  const { selectedTownService } = useAppSelector(state => state.brynShander)
  
  return (
    <LayerGroup>
      {brynShanderLocations.map((location, index) => {
        if(!location.visible) return null

        const isActiveSelection = location.name === selectedTownService?.name

        return (
          <FeatureGroup
            eventHandlers={{ click: (e) => onLocationClick(e, location)}}
            key={index}
          >
            <Polygon
              pathOptions={{color: isActiveSelection ? 'blue' : 'yellow', fillOpacity: 0.3, stroke: false}}
              positions={location.polygon}
            />
          </FeatureGroup>
        )
      })}
    </LayerGroup>
  )
}

export default BrynShanderLocationsLayer