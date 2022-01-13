import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import '../styles/tailwind.css'
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  // return <Component {...pageProps} />
  return getLayout(<Component { ...pageProps } />)
}

export default MyApp
