import { InferSelectModel } from "drizzle-orm";
import { projects } from "@/db/schema";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Project = InferSelectModel<typeof projects>;

type Props = {
  projects: Project[];
};

const ProjectList = (props: Props) => {
  return (
    <div>
        
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 m-5 p-4">
        {props.projects.map((project: Project) => (
          <li key={project.id}>
            <Card className="max-w-[350] flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <Link href={`/projects/${project.id}`}>Edit</Link>
                <Button>View Project</Button>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProjectList;
