interface Task {
  _type: "Task";
  title: string;
  created: Date;
  description?: string;
  complete: boolean;
  dueDate?: Date;
}
