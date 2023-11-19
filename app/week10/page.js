"use client";

import { useUserAuth } from "../week10/_utils/auth-context";
import Link from 'next/link'

export default function Week8(){

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    //handler for sign in
    function handleSignIn() {
        gitHubSignIn();
    }

    //handler for sign out
    function handleSignOut() {
        firebaseSignOut();
    }


    return(
        <div className="m-4">
            <h1 className="text-2xl font-bold">Week 10</h1>
            <p className="my-4">This is the week 10 page.</p>
            
            
            {!user && (
                <button
                className="p-1 w-40 bg-custom-orange hover:bg-custom-slate active:bg-custom-slate"
                onClick={handleSignIn}
                >
                    Sign In with GitHub
                </button>
            )}

            
            {user && (
                <div>
                    <p className="my-4">Welcome, {user.displayName}</p>
                    <button
                    className="m-2 p-1 w-40 bg-custom-orange hover:bg-custom-slate active:bg-custom-slate"
                    onClick={handleSignOut}
                    >
                        Sign Out
                    </button>
                    <Link 
                    href="/week10/shopping-list"
                    className="m-2 p-1 w-40 bg-custom-orange hover:bg-custom-slate active:bg-custom-slate">
                        Shopping List
                        
                    </Link>
                </div>
            )}
        </div>

    )
}