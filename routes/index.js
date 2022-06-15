const express = require("express");

const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
    console.log("response======",req.body)
  res.render("login");
});
router.get("/usersearch", (req, res) => {
//   res.render("new", { fName: "Virat Kohli" });
  res.render("usersearch");
});
router.get("/userdetails", (req, res) => {
    // res.render("new", { fName: "Virat Kohli" });
    res.render("userdetails");
  });

router.post("/", (req, res) => {
    console.log("from post ", req.body)
    // res.send(req.body.password);
    res.render("usersearch")
    // res.send("this is login id", req.body.password);

    //   const isValid = true;
//   if (isValid) {
//     users.push({firstName: req.body.firstName});
//     res.redirect(`/users/${users.length-1}`);
//   }else{
//     console.log("Error")
//     res.render("users/new", {firstName: req.body.firstName} )
//   }
//   console.log(req.body.firstName);
//   res.send("hello");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`this is dynamic Id ${req.params.id} added by Users in URL`);
  })
  .put((req, res) => {
    res.send(
      `Update = : = this is dynamic Id ${req.params.id} added by Users in URL`
    );
  })
  .delete((req, res) => {
    res.send(
      `Delete  = : = this is dynamic Id ${req.params.id} added by Users in URL`
    );
  });

const users = [{ name: "virat" }, { name: "Rohit" }];
router.param("id", (req, res, next, id) => {
  // console.log(id)

  req.user = users[id];
  next();
});


function logger(req, res, next) {
//   console.log(req.originalUrl);
  next();
}

module.exports = router;
