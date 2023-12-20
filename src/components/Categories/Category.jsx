import Cardgame from "../Cardgame/Cardgame"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getCategories } from "../../services/fetchServices"
const Category = (props) => {



    console.log(props.data);
    return (
        <>
            <div className="categoria">
                <div className="game flex flex-row justify-around mt-[10px] ">
                    {
                        props.data.map((category, index) => (

                            <Link key={index} to={`/category/${category.id}`} ><Cardgame titulo={category.name} img={category.urlImage} slogan={category.slogan} /></Link>
                        ))


                    }



                </div>


            </div>

        </>
    )
}

export default Category