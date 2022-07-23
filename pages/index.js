import Head from '../components/head';
import Nav from '../components/nav';
import style from '../styles/Home.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default function Home() {

  const benefitsData = [{
    pic: '/assets/index_benefits_icon1.svg',
    title: 'Many Choices',
    content: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.'
  }, {
    pic: '/assets/index_benefits_icon2.svg',
    title: 'Fast and On Time',
    content: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.'
  }, {
    pic: '/assets/index_benefits_icon3.svg',
    title: 'Affordable Price',
    content: 'Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.'
  },
  ];

  const preductData = [{
    pic: '/assets/index_product_pic1.jpg',
    title: 'White Aesthetic Chair',
    sub1: 'Chair',
    sub2: 'Combination of wood and wool',
    price: '$63.47'
  }, {
    pic: '/assets/index_product_pic2.jpg',
    title: 'Bardono Smart Lamp',
    sub1: 'Lamp',
    sub2: 'Easy to use with bluetooth connection',
    price: '$62.23'
  }, {
    pic: '/assets/index_product_pic3.jpg',
    title: 'Sofa Empuk Banget',
    sub1: 'Sofa',
    sub2: 'Using kapuk randu material',
    price: '$58.39'
  }, {
    pic: '/assets/index_product_pic4.jpg',
    title: 'White Aesthetic Chair',
    sub1: 'Chair',
    sub2: 'Combination of wood and wool',
    price: '$63.47'
  }, {
    pic: '/assets/index_product_pic5.jpg',
    title: 'Bardono Smart Lamp',
    sub1: 'Lamp',
    sub2: 'Easy to use with bluetooth connection',
    price: '$62.23'
  }, {
    pic: '/assets/index_product_pic6.jpg',
    title: 'Sofa Empuk Banget',
    sub1: 'Sofa',
    sub2: 'Using kapuk randu material',
    price: '$58.39'
  }, {
    pic: '/assets/index_product_pic7.jpg',
    title: 'White Aesthetic Chair',
    sub1: 'Chair',
    sub2: 'Combination of wood and wool',
    price: '$63.47'
  }, {
    pic: '/assets/index_product_pic8.jpg',
    title: 'Bardono Smart Lamp',
    sub1: 'Lamp',
    sub2: 'Easy to use with bluetooth connection',
    price: '$62.23'
  }, {
    pic: '/assets/index_product_pic9.jpg',
    title: 'Sofa Empuk Banget',
    sub1: 'Sofa',
    sub2: 'Using kapuk randu material',
    price: '$58.39'
  },
  ]

  return (
    <div className={style.container}>
      <Head></Head>
      <Nav></Nav>
      <div className={`${style.banner} ${style.wrap}`}>
        <div className={style.title}>
          <h1>Discover Furniture With<br />
            High Quality Wood</h1>
          <div className={style.divp}>
            <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi,<br />
              adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt <br />
              aliquam adipiscing tempor.</p>
            <span style={{ backgroundImage: 'url(/assets/index_banner_icon1.svg)' }}></span>
            <span style={{ backgroundImage: 'url(/assets/index_banner_icon2.svg)' }}></span>
            <div className={style.search}>
              <span style={{ backgroundImage: 'url(/assets/index_banner_icon3.svg)' }}></span>
              <form>
                <input type="text" />
                <button>Search</button>
              </form>
            </div>
          </div>
        </div>
        <div className={style.pic}>
          <Image src='/assets/index_banner1.jpg' alt='banner' width={1400} height={542} layout='responsive'></Image>
        </div>
      </div>
      <div className={`${style.benefits} ${style.wrap}`}>
        <div className={style.btop}>
          <h5>Benefits</h5>
        </div>
        <div className={style.bmiddle}>
          <div className={style.left}>
            <h2>Benefits when using<br />our services</h2>
          </div>
          <div className={style.right}>
            <p>Pellentesque etiam blandit in tincidunt at donec. Eget<br />
              ipsum dignissim placerat nisi, adipiscing mauris non purus<br />
              parturient.</p>
          </div>
        </div>
        <div className={style.bbottom}>
          <ul className={style.bbottomUl}>
            {
              benefitsData.map((data, inx) => (
                <li key={inx}>
                  <span style={{ backgroundImage: `url(${data.pic})` }}></span>
                  <h3>{data.title}</h3>
                  <p>{data.content}</p>
                </li>
              ))
            }


          </ul>
        </div>
      </div>
      <div className={`${style.product}  ${style.wrap}`}>
        <div className={style.title}>
          <h5>Product</h5>
          <h2>Our popular product</h2>
          <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim<br />
            placerat nisi, adipiscing mauris non purus parturient.</p>
        </div>

      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={style.mySwiper}
      >
        {
          preductData.map((data, inx) => (
            <SwiperSlide className={style.inner} key={inx}>
              <img src={data.pic} alt='pic1' ></img>
              <h5>{data.sub1}</h5>
              <h3>{data.title}</h3>
              <p>{data.sub2}</p>
              <h3>{data.price}</h3>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
