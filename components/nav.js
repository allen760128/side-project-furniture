import React from 'react';
import style from './nav.module.css';
import Link from 'next/link';

const nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.navWrap}>
                <div className={style.inner}>
                    <div className={style.logo}>
                        <span style={{ backgroundImage: 'url(/assets/nav_logo.svg)' }}></span>
                    </div>
                    <div className={style.list}>
                        <ul className={style.listUl}>
                            <li>
                                <Link href="">
                                    <a>Product</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>Services</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>Article</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="">
                                    <a>About Us</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.user}>
                        <Link href="">
                            <a>
                                <span style={{ backgroundImage: 'url(/assets/nav_icon1.svg)' }}></span>
                            </a>
                        </Link>
                        <Link href="">
                            <a>
                                <span style={{ backgroundImage: 'url(/assets/nav_icon2.svg)' }}></span>
                            </a>
                        </Link> </div>
                </div>
            </div>
        </div>
    )
}

export default nav;