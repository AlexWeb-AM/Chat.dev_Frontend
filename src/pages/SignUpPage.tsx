import { SignUpForm } from "../components/SignUpForm"


export const SignUpPage = () => {
    return (
        <div className='signup_page_div flex'>
            <div className="line_effect absolute w-full h-2 blur-2xl bg-white"></div>
                <SignUpForm />
                <div className='part2_div h-screen w-1/2 bg-black  flex justify-center items-center' >
                    <img src="images/div_logo.svg" alt="" />
                </div>
        </div>
    )
}
