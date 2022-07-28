const controller = require("./Controller");
const http = require("http");
const resp = require("./resp");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    if (req.method == "GET") {
      let msg = "Api is running successfully";
      resp.succesfullResponse(res, msg);
      return;
    }
    if (req.method == "POST") {
      controller.getUserData(req).then(function (result) {
        controller.signupUser(result, res);
        return;
      });
    } else {
      resp.methodNotAllowed(res);
      return;
    }
  } else if (req.url == "/login") {
    if (req.method == "POST") {
      controller.getUserData(req).then(function (result) {
        controller.loginUser(result, res, req);
        return;
      });
    } else {
      resp.methodNotAllowed(res);
      return;
    }
  } else if (req.url == "/logout") {
    if (req.method == "POST") {
      controller.logoutUser(req, res);
      return;
    } else {
      resp.methodNotAllowed(res);
      return;
    }
  } else if (req.url == "/createPost") {
    if (req.method == "POST") {
      if (controller.isSession(req, res)) {
        controller.getUserData(req).then(function (result) {
          controller.createPost(result, res);
        });
        return;
      }
    } else {
      resp.methodNotAllowed(res);
      return;
    }
  } else if (req.url == "/editPost") {
    if (req.method == "POST") {
      if (controller.isSession(req, res)) {
        controller.getUserData(req).then(function (result) {
          controller.editPost(result, req, res);
          return;
        });
      }
    } else {
      resp.methodNotAllowed(res);
      return;
    }
  } else if (req.url == "/deletePost") {
    if (req.method == "POST") {
      if (controller.isSession(req, res)) {
        controller.getUserData(req).then(function (result) {
          controller.deletePost(result, req, res);
          return;
        });
      }
    } else {
      resp.methodNotAllowed(res);
      return;
    }
  } else if (req.url == "/getFeed") {
    if (req.method == "GET") {
      controller.getFeed(res);
      return;
    } else {
      resp.methodNotAllowed(res);
      return;
    }
  }
});

server.listen(3000, () => {
  console.log("Server is running on 3000");
});
