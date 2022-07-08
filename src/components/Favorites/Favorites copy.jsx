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
]

const Favorites = () => {
    return (
      <section className="favorites">
        <h2 className="heading heading--title">crowds favorites</h2>
        <div className="favorites__container main-wrap ExampleComponent">
          {/* {
            images.map(item => (
              <Card 
                key={item.id}
                image={item.image}
                colors={item.colors}
                title={item.name}
                price={item.price}
              />
            ))
          } */}
          
           <Swiper
            slidesPerView={3}
            spaceBetween={8}
            initialSlide={0}
            scrollbar={{ draggable: true, dragSize: 24}}>
            <SwiperSlide>
              {
                images.map(item => (
                  <Card 
                    key={item.id}
                    image={item.image}
                    colors={item.colors}
                    title={item.name}
                    price={item.price}
                  />
              ))
            }
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    )
    // return (
    //     <section className="ExampleComponent">
    //       <div className="main-wrap">
    //         <Swiper
    //           slidesPerView={3}
    //           spaceBetween={8}
    //           initialSlide={0}
    //           scrollbar={{ draggable: true, dragSize: 24}}
    //         >
    //           <SwiperSlide>
    //             <div className="main-slide-item">slide 1</div>
    //             <p>the first slide</p>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <div className="main-slide-item">slide 2</div>
    //             <p>the seconde slide</p>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <div className="main-slide-item">slide 3</div>
    //             <p>the third slide</p>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <div className="main-slide-item">slide 4</div>
    //             <p>the fourth slide</p>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <div className="main-slide-item">slide 5</div>
    //             <p>the fifth slide</p>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <div className="main-slide-item">slide 6</div>
    //             <p>the sixth slide</p>
    //           </SwiperSlide>
    //           <SwiperSlide>
    //             <div className="main-slide-item">slide 7</div>
    //             <p>the seventh slide</p>
    //           </SwiperSlide>
    //         </Swiper>
    //       </div>
    //     </section>
    // )
}

export default Favorites