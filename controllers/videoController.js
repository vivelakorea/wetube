import routes from "../routes";

export const home = (req, res) => {
  res.render("Home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search.pug", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload.pug", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail.pug", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo.pug", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo.pug", { pageTitle: "Delete Video" });
