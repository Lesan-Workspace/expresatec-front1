import React from 'react'
import styles from './styles/home2.module.css'
import { Link } from 'react-router-dom'
import FLexcards from '../components/Flexcards/FLexcards'
import { Button } from "@nextui-org/react";

const Home2 = () => {
    return (
        <>

            <div className='flex items-center justify-center h-screen bg-purple-700'>
                <div class="">
                    <section className={styles.hero1}>

                        <h1 className={styles.welcome}>ExpresaTec</h1>

                        <Link to='/login'>
                            <Button color="primary" variant="shadow">
                                Comenzar
                            </Button>
                        </Link>




                    </section>


                </div>

            </div>

            <FLexcards />


        </>
    )
}

export default Home2