import React, { useState } from "react"
import {
    Grid,
    makeStyles,
    Card,
    CardContent,
    CardActions,
    Button,
} from "@material-ui/core"
import { Header } from './UserForm.elements'
import '../../../App.css'
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TextField } from "formik-material-ui"
import { performLogin } from "../../../utils/utils"
import { useNavigate } from "react-router-dom";
import { Hearts } from 'react-loader-spinner'

const useStyle = makeStyles((theme) => ({
    padding: {
        padding: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1),
    },
    buttonColor: {
        '&.MuiButton-containedPrimary': {
            background: "rgba(160, 31, 55, 0.83)",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "5px"
        }
    },
    grid: {
        width: "70%"
    },
    label: {
        '& label.Mui-focused': {
            color: '#912b4d',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#912b4d',
            },
        }
    }
}))

//Data
const initialValues = {
    email: "",
    password: "",
}

//Password validation
const lowercaseRegEx = /(?=.*[a-z])/
const uppercaseRegEx = /(?=.*[A-Z])/
const numericRegEx = /(?=.*[0-9])/
const lengthRegEx = /(?=.{6,})/

//Validation schema
let validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .matches(
            lowercaseRegEx,
            "Must contain one lowercase alphabetical character!"
        )
        .matches(
            uppercaseRegEx,
            "Must contain one uppercase alphabetical character!"
        )
        .matches(numericRegEx, "Must contain one numeric character!")
        .matches(lengthRegEx, "Must contain 6 characters!")
        .required("Required!"),
})

const UserForm = () => {
    const navigate = useNavigate();
    const classes = useStyle()

    const [loading, setLoading] = useState(false);

    const onSubmit = (values) => {
        setLoading(true);
        performLogin(values)
            .then(res => {
                localStorage.setItem('TOKEN', res.token);
                setLoading(true);
                navigate('/');
            });

    }

    return (
        <Grid container justifyContent="center" spacing={1}>
            <Grid item className={classes.grid}>
                <Card className={classes.padding}>
                    <Header title="Blood Pressure Diary"></Header>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {({ isValid, values }) => {
                            return (
                                <Form>
                                    <CardContent>
                                        <Grid item container spacing={3} justifyContent="center">
                                            <Grid item xs={12} sm={12} md={12}>
                                                <Field
                                                    className={classes.label}
                                                    label="Email"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="email"
                                                    value={values.email}
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={12}>
                                                <Field
                                                    className={classes.label}
                                                    label="Password"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="password"
                                                    value={values.password}
                                                    type="password"
                                                    component={TextField}
                                                />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            disabled={!isValid || (!values.email || !values.password)}
                                            variant="contained"
                                            color="primary"
                                            type="Submit"
                                            fullWidth
                                            className={!isValid || (!values.email || !values.password) ? classes.button : (classes.button, classes.buttonColor)}>
                                            {
                                                loading ?
                                                    <Hearts color="white" height={25} width={25} /> :
                                                    <span>Sign in</span>
                                            }
                                        </Button>
                                    </CardActions>
                                </Form>
                            )
                        }}
                    </Formik>
                </Card>
            </Grid>
        </Grid>
    )
}

export default UserForm
