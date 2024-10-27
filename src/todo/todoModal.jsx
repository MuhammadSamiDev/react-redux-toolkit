import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { todoSchema } from "@/schema";
import {
  useAddTodoMutation,
  useEditTodoMutation,
  useGetTodoByIdQuery,
} from "@/services/todo";
import { ErrorMessage, Form, Formik } from "formik";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const TodoModal = ({ children, id }) => {
  const { data, refetch, isLoading } = useGetTodoByIdQuery(id, {
    skip: !id,
  });
  const [open, setOpen] = useState(false);
  const [addTodo] = useAddTodoMutation();
  const [editTodo] = useEditTodoMutation(id);
  const [initialValue, setInitialValue] = useState({
    todo: "",
  });
  useEffect(() => {
    if (open && id) {
      refetch();
    }
  }, [open, id, refetch]);
  const handleSubmit = async (values) => {
    setOpen(false);
    values.id = `${id ? id : Math.floor(Math.random() * 1000)}`;
    if (id) {
      await editTodo({ id: id, data: values });
    } else {
      await addTodo(values);
      setInitialValue((prevVal) => ({
        ...prevVal,
        todo: "",
      }));
    }
  };
  useEffect(() => {
    if (data) {
      console.log(data);

      setInitialValue((prevVal) => ({
        ...prevVal,
        todo: data?.todo,
      }));
    }
  }, [data]);
  const handleChange = (e, setFieldValue) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{id ? "Edit Todo" : "Add Todo"}</DialogTitle>
        </DialogHeader>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Formik
            initialValues={initialValue}
            onSubmit={handleSubmit}
            validationSchema={todoSchema}
            enableReinitialize
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className="grid flex-1 gap-2">
                  <Textarea
                    id="todo"
                    value={values.todo}
                    name="todo"
                    type="text"
                    placeholder="Enter any thing"
                    onChange={(e) => handleChange(e, setFieldValue)}
                  />
                  <ErrorMessage
                    name="todo"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
                <DialogFooter>
                  <Button type="submit" className="mt-2 ml-auto">
                    Save
                  </Button>
                </DialogFooter>
              </Form>
            )}
          </Formik>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TodoModal;
