import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function AddBudget() {
  const [emoji, setEmoji] = useState("😊");
  const [openEmoji, setOpenEmoji] = useState(false);
  const [budgetName, setBudgetName] = useState();
  const [budgetAmount, setBudgetAmount] = useState();
  const toggleOpenEmoji = () => {
    setOpenEmoji(!openEmoji);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className=" bg-gray-100 p-10 rounded-lg items-center flex justify-center border-2  cursor-pointer border-dashed hover:shadow-sm">
            <p className=" pr-3 font-bold">+</p>
            <p>Create New budget</p>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {" "}
              <p className=" text-xl font-bold">Create New Budget</p>
            </DialogTitle>

            
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddBudget;
