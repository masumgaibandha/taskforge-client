import { getTaskById } from "@/lib/api/tasks";
import ProposalForm from "./ProposalForm";

const ProposalPage = async ({ params }) => {
  const { id } = await params;
  const task = await getTaskById(id);

  return <ProposalForm task={task} />;
};

export default ProposalPage;
