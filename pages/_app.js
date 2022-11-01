import React from 'react'
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import "../styles/main.css";

function MyApp({ Component, pageProps }) {
	return(
		<StateContext>
			<Layout>
			<Toaster />
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	)
}

export default MyApp;
