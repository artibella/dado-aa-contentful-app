import React from "react";
import { render } from "react-dom";
import "./index.css";
import { init, locations } from "contentful-ui-extensions-sdk";
import Sidebar from "./Sidebar";
import Config from "./Config";
import "@contentful/forma-36-react-components/dist/styles.css";

init((sdk) => {
	const root = document.getElementById("root");

	if (sdk.location.is(locations.LOCATION_APP_CONFIG)) {
		render(<Config sdk={sdk} />, root);
	} else if (sdk.location.is(locations.LOCATION_ENTRY_SIDEBAR)) {
		render(<Sidebar sdk={sdk} />, root);
		sdk.window.startAutoResizer();
	}
});
