import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Login from "../modules/Login";

describe("Login", () => {
  it("shoul render  login componen", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(
      <BrowserRouter>
        <RecoilRoot>
          <Login />
        </RecoilRoot>
      </BrowserRouter>
    );
    const loginHeader = getByRole("heading", { name: "LOGIN FORM" });
    const loginButton = getByRole("button", { name: "LOGIN" });
    const branchId = getByRole("spinbutton", { name: "branchId" });
    const username = getByRole("textbox", { name: "userName" });
    const password = getByRole("password", { name: "password" });
    expect(loginHeader).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(branchId).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();

    //test branch id validation
    await user.click(loginButton);
    expect(branchId).toBeInvalid();

    //test username id validation
    await user.type(branchId, "10003");
    expect(branchId).toHaveValue(10003);
    await user.click(loginButton);
    expect(branchId).toBeValid();
    expect(username).toBeInvalid();

    //test username id validation
    await user.type(username, "testuser03");
    expect(username).toHaveValue("testuser03");
    await user.click(loginButton);
    expect(username).toBeValid();
    expect(password).toBeInvalid();

    //test user credentials validation
    await user.type(password, "pa55w0rd003");
    expect(password).toHaveValue("pa55w0rd003");
    await user.click(loginButton);
    expect(password).toBeValid();
  });
});
