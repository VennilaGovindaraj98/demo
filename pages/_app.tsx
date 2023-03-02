// import Layout from '@/component/Layout'
// import store from '@/component/rtk-demo/app/store'
// import store from '@/component/rtk-demo/app/store'
// import store from '@/component/redux/store'
// import store from '@/component/rtk-demo/app/store'
// import store from '@/component/redux/store'
// import store from "../component/rtk-demo/app/store"
import Layout from "@/component/Layout";
import store from "@/component/rtk-demo/app/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// import store from './redux/store'

// import {createStore} from 'redux'
// import store from '@/component/redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
