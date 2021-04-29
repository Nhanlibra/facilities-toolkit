const { Router } = require("express");

const router = new Router();

router.get("/test", (req, res) => res.json({ message: "Hello world" }));

module.exports = router;
