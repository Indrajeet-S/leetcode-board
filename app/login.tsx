"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "./userCard";
export default function Login(){
    const {data:session} = useSession();

    if(session){
        return(
            <>
                <button type="button" className="btn btn-primary bg-yellow-300 hover:bg-green-400 text-black font-bold py-1 px-3 rounded-lg" onClick={() => signOut()}>Sign Out</button>
                <UserCard user={session.user}/>
            </>
        )
    }else {
        return(
            <>
                <button type="button" className="btn btn-primary bg-green-300 hover:bg-red-400 text-black font-bold py-1 px-3 rounded-lg" onClick={() => signIn()}>Sign In with Google</button>
            </>
        )
    }
}