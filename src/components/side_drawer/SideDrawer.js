import React from "react";

import { Drawer, List, ListItem } from "@mui/material";

export default function SideDrawer(props) {
	const links = [
		{
			where: "featured",
			value: "To Top",
		},
		{
			where: "venuenfo",
			value: "Venue NFO",
		},
		{
			where: "highlight",
			value: "Highlights",
		},
		{
			where: "lovation",
			value: "Location",
		},
	];

	// We will create a loop to show these links

	const renderItem = (item) => {
		return (
			<ListItem
				button
				onClick={() => {
					alert(item.where);
				}}
				key={item.where}
			>
				{item.value}
			</ListItem>
		);
	};

	return (
		// onClose calls a function that lives in the parent :)
		<Drawer
			anchor="right"
			open={props.open}
			onClose={() => props.onClose(false)}
		>
			<List component="nav">{links.map((item) => renderItem(item))}</List>
		</Drawer>
	);
}
