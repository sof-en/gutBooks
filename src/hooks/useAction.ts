import { useDispatch } from "react-redux";
import { bookActions } from "../app/slices/book.slice";
import { bindActionCreators } from "@reduxjs/toolkit";

const allAction = {
  ...bookActions,
};

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allAction, dispatch);
};
