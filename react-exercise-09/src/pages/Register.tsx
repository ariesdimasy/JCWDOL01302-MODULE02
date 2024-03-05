import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Input,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { registerUserAction } from "../app/features/userSlice";
import { useNavigate } from "react-router-dom";

const registerSchema = Yup.object().shape({
  name: Yup.string().required().min(6),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
});

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: registerSchema,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("success");
      dispatch(registerUserAction(values));
      navigate("/users");
    },
  });

  return (
    <div style={{ padding: 20, width: "50%", margin: "auto" }}>
      <Card>
        <form>
          <CardBody>
            <Heading textAlign={"center"}> Register </Heading>

            <div>
              <label> Name </label>
              <Input
                type="text"
                name="name"
                id="name"
                onChange={formik.handleChange}
              />
              {formik.errors.name && (
                <div style={{ color: "red" }}>
                  {JSON.stringify(formik.errors.name)}
                </div>
              )}
            </div>
            <div>
              <label> Email </label>
              <Input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <div style={{ color: "red" }}>
                  {" "}
                  {JSON.stringify(formik.errors.email)}{" "}
                </div>
              )}
            </div>
            <div>
              <label> Password </label>
              <Input
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
              />
              {formik.errors.password && (
                <div style={{ color: "red" }}>
                  {JSON.stringify(formik.errors.password)}
                </div>
              )}
            </div>
          </CardBody>
          <CardFooter textAlign={"center"}>
            <Button onClick={() => formik.handleSubmit()} type="button">
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
