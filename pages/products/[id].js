import React from 'react';
import style from '../../styles/productsId.module.css';
import Head from '../../components/head';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Image from 'next/image';
import ProidData from '../../data/proId';

const Id = () => {
    return (
        <div>
            <Head title={'Lalasia products'}></Head>
            <Nav product={'#518581'} ></Nav>
            <div className={`${style.top} ${style.wrap}`}>
                <div className={style.left}>
                    <Image src='/assets/index_product_pic2.jpg' alt='banner' width={394} height={360} layout='responsive'></Image>
                </div>
                <div className={style.right}>
                    <h2>White Aesthetic Chair</h2>
                    <p>Combination of wood and wool</p>
                    <div className={style.color}>
                        <h5>Color</h5>
                        <ul className={style.colorUl}>
                            <li style={{ backgroundColor: '#151411' }}></li>
                            <li style={{ backgroundColor: '#314443' }}></li>
                            <li style={{ backgroundColor: '#C5A26E' }}></li>
                            <li style={{ backgroundColor: '#D8DBE0' }}></li>
                        </ul>
                    </div>
                    <p>Faucibus facilisi morbi pharetra quis sed. Vitae suspendisse facilisis facilisis ligula felis et a parturient aenean. Ac maecenas ultricies felis risus scelerisque duis posuere...
                        <span>Read More</span>
                    </p>
                    <h2>$99.98</h2>
                    <div className={style.buy}>
                        <span>Buy Now</span>
                        <span>Add to Cart</span>
                    </div>
                </div>
            </div>
            <div className={`${style.related} ${style.wrap}`}>
                <div className={style.title}>
                    <h3>Related Items</h3>
                </div>
                <ul className={style.item}>
                    {
                        ProidData.relatedData.map(data =>
                        (<li key={data.id}>
                            <div style={{ display: 'block' }}>
                                <Image src={data.pic} alt='banner' width={394} height={360} layout='responsive'></Image>
                            </div>
                            <h5>{data.sub1}</h5>
                            <h3>{data.title}</h3>
                            <p>{data.sub2}</p>
                            <h3>{data.price}</h3>
                        </li>)
                        )
                    }

                </ul>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Id;