

const Cardgame = (props) => {
    return (
        <>
            <div className="card   w-[250px] p-6 bg-blue-500 rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-lg">
                <div className=" flex flex-row items-center justify-center h-20 gap-5">
                    <div className="w-[50%]"><p className="text-lg font-bold">{props.titulo}</p></div>
                    <div className="w-[50%]"> <img src={props.img} alt="v" /></div>

                </div>
            </div>
        </>
    )
}

export default Cardgame