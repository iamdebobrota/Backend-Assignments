import { useState } from "react";
import useNumberList from "../hooks/useNumberList"

type List1Props = {
  label: string;
  initialValues: number[];
  // TODO
};
const List1 = (props: List1Props) => {
  // let initialValues= props.initialValues

  let {label, initialValues} = props;

  const { list, appendStart, popEnd, clear, reset } = useNumberList(initialValues);
  const [value, setValue] = useState<any>();

//   console.log("A",initialValues.length)
// console.log("B",list.length);


  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{props.label}</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element">{list}</div>



      <input data-testid="list1-input" onChange={(e) => setValue(e.target.value)} />
      <button data-testid="list1-btn-append-start" onClick={() => appendStart(value)}>
        {/* Append to start of list btn */}Append Start
      </button>
      <button data-testid="list1-btn-pop-end" onClick={() => popEnd()}>
        {/* po last element btn */}pop end
      </button>
      <button data-testid="list1-btn-clear" onClick={() => { clear() }}>
        {/* clear list and set empty button */}clear
      </button>
      <button data-testid="list1-btn-reset" onClick={() => { reset() }}>
        {/* Reset list to default value btn */}Reset
      </button>
    </div>
  );
};

export default List1;
