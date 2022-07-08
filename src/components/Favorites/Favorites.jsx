import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar } from "swiper/core";
import "swiper/css";
import "swiper/css/scrollbar";
import './Favorites.scss'
import Card from "../Card/Card";
SwiperCore.use([Scrollbar]);

const Favorites = () => {
    return (
      <section className="favorits">
        <Card />
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