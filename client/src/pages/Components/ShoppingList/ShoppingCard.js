import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingListExpandDialog from "../../Dialogs/ShoppingListExpandDialog";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  card: {
    width: 300,
    margin: 10,
    padding: 0,
    height: 350,
    boxShadow: "5px 5px 10px #cecece"
  },
  media: {
    height: 250
  }
});

class ShoppingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log("Exand dialog clicked");
    this.setState(
      {
        addClicked: !this.state.addClicked
      },
      () => {
        console.log("This is add clicked");
        console.log(this.state.addClicked);
      }
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <span onClick={this.handleClick}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={this.props.img}
                title={this.props.name}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="h4"
                  align="center"
                >
                  {this.props.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.items ? this.props.items.length + " items" : ""}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </span>
        <ShoppingListExpandDialog
          open={this.state.addClicked}
          handleClick={this.handleClick}
          {...this.props}
          listName={this.props.name}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ShoppingCard);

// export default function ShoppingCard(props) {
//   const classes = useStyles();

//   return (
//     <Card className={classes.card}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image={props.img}
//           title={props.name}
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {props.name}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {props.items ? props.items.length + " items" : ""}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <NewItem
//         open={this.state.addClicked}
//         handleClick={this.handleClick.bind(this)}
//       />
//     </Card>
//   );
// }
