import { AppProps } from "next/app";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/components/providers";
import { cn } from "@/lib/utils";
import { fontMono, fontSans } from "@/lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={cn(
        "font-sans antialiased",
        fontSans.variable,
        fontMono.variable
      )}
    >
      <Toaster />
      <Providers attribute="class" defaultTheme="system" enableSystem>
        <div className="flex flex-col min-h-screen">
          <main className=" bg-muted/50">
            <Component {...pageProps} />
          </main>
        </div>
      </Providers>
    </main>
  );
}
