import React from 'react';
import style from '../../styles/aboutus.module.css';
import Head from '../../components/head';
import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Image from 'next/image';
import Link from 'next/link';

const Aboutus = () => {
    const gg = [{
        id: 1,
        title: '24/7 Supports',
        content: '24/7 support means a support service that is provided 24 hours a day and 7 days a week.',
        pic: '/assets/about-3.svg'
    }, {
        id: 2,
        title: 'Free Consultation',
        content: "A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible",
        pic: '/assets/about-2.svg'
    }, {
        id: 3,
        title: 'Overall Guarantee',
        content: 'The comprehensive guarantee is required for import, warehousing, transit, processing and specific use. ',
        pic: '/assets/about-1.svg'
    }]

    const aa = [{
        id: 1,
        title: '20+',
        content: 'Years Experience'
    }, {
        id: 2,
        title: '483',
        content: 'Happy Client'
    }, {
        id: 3,
        title: '150+',
        content: 'Project Finished'
    }]

    const teamPic = [{
        id: 1,
        pic: '/assets/about-4.jpg',
        name: 'Jesse Depp',
        position: 'Founder & CEO'
    }, {
        id: 2,
        pic: '/assets/about-5.jpg',
        name: 'Margareth Carter',
        position: 'COO'
    }, {
        id: 3,
        pic: '/assets/about-6.jpg',
        name: 'Andrew Taggart',
        position: 'Developer'
    }, {
        id: 4,
        pic: '/assets/about-7.jpg',
        name: 'Grace Marie',
        position: 'Manager'
    }, {
        id: 5,
        pic: '/assets/about-8.jpg',
        name: 'Jesse Depp',
        position: 'Senior Designer'
    }, {
        id: 6,
        pic: '/assets/about-9.jpg',
        name: 'Jesse Depp',
        position: 'Marketer'
    },
    ]

    return (
        <div>
            <Head title={'Lalasia aboutus'}></Head>
            <Nav aboutus={'#518581'} ></Nav>
            <div className={`${style.banner}  ${style.wrap}`}>
                <div className={style.title}>
                    <h1>About Us</h1>
                    <p>We display products based on the latest products we have, if you want<br />to see our old products please enter the name of the item</p>
                </div>
                <div className={style.video}>
                    <iframe src="https://www.youtube.com/embed/TBTgQbjRsqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   </div>
            </div>
            <div className={`${style.mission} ${style.wrap}`}>
                <h5>Our Mission</h5>
                <div className={style.left}>
                    <div className={style.title}>
                        <h2>Our team dedicated to help find  smart home product</h2>
                    </div>
                    <ul>
                        {
                            aa.map(data => (
                                <li key={data.id}>
                                    <h2>{data.title}</h2>
                                    <p>{data.content}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={style.right}>
                    <ul>
                        {
                            gg.map(data => (
                                <li key={data.id}>
                                    <div className={style.left}>
                                        <div className={style.round}>
                                            <span style={{ backgroundImage: `url(${data.pic})` }}></span>
                                        </div>
                                    </div>
                                    <div className={style.right}>
                                        <h3>{data.title}</h3>
                                        <p>{data.content}</p>
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
            <div className={`${style.team} ${style.wrap}`}>
                <div className={style.btop}>
                    <h5>Benefits</h5>
                </div>
                <div className={style.bmiddle}>
                    <div className={style.left}>
                        <h2>Benefits when using<br />our services</h2>
                    </div>
                    <div className={style.right}>
                        <p>Pellentesque etiam blandit in tincidunt at donec. Eget<br />
                            ipsum dignissim placerat nisi, adipiscing mauris non purus<br />
                            parturient.</p>
                    </div>
                </div>
                <div className={style.teamWrap}>
                    <ul>
                        {
                            teamPic.map(data => (
                                <li key={data.id}>
                                    <div className={style.pic}>
                                        <Image src={data.pic} alt='banner' width={394} height={360} layout='responsive'></Image>
                                    </div>
                                    <h3>{data.name}</h3>
                                    <p>{data.position}</p>
                                </li>
                            ))
                        }

                    </ul>
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

export default Aboutus;