import React from 'react'
import Brand from './Brand';

function CollaboratedBrands() {
  const brandsData = [
    {
      url: "/assets/images/brands/aharika.png",
      alt: "aharika"
    },
    {
      url: "/assets/images/brands/bkash.png",
      alt: "bkash"
    },
    {
      url: "/assets/images/brands/brac.png",
      alt: "brac"
    },
    {
      url: "/assets/images/brands/byte_dance.png",
      alt: "byte_dance"
    },
    {
      url: "/assets/images/brands/chicken_licken.png",
      alt: "chicken_licken"
    },
    {
      url: "/assets/images/brands/coffee_time.png",
      alt: "coffee_time"
    },
    {
      url: "/assets/images/brands/expure.png",
      alt: "expure"
    },
    {
      url: "/assets/images/brands/fabreflex.png",
      alt: "fabreflex"
    },
    {
      url: "/assets/images/brands/foodpanda.png",
      alt: "foodpanda"
    },
    {
      url: "/assets/images/brands/gentle_park.png",
      alt: "gentle_park"
    },
    {
      url: "/assets/images/brands/guerrilla_solutions.png",
      alt: "guerrilla_solutions"
    },
    {
      url: "/assets/images/brands/kidz_land.png",
      alt: "kidz_land"
    },

    {
      url: "/assets/images/brands/momo_mama.png",
      alt: "momo_mama"
    },
    {
      url: "/assets/images/brands/nom_nom.png",
      alt: "nom_nom"
    },
    {
      url: "/assets/images/brands/nori.png",
      alt: "nori"
    },
    {
      url: "/assets/images/brands/paper_fly.png",
      alt: "paper_fly"
    },
    {
      url: "/assets/images/brands/rio_launge.png",
      alt: "rio_launge"
    },
    {
      url: "/assets/images/brands/royel_cuisine.png",
      alt: "royel_cuisine"
    },
    {
      url: "/assets/images/brands/shah_ali_farm.png",
      alt: "shah_ali_farm"
    },
    {
      url: "/assets/images/brands/tos_host.png",
      alt: "tos_host"
    },
    {
      url: "/assets/images/brands/upside_down.png",
      alt: "upside_down"
    },
    {
      url: "/assets/images/brands/wasfi.png",
      alt: "wasfi"
    },
    {
      url: "/assets/images/brands/ximi.png",
      alt: "ximi"
    },
    {
      url: "/assets/images/brands/ntho.png",
      alt: "ntho24"
    },
  ]
  return (
    <div style={{ background: "#D9D9D9" }} className='mx-auto'>
      <h3 className="heading-3 text-dark mt-5 pt-5 mb-5 text-center">Brands We’ve Collaborated with Across the Globe</h3>
      <div className="container">
        <div className="row mb-5 pb-5 mx-auto">
          {
            brandsData.map((data, index) => <Brand key={index} src={data.url} alt={data.alt} />)
          }
        </div>
      </div>
    </div>
  )
}

export default CollaboratedBrands;