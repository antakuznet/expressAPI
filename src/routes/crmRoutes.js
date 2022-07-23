const routes = (app) => {
  app
    .route("/contact")
    .get(
      (req, res, next) => {
        // middleware
        console.log(`Request came from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      },
      (req, res, next) => {
        res.send("Get request successful");
      }
    )
    .post((req, res) => {
      res.send("Post request successful");
    });

  app
    .route("/contact/:contactID")
    .put((req, res) => {
      res.send("Put request successful");
    })
    .delete((req, res) => {
      res.send("Delete request successful");
    });
};

export default routes;
