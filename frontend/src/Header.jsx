

function Header(){
    return(
        <>
        <header className=" text-white py-18">
                <div className=" bg-gradient-to-r from-blue-400 to-purple-500 py-16 -mt-1 text-white">
                    <div className="container mx-auto text-center px-4">
                        <img src="softwareEngineer.jpg" className="w-180 float-right rounded-2xl" alt="" />
                        <h1 className="text-6xl  text-gray-800 mb-6">
                        Together to Create <span className="text-blue-600">Wonders with Us</span>
                        <br />
                        <span className="font-light">Skills Made Smarter, Faster, Better</span>
                        </h1>

                        <p className="text-xl  text-gray-600 mb-8 max-w-2xl mx-auto">
                        </p>

                        <div className="flex justify-center space-x-4">
                        <button className="shadow-lg bg-blue-500/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-500 cursor-pointer transition duration-300">
                            Let's Chat
                        </button>
                        <button className="shadow-lg bg-indigo-500/50 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 cursor-pointer transition duration-300">
                            Start Course
                        </button>
                        </div>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-blue-600">Gain</h2>
                            <p className="text-gray-600">Hands on Experience</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-blue-600">26K</h2>
                            <p className="text-gray-600">Happy Students</p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-blue-600">98%</h2>
                            <p className="text-gray-600">Success Rate</p>
                        </div>
                        </div>
                        <div className="mt-20">
                        <p className="text-sm text-white font-semibold uppercase tracking-widest">
                            Creative Learning
                        </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;