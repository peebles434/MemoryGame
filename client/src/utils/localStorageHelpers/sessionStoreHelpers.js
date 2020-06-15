export const getMode = () => {
  const mode = localStorage.getItem("mode");
  return mode ? JSON.parse(mode) : false;
};

export const saveMode = (mode) => {
  localStorage.setItem("mode", JSON.stringify(mode));
};
