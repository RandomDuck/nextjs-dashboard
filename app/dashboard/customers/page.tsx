import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import Pagination from '@/app/ui/invoices/pagination';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {

  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);
  return <div>
      <CustomersTable customers={customers}/>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={1} />
      </div>
    </div>
}