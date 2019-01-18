import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/StarRate";
import Parser from "html-react-parser";

const styles = theme => ({
	icon: {
		padding: 0,
		marginTop: "12px",
		marginRight: "6px"
	},
	title: {
		marginTop: "16px"
	},
	fav: {
		color: "#23995c"
	},
	notFav: {
		color: "#aaaaaa"
	},
	sameRow: {
		display: "flex",
		alignItems: "flex-start"
	}
});

const ListItem = ({
	classes,
	isFav,
	item,
	addToFavourites,
	removeFromFavourites
}) => (
	<Grid
		container
		direction="row"
		justify="flex-start"
		alignItems="flex-start"
	>
		<Grid item xs={5} className={classes.sameRow}>
			<IconButton
				onClick={e =>
					isFav ? removeFromFavourites(item) : addToFavourites(item)
				}
				className={classes.icon}
			>
				<StarIcon className={isFav ? classes.fav : classes.notFav} />
			</IconButton>
			<div className={classes.title}>{item.title}</div>
		</Grid>
		<Grid item xs={7}>
			{Parser(Parser(item.body))}
		</Grid>
	</Grid>
);

ListItem.propTypes = {
	classes: PropTypes.object.isRequired,
	isFav: PropTypes.bool.isRequired,
	item: PropTypes.object.isRequired,
	addToFavourites: PropTypes.func.isRequired,
	removeFromFavourites: PropTypes.func.isRequired
};

export default withStyles(styles)(ListItem);
