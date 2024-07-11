import Header from "@/components/header/page";
import { ContactDeveloperButton, LoginButton, RegisterButton } from "@/components/button/button";
import { TypeAnimationText } from "@/components/text/Text";
import { TypeAnimationGIF } from "@/components/gif/gif";

function Home() {
    return (
      <>
        <div className="bg-[#123] min-h-screen flex flex-col gap-16 ">
            <Header />
            <div className="flex items-center justify-center gap-5 max-md:flex-col ">
                <TypeAnimationGIF />
                <div className="flex flex-col text-slate-200 gap-10 w-96 max-md:w-full max-md:text-center">
                  <div className="flex flex-col gap-3 px-8">
                      <TypeAnimationText />
                      <span className='font-light text-justify max-md:text-center'>Inventory system it  control and manage all products in the minimart in real time and integrated to make it easier to develop your business</span>
                  </div>
                  <div className="flex items-center justify-center gap-5 max-[481px]:flex-col">
                      <button className='border border-white rounded-md p-2 w-44 hover:bg-slate-700'>Life Time Access</button>
                      <ContactDeveloperButton />
                  </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5 text-slate-200">
                <LoginButton />
                <RegisterButton />
            </div>
            <div >
                {/* <Footer/> */}
            </div>
        </div>
      </>
        
    )
}

export default Home