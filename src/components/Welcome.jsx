import { useAuth0 } from "@auth0/auth0-react";

const Welcome= ()=>{
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="container mx-auto h-screen">
            <div className="flex justify-center items-center h-full">
                <div className="bg-amber-500 rounded-lg w-[400px] p-4 text-center text-white flex flex-col gap-3">
                    <h1 className={"text-3xl font-semibold"}>Welcome to F8</h1>
                    <p className={"text-lg"}>Please login to send email</p>
                    <div>
                        <button className={'p-3 bg-blue-600 inline-block rounded-md'} onClick={() => loginWithRedirect({
                            prompt: 'login'
                        })}>Login | Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome