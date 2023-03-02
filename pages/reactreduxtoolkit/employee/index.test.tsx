import React from "react";
import { render as rtlRender, screen, fireEvent } from "@testing-library/react";
import { within } from "@testing-library/dom";
import "@testing-library/jest-dom";
import Employee from ".";
import { Provider } from "react-redux";
import store from "@/component/rtk-demo/app/store";
import userEvent from "@testing-library/user-event";
import { configureStore } from "@reduxjs/toolkit";

const render = (component: any) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe("Index Page Employee Title", () => {
  it("Title should render properly", () => {
    render(<Employee></Employee>);
    // Check the Employee Title
    const EmployeeTitle = screen.getByRole("heading");
    expect(EmployeeTitle).toHaveTextContent(/Employee Management/);
    expect(EmployeeTitle).toBeInTheDocument();
    expect(EmployeeTitle).not.toHaveTextContent(/Employeee Management/);
  });
});

describe("Check the Add User Button", () => {
  it.only("Title should render properly", () => {
    render(<Employee></Employee>);

    // Add user button - Check the button name.
    const addUserButton = screen.getByRole("button", { name: /add employee/i });
    expect(addUserButton).toBeInTheDocument();

    // Add the user -  Click event
    fireEvent.click(addUserButton);
    const dialog = screen.getByRole("dialog");
    within(dialog).getByRole("button", { name: /add/i });
    expect(screen.getByText(/new user/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/date/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/firstname/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/lastname/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });
});
