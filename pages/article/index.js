import React from 'react';
import style from '../../styles/article.module.css';
import Head from '../../components/head';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Image from 'next/image';
import Carousell from '../../components/carousell-art';
import Link from 'next/link';

const Article = () => {
    const onFileUpload = event => {
        console.log(event.target.files[0])
    }
    return (
        <div>
            <Head title={'Lalasia article'}></Head>
            <Nav article={'#518581'} ></Nav>
            <div className={`${style.banner}  ${style.wrap}`}>
                <div className={style.title}>
                    <h1>Article</h1>
                    <p>We display products based on the latest products we have, if you want<br />
                        to see our old products please enter the name of the item</p>
                </div>
                <div className={style.pic}>
                    <Carousell />
                    <div className={style.tip}>
                        <p>Tips and Trick</p>
                        <h3>This 400-Square-Foot New York Apartment Is Maximized With Custom Millwork</h3>
                        <div className={style.data}>
                            <span style={{ backgroundImage: 'url(/assets/index_articles_pic6.jpg)' }}></span>
                            <h6>By Morgan Goldberg</h6>
                            <p>Tuesday, 17 May 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.news}  ${style.wrap}`}>
                <div className={style.title}>
                    <h5>Daily News</h5>
                    <h2>Today top headlines</h2>
                </div>
                <div className={style.picWrap}>
                    <div className={style.left}>
                        <div className={style.pic}>
                            <Image src='/assets/article_news_pic1.jpg' alt='banner' width={605} height={340} layout='responsive'></Image>
                        </div>
                        <p>Design Inspiration</p>
                        <h3>Bedroom Design is the Most Personal Reflection of the Owner, Really?</h3>
                        <p>Is it true that the bedroom design is the most personal reflection of the owner? Many people believe that to be able to judge a person's personality, it is enough to</p>
                        <div className={style.data}>
                            <span style={{ backgroundImage: 'url(/assets/index_articles_pic5.png)' }}></span>
                            <h6>By Jenny Agnes</h6>
                            <p>Tuesday, 17 May 2022</p>
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.pic}>
                            <Image src='/assets/article_news_pic2.jpg' alt='banner' width={605} height={340} layout='responsive'></Image>
                        </div>
                        <p>Design Inspiration</p>
                        <h3>Bedroom Design is the Most Personal Reflection of the Owner, Really?</h3>
                        <p>Is it true that the bedroom design is the most personal reflection of the owner? Many people believe that to be able to judge a person's personality, it is enough to</p>
                        <div className={style.data}>
                            <span style={{ backgroundImage: 'url(/assets/index_articles_pic7.png)' }}></span>
                            <h6>By Jenny Agnes</h6>
                            <p>Tuesday, 17 May 2022</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}

export default Article;