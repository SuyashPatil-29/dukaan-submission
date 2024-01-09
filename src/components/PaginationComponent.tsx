import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo() {
  return (
    <Pagination className=" lg:flex hidden p-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-base" href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="text-base bg-blue-500 text-white" href="#" isActive>
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-base" href="#">11</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-base" href="#">12</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-base" href="#">13</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-base" href="#">14</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-base" href="#">15</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-base" href="#">16</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-base" href="#">17</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-base" href="#">18</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
