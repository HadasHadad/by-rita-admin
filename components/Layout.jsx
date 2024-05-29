import Header from "@/components/Header.jsx";
import { useSession, signIn, signOut } from "next-auth/react";
import Nav from "../components/Nav.jsx";

export default function Layout({children}) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-neutral-950 w-screen h-screen flex items-center">
        <div className="w-full text-center">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 rounded-lg px-4"
          >
            Login with Google
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-neutral-950">
      <Header />
      <div className="flex">
        <div className="bg-neutral-950	 min-h-screen min-w-48 ">
          <Nav />
        </div>
        <div className="bg-neutral-100 flex-grow rounded-lg p-4 ">
          <div>{children}</div>


        </div>

      </div>
    </div>
  );
}
