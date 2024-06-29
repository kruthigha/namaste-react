// 
// <div id="parent">
//   <div id="child">
//    <h1>I'm h1 tag</h1>
// </div>
// </div>
// ReactElement(obj) => HTML(Browser Understands)

const parent = React.createElement("div",{id:"parent"},
[React.createElement("h1",{id:"heading"},"I'm h1 tag"),React.createElement("h2",{className:"header"},"I'm h2 tag")],
[React.createElement("h1",{id:"heading"},"I'm h1 tag"),React.createElement("h2",{className:"header"},"I'm h2 tag")]);







// const heading = React.createElement("h1",{id:"heading",className:"header"},"Hello World from ReactJS!");
 console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);