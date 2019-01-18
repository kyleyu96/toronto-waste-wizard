import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
	grid: {
		background: "linear-gradient(to right, #1d5895 , #22965e)",
		paddingTop: theme.spacing.unit * 5,
		paddingBottom: theme.spacing.unit * 5,
		marginTop: theme.spacing.unit,
		marginBottom: theme.spacing.unit
	},
	font: {
		color: "white",
		fontWeight: "bold"
	}
});

const Header = ({ classes, title }) => (
	<Grid
		container
		direction="column"
		justify="center"
		className={classes.grid}
	>
		<Grid item>
			<Typography variant="h3" align="center" className={classes.font}>
				{title}
			</Typography>
		</Grid>
	</Grid>
);

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	title: PropTypes.string.isRequired
};

export default withStyles(styles)(Header);
