import style from './Input.module.css'
import { useState, useRef } from "react";
function Input({ handle }) {
    const [name, setname] = useState('');
    const [date, setdate] = useState('');

    const un = useRef();
    const ud = useRef();


    function sent() {
        const newname = un.current.value;
        const newdate = ud.current.value
        setdate(newname);
        setname(newdate);
        console.log(name);
        ud.current.value = '';
        un.current.value = '';
        handle({ name: newname, date: newdate });
    }
    return (
        <>
            <div className={style.cont}>
                <input className={`${style.griditem} ${style.inp}`} ref={un} type="text" placeholder="enter something" />
                <input className={`${style.griditem} ${style.inp}`} ref={ud} type="datetime-local" />
                <button className={`${style.griditem} ${style.add}`} onClick={sent}>Add</button>
            </div>
        </>
    )
}
export default Input;