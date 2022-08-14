import React from 'react';
import style from '../../styles/service.module.css';
import Head from '../../components/head';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Image from 'next/image';
import { listData } from '../../data/serviceData';
import Link from 'next/link';


const Service = () => {

    return (
        <div>
            <Head title={'Lalasia service'}></Head>
            <Nav service={'#518581'} ></Nav>
            <div className={`${style.banner}  ${style.wrap}`}>
                <div className={style.title}>
                    <h1>Products</h1>
                    <p>We display products based on the latest <br className={style.rwBr} />products we have, if you want<br />to see our old <br className={style.rwBr} />products please enter the name of the item</p>
                </div>
                <div className={style.pic}>
                    <Image src='/assets/service_banner1.jpg' alt='banner' width={1240} height={550} layout='responsive'></Image>
                </div>
            </div>
            <div className={`${style.list} ${style.wrap}`}>
                <ul className={style.listUl}>
                    {listData.map(data => (
                        <li key={data.id}>
                            <h1>{data.num}</h1>
                            <h3>{data.title}</h3>
                            <p>{data.content}</p>
                        </li>
                    ))}

                </ul>
            </div>
            <div className={`${style.portfolio} ${style.wrap}`}>
                <div className={style.title}>
                    <h5>Portofolio</h5>
                    <div className={style.left}>

                        <h2>Amazing project we’ve done before</h2>
                    </div>
                    <div className={style.right}>
                        <p>Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non.</p>
                        <Link href='/'>
                            <a>View Portfolio</a>
                        </Link>
                    </div>
                </div>
                <div className={style.pic}>
                    <div className={style.left}>
                        <Image src='/assets/service_pic1.jpg' alt='banner' width={505} height={632} layout='responsive'></Image>
                        <div className={style.cont}>
                            <h3>Siska Kohl’s Bedroom</h3>
                            <p>We start renovating her...</p>
                            <Link href='/'>
                                <a>See Detail</a>
                            </Link>
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.top}>
                            <Image src='/assets/service_pic2.jpg' alt='banner' width={705} height={301} layout='responsive'></Image>
                            <div className={style.cont}>
                                <h3>Jeruk Veldevana Living Room Design</h3>
                                <p>We start renovating her...</p>
                                <Link href='/'>
                                    <a>See Detail</a>
                                </Link>
                            </div>
                        </div>
                        <div className={style.bot}>
                            <Image src='/assets/service_pic3.jpg' alt='banner' width={705} height={301} layout='responsive'></Image>
                            <div className={style.cont}>
                                <h3>Cozy Co-working space</h3>
                                <p>We start renovating her...</p>
                                <Link href='/'>
                                    <a>See Detail</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.work} ${style.wrap}`}>
                <h2>Are you interested <br />work with us?</h2>
                <Link href='/'>
                    <a >
                        Let`s Talk<span style={{ backgroundImage: 'url(/assets/index_join_icon1.svg)' }}></span>
                    </a>
                </Link>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Service;

// export async function getStaticProps() {
//     const res = await axios.get('https://fakestoreapi.com/products');
//     const resData = await res.data;
//     return {
//         props: {
//             resData
//         }
//     }
// }