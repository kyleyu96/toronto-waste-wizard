import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ItemContainer from "../containers/ItemContainer";

const styles = theme => ({
	container: {
		backgroundColor: "#f7fefa",
		paddingTop: theme.spacing.unit * 2
	},
	font: {
		color: "#23995c",
		fontWeight: "900"
	}
});

const Favourites = ({ classes, favouritesItems }) => (
	<Grid
		container
		direction="row"
		justify="flex-start"
		alignItems="flex-start"
		className={classes.container}
	>
		<Grid item xs={12}>
			<Typography variant="h5" className={classes.font} gutterBottom>
				Favourites
			</Typography>
		</Grid>
		<Grid item xs={12}>
			{favouritesItems.map(item => (
				<ItemContainer isFav={true} item={item} key={item.title} />
			))}
		</Grid>
	</Grid>
);

Favourites.propTypes = {
	classes: PropTypes.object.isRequired,
	favouritesItems: PropTypes.array.isRequired
};

export default withStyles(styles)(Favourites);
