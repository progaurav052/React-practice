import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"
test('Should Load Contact-Us Component', () => {
    render(<Contact />); // will render inside jsdom
    const heading = screen.getByRole("heading");//find something in the fake,jsdom
    //Asertion => check if its still there type
    expect(heading).toBeInTheDocument(); // @testing-library/jest-dom 

})

test("should have a submit button",()=>{
    render(<Contact/>);
    const submitButton=screen.getByText("submit");//get from jsdom
    expect(submitButton).toBeInTheDocument();

})

test("should have 2 input boxes",()=>{
    render(<Contact/>);
    const inputBoxes=screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
})
