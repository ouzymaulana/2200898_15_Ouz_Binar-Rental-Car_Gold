import { test, expect } from "vitest";
import { render, screen, userEvent } from "@testing-library/react";
import axios from "axios";
import SignIn from "../Pages/SignIn";

test("renders the sign-in form", () => {
  render(<SignIn />);

  const form = screen.getByTestId("sign-in-form");
  expect(form).toBeInTheDocument();
});

test("updates email state on input change", () => {
  const { getByLabelText } = render(<SignIn />);
  const emailInput = getByLabelText("Email");

  userEvent.type(emailInput, "customer@bcr.io");
  expect(emailInput.value).toBe("customer@bcr.io");
  expect(SignIn.email).toBe("customer@bcr.io");
});

test("handles successful submission", async () => {
  axios.post.mockResolvedValue({ data: { access_token: "token" } });

  const { getByText } = render(<SignIn />);
  const submitButton = getByText("Sign In");
  userEvent.click(submitButton);

  expect(axios.post).toHaveBeenCalledWith(
    "https://api-car-rental.binaracademy.org/customer/auth/login",
    {
      email: SignIn.email,
      password: SignIn.password,
    }
  );
  expect(localStorage.getItem("token")).toBe("token");
});
