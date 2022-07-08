import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper/core";
import "swiper/css";
import "swiper/css/scrollbar";
import './Favorites.scss'
import Card from "../Card/Card";
import Fav1 from '../../assets/fav-1.jpeg'
import Fav2 from '../../assets/fav-2.png'
import Fav3 from '../../assets/fav-3.png'
import Fav4 from '../../assets/fav-4.png'
import Fav5 from '../../assets/fav-5.jpg'
import Fav6 from '../../assets/fav-6.jpg'
import Fav7 from '../../assets/fav-7.jpg'
import Fav8 from '../../assets/fav-8.jpg'
import Fav9 from '../../assets/fav-9.jpg'
import Fav10 from '../../assets/fav-10.jpg'
import Fav11 from '../../assets/fav-11.jpg'

SwiperCore.use([Scrollbar]);


const images = [
  {
    id: 1,
    name: 'asics',
    price: 143,
    image: Fav1,
    colors: [
      {
        color: 'black',
      },
      {
        color: 'aquamarine',
      },
      {
        color: 'seagreen'
      }
    ]
  },
  {
    id: 2,
    name: 'millet',
    price: 62.89,
    image: Fav2,
    colors: [
      {
        color: 'black',
      },
      {
        color: 'gainsboro',
      },
    ]
  },
  {
    id: 3,
    name: 'altra',
    price: 143,
    image: Fav3,
    colors: [
      {
        color: 'black',
      },
      {
        color: 'mediumblue',
      },
      {
        color: 'darkgreen'
      }
    ]
  },
  {
    id: 4,
    name: 'sportiva',
    price: 153.43,
    image: Fav4,
    colors: [
      {
        color: 'rosybrown',
      },
    ]
  },
  {
    id: 5,
    name: 'reebok',
    price: 154.93,
    image: Fav5,
    colors: [
      {
        color: 'bluemarin',
      },
      {
        color: 'white',
      },
    ]
  },
  {
    id: 6,
    name: 'altra',
    price: 84.43,
    image: Fav6,
    colors: [
      {
        color: 'black',
      },
      {
        color: 'meduimblue',
      },
    ]
  },
  {
    id: 7,
    name: 'columbia',
    price: 53.93,
    image: Fav7,
    colors: [
      {
        color: 'gray',
      },
      {
        color: 'black',
      },
    ]
  },
  {
    id: 8,
    name: 'vans',
    price: 43.93,
    image: Fav8,
    colors: [
      {
        color: 'black',
      },
    ]
  },
  {
    id: 9,
    name: 'reebok',
    price: 43.93,
    image: Fav9,
    colors: [
      {
        color: 'black',
      },
      {
        color: 'white',
      },
    ]
  },
  {
    id: 10,
    name: 'new balance',
    price: 74.3,
    image: Fav10,
    colors: [
      {
        color: 'gray',
      },
      {
        color: 'black',
      },
      {
        color: 'meduimblue',
      },
    ]
  },
  {
    id: 10,
    name: 'altra',
    price: 243.43,
    image: Fav11,
    colors: [
      {
        color: 'nightblue',
      },
      {
        color: 'black',
      },
      {
        color: 'red',
      },
    ]
  },
  
]

const Favorites = () => {

  return (
    <section className="favorites">
      <h2 className="heading heading--title">crowds favorites</h2>
      <div className="favorites__container">
        <Swiper
          slidesPerView={4}
          initialSlide={0}
          spaceBetween={20}
          scrollbar={{ draggable: true, dragSize: 24}}
        >
          {
            images.map(item => (
              <SwiperSlide key={item.id}>
                <Card 
                  image={item.image}
                  colors={item.colors}
                  title={item.name}
                  price={item.price}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default Favorites