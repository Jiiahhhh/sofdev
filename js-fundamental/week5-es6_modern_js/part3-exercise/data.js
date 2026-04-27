const TaskManager = {
  tasks: [],
  nextId: 1,
  add(text) {
    this.tasks.push({ id: this.nextId++, text, done: false });
  },
  remove(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },
  getAll() {
    return this.tasks;
  },
};

export default TaskManager;
