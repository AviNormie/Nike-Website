

const SignUp = () => {
  return (
   
    <div className="flex h-screen justify-center items-center "  >     
      <form method='post' action="">
        <div className="flex flex-col shadow-2xl bg-slate-50 gap-2 border-[2px]  border-coral-red pt-32  pb-32 pl-24 pr-24 rounded-lg ">
        <h1 className="font-bold text-coral-red text-3xl">Enter your details to SignUp</h1>
        <input className="flex border-[3px] bg-slate-100 border-coral-red rounded-sm  p-3 w-full " type="text" placeholder="Name" name="name" />
        <input className="flex border-[3px] bg-slate-100 border-coral-red rounded-sm  p-3 w-full " type="email" placeholder="E-mail" name="email" /> 
        <input className="flex border-[3px] bg-slate-100 border-coral-red rounded-sm  p-3 w-full" type="password" placeholder="Password" name="password" />
        </div>

      </form>
    </div>
  )
}

export default SignUp