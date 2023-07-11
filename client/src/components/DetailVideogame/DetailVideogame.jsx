import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogameById, clearVideogame } from "../../redux/actions";
import { useParams } from "react-router-dom";
import s from "../../styles/DetailVideogame.module.css"
import imgDefault from "../../img/imgDefault.png"


export default function Detail() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const detailVideogame = useSelector(state => state.detail);
    console.log(id);

    useEffect(() => {
        dispatch(clearVideogame())
        dispatch(getVideogameById(id))
    }, [])


    return (
        <div>
            {
                detailVideogame.name?
                <div className={s.divGeneral}>

                    <div className={s.div}>

                        <h1 className={s.title}>{detailVideogame.name}</h1> <hr className={s.hr}></hr>

                        <div className={s.divAllInfo}>
                            <div className={s.divImg}>
                                <img className={s.img} src={detailVideogame.image? detailVideogame.image : imgDefault } alt="Img not found"/>
                            </div>
                            <div className={s.info}>
                                <p>{detailVideogame.description}</p>
                                <p>
                                    Publicado: <span>{detailVideogame.released}</span> 
                                </p>
                                <p>
                                    Clacificación: <span>{detailVideogame.rating}</span>
                                </p>
                                <p>
                                    Platformas: <span>{detailVideogame.platforms.length === 0 ? "Unspecified platform" : detailVideogame.platforms.join(", ")}</span>
                                </p>
                                <p>
                                    Generos: <span>{detailVideogame.genres.join(", ")}</span>
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className={s.divBack}> 
                        <Link to = "/home">
                            <button className={s.btn}>BACK</button>
                        </Link>
                    </div>

                </div> 
                : 
                <div className={s.loading}>
                    <p>Loading</p>
                    <img  src="https://i.gifer.com/origin/95/9592fe08911171b05f3c6aac39d0df83_w200.gif" alt="Img not found" width="280px"/>
                </div>
            }
        </div>
    )
}