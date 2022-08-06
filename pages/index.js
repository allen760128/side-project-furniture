import Head from '../components/head';
import Footer from '../components/footer';
import Link from 'next/link';
import style from '../styles/Home.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import IndexData from './data/indexData';

export default function Home() {


  return (
    <div className={style.container}>
      <Head title={'Lalasia side project'}></Head>
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
              IndexData.benefitsData.map((data, inx) => (
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
        pagination={{ clickable: true, }}
        modules={[FreeMode, Pagination]}
        className={style.mySwiper}
      >
        {
          IndexData.productData.map((data, inx) => (
            <SwiperSlide className={style.inner} key={inx}>
              <Image src={data.pic} alt='pic1' width={394} height={360} layout='responsive'></Image>
              <h5>{data.sub1}</h5>
              <h3>{data.title}</h3>
              <p>{data.sub2}</p>
              <h3>{data.price}</h3>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div className={`${style.quality} ${style.wrap}`}>
        <h5>Our Product</h5>
        <div className={style.left}>
          <div className={style.title}>

            <h2>Crafted by talented and<br />high quality material</h2>
            <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim<br />
              placerat nisi, adipiscing mauris non purus parturient.</p>
            <Link href='/#'>
              <a>Learn More</a>
            </Link>
            <Image src="/assets/index_quality_pic1.jpg" alt='pic1' width={595} height={260} layout='responsive'></Image>
          </div>
        </div>
        <div className={style.right}>
          <ul className={style.rightUl}>
            <li>
              <h2>20+</h2>
              <p>Years Experience</p>
            </li>
            <li>
              <h2>483</h2>
              <p>Happy Client</p>
            </li>
            <li>
              <h2>150+</h2>
              <p>Project Finished</p>
            </li>
          </ul>
          <Image src="/assets/index_quality_pic2.jpg" alt='pic1' width={595} height={510} layout='responsive'></Image>
        </div>
      </div>
      <div className={`${style.created} ${style.wrap}`}>
        <div className={style.title}>
          <h5>Testimonials</h5>
          <h2>What our customer say</h2>
          <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim<br />
            placerat nisi, adipiscing mauris non purus parturient.</p>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true, }}
        modules={[FreeMode, Pagination]}
        className={style.mySwiper2}
      >
        {
          IndexData.createdData.map((data, inx) => (
            <SwiperSlide className={style.inner} key={inx}>
              <span style={{ backgroundImage: 'url(/assets/index_custom_icon1.svg)' }}></span>
              <p>{data.content}</p>
              <div className={style.cbottom}>
                <div className={style.left}>
                  <Image src={data.pic} alt='pic3' width={50} height={50} layout='fixed'></Image>
                  <h4>{data.name}</h4>
                </div>
                <div className={style.right}>
                  <span style={{ backgroundImage: 'url(/assets/index_custom_icon2.svg)' }} ></span>
                  <h5>{data.score}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
      <div className={`${style.articles} ${style.wrap}`}>
        <h5>Testimonials</h5>
        <div className={style.left}>
          <h2>The best furniture comes<br /> from Lalasia</h2>
          <p>Pellentesque etiam blandit in tincidunt at donec. </p>
          <div className={style.leftPic} style={{ backgroundImage: 'url(/assets/index_articles_pic1.jpg)' }}>
            <p>Tips and Trick</p>
            <h3>Create Cozy Dinning Room Vibes</h3>
            <p>Decorating with neutrals brings balance...</p>
            <Link href="/#">
              <a >Read More</a>
            </Link>
            <div className={style.navi}>
              <span style={{ backgroundImage: 'url(/assets/index_articles_icon1.svg)' }} ></span>
              <span style={{ backgroundImage: 'url(/assets/index_articles_icon2.svg)' }}></span>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <ul className={style.rightUl}>
            {
              IndexData.articlesData.map((data, inx) => (
                <li key={inx}>
                  <div className={style.picWrap}>
                    <Image src={data.pic1} alt='pic1' width={260} height={260} layout='responsive'></Image>
                  </div>
                  <div className={style.content}>
                    <p>{data.sub1}</p>
                    <h3>{data.title}</h3>
                    <p>{data.sub2}</p>
                    <div className={style.user}>
                      <div className={style.userInner}>
                        <span style={{ backgroundImage: `url(${data.pic2})` }}></span>
                        <h6>By {data.user}</h6>
                      </div>
                      <p>{data.date}</p>
                    </div>
                  </div>
                </li>
              ))
            }

          </ul>
        </div>
      </div>
      <div className={`${style.join} ${style.wrap}`}>
        <h2>Join with me to get special discount</h2>
        <Link href=''>
          <a >
            Learn More<span style={{ backgroundImage: 'url(/assets/index_join_icon1.svg)' }}></span>
          </a>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  )
}
