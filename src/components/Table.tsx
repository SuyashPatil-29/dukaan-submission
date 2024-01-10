import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ArrowBigDown, Triangle } from "lucide-react"
  
  const invoices = [
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    {
      invoice: "#281209",
      paymentStatus: "7 July, 2023",
      totalAmount: "₹1278.23",
      paymentMethod: "₹22",
    },
    
  ]
  
  export function MainTable() {
    return (
      <Table className="md:p-10 md:text-base">
        <TableHeader>
          <TableRow className=" bg-[rgb(205,205,205)] text-gray-800 hover:bg-[rgb(205,205,205)]">
            <TableHead>Order ID</TableHead>
            <TableHead>Order Date <span><Triangle className="rotate-180 inline h-3 w-3" fill=" gray"/></span></TableHead>
            <TableHead>Order Amount</TableHead>
            <TableHead className="text-right">Transation Fee</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium text-blue-500">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  