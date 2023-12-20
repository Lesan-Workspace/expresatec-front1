import React from 'react'
import styles from './styles/home2.module.css'
import { Link } from 'react-router-dom'
import FLexcards from '../components/Flexcards/FLexcards'
import { Button } from "@nextui-org/react";
import Navbar2 from '../components/Navbar2';
import Card from '../components/Card/Card';
import Form from '../components/Form/Form';
import childd from '../assets/child2.png'
import child2 from '../assets/child3.png'
import facial from '../assets/facial.png'
import jogo from '../assets/jogo.png'
import emotion from '../assets/emotions.png'
const Home2 = () => {
    return (
        <>
            <div className='bg-white '>
                <div className=' '>
                    <Navbar2 />
                    <div className={`flex  justify-center h-[470px]  ${styles.bgimage}`}>
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
                <div className='relative'>
                    <div className='flex justify-center items-center '>
                        <div className='flex flex-wrap justify-center gap-[100px] ' style={{ marginTop: '-46px' }}>
                            <Card image={facial} color="bg-red-400" titulo="Reconocimiento facial" />
                            <Card image={jogo} color="bg-yellow-300" titulo="Interactivo" />
                            <Card image={emotion} color="bg-green-500" titulo="Emociones" />
                        </div>
                    </div>
                </div>



                <div className="section ">
                    <div className="info">
                        <div className="flex flex-row p-20 gap-10 ">
                            <div className="img flex items-center justify-center md:w-[50%]">
                                <img src={childd} width={600} alt="jjj" />
                            </div>
                            <div className='md:w-[50%] flex items-center justify-center '>
                                <p className='p-20'>Expresatec, una aplicación educativa innovadora para niños con Trastorno del Espectro Autista, utiliza juegos interactivos para enseñar el reconocimiento de emociones. En colaboración con los padres, busca proporcionar un entorno enriquecedor que fomente el desarrollo emocional de manera inclusiva y amigable.</p>
                            </div>
                        </div>
                    </div>
                    <div className="info">
                        <div className="flex flex-row p-20 gap-10 ">
                            <div className='md:w-[50%] flex items-center justify-center '>
                                <p className='p-20'>Expresatec, una aplicación educativa innovadora para niños con Trastorno del Espectro Autista, utiliza juegos interactivos para enseñar el reconocimiento de emociones. En colaboración con los padres, busca proporcionar un entorno enriquecedor que fomente el desarrollo emocional de manera inclusiva y amigable.</p>
                            </div>
                            <div className="img flex items-center justify-center md:w-[50%]">
                                <img src={child2} width={400} alt="jjj" />
                            </div>

                        </div>
                    </div>
                </div>



                {/* <FLexcards /> */}
                <div className='h-screen mt-[10%]'>
                    <h1 className='text-center text-4xl' style={{ fontFamily: 'Space Grotesk' }}>CONTÁCTANOS</h1>
                    <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-10 '>
                        <div className="form">
                            <Form />
                        </div>
                        <div className="img w-[40%]">
                            <img src="https://i.ibb.co/mvCTsW5/welcome02.png" width={500} alt="" />

                        </div>


                    </div>
                </div>




            </div>


        </>
    )
}

export default Home2