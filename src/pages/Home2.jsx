import React from 'react'
import styles from './styles/home2.module.css'
import { Link } from 'react-router-dom'
import FLexcards from '../components/Flexcards/FLexcards'
import { Button } from "@nextui-org/react";
import Navbar2 from '../components/Navbar2';
import Card from '../components/Card/Card';
import Form from '../components/Form/Form';
const Home2 = () => {
    return (
        <>
            <div className='bg-white '>
                <div className=' '>
                    <Navbar2 />
                    <div className={`flex items-center justify-center h-screen  ${styles.bgimage}`}>
                        <div class="">
                            <section className={styles.hero1}>

                                <h1 className={styles.welcome}>ExpresaTec</h1>

                                <Link to='/login'>
                                    <Button color="danger" variant="shadow">
                                        Comenzar
                                    </Button>
                                </Link>




                            </section>


                        </div>

                    </div>
                </div>
                <div className='flex flex-wrap justify-center gap-2 m-5'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />

                </div>


                {/* <FLexcards /> */}
                <div className='h-screen'>
                    <h1 className='text-center text-4xl'>CONTÁCTANOS</h1>
                    <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-10 '>
                        <div className="form">
                            <Form />
                        </div>
                        <div className="img w-[40%]">
                            <img src="https://i.ibb.co/mvCTsW5/welcome02.png" alt="" />

                        </div>


                    </div>
                </div>




            </div>


        </>
    )
}

export default Home2