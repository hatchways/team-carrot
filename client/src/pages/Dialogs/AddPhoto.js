import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";

import InsertPhoto from "@material-ui/icons/InsertPhoto";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  input: {
    display: "none"
  }
});

class AddPhoto extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <InsertPhoto margin="normal"></InsertPhoto>
        <input
          accept="image/*"
          className={classes.input}
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button margin="normal" variant="raised" component="span">
            Upload
          </Button>
        </label>
      </Fragment>
    );
  }
}

export default withStyles(styles)(AddPhoto);
