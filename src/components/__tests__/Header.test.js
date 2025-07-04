// we have to do some tests on header component 
import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom" // toBeInTheDocument
import { BrowserRouter } from "react-router-dom";

test("Should render header with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button", { name: "LogIn" });
    expect(loginButton).toBeInTheDocument();

});

test("should show logout button on click", () => {
    //first find login button
    const loginButton = screen.getByRole("button", { name: "LogIn" });
    fireEvent.click(loginButton)
    //noqw find logoutButton
    const logoutButton = screen.getByRole("button", { name: "LogOut" });

    expect(logoutButton).toBeInTheDocument();
})