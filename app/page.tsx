'use client';
import { Hero } from "@/components";
import SearchBar from '@/components/SearchBar';
import CustomFilter from '@/components/CustomFilter';
import { fetchCars } from '@/utils';
import CarCard from '@/components/CarCard';
import {fuels, yearsOfProduction} from "@/constants";
import ShowMore from "@/components/ShowMore";
import {useEffect, useState} from "react";
import Image from "next/image";
import { arrowdown } from "@/public ";

export default  function Home(){

    const [allCars, setAllCars ] = useState([]);
    const [loading, setLoading] = useState(false);

    // Search state
  const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');

    // Filter state
    const [fuel, setFuel] = useState('');
    const [year, setYear] = useState('');

    // Pagination state
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true)
try{
    const result = await fetchCars({
      manufacturer:manufacturer || '',
      year: year || 2022,
      fuel: fuel || '',
      limit: limit || 10,
      model:model || '',
  })
  setAllCars(result)
  }
    catch(error){
      console.log(error)
    }finally {
      setLoading(false)
}
    }

  useEffect(() => {
    console.log(fuel, year, manufacturer, model, limit)
    getCars()
  }, [manufacturer, model, fuel, year, limit])



  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width ' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>
            Car Catalogue
          </h1>
          <p >
            Explore some of the best cars from around the world in our catalog.
          </p>

        </div>
        <div className='home__filters'>
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel}/>
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/>

          </div>

        </div>

        {allCars.length > 0? (
        <section>
          <div className='home__cars-wrapper'>
            {allCars?.map((car) => (
            <CarCard car={car}/>
          ))}
          </div>
          {loading &&(
              <div className='mt-16 w-full flex-center'>

              <Image
                    src={arrowdown}
                    alt="loader"
                    width={50}
                    height={50}
                    className="object-contain"

              />
              </div>
          )}
          <ShowMore pageNumber={limit / 10}
            isNext={ limit > allCars.length}
            setLimit={setLimit}
          />
        </section>  
        ): (
          <div className='home__error-container'>
           <h2 className='text-black text-xl font-bold'> NO Results Found </h2>
           <p>{allCars?.message}</p>
          </div>
        )
        }

      </div>

    </main>
  )
}
