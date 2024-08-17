import { render, screen,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/store/appStore";
import { BrowserRouter } from "react-router-dom";
describe("Header Component test cases", () => {
  test("Login Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button", { name: "Login" });
    console.log(loginBtn);
    expect(loginBtn).toBeInTheDocument();
  });
  test("Logout Button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button", { name: "Login" });
    console.log(loginBtn);
    fireEvent.click(loginBtn)
    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    expect(logoutBtn).toBeInTheDocument();
  });
});
