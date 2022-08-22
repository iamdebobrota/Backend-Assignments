import { useRef } from "react";
import useNumberList from "../hooks/useNumberList"

type List2Props = {
  initialValues: number[];
  label: string;

  // TODO
};
const List2 = (props: List2Props) => {

  const { list, appendEnd, popStart, clear, reset } = useNumberList(props.initialValues);
  // const [value, setValue] = useState<number>();
  const val = useRef<any>();

  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{props.label}</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">{list}</div>

      <input data-testid="list2-input" ref={val} />
      <button data-testid="list2-btn-append-end" onClick={() => appendEnd(val.current.value)}>
        {/* Button to append new number to the end of the list */}Append End
      </button>
      <button data-testid="list2-btn-pop-start" onClick={() => popStart()}>
        {/* Button to  pop first element of the list */}Pop Start
      </button>
      <button data-testid="list2-btn-clear" onClick={() => clear()}>
        {/* Button to  clear the list */}Clear
      </button>
      <button data-testid="list2-btn-reset" onClick={() => reset()}>
        {/* Button to  reset the list to initialValue */}Reset
      </button>
    </div>
  );
};

export default List2;
