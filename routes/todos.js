const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const auth = require("../middleware/auth");

router.get("/", auth, async (request, respon) => {
  const todos = await Todo.find();
  respon.json(todos);
});

router.post("/", auth, async (request, respon) => {
  const newTodo = new Todo({ title: request.body.title });
  const savedTodo = await newTodo.save();
  respon.json(savedTodo);
});

router.put("/", auth, async (request, respon) => {
  const updated = await Todo.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true }
  );
  respon.json(updated);
});

router.delete("/", auth, async (request, respon) => {
  await Todo.findByIdAndDelete(request.params.id);
  respon.json({ message: "Deleted" });
});

module.exports = router;
