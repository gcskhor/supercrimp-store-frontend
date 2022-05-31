import { Container, Typography, Button, Stack } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { BACKEND_URL } from "../../store.js";
import CartDetails from "./CartDetails/CartDetails.js";
import CheckoutDetails from "./UserDetailsForm/UserDetailsForm2.js";

export default function Checkout() {
  const emptyUserDetails = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    postalCode: "",
  };

  const noInputErrors = {
    name: false,
    email: false,
    password: false,
    requiredPassword: false,
    phone: false,
    addressLine1: false,
    postalCode: false,
  };

  const { handleSubmit } = useForm();

  const [userDetails, setUserDetails] = useState(emptyUserDetails);
  const [inputError, setInputError] = useState(noInputErrors);
  const [searchParams] = useSearchParams();

  const isFormValid = () => {
    return !(
      userDetails.name === "" &&
      userDetails.email === "" &&
      userDetails.phone === "" &&
      userDetails.addressLine1 === "" &&
      userDetails.postalCode === ""
    );
  };

  const handleCheckout = async (data, event) => {
    if (isFormValid()) {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));

      const cart = JSON.parse(localStorage.getItem("cart"));

      axios
        .post(`${BACKEND_URL}/checkout`, { cart, userDetails })
        .then((response) => {
          console.log(response.data.url);
          console.log("submitting to stripe");
          window.location = response.data.url;
        })
        .catch((error) => console.log(error.message));
    }
  };

  const handleError = async (error, event) => {
    console.log(error);
  };

  return (
    <Container maxWidth="md">
      <Typography py={3} variant="h3">
        Checkout
      </Typography>
      {searchParams.get("error") && (
        <Typography textAlign="center" variant="h6">
          Payment failed. Try again.
        </Typography>
      )}
      <Typography
        variant="button"
        fontSize="large"
        fontWeight="bold"
        display="block"
        mb={3}
        px={1}
      >
        User Details
      </Typography>
      <form onSubmit={handleSubmit(handleCheckout, handleError)}>
        <CheckoutDetails
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          inputError={inputError}
          setInputError={setInputError}
        />
        <Typography
          variant="button"
          fontSize="large"
          fontWeight="bold"
          display="block"
          mb={3}
          px={1}
        >
          Review your cart
        </Typography>
        <CartDetails />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          spacing={2}
          sx={{ mb: 5 }}
        >
          <Button variant="outlined" size="small" href="/cart">
            Back to cart
          </Button>
          <Button type="submit" variant="contained">
            Proceed to payment gateway
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
