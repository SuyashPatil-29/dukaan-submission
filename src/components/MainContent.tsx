
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import TableFilters from "./TableSearch";
import { MainTable } from "./Table";
import { PaginationDemo } from "./PaginationComponent";
import { Card } from "./ui/card";

type Props = {};

const MainContent = (props: Props) => {
  return (
    <div className="absolute md:top-20 md:right-[42px] top-16 right-0 md:w-[calc(100vw-380px)] w-full">
      <div className="md:p-10 pb-0">
        <div className=" flex items-center justify-between">
          <h1 className=" text-4xl">Overview</h1>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Last Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Last Month</SelectItem>
              <SelectItem value="dark">November</SelectItem>
              <SelectItem value="system">October</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-6 items-center md:justify-between justify-evenly md:ml-3 md:my-6">
            <Card className="md:py-6 md:pl-3  flex flex-col items-start gap-6">
            <h1>Online Orders</h1>
            <h1 className=" md:text-5xl font-medium">231</h1>
            </Card>
            <Card className="md:py-6 md:pl-3  flex flex-col items-start gap-6 md:pr-[200px]">
            <h1>Amount Received</h1>
            <h1 className=" md:text-5xl font-medium">₹23,92,312.19</h1>
            </Card>
        </div>

        <div className=" mb-6">
            <h1 className=" text-xl font-medium">Transations | This Month</h1>
        </div>

        <Card>
        <TableFilters />
        <MainTable />
        </Card>
        <PaginationDemo />
      </div>
    </div>
  );
};

export default MainContent;
