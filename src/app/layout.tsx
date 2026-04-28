import { Toaster } from "@/components/ui/sonner";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";
import { ClerkProvider } from "@clerk/nextjs";

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const isClerkConfigured = publishableKey && publishableKey.startsWith("pk_") && !publishableKey.includes("xxxxxxxx");

export const metadata = generateMetadata();

function ClerkWrapper({ children }: { children: React.ReactNode }) {
    if (!isClerkConfigured) {
        return <>{children}</>;
    }
    return (
        <ClerkProvider>
            <Toaster richColors theme="dark" position="bottom-center" />
            {children}
        </ClerkProvider>
    );
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-[#101010] text-foreground font-base antialiased overflow-x-hidden dark",
                    base.variable,
                    heading.variable,
                )}
            >
                <ClerkWrapper>
                    {children}
                </ClerkWrapper>
            </body>
        </html>
    );
};
