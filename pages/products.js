import React from 'react';
import style from '../styles/products.module.css';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Link from 'next/link';
import Carousell from '../components/carousell'
// import { Aa } from '../styles/aa.js';

const products = () => {
    return (
        <div>
            <Head title={'Lalasia products'}></Head>
            <Nav product={'#518581'}></Nav>
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
            <Footer></Footer>
        </div>
    )
}


export default products;