import { Link } from "react-router-dom";

export const LoginPage = () => {
    return (
        <div className='login_page_div flex'>
            <div className='login_div flex justify-center items-center h-screen w-1/2'>
                <form className="form_div w-formWidth rounded-xl h-formHeight bg-black flex items-center pt-5 flex-col">
                    <h3 className="mb-4 mt-2 mr-36 text-3xl font-semibold w-40">Login</h3>
                    <input type="text" placeholder="Email" required name="email" />
                    <input type="password" placeholder="Password" required name="password" />
                    <button className="text-full-10 mt-3 h-11 bg-white rounded-xl text-black font-semibold text-lg">Login</button>
                    <h4 className="mt-4 mr-12 text-gray-600">Don't have an account? <Link to='/signup' className="text-white underline">Sign Up</Link></h4>
                </form>
            </div>
            <div className='part2_div h-screen w-1/2 bg-black flex justify-center items-center'>
                <img src="images/div_logo.svg" alt="" />
            </div>
        </div>
    );
};