import BelliedTo from "@/Components/dashboard/SalePageComponenets/BelliedTo";
import Customer from "@/Components/dashboard/SalePageComponenets/Customer";
import SaleProduct from "@/Components/dashboard/SalePageComponenets/SaleProduct";
import DashboardLayout from "@/Layouts/DashboardLayout";

const SalePage = () => {

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
      <BelliedTo MyClassName={"lg:w-5/12 md:w-6/12 w-12/12"}/> 
      <SaleProduct MyClassName={"lg:w-4/12 md:w-5/12 w-12/12"}/>
      <Customer MyClassName={"lg:w-3/12 md:w-11/12"}/>
    </div>
  )
}
SalePage.layout = (page) => <DashboardLayout children={page} pageName={"Sale Page"}/>;
export default SalePage;