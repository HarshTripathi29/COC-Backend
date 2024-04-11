import mongoose, { mongo } from 'mongoose';

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Types.Schema.ObjectId,
    ref: User,
  },
  subTodos: [
    {
      type: mongoose.Types.Schema.ObjectId,
      ref: subTodo,
    },
  ],
});

export const todo = mongoose.model('Todo', todoSchema);
