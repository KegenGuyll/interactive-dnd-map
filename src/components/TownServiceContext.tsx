import classNames from "classnames";
import BaseMapOverlay from "./BaseMapOverlay";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { FaTimes } from "react-icons/fa";
import { setSelectedTownService } from "@/redux/features/icewindDale/settlements/brynShanderSlice";


const TownServiceContext = () => {
  // TODO: update this instead of each settlement having its own slice combine them into one slice
  const { selectedTownService } = useAppSelector((state) => state.brynShander);
  const dispatch = useAppDispatch();

  return (
    <BaseMapOverlay 
      hideChildren={!selectedTownService}
      className={classNames('max-h-[500px]', 'top-[70px] left-2 w-[400px]', 'md:top-2 md:right-2 md:left-auto', 'lg:top-5 lg:right-5')} 
      key={2} 
      header={
        <>
          <div className='flex-grow'>
            <h1 className='text-xl font-bold'>Bryn Shander</h1>
            <p className='text-xs font-light text-gray-600'>Click on a location to view more information</p>
          </div>
          <button onClick={() => dispatch(setSelectedTownService(undefined))}>
            <FaTimes />
          </button>
        </>
      }
    >
      <div>
        {selectedTownService && (
          <div className='p-2 md:p-4 pt-0 md:pt-0'>
            <div className='p-4 bg-gray-100 rounded mt-4 flex flex-col gap-4'>
              <div className="flex items-center">
                <h1 className='text-2xl font-bold flex-grow'>{selectedTownService.name}</h1>
                <span className='font-light text-gray-600' >{selectedTownService.type}</span>
              </div>
              <div className='flex flex-col gap-4 divide-y'>
                {selectedTownService.description && (
                  <section>
                    <p>
                      {selectedTownService.description}
                    </p>
                  </section>
                )}
                {selectedTownService.owners && (
                  <section className='pt-4'>
                    <h2 className='text-lg font-semibold'>Owner(s):</h2>
                    <div>
                      {selectedTownService.owners.map((owner, index) => (
                        <p key={index}>{owner}</p>
                      ))}
                    </div>
                  </section>
                )}
                {selectedTownService.atmosphere && (
                  <section className='pt-4'>
                    <h2 className='text-lg font-semibold'>Atmosphere:</h2>
                    <div>
                      <p>{selectedTownService.atmosphere}</p>
                    </div>
                  </section>
                )}
                {selectedTownService.voloRating && (
                  <section className='bg-gray-200 rounded p-4'>
                    <h2 className='text-lg font-semibold'>Volo&apos;s Rating:</h2>
                    <div>
                      {selectedTownService.voloRating.pipes && (
                        <p><b>Quality</b> - {selectedTownService.voloRating.pipes}/5</p>
                      )}
                      {selectedTownService.voloRating.coins && (
                        <p><b>Pricing</b> - {selectedTownService.voloRating.coins}/5</p>
                      )}
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </BaseMapOverlay>
  )
}

export default TownServiceContext;