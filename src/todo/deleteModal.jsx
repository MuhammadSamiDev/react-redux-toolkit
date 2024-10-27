import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteTodoMutation } from "@/services/todo";
import { useState } from "react";

const DeleteModal = ({ children, id }) => {
  const [open, setOpen] = useState(false);
  const [deleteTodo] = useDeleteTodoMutation();
  const handleConfirm = async () => {
    await deleteTodo(id);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete</DialogTitle>
          <DialogDescription>
            Are you absolutely sure you want to del this todo?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="destructive" onClick={handleConfirm}>
            {/* {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}{" "} */}
            Yes
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
