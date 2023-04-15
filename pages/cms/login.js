import React, { useState, useEffect } from 'react';
import style from '../../styles/cms-login.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
    const [val, setVal] = useState({ mail: '', password: '' });
    const [err, setErr] = useState({ mailerr: '', passerr: '' });
    const [check, setCheck] = useState(false);


    const mail_reg = /^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/g;
    const pass_reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{6,10}$/g;
    const fn_mail_reg = mail_reg.test(val.mail);
    const fn_pass_reg = pass_reg.test(val.password);
    const handleSubmit = (e) => {
        e.preventDefault();
        setErr({ mailerr: '', passerr: '' });
        if (fn_mail_reg && fn_pass_reg) {
            console.log('good');
            localStorage.setItem('remember', JSON.stringify(val.mail));
        } else {
            setErr({
                mailerr: val.mail === '' ? '請輸入email' : fn_mail_reg ? '' : '請輸入正確格式',
                passerr: val.password === '' ? '請輸入password' : fn_pass_reg ? '' : '請輸入正確格式'
            })
        }
    }

    useEffect(() => {
        const member = localStorage.getItem('remember');
        if (member) {
            setCheck(true);
            setVal({ ...val, mail: JSON.parse(member) });
        }
    }, []);

    const handleCheck = () => {
        setCheck(!check);
        localStorage.removeItem('remember');
    }


    return (
        <div className={style.loginWrap}>
            <div className={style.left}>
                <span>
                    <Image src='/assets/login-2.svg' alt='banner' width={705} height={540} layout='responsive'></Image>
                </span>
            </div>
            <div className={style.right}>
                <div className={style.rightWrap}>
                    <h3>Welcome to</h3>
                    <h2>Lalasia</h2>
                    <button className={style.login1}>
                        <span style={{ backgroundImage: 'url(/assets/login-6.svg)' }}></span>
                        Login with Google
                    </button>
                    <button className={style.login1}>
                        <span style={{ backgroundImage: 'url(/assets/login-4.svg)' }}></span>
                        Login with Facebook
                    </button>
                    <div className={style.lineWrap}>
                        <span className={style.line}></span>
                        <p>OR</p>
                        <span className={style.line}></span>
                    </div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={style.inp}>
                            <span style={{ backgroundImage: 'url(/assets/login-3.svg)' }}></span>
                            <div className={style.inputWrap}>
                                <label htmlFor="">Email</label>
                                <input type="text" value={val.mail} placeholder={'Please enter Email'} onChange={(e) => { setVal({ ...val, mail: e.target.value }) }} />
                            </div>

                        </div>
                        <span className={style.err}>{err.mailerr}</span>
                        <div className={style.inp}>
                            <span style={{ backgroundImage: 'url(/assets/login-5.svg)' }}></span>
                            <div className={style.inputWrap}>
                                <label htmlFor="">Password</label>
                                <input type="password" value={val.password} placeholder={'Please enter digit 6 to 10'} onChange={(e) => { setVal({ ...val, password: e.target.value }) }} />
                            </div>

                        </div>
                        <span className={style.err}>{err.passerr}</span>
                        <div className={style.check}>
                            <div className={style.left}>
                                <input type="checkbox" checked={check} onChange={handleCheck} />
                                <p>Remember me</p>
                            </div>
                            <div className={style.right}>Forgot Password?</div>
                        </div>
                        <button className={style.log}>Login</button>
                    </form>
                    <div className={style.register}>
                        <p>Don’t have an account?</p>
                        <Link href="/">
                            <a>Register
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;