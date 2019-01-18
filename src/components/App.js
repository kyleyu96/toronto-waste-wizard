import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import SearchContainer from "../containers/SearchContainer";

const App = () => (
	<Fragment>
		<CssBaseline />
		<Header title={"Toronto Waste Lookup"} />
		<SearchContainer />
	</Fragment>
);

export default App;
