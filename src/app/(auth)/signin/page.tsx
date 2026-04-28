"use client";

export const dynamic = 'force-dynamic';

import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <SignIn routing="hash" />
        </div>
    );
};

export default SignInPage;