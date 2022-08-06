import React from 'react';
import style from '../styles/products.module.css';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Image from 'next/image';
import Link from 'next/link';
import Carousell from '../components/carousell';
import Page from '../components/page';
import { item } from './data/productsData';
// import { Aa } from '../styles/aa.js';

const products = () => {


    return (
        <div>
            <Head title={'Lalasia products'}></Head>
            <Nav product={'#518581'} />
            <div className={`${style.banner} `}>
                <div className={style.title}>
                    <h1>Products</h1>
                    <p>We display products based on the latest products we have, if you want<br />to see our old products please enter the name of the item</p>
                </div>
                <Carousell />
            </div>
            <div className={`${style.search} ${style.wrap}`}>
                <div className={style.searchWrap}>
                    <form action="">
                        <div className={style.inner}>
                            <span style={{ backgroundImage: 'url(/assets/index_banner_icon3.svg)' }}></span>
                            <input type="text" placeholder='Search property' />
                            <button> Find Now</button>
                        </div>
                    </form>
                    <button>
                        <span style={{ backgroundImage: 'url(/assets/products_search_icon1.svg)' }}></span>
                        Filter
                    </button>
                </div>
            </div>
            <div className={`${style.products}  ${style.wrap}`}>
                <div className={style.title}>
                    <div className={style.left}>
                        <h2>Total Product</h2>
                        <span>184</span>
                    </div>
                    <div className={style.right}>
                        <span style={{ backgroundImage: 'url(/assets/products_icon1.svg)' }}></span>
                        <p>Sort By</p>
                    </div>
                </div>
                <div className={style.list}>
                    <ul className={style.listUl}>
                        {
                            item.map(data => (
                                <li key={data.id}>
                                    <Link href='/#'>
                                        <a>
                                            <Image src={data.pic} alt='banner' width={394} height={360} layout='responsive'></Image >
                                        </a>
                                    </Link>
                                    <h5>{data.sub1}</h5>
                                    <h3>{data.title}</h3>
                                    <p>{data.sub2}</p>
                                    <h3>{data.price}</h3>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
            <Page page={10} />
            <Footer></Footer>
        </div>
    )
}


export default products;