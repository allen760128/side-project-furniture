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
            <Footer></Footer>
        </div>
    )
}

export default Service;