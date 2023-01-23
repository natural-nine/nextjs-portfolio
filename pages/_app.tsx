import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 px-5" >
      <div className="lg:col-span-3 p-4 text-center bg-white rounded-2xl col-span-12">sidbar</div>
      <div className="lg:col-span-9 bg-white rounded-2xl col-span-12"> 
        <Component {...pageProps} />
      </div>
    </div>
  );
}
