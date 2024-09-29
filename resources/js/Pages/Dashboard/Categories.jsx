import CategoriesTable from "@/Components/dashboard/CategoriesTable";
import DashboardLayout from "@/Layouts/DashboardLayout";


const Categories = ({categories}) => {
    console.log(categories);
  return (
    <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                <div class="mt-7 overflow-x-auto">
                    <table class="w-full whitespace-nowrap">
                        <tbody>
                            <CategoriesTable/>
                        </tbody>
                    </table>
                </div>
            </div>
  )
}

Categories.layout = page => <DashboardLayout children={page} pageName={"Category"}/>
export default Categories;