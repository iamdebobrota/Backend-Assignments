import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return

  const [list, setList] = useState(initialArray);



  const appendStart = (params: number) => {
    let arr: number[] = [params, ...list];
    setList(arr);
  }

  const appendEnd = (params: number) => {
    let arr: number[] = [...list, params];
    setList(arr);
  }

  const popStart = () => {
    let arr: number[] = [...list];
    arr.shift();
    setList(arr);
  }

  const popEnd = () => {
    let arr: number[] = [...list];
    arr.pop();
    setList(arr);
  }

  const clear = () => {
    let arr: number[] = [];
    setList(arr);
  };

  const reset = () => {
    let arr: number[] = initialArray;
    setList(arr)
  }

  return { list, appendStart, appendEnd, popStart, popEnd, clear, reset }









};

export default useNumberList;
