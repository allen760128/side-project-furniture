import React from 'react';
import style from '../../styles/products.module.css';
import Head from '../../components/head';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Image from 'next/image';
import Link from 'next/link';
import Carousell from '../../components/carousell';
import Page from '../../components/page';
import ProData from '../../data/productsData';
// import { Aa } from '../styles/aa.js';

const Products = () => {

    return (
        <div>
            <Head title={'Lalasia products'}></Head>
            <Nav product={'#518581'} ></Nav>
            <div className={`${style.banner} `}>
                <div className={style.title}>
                    <h1>Services</h1>
                    <p>The product crafted by talented crafter and using high<br /> quality material with love inside</p>
                </div>
                <Carousell />
            </div>
            <div className={`${style.search} ${style.wrap}`}>
                <div className={style.searchWrap}>
                    <form action="">
                        <div className={style.inner}>
                            <span style={{ backgroundImage: 'url(/assets/index_banner_icon3.svg)' }}></span>
                            <input type="text" placeholder='Search property' />
                            <button> Search</button>
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
                            ProData.item.map(data => (
                                <li key={data.id}>
                                    <Link href={{
                                        pathname: '/products/[id]',
                                        query: { id: data.id }
                                    }}>
                                        <a >
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
            <Page page={10} ></Page>
            <Footer></Footer>
        </div>
    )
}


export default Products;