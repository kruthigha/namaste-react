import { sum } from "../components/sum";

test("This function should return sum of two no.s",()=>{
const res = sum(3,6);
// Assertion
expect(res).toBe(9);
// Its good to have test cases with assertion, But it will not fail if we pass empty test cases 
})