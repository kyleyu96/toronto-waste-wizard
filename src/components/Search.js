import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Favourites from "./Favourites";
import ItemContainer from "../containers/ItemContainer";

const styles = theme => ({
	grid: {
		padding: theme.spacing.unit * 2
	},
	button: {
		backgroundColor: "#23995c",
		padding: 0,
		maxWidth: "55px",
		maxHeight: "55px",
		minWidth: "55px",
		minHeight: "55px",
		"&:hover": {
			backgroundColor: "#23995c"
		},
		marginLeft: theme.spacing.unit * 2
	},
	icon: {
		color: "white",
		transform: "scale(-1, 1)",
		height: "50px",
		width: "50px"
	},
	form: {
		display: "flex"
	}
});

const Search = ({
	classes,
	searchString,
	searchResultItems,
	isFetching,
	isError,
	setSearchString,
	getResults,
	favouritesItems
}) => (
	<Grid
		container
		direction="row"
		justify="center"
		alignItems="center"
		className={classes.grid}
	>
		<Grid item xs={12}>
			<form
				onSubmit={e => {
					getResults();
					e.preventDefault();
				}}
				className={classes.form}
			>
				<TextField
					fullWidth
					value={searchString}
					onChange={e => setSearchString(e.target.value)}
					variant="outlined"
				/>
				<Button type="submit" className={classes.button}>
					<SearchIcon className={classes.icon} />
				</Button>
			</form>
		</Grid>
		<Grid item xs={12}>
			{!isFetching && !isError ? (
				searchResultItems.map(item => (
					<ItemContainer item={item} key={item.title} />
				))
			) : isError ? (
				<Typography variant="h5">
					Unfortunately, there was an error. Please retry again in a
					few seconds! :(
				</Typography>
			) : (
				<Typography variant="h5">Loading...</Typography>
			)}
		</Grid>
		{favouritesItems.length > 0 && (
			<Grid item xs={12}>
				<Favourites favouritesItems={favouritesItems} />
			</Grid>
		)}
	</Grid>
);

Search.propTypes = {
	classes: PropTypes.object.isRequired,
	searchString: PropTypes.string.isRequired,
	searchResultItems: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	isError: PropTypes.bool.isRequired,
	setSearchString: PropTypes.func.isRequired,
	getResults: PropTypes.func.isRequired,
	favouritesItems: PropTypes.array.isRequired
};

export default withStyles(styles)(Search);
