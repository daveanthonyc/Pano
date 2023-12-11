import Project from "./Project";
import User from "./User";

type Issue = {
    title: string,
    description?: string,
    state: string,
    priorityLevel?: string,
    startDate?: string,
    dueDate?: string,

    users: User,
    project: Project[],
} 

export default Issue;
