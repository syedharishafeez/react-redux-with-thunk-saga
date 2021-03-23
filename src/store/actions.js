export const AGE_UP = () => {
  // this function can only be return if and only if thunk middleware is applied otherwise react will give following error
  // "Error: Actions must be plain objects. Use custom middleware for async actions."
  return (dispatch) => {
    setTimeout(() => {
      dispatch(AGE_UP_ASYNC());
    }, 1000);
  };
};

export const AGE_UP_ASYNC = () => {
  return { type: "AGE_UP", value: 1 };
};

export const AGE_DOWN = () => {
  return { type: "AGE_DOWN", value: 1 };
};
