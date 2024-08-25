import React from 'react'
import Brand from './Brand';

function CollaboratedBrands() {
  const brandsData = [
    {
      url: "/assets/images/brands/aharika.png",
      alt: "aharika",
      height: "70",
      width: "100"
    },
    {
      url: "/assets/images/brands/bkash.png",
      alt: "bkash",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/brac.png",
      alt: "brac",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/byte_dance.png",
      alt: "byte_dance",
      height: "70",
      width: "100"
    },
    {
      url: "/assets/images/brands/chicken_licken.png",
      alt: "chicken_licken",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/coffee_time.png",
      alt: "coffee_time",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/expure.png",
      alt: "expure",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/fabreflex.png",
      alt: "fabreflex",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/foodpanda.png",
      alt: "foodpanda",
      height: "70",
      width: "100"
    },
    {
      url: "/assets/images/brands/gentle_park.png",
      alt: "gentle_park",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/guerrilla_solutions.png",
      alt: "guerrilla_solutions",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/kidz_land.png",
      alt: "kidz_land",
      height: "70",
      width: "70"
    },

    {
      url: "/assets/images/brands/momo_mama.png",
      alt: "momo_mama",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/nom_nom.png",
      alt: "nom_nom",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/nori.png",
      alt: "nori",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/paper_fly.png",
      alt: "paper_fly",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/rio_launge.png",
      alt: "rio_launge",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/royel_cuisine.png",
      alt: "royel_cuisine",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/shah_ali_farm.png",
      alt: "shah_ali_farm",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/tos_host.png",
      alt: "tos_host",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/upside_down.png",
      alt: "upside_down",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/wasfi.png",
      alt: "wasfi",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/ximi.png",
      alt: "ximi",
      height: "70",
      width: "70"
    },
    {
      url: "/assets/images/brands/ntho.png",
      alt: "ntho24",
      height: "70",
      width: "70"
    },
  ]
  return (
    <div style={{ background: "#D9D9D9" }} className='mx-auto'>
      <h3 className="heading-3 text-dark mt-5 pt-5 mb-5 text-center">Brands We’ve Collaborated with Across the Globe</h3>
      <div className="container">
        <div className="row mb-5 pb-5 mx-auto">
          {
            brandsData.map((data, index) => <Brand key={index} src={data.url} alt={data.alt} height={data.height} width={data.width} />)
          }
        </div>
      </div>
    </div>
  )
}

export default CollaboratedBrands;