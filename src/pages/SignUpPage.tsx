import { Link } from "react-router-dom"


export const SignUpPage = () => {
    return (
        <div className='signup_page_div flex'>
                <div className='signup_div flex justify-center items-center h-screen w-1/2'>
                    <form className="form_div w-formWidth rounded-xl h-formHeight bg-black flex items-center pt-5  flex-col">
                        <h3 className="mb-4 mt-2 mr-36 text-3xl font-semibold w-40">Sign Up</h3>
                        <input type="text" placeholder="Full Name" required name="name" />
                        <input type="text" placeholder="Email" required name="email" />
                        <input type="text" placeholder="Password" required name="password" />
                        <input type="text" placeholder="Retry Password" required name="retry-password" />
                        <button className="text-full-10 mt-3 h-11 bg-white rounded-xl text-black font-semibold text-lg">Sign Up</button>
                        <h4 className="mt-4 mr-12 text-gray-600">Already have an account. <Link to='/login' className="text-white underline ">Login</Link></h4>
                    </form>
                </div>
                <div className='part2_div h-screen w-1/2 bg-black  flex justify-center items-center' >
                    <img src="images/div_logo.svg" alt="" />
                </div>
        </div>
    )
}
