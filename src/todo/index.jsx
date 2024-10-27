import TodoModal from "./todoModal";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetTodoListQuery } from "@/services/todo";
import { EditIcon, Trash } from "lucide-react";
import DeleteModal from "./deleteModal";

const Todo = () => {
  const { data} = useGetTodoListQuery();
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[700px] min-h-96 p-4">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Todo List</CardTitle>
            <TodoModal>Add Todo</TodoModal>
          </div>
        </CardHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Todo</TableHead>
              <TableHead className="w-[100px] text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item) => (
              <TableRow key={item?.id}>
                <TableCell className="font-medium">{item?.todo}</TableCell>
                <TableCell className="text-center flex items-center gap-2">
                  <TodoModal id={item?.id}>
                    <EditIcon />
                  </TodoModal>
                  <DeleteModal id={item?.id}>
                    <Trash />
                  </DeleteModal>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Todo;
