import { Settlement } from "@/types/settlement"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { FaTimes } from "react-icons/fa"

type MapContextProps = {
  mapTitle: string
  selectedSettlement?: Settlement
  setSelectedSettlement: React.Dispatch<React.SetStateAction<Settlement | undefined>>
}

const MapContext: React.FC<MapContextProps> = ({mapTitle, selectedSettlement, setSelectedSettlement}: MapContextProps) => {

  return (
    <div className={classNames(
      'absolute max-h-[500px] overflow-y-scroll top-3 right-0 left-0 m-auto  pt-0 bg-white w-[400px] text-black rounded shadow z-[9999]',
      'md:right-0 md:m-1 md:top-0 md:left-auto',
      'lg:max-h-[600px] lg:top-10 lg:right-10'
      )}>
      <div className='flex sticky top-0 bg-white p-4'>
        <div className='flex-grow'>
          <h1 className='text-xl font-bold'>{mapTitle}</h1>
          <p className='text-xs font-light text-gray-600'>Click on a location to view more information</p>
        </div>
        <button onClick={() => setSelectedSettlement(undefined)}>
          <FaTimes />
        </button>
      </div>
      {selectedSettlement && (
        <div className='p-4 pt-0'>
          <div className='p-4 bg-gray-100 rounded mt-4 flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>{selectedSettlement.name}</h1>
            {selectedSettlement.url && (
              <Link className="text-sm" href={selectedSettlement.url} >View City Map</Link>
            )}
            <Image
              src={selectedSettlement.settlementIcon}
              height={100}
              width={100}
              alt={selectedSettlement.name}
            />
            <div className='flex flex-col gap-4 divide-y'>
              <section>
                <h2 className='text-lg font-semibold'>Speakers:</h2>
                <div>
                  {selectedSettlement.history.speaker.map((speaker, index) => (
                    <p key={index}>{speaker.name} ({speaker.year})</p>
                  ))}
                </div>
              </section>
              {selectedSettlement.description() && (
                <section className='pt-4'>
                  <h2 className='text-lg font-semibold'>Description:</h2>
                  <div className='flex flex-col gap-4'>
                    {selectedSettlement.description()}
                  </div>
                </section>
              )}
              <section className='pt-4'>
                <h2 className='text-lg font-semibold'>Geography:</h2>
                <p><b className='text-sm'>Type:</b> {selectedSettlement.geography.type}</p>
                <p><b className='text-sm'>Region:</b> {selectedSettlement.geography.region.join(', ')}</p>
                {selectedSettlement.geography.size && <p><b className='text-sm'>Size:</b> {selectedSettlement.geography.size}</p>}
              </section>
              {selectedSettlement.history.description() && (
                <section className='pt-4'>
                  <h2 className='text-lg font-semibold'>History:</h2>
                  <div className='flex flex-col gap-4'>
                    {selectedSettlement.history.description()}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MapContext