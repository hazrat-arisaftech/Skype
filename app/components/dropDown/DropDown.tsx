"use client";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DropDown = (props: { items: string[]; head: string; label?: string }) => {
  console.log(props.items);
  return (
    <>
      <Select>
        <SelectTrigger className="w-[150px] rounded-xxl mt-2 bg-[#2B2C33] text-white border-none h-8">
          <SelectValue placeholder={props.head} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {/* <SelectLabel>{label}</SelectLabel> */}
            {props.items.map((it) => (
              <SelectItem value="apple">{it}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default DropDown;
