import logo from "./logo.svg";
import "./App.css";
import { colorContext } from "../Context";
import { useContext } from "react";

//------------------------------------------------------------------------------------------

//CREATING AND PROVIDING

// Steps to build and use Context
//step-1 Build or create the context (Context.js)
//step-2 Provide the context
//step-3 Consume the context

//The color-context provides a PROVIDER and a CONSUMER provider

//The provider is the one who does all the Wrapping game by allowing children components to access its featurea and states

//Once you give the provider you need to tell the values that it is going to have access to
// or heinsight the stores it is going to have access to.

// Inthe Below Example we can see the value can be Literally Anything

// function App() {
//   return (
//     <colorContext.Provider value="red">
//       <div className="App"></div>;
//     </colorContext.Provider>
//   );
// }

//But generally what we will do is pass an object with alott of values inside it such that
//they can then be used anywhere to be manipulated and etc.

//------------------------------------------------------------------------------------------

//CONSUMIG

//so bascially what happens is you provide the value and functions and then when you change the value
//according to function or call it a state the whole thing will be rerendered again.

// in the child function all you need to do is use the usecontext hook
//This is how you can consume the value of the context state

// function Child() {
//   //Now there can be many contexts that we use example a data context,user context etc...
//   //thats why we specify the thing in usecontext(context_to_use)

//   const context = useContext(colorContext);
//   //This will print red
//   console.log(context);

//   return <div>"hello world"</div>;
// }

// function App() {
//   return (
//     <colorContext.Provider value="red">
//       <Child />;
//     </colorContext.Provider>
//   );
// }

// export default App;

//------------------------------------------------------------------------------------------

//CONSUMING IN AN OLD WAY
//the concept is to wrap it between <context.consumer> tages and then use a function that will
//automatically pass the value of the context and then can eb used in any JSX element
//by returning the JSX

function Child() {
  //The value comes from the context itself that it is using
  return (
    <colorContext.Consumer>
      {(value) => <div>{value}</div>}
    </colorContext.Consumer>
  );
}

function App() {
  return (
    <colorContext.Provider value="red">
      <Child />;
    </colorContext.Provider>
  );
}

export default App;

//------------------------------------------------------------------------------------------
//See the shopping car example project built here
//
