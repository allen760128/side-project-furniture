import Head from '../components/head';
import Nav from '../components/nav';
import style from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={style.container}>
      <Head></Head>
      <Nav></Nav>
      <div className={style.banner}>
        <div className={style.title}>
          <h1>Discover Furniture With<br />
            High Quality Wood</h1>
          <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi,<br />
            adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt <br />
            aliquam adipiscing tempor.
            <span style={{ backgroundImage: 'url(/assets/index_banner_icon1.svg)' }}></span>
            <span style={{ backgroundImage: 'url(/assets/index_banner_icon2.svg)' }}></span>
            <div className={style.search}>
              <span style={{ backgroundImage: 'url(/assets/index_banner_icon3.svg)' }}></span>
              <form>
                <input type="text" />
                <button>Search</button>
              </form>
            </div>
          </p>
        </div>
        <div className={style.pic}>
          <Image src='/assets/index_banner1.jpg' alt='banner' width={1400} height={542} layout='responsive'></Image>
        </div>

      </div>


    </div>
  )
}
