import React from "react";
import {Link} from "react-router-dom";
import s from "../../styles/LandingPage.module.css"

export default function LandingPage() {

    return(
        <div className={s.divLP}>
            <div className={s.divTextBtn}>
                
                
                <Link to = "/home">
                    <button className={s.btn}>PRESS START</button>
                </Link>
            </div>

            <img className={s.img} src="https://media2.giphy.com/media/KvI1A7ma7Pk48eZ5as/giphy.gif?cid=790b7611b1431f4e9a8d4e8f684b6ad8811aaf555ee5330a&rid=giphy.gif" alt="Img not found"/>
        </div>
    )
}