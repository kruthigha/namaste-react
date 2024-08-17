import React from 'react';
import { render, screen } from '@testing-library/react';
import RestaurantCards, { withLabel } from '../components/RestaurantCards';
import "@testing-library/jest-dom";
import Bangalore from '../utils/mockdata';




describe("ResCard test case",()=>{
    it("MockData check",()=>{
     render(<RestaurantCards resData={Bangalore[0]}/>)

     const name = screen.getByText("KFC");

     console.log(name);
     
     console.log("Arrives Fast",Bangalore[0].info.sla.deliveryTime)
     expect(name).toBeInTheDocument();
    })
    it("MockData with label",()=>{
        const ResWithLabel = withLabel(RestaurantCards);
        render(<ResWithLabel resData={Bangalore[0]}/>)
        const name = screen.getByText("Arrives Fast");
        console.log("Arrives Fast",Bangalore[0].info.sla.deliveryTime)
        expect(name).toBeInTheDocument();
    })
})