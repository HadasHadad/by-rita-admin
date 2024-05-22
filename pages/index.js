import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "../components/Nav.jsx"

export default function Home() {
  const { data: session } = useSession()
  if(!session){
    return (
      <div className='bg-blue-900 w-screen h-screen flex items-center'>
  
       <div className="w-full text-center">
        <button onClick={() => signIn('google')} className="bg-white p-2 rounded-lg px-4">Login with Google</button>
       </div>
      </div>
    )
  }
  return (
    <div className='bg-neutral-400 min-h-screen'>
      <Nav/>
       logged in {session.user.email}
    </div>
  );
}