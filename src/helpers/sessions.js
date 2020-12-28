import * as LS from "./LSmanager";

export const isUserLogged = () => {
  const checkLogged = JSON.parse(localStorage.getItem("loggedUser"));
  if (checkLogged) {
    if (checkLogged.email === "") {
      LS.Set("loggedUser", { user: "", email: "", admin: "" });
      return { name: "", email: "", admin: false };
    } else {
      return LS.Get("loggedUser");
    }
  } else {
    LS.Set("loggedUser", { user: "", email: "", admin: "" });
    return { name: "", email: "", admin: false };
  }
};
