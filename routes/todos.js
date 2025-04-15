const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.get("/", async (request, respon) => {
  const todos = await Todo.find();
  respon.json(todos);
});

router.post("/", async (request, respon) => {
  const newTodo = new Todo({ title: request.body.title });
  const savedTodo = await newTodo.save();
  respon.json(savedTodo);
});

router.put("/", async (request, respon) => {
  const updated = await Todo.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true }
  );
  respon.json(updated);
});

router.delete("/", async (request, respon) => {
  await Todo.findByIdAndDelete(request.params.id);
  respon.json({ message: "Deleted" });
});

module.exports = router;
