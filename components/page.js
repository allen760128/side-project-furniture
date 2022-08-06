import React, { useState } from 'react';
import style from './page.module.css';
import { v4 as uuidv4 } from 'uuid';

const page = ({ page }) => {
    const [paGe, setPage] = useState(1);
    const pAray = () => {
        let arr = [];
        for (let i = 0; i < page; i++) {
            arr.push(i + 1)
        }
        return arr
    }

    const switchPage = (data, data2, data3) => {
        const num = data3.length;
        if (paGe === data2 + 1) {
            switch (data) {
                case 1: return <React.Fragment key={data2}>
                    <li style={{ backgroundColor: '#518581', color: '#fff' }} onClick={() => { setPage(data2 + 1) }}>{data}</li>
                    <li onClick={() => { setPage(data2 + 2) }}>{data + 1}</li>
                    <li onClick={() => { setPage(data2 + 3) }}>{data + 2}</li>
                </React.Fragment>
                case num: return <React.Fragment key={data2}>
                    <li onClick={() => { setPage(data2 - 1) }}>{data - 2}</li>
                    <li onClick={() => { setPage(data2) }}>{data - 1}</li>
                    <li style={{ backgroundColor: '#518581', color: '#fff' }} onClick={() => { setPage(data2 + 1) }}>{data}</li>
                </React.Fragment>
                default: return <React.Fragment key={data2}>
                    <li onClick={() => { setPage(data2) }}>{data - 1}</li>
                    <li style={{ backgroundColor: '#518581', color: '#fff' }} onClick={(e) => { setPage(data2 + 1) }}>{data}</li>
                    <li onClick={(e) => { setPage(data2 + 2) }}>{data + 1}</li>
                </React.Fragment>
            }
        }

    }

    return (
        <div className={`${style.page} ${style.wrap}`}>
            <ul className={style.pageUl}>
                <li>
                    {
                        paGe === 1 ?
                            <span style={{ backgroundImage: 'url(/assets/GL.svg)' }}></span>
                            :
                            <span onClick={() => { setPage(paGe => paGe - 1) }} style={{ backgroundImage: 'url(/assets/BL.svg)' }}></span>
                    }
                </li>
                {
                    pAray().map(
                        (data, inx, arr) => (
                            switchPage(data, inx, arr)
                        )
                    )
                }
                <li>
                    {
                        paGe === page ?
                            <span style={{ backgroundImage: 'url(/assets/GR.svg)' }}></span>
                            :
                            <span onClick={() => { setPage(paGe => paGe + 1) }} style={{ backgroundImage: 'url(/assets/BR.svg)' }}></span>
                    }
                </li>
            </ul>
        </div>
    )
}

export default page;