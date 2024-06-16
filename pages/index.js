
import Layout from "@/components/Layout.jsx";
import {useSession} from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  console.log ({session})
  return (
    <>
    <Layout>
      <div className="flex justify-between">
     <h2 className="font-bold"> שלום,<b> {session?.user?.name} </b></h2>
    
      <img src={session?.user?.image} alt="userImg" className="w-6 h-6"/>
     
     
      </div>
    </Layout>
    </>
  )

}
