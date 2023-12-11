import User from "./User";
import Issue from "./Issue";

type Project = {
    projectTitle: string,
    identifier: string,
    description?: string,
    users: User[],
    issues?: Issue[],
} 

export default Project;
