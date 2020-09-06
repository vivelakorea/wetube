import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join.pug", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join.pug", { pageTitle: "Join" });
  } else {
    //To Do: Register User
    //To Do: Log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login.pug", { pageTitle: "Login" });
};
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  //To Do: Process Log Out
  res.redirect(routes.home);
};

export const userDetail = (req, res) =>
  res.render("userDetail.pug", { pageTitle: "User Detail" });

export const editProfile = (req, res) =>
  res.render("editProfile.pug", { pageTitle: "Edit Profile" });

export const changePassword = (req, res) =>
  res.render("changePassword.pug", { pageTitle: "Change Password" });
