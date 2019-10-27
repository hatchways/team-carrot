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
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ file: e.target.files[0] }, () => {
      console.log(this.state);
      this.props.onPhotoUpload({ ...this.state });
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <input
          accept="image/*"
          className={classes.input}
          id="raised-button-file"
          multiple
          type="file"
          onChange={this.handleChange}
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
