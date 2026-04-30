import { Toaster } from "@/components/ui/sonner";
import { base, heading } from "@/constants/fonts";
import { cn } from "@/lib";
import "@/styles/globals.css";
import { generateMetadata } from "@/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/context/theme-provider";

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const isClerkConfigured = publishableKey && publishableKey.startsWith("pk_") && !publishableKey.includes("xxxxxxxx");

export const metadata = generateMetadata();

function ClerkWrapper({ children, theme }: { children: React.ReactNode; theme?: "light" | "dark" }) {
    if (!isClerkConfigured) {
        return <>{children}</>;
    }
    return (
        <ClerkProvider>
            <Toaster richColors theme={theme ?? "dark"} position="bottom-center" />
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
        <html lang="en" suppressHydrationWarning className="dark">
            <body
                className={cn(
                    "min-h-screen bg-background text-foreground font-base antialiased overflow-x-hidden",
                    base.variable,
                    heading.variable,
                )}
            >
                <ThemeProvider>
                    <ClerkWrapper>
                        {children}
                    </ClerkWrapper>
                </ThemeProvider>
            </body>
        </html>
    );
};
