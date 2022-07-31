import React from 'react';
import style from '../styles/products.module.css';
import Head from '../components/head';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Link from 'next/link';
import Carousell from '../components/carousell'

const products = () => {
    return (
        <div>
            <Nav product={'#518581'}></Nav>
            <div className={`${style.banner} `}>
                <div className={style.title}>
                    <h1>Products</h1>
                    <p>We display products based on the latest products we have, if you want<br />to see our old products please enter the name of the item</p>
                </div>
                <Carousell />
            </div>
            <Footer></Footer>
        </div>
    )
}


export default products;