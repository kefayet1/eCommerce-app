import { usePage } from "@inertiajs/react";
import TableItem from "../TableItem";

const ProductTable = () => {
    const { props } = usePage();
    console.log(props);
    return (
        <>
            {props.products.data.map((data) => (
                <TableItem key={data.id} data={data} />
            ))}
        </>
    );
};

export default ProductTable;
