import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../components/Body";
import { MockApi } from "../utils/mockAPI";
import { BrowserRouter } from "react-router-dom";
import { act } from "@testing-library/react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockApi); // Adjust to match your expected data structure
    },
  });
});

test("it should search rescards before and after click of a button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("res-link");
  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button",{name:"Search"});
  const ipBox = screen.getByPlaceholderText("Search your cravings here...")
  fireEvent.change(ipBox,{target:{value :"Pizza"}});
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.getAllByTestId("res-link");
  expect(cardsAfterSearch.length).toBe(1);

});

test("Top Rated res", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
  
    const topRatedRes = screen.getByRole("button", { name: "Top Rated Restaurant" });
    let cards = screen.getAllByTestId("res-link");
    expect(cards.length).toBe(8); // Check the number of restaurant cards before clicking top rated button
  
    // Simulate clicking the "Top Rated Restaurant" button
    fireEvent.click(topRatedRes);
  
     const card = screen.getAllByTestId("res-link");
     console.log(card)
    expect(card.length).toBe(1);
  });
