import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="w-full relative overflow-x-hidden">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};
