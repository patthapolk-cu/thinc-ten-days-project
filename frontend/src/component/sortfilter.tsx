import { ReactNode } from 'react';
import SortAndFilterButtons from './sortandfilterbuttons';

function SortFilter(props: { items: string; amount: number; products: ReactNode, setProduct(products: ReactNode): void}) {
	return (
		<div className="flex flex-row mb-5 gap-3 bg-white">
			<div className="grow flex-col">
				<p className="text-sm font-normal text-gray-400">{props.items}</p>
				<p className="text-base font-medium">{props.amount} Items</p>
			</div>
			<SortAndFilterButtons products={props.products} setProduct={props.setProduct} />
		</div>
	);
}

export default SortFilter;
