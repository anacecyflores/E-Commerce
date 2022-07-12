const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [Product],
  })
    .then((cData) => res.json(cData))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    include: [Product],
    where: {
      id: req.params.id,
    },
  })
    .then((cData) => {
      if (!cData) {
        res.status(404).json({ message: "Tag not found!" });
        return;
      }
      res.json(cData);
    })
    .catch((err) => res.status(500).json(err));
});

router.post("/", (req, res) => {
  // create a new tag
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
