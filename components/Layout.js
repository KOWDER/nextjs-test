import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>NextJS Test</title>
    </Head>
    <Navbar />
    <div className="layout-container">
    {props.children}
    </div>

    <style jsx global>{`
    * { 
      box-sizing: border-box; 
      margin: 0; 
      padding: 0 
    }

    .layout-container {
      width: 80%;
      margin: 0 auto;
    }
    `}</style>
  </div>
)

export default Layout