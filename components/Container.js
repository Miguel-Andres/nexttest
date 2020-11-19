import Head from "next/head"
import{Router, useRouter}from "next/router"


import Navbar from "./Navbar"

const Container = (props) =>{
        
   const url = useRouter()

    return(
        <div>
        <Head>
        
        <title>Test {url.pathname} </title>
       
      </Head>
        <Navbar/>
        <div>
            {props.children}
        </div>
    </div>
        )
}

export default Container