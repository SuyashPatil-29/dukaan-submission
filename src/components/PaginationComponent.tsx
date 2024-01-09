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
    <Pagination className=" p-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-lg" href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="text-lg bg-blue-500 text-white" href="#" isActive>
            10
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-lg" href="#">11</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-lg" href="#">12</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-lg" href="#">13</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-lg" href="#">14</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-lg" href="#">15</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-lg" href="#">16</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-lg" href="#">17</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className=" text-lg" href="#">18</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
