import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import ThemeProviders from "@/providers/Theme";
import DarkModeSwitch from "@/components/DarkModeSwitch";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const getPathName = (): string => {
    let path = router.pathname.split("/");
    let src = "";
    if (path.length < 1) {
      src = "index";
    } else {
      if (path[path.length - 1].indexOf("[") > -1) {
        src = path.join("/");
      } else {
        src = `${path.join("/")}/index`;
      }
    }

    return `${src}.tsx`.replace("//", "");
  };
  return (
    <>
      <Head>
        <title>Ali Imron</title>
      </Head>
      <ThemeProviders>
        <main
          className={`flex min-h-screen flex-col items-center gap-5 p-5 sm:p24 ${inter.className}`}
        >
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 hidden sm:flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Get started by editing&nbsp;
              <code className="font-mono font-bold">{getPathName()}</code>
            </p>

            <div className="flex space-x-4 p-5 sm:p-0">
              <Link
                href="/"
                className={`nav-item ${router.pathname == "/" && "active"}`}
                aria-current="page"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className={`nav-item ${router.pathname.indexOf("/blog") > -1 && "active"}`}
              >
                Blog
              </Link>
              <Link
                href="/resume"
                className={`nav-item ${
                  router.pathname == "/resume" && "active"
                }`}
              >
                Resume
              </Link>

              <DarkModeSwitch />
            </div>
          </div>

          <Component {...pageProps} />
        </main>
      </ThemeProviders>
    </>
  );
}
