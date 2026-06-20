import { getTaskById } from "@/lib/api/tasks";
import EditTaskForm from "./EditTaskForm";

const EditTaskPage = async ({ params }) => {
  const { id } = await params;
  const task = await getTaskById(id);

  return <EditTaskForm task={task} />;
};

export default EditTaskPage;
