import { AiFillApi, AiOutlineSearch } from 'react-icons/ai';

const Home = () => {
    const test = [1, 23, 3, 24, 32, 3, 4, 243, 23, 43, 423, 32, 432, 324]

    return (
        <>
            <header className="bg-white border-b-2 py-2 sticky top-0">
                <div className="max-w-5xl m-auto text-md text-center">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <div className="relative mx-auto text-gray-600">
                                <input className="border-2 w-96 placeholder-gray-500 border-gray-200 bg-white h-10 px-2 pr-16 rounded-lg focus:outline-indigo-600"
                                    name="search" placeholder="Search.."/>
                                <button type="submit" className="absolute right-2 top-1">
                                    <AiOutlineSearch size={30}/>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-md text-gray-500 mr-3
                                font-semibold px-4 py-2 hover:bg-blue-100 hover:text-indigo-600 hover:underline">
                                Login
                            </div>
                            <div className="border-2 border-indigo-500 rounded-md text-indigo-500
                                font-semibold px-4 py-2 hover:bg-indigo-600 hover:text-white hover:underline">
                                Create Account
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="flex justify-center mt-10">
                <div className="flex">
                    <nav className="w-52 mr-8 sticky top-20 h-max">
                        <div className="font-bold text-5xl">
                            Posts
                        </div>
                        <div className="text-xl mt-2">Top Tags</div>
                        <div className="mt-2 flex gap-2 flex-wrap">
                            <span className="bg-gray-200 px-2 rounded-md bg-blue-100 hover:bg-blue-200">
                                #test
                            </span>
                        </div>
                    </nav>
                    <div>
                        {test.map((d) => (
                            <div className="w-auto">
                                <div className="mb-6">
                                    <div className="max-w-2xl px-10 py-6 mx-auto bg-white rounded-lg border-2 border-gray-200 border-solid">
                                        <div className="flex items-center justify-between">
                                            <span className="font-light text-gray-600">Jun 1,
                                                2020</span>
                                            <a href="#"
                                                className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                                        </div> */ }
                                        <div className="mt-2"><a href="#" className="text-2xl font-bold text-gray-700 hover:underline">Build
                                            Your New Idea with Laravel Freamwork.</a>
                                            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                        </div>
                                        <div className="flex items-center justify-between mt-4"><a href="#"
                                            className="text-blue-500 hover:underline">Read more</a>
                                            <div><a href="#" className="flex items-center"><img
                                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                <h1 className="font-bold text-gray-700 hover:underline">Alex John</h1>
                                            </a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
