import React from 'react';
import style from './footer.module.css';
import Link from 'next/link';

const footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${style.footerWrap} ${style.wrap}`}>
                <div className={style.left}>
                    <Link href='/#'>
                        <a >
                            <span style={{ backgroundImage: 'url(/assets/nav_logo.svg)' }}></span>
                        </a>
                    </Link>
                    <p>Lalasia is digital agency that help you make better<br /> experience iaculis cras in.</p>
                </div>
                <div className={style.right}>
                    <ul className={style.rightUl}>
                        <li>
                            <ul>
                                <li>Product</li>
                                <li>
                                    <Link href='/#'>
                                        <a>New Arrivals</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/#'>
                                        <a>Best Selling</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/#'>
                                        <a>Home Decor</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/#'>
                                        <a>Kitchen Set</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Services</li>
                                <li>
                                    <Link href='/#'>
                                        <a>Catalog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/#'>
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/#'>
                                        <a>FaQ</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/#'>
                                        <a>Pricing</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>Follow Us</li>
                                <li>
                                    <Link href='/#'>
                                        <a>Facebook</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/#'>
                                        <a>Instagram</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/#'>
                                        <a>Twitter</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footer;