import React, { useState, useEffect } from 'react';
import style from './nav.module.css';
import Link from 'next/link';

const nav = ({ product }) => {
    const [rwd, setRwd] = useState(false);

    const handleRwdMenu = () => {
        setRwd(true);
    }

    const handleRwdClose = () => {
        setRwd(false);
    }

    useEffect(() => {
        window.onresize = () => {
            setRwd(false);
        }
    }, []);

    return (
        <div className={style.nav}>
            <div className={style.navWrap}>
                <div className={style.inner}>
                    <div className={style.logo}>
                        <Link href='/'>
                            <a>
                                <span style={{ backgroundImage: 'url(/assets/nav_logo.svg)' }}></span>

                            </a>
                        </Link>
                    </div>
                    <div className={style.list}>
                        <ul className={style.listUl}>
                            <li>
                                <Link href="/products">
                                    <a style={{ borderBottom: `3px solid ${product}` }}>Product</a>
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
                        </Link>
                        <Link href="">
                            <a onClick={handleRwdMenu}>
                                <span style={{ backgroundImage: 'url(/assets/nav_icon3.svg)' }}></span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.rwdMd}
                style={{ left: rwd ? '0' : '-100%' }}
                onClick={handleRwdClose}
            >
                <div className={style.rwdList} onClick={(e) => { e.stopPropagation() }}
                    style={{ left: rwd ? '0' : '-100%' }}>
                    <ul className={style.rwdlistUl}>
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
            </div>
        </div>

    )
}

export default nav;