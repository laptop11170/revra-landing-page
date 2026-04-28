"use client";

export const dynamic = 'force-dynamic';

import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <SignUp routing="hash" />
        </div>
    );
};

export default SignUpPage;