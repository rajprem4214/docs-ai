"use client"

import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";

function Header() {

    const { user } = useUser();

    return (
        <div className="flex justify-between items-center p-5">
            {user && (
                <h1>{user?.firstName}</h1>
            )}


            <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>

    )
}

export default Header;