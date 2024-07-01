import "@/styles/globals.css";

import { AnimatePresence } from "framer-motion";
import { Layout } from "@/components/dom/layout";

export default function App({ Component, pageProps, router }) {
  return (
    <div>
      <Layout>
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />
        </AnimatePresence>
      </Layout>
    </div>
  );
}
