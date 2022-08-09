import React from 'react';
import style from '../../styles/products.module.css';
import Head from '../../components/head';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Image from 'next/image';
import Link from 'next/link';

const Service = () => {
    return (
        <div>
            <Head title={'Lalasia service'}></Head>
            <Nav service={'#518581'} ></Nav>
            <Footer></Footer>
        </div>
    )
}

export default Service;