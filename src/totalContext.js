import { itemContext } from "./ItemContext";

const totalContext = ({ value, children }) => (
  <itemContext.Provider value={value}>{children}</itemContext.Provider>
);

export default totalContext;
