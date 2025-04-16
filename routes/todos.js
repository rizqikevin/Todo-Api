const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const auth = require("../middleware/auth");

router.get("/", auth, async (request, respon) => {
  const todos = await Todo.find();
  respon.json(todos);
});

router.post("/", auth, async (request, respon) => {
  const newTodo = new Todo({ title: request.body.title,  user: request.user.id });
  const savedTodo = await newTodo.save();
  respon.json(savedTodo);
}); 

router.put("/:id", auth, async (request, respon) => {
  const updated = await Todo.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true }
  );
  respon.json(updated);
});

router.delete("/:id", auth, async (request, respon) => {
  await Todo.findByIdAndDelete(request.params.id);
  respon.json({ message: "Deleted" });
});

module.exports = router;

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Ambil semua todo milik user
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Berhasil mengambil data todo
 */

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Tambah todo baru
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: Belajar Swagger
 *     responses:
 *       201:
 *         description: Todo berhasil ditambahkan
 */

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update todo berdasarkan ID
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID todo yang ingin diupdate
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Belajar Express
 *               completed:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Todo berhasil diupdate
 */

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Hapus todo berdasarkan ID
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID todo yang ingin dihapus
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Todo berhasil dihapus
 */

