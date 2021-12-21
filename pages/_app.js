// import App from 'next/app'
import CartProvider from '@store/Cart'
import 'semantic-ui-css/semantic.min.css'
import '../global.css'

// https://nextjs.org/docs/advanced-features/custom-app

export function reportWebVitals(metrics) {
    // analytics - calibre
    // serverAnalytics.log(metrics)
    console.log(metrics)
}

function MyApp({ Component, pageProps }) {
    // Providers (Context)
    // Themes
    // Layout
    // Props adicionales

    return <CartProvider>
        <Component {...pageProps} />
    </CartProvider>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp