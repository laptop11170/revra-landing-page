import { Metadata } from "next";

export const generateMetadata = ({
    title = `${process.env.NEXT_PUBLIC_APP_NAME} | AI-native Operations & CRM system`,
    description = `RevRa is the AI-powered CRM built for US health insurance agents. Manage leads, calls, SMS, and pipeline — all in one workspace.`,
    image = "/thumbnail.png",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/icons/icon.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/icons/icon.png"
        },
        {
            rel: "icon",
            url: "/icons/icon.png"
        }
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    ...(noIndex && { robots: { index: false, follow: false } }),
});
