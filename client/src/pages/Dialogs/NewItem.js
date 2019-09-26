import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  dialogPaper: {
    minHeight: "40vh",
    maxHeight: "73vh",
    minWidth: "45vw",
    maxWidth: "45vw",
    display: "flex",
    textAlign: "center",
    margin: "10px",
    padding: 20
  },
  formWidth: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 10
  },
  textFieldHeader: {
    margin: 0,
    fontWeight: 600
  },
  FormControl: {
    width: "60%"
  }
});

export default withStyles(styles)(
  class NewItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    handleSubmit() {
      /* Make a post request somewhere */
    }

    render() {
      const { classes } = this.props;
      return (
        <div>
          <Dialog
            classes={
              ({ paper: classes.dialogContainer },
              { paper: classes.dialogPaper })
            }
            open={this.props.open}
            onClose={this.props.handleClick}
            aria-labelledby="form-dialog-title"
          >
            <Typography margin="normal" gutterBottom variant="h4">
              Add New Item
            </Typography>
            <DialogContent>
              <Typography gutterBottom variant="h5">
                Paste Link to Item
              </Typography>
              <TextField
                autoFocus
                id="item"
                label="Item"
                type="text"
                fullWidth
                margin="normal"
              />
              <Typography margin="normal" gutterBottom variant="h5">
                Select Item from List
              </Typography>
              <TextField
                autoFocus
                id="name"
                label="List"
                type="text"
                fullWidth
                margin="normal"
              />

              <Button
                variant="contained"
                color="secondary"
                style={{ background: "#aa1717", margin: "20px" }}
                onClick={() => {
                  console.log("Momtaz");
                }}
                mini
              >
                Add Item
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      );
    }
  }
);

// import React from "react";
// import Button from "@material-ui/core/Button";
// import { withStyles, createMuiTheme } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import { Typography } from "@material-ui/core";

// const styles = theme => ({
//   dialogPaper: {
//     minHeight: "40vh",
//     maxHeight: "73vh",
//     minWidth: "45vw",
//     maxWidth: "45vw",
//     display: "flex",
//     textAlign: "center",
//     margin: "10px",
//     padding: 20
//   },
//   formWidth: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     margin: 10
//   },
//   textFieldHeader: {
//     margin: 0,
//     fontWeight: 600
//   },
//   FormControl: {
//     width: "60%"
//   }
// });

// export default withStyles(styles)(
//   class NewItem extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {};
//     }

//     handleSubmit() {
//       /* Make a post request somewhere */
//     }

//     render() {
//       const { classes } = this.props;
//       return (
//         <div>
//           <Dialog
//             classes={
//               ({ paper: classes.dialogContainer },
//               { paper: classes.dialogPaper })
//             }
//             open={this.props.open}
//             onClose={this.props.handleClick}
//             aria-labelledby="form-dialog-title"
//           >
//             <Typography margin="normal" gutterBottom variant="h4">
//               Add New Item
//             </Typography>
//             <DialogContent>
//               <Typography gutterBottom variant="h5">
//                 Paste Link to Item
//               </Typography>
//               <TextField
//                 autoFocus
//                 id="item"
//                 label="Item"
//                 type="text"
//                 fullWidth
//                 margin="normal"
//               />
//               <Typography margin="normal" gutterBottom variant="h5">
//                 Select Item from List
//               </Typography>
//               <TextField
//                 autoFocus
//                 id="name"
//                 label="List"
//                 type="text"
//                 fullWidth
//                 margin="normal"
//               />

//               <Button
//                 variant="contained"
//                 color="secondary"
//                 style={{ background: "#aa1717", margin: "20px" }}
//                 onClick={() => {
//                   console.log("Momtaz");
//                 }}
//                 mini
//               >
//                 Add Item
//               </Button>
//             </DialogContent>
//           </Dialog>
//         </div>
//       );
//     }
//   }
// );
// //
