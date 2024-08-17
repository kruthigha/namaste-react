import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Contact from "../components/Contact";

describe("contact us page test cases",()=>{
test("Contact component Loaded",()=>{
    render(<Contact/>)
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
})
test("Contact component Loaded",()=>{
    render(<Contact/>)
    const name = screen.getByPlaceholderText("name");

    expect(name).toBeInTheDocument();
})
it("Contact component Loaded",()=>{
    render(<Contact/>)
    const Submit = screen.getByText("Submit");

    expect(Submit).toBeInTheDocument();
});
describe("Checking fields no. of occurences",()=>{
it("Contact component Loaded",()=>{
    render(<Contact/>)
    const Heading = screen.getAllByRole("heading");
    console.log(Heading);
    console.log(Heading.length);

    expect(Heading.length).toBe(2);
})
test("Contact component Loaded",()=>{
    render(<Contact/>)
    const input = screen.getAllByRole("textbox");
    console.log(input);
    console.log(input.length);

    expect(input.length).toBe(2);
})
})
})
