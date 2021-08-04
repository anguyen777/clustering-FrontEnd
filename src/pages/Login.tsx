// import React from "react";
// // @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Icon from "@material-ui/core/Icon";
// // @material-ui/icons
// import Email from "@material-ui/icons/Email";
// import People from "@material-ui/icons/People";
// // core components
// import Header from "components/Header/Header.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";
// import Footer from "components/Footer/Footer.js";
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import Button from "components/CustomButtons/Button.js";
// import Card from "components/Card/Card.js";
// import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardFooter from "components/Card/CardFooter.js";
// import CustomInput from "components/CustomInput/CustomInput.js";

// import styles from "assets/jss/material-kit-react/views/loginPage.js";

// import image from "assets/img/bg7.jpg";

// const useStyles = makeStyles(styles);

// export default function LoginPage(props) {
//   const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
//   setTimeout(function () {
//     setCardAnimation("");
//   }, 700);
//   const classes = useStyles();
//   const { ...rest } = props;
//   return (
//     <div>
//       <Header
//         absolute
//         color="transparent"
//         brand="Material Kit React"
//         rightLinks={<HeaderLinks />}
//         {...rest}
//       />
//       <div
//         className={classes.pageHeader}
//         style={{
//           backgroundImage: "url(" + image + ")",
//           backgroundSize: "cover",
//           backgroundPosition: "top center",
//         }}
//       >
//         <div className={classes.container}>
//           <GridContainer justify="center">
//             <GridItem xs={12} sm={12} md={4}>
//               <Card className={classes[cardAnimaton]}>
//                 <form className={classes.form}>
//                   <CardHeader color="primary" className={classes.cardHeader}>
//                     <h4>Login</h4>
//                     <div className={classes.socialLine}>
//                       <Button
//                         justIcon
//                         href="#pablo"
//                         target="_blank"
//                         color="transparent"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         <i className={"fab fa-twitter"} />
//                       </Button>
//                       <Button
//                         justIcon
//                         href="#pablo"
//                         target="_blank"
//                         color="transparent"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         <i className={"fab fa-facebook"} />
//                       </Button>
//                       <Button
//                         justIcon
//                         href="#pablo"
//                         target="_blank"
//                         color="transparent"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         <i className={"fab fa-google-plus-g"} />
//                       </Button>
//                     </div>
//                   </CardHeader>
//                   <p className={classes.divider}>Or Be Classical</p>
//                   <CardBody>
//                     <CustomInput
//                       labelText="First Name..."
//                       id="first"
//                       formControlProps={{
//                         fullWidth: true,
//                       }}
//                       inputProps={{
//                         type: "text",
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <People className={classes.inputIconsColor} />
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                     <CustomInput
//                       labelText="Email..."
//                       id="email"
//                       formControlProps={{
//                         fullWidth: true,
//                       }}
//                       inputProps={{
//                         type: "email",
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <Email className={classes.inputIconsColor} />
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                     <CustomInput
//                       labelText="Password"
//                       id="pass"
//                       formControlProps={{
//                         fullWidth: true,
//                       }}
//                       inputProps={{
//                         type: "password",
//                         endAdornment: (
//                           <InputAdornment position="end">
//                             <Icon className={classes.inputIconsColor}>
//                               lock_outline
//                             </Icon>
//                           </InputAdornment>
//                         ),
//                         autoComplete: "off",
//                       }}
//                     />
//                   </CardBody>
//                   <CardFooter className={classes.cardFooter}>
//                     <Button simple color="primary" size="lg">
//                       Get started
//                     </Button>
//                   </CardFooter>
//                 </form>
//               </Card>
//             </GridItem>
//           </GridContainer>
//         </div>
//         <Footer whiteFont />
//       </div>
//     </div>
//   );
// }




// import React from 'react';

// const Login = () => {
// return (
// 	<div
// 	style={{
// 		display: 'flex',
// 		justifyContent: 'Right',
// 		alignItems: 'Right',
// 		height: '100vh'
// 	}}
// 	>
// 	<h1>Login</h1>
// 	</div>
// );
// };

// export default Login;

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Cluster.io
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          LOGIN
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            LOGIN
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
