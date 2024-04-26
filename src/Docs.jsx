import Data from "./Data";

const Docs = () => {
  return (
    <div className="docs">
      <div>
        <h2>Basic Syntax</h2>
        <ul>
          {Data.basic_syntax.map((item, index) => (
            <li key={index}>
              <strong>{item.element}:</strong> {item.syntax}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Extended Syntax</h2>
        <ul>
          {Data.extended_syntax.map((item, index) => (
            <li key={index}>
              <strong>{item.element}:</strong> {item.syntax}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Docs;
