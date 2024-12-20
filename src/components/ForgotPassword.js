import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Grid,
  Link,
  Container,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const [error, setError] = useState(null);

  const handleSubmit = (values) => {
    console.log(values);
    setError(null);
  };
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6} sx={{ position: "relative", height:"100vh" }}>
      <Box
          component="img"
          alt="logo"
          src="images/logo--dark.svg"
          sx={{
            position: "absolute",
            top: "25px",
            left: "23px",
            height: "32px",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingInline: {md:'170px' , sm:'100px' , xs:'8vw'}, paddingBlockStart: {md:'360px', sm:"360px", xs:'50vh'},
            "@media (max-width:900px) and (min-width:768px)":{
              position:'relative',
              left:'190px',
              paddingInline:"100px",
              top:'190px'

            }
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 , fontWeight:500, left:{md:'-140px', sm:'-140px', xs:'-18vw'}, position:'relative', top:'-13px', whiteSpace:'nowrap' }}>
            Reset password
          </Typography>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  as={TextField}
                  fullWidth
                  label="Email address"
                  name="email"
                  type="email"
                  error={Boolean(errors.email && touched.email)}
                  helperText={errors.email && touched.email && errors.email}
                  sx={{ marginBottom: 2, width:{md:'450px',sm:'450px',xs:'90vw'}, }}
                />
                <Button type="submit" variant="contained" fullWidth sx={{width:{md:'450px',sm:'450px',xs:'90vw'}, textTransform:'none', borderRadius:'10px', p:1}}>
                  Send recovery link
                </Button>
                {error && <Alert severity="error">{error}</Alert>}
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          backgroundColor: "#090e23",
          paddingInline: "100px",
          paddingBlock: "50px",
          width: "802px",
          height: "700px",
          "@media (max-width:900px) and (min-width:768px)":{
            display:'none'
          },
          "@media (max-width:520px) and (min-width:320px)" :{
            display:'none'
          }
        }}
      >
        <Typography variant="h5" color="white" sx={{ textAlign: "center", fontSize:'25px', fontWeight:'500', marginBlockStart:'-3px' }}>
          Welcome to{" "}
          <Typography variant="span" color="green">
            Devias Kit
          </Typography>
        </Typography>
        <Typography
          variant="body2"
          color="white"
          sx={{
            textAlign: "center",
            fontSize: "17px",
            paddingBlockStart: "5px",
          }}
        >
          A professional template that comes with ready-to-use MUI components.
        </Typography>
        <Box
          component="img"
          alt="kitimg"
          src="images/auth-widgets.png"
          sx={{ width: "600px", height: "515px", objectFit: "contain", paddingBlockStart:'25px', position:'relative', left:'-12px' }}
        />
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
