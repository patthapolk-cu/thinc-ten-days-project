import { SetStateAction, useState } from 'react';

function SortAndFilterButtons(props: {
	products: any;
	setProduct(products: any): void;
}) {
	const [showSort, setShowSort] = useState<boolean>(false);
	const [showFilter, setShowFilter] = useState<boolean>(false);
	const [minPrice, setMinPrice] = useState<string>('');
	const [maxPrice, setMaxPrice] = useState<string>('');
	const [showSortStart, setShowSortStart] = useState<boolean>(false);
	const [showFilterStart, setShowFilterStart] = useState<boolean>(false);
	const [activeButton, setActiveButton] = useState<string>('A-Z');

	const handleButtonClick = (button: SetStateAction<string>) => {
		setActiveButton(button);
	};

	const handleSortButtonClick = () => {
		setShowSort(!showSort);
		setShowFilter(false);
		setShowSortStart(true);
	};
	const handleFilterButtonClick = () => {
		setShowSort(false);
		setShowFilter(!showFilter);
		setShowFilterStart(true);
	};

	const handleMinPriceChange = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setMinPrice(event.target.value);
		filterByPrice(Number(minPrice), Number(maxPrice));
	};

	const handleMaxPriceChange = (event: {
		target: { value: SetStateAction<string> };
	}) => {
		setMaxPrice(event.target.value);
		filterByPrice(Number(minPrice), Number(maxPrice));
	};
	const ascendingPriceSort = () => {
		const sortedData = [...props.products].sort((a: any, b: any) => {
			return a.productPrice > b.productPrice ? 1 : -1;
		});
		props.setProduct(sortedData);
	};
	const descendingPriceSort = () => {
		const sortedData = [...props.products].sort((a: any, b: any) => {
			return a.productPrice < b.productPrice ? 1 : -1;
		});
		props.setProduct(sortedData);
	};
	const nameSort = () => {
		const sortedData = [...props.products].sort((a: any, b: any) => {
			return a.productName < b.productName ? 1 : -1;
		});
		props.setProduct(sortedData);
	};
	const filterByPrice = (low: number, high: number) => {
		const data = [...props.products];
		data.forEach((e) => {
			if (e.productPrice >= low && e.productPrice <= high) e.isShowing = true;
			else e.isShowing = false;
		});
		props.setProduct(data);
	};
	return (
		<div className="flex flex-row gap-3 bg-white">
			<button
				onClick={handleSortButtonClick}
				className="basis-12 h-25 p-3 bg-sortfilter-box-color rounded-md"
			>
				<img src="./src/assets/sort.svg" alt="Sort" />
			</button>
			<button
				onClick={handleFilterButtonClick}
				className="basis-12 h-25 p-3 bg-sortfilter-box-color rounded-md"
			>
				<img src="./src/assets/filter.svg" alt="Filter" />
			</button>
			{showSort && (
				<>
					<div className="animate-slide-in gap-5 flex h-full fixed bottom-0 left-0 border-0 shadow-custom z-50 bg-white flex-col w-48 p-5 items-start rounded-r-20">
						<button onClick={handleSortButtonClick}>
							<img src="./src/ass	ets/return.svg" />
						</button>
						<p className="text-24 font-normal">Sort</p>
						<div className="flex-box w-full">
							<div
								className={`mb-5 w-full h-10 p-2 px-3 justify-center items-center text-center gap-2 flex-shrink-0 flex border border-1/2 ${
									activeButton === 'A-Z' ? 'bg-sort-box-color' : 'bg-white'
								} ${
									activeButton === 'A-Z'
										? 'border-sort-box-color'
										: 'border-sort-box-border-color'
								}`}
								onClick={() => {
									handleButtonClick('A-Z');
									nameSort();
								}}
							>
								<img
									src="./src/assets/sortboxsymbol.svg"
									className={`${
										activeButton === 'A-Z' ? 'invert-0' : 'invert'
									}`}
								/>
								<p
									className={`m-0 text-16 font-normal ${
										activeButton === 'A-Z' ? 'text-white' : 'text-black'
									}`}
								>
									A-Z
								</p>
							</div>

							<div
								className={`mb-5 w-full h-10 p-2 px-3 justify-center items-center text-center gap-2 flex-shrink-0 flex border border-1/2 ${
									activeButton === 'PriceUp' ? 'bg-sort-box-color' : 'bg-white'
								} ${
									activeButton === 'PriceUp'
										? 'border-sort-box-color'
										: 'border-sort-box-border-color'
								}`}
								onClick={() => {
									handleButtonClick('PriceUp');
									ascendingPriceSort();
								}}
							>
								<img
									src="./src/assets/priceupsymbol.svg"
									className={`${
										activeButton === 'PriceUp' ? 'invert' : 'invert-0'
									}`}
								/>
								<p
									className={`m-0 text-16 font-normal ${
										activeButton === 'PriceUp' ? 'text-white' : 'text-black'
									}`}
								>
									Price Up
								</p>
							</div>

							<div
								className={`mb-5 w-full h-10 p-2 px-3 justify-center items-center text-center gap-2 flex-shrink-0 flex border border-1/2 ${
									activeButton === 'PriceDown'
										? 'bg-sort-box-color'
										: 'bg-white'
								} ${
									activeButton === 'PriceDown'
										? 'border-sort-box-color'
										: 'border-sort-box-border-color'
								}`}
								onClick={() => {
									handleButtonClick('PriceDown');
									descendingPriceSort();
								}}
							>
								<img
									src="./src/assets/pricedownsymbol.svg"
									className={`${
										activeButton === 'PriceDown' ? 'invert' : 'invert-0'
									}`}
								/>
								<p
									className={`m-0 text-16 font-normal ${
										activeButton === 'PriceDown' ? 'text-white' : 'text-black'
									}`}
								>
									Price Down
								</p>
							</div>
						</div>
					</div>
					<button
						onClick={handleSortButtonClick}
						className="h-full fixed bottom-0 left-48 border-0 z-50 flex-col w-full p-5 items-start rounded-r-20"
					></button>
				</>
			)}
			{!showSort && showSortStart && (
				<div className="animate-slide-out gap-5 flex h-full fixed bottom-0 left-0 border-0 shadow-custom z-50 bg-white flex-col w-48 p-5 items-start rounded-r-20 translate-y-full">
					<button onClick={handleSortButtonClick}>
						<img src="./src/assets/return.svg" />
					</button>
					<p className="text-24 font-normal">Sort</p>
					<div className="flex-box w-full">
						<div
							className={`mb-5 w-full h-10 p-2 px-3 justify-center items-center text-center gap-2 flex-shrink-0 flex border border-1/2 ${
								activeButton === 'A-Z' ? 'bg-sort-box-color' : 'bg-white'
							} ${
								activeButton === 'A-Z'
									? 'border-sort-box-color'
									: 'border-sort-box-border-color'
							}`}
							onClick={() => handleButtonClick('A-Z')}
						>
							<img
								src="./src/assets/sortboxsymbol.svg"
								className={`${activeButton === 'A-Z' ? 'invert-0' : 'invert'}`}
							/>
							<p
								className={`m-0 text-16 font-normal ${
									activeButton === 'A-Z' ? 'text-white' : 'text-black'
								}`}
							>
								A-Z
							</p>
						</div>

						<div
							className={`mb-5 w-full h-10 p-2 px-3 justify-center items-center text-center gap-2 flex-shrink-0 flex border border-1/2 ${
								activeButton === 'PriceUp' ? 'bg-sort-box-color' : 'bg-white'
							} ${
								activeButton === 'PriceUp'
									? 'border-sort-box-color'
									: 'border-sort-box-border-color'
							}`}
							onClick={() => handleButtonClick('PriceUp')}
						>
							<img
								src="./src/assets/priceupsymbol.svg"
								className={`${
									activeButton === 'PriceUp' ? 'invert' : 'invert-0'
								}`}
							/>
							<p
								className={`m-0 text-16 font-normal ${
									activeButton === 'PriceUp' ? 'text-white' : 'text-black'
								}`}
							>
								Price Up
							</p>
						</div>

						<div
							className={`mb-5 w-full h-10 p-2 px-3 justify-center items-center text-center gap-2 flex-shrink-0 flex border border-1/2 ${
								activeButton === 'PriceDown' ? 'bg-sort-box-color' : 'bg-white'
							} ${
								activeButton === 'PriceDown'
									? 'border-sort-box-color'
									: 'border-sort-box-border-color'
							}`}
							onClick={() => handleButtonClick('PriceDown')}
						>
							<img
								src="./src/assets/pricedownsymbol.svg"
								className={`${
									activeButton === 'PriceDown' ? 'invert' : 'invert-0'
								}`}
							/>
							<p
								className={`m-0 text-16 font-normal ${
									activeButton === 'PriceDown' ? 'text-white' : 'text-black'
								}`}
							>
								Price Down
							</p>
						</div>
					</div>
				</div>
			)}
			{showFilter && (
				<>
					<div className="animate-slide-in gap-5 flex h-full fixed bottom-0 left-0 border-0 shadow-custom z-50 bg-white flex-col w-48 p-5 items-start rounded-r-20">
						<button onClick={handleFilterButtonClick}>
							<img src="./src/assets/return.svg" />
						</button>
						<p className="text-24 font-normal">Filter</p>
						<div>
							<p className="text-12 font-normal text-filter-text-color">From</p>
							<input
								type="text"
								placeholder="$$$"
								value={minPrice}
								onChange={handleMinPriceChange}
								className="w-full h-10 p-2 px-3 justify-center items-center text-center gap-2 flex-shrink-0 flex border border-1/2"
							/>
						</div>
						<div>
							<p className="text-12 font-normal  text-filter-text-color">To</p>
							<input
								type="text"
								placeholder="$$$"
								value={maxPrice}
								onChange={handleMaxPriceChange}
								className="w-full h-10 p-2 px-3 justify-center items-center text-center gap-2 flex-shrink-0 flex border border-1/2"
							/>
						</div>
					</div>
					<button
						onClick={handleFilterButtonClick}
						className="h-full fixed bottom-0 left-48 border-0 z-50 flex-col w-full p-5 items-start rounded-r-20"
					></button>
				</>
			)}
			{!showFilter && showFilterStart && (
				<div className="animate-slide-out gap-5 flex h-full fixed bottom-0 left-0 border-0 shadow-custom z-50 bg-white flex-col w-48 p-5 items-start rounded-r-20 translate-y-full">
					<button onClick={handleFilterButtonClick}>
						<img src="./src/assets/return.svg" />
					</button>
					<p className="text-24 font-normal">Filter</p>
					<div>
						<p className="text-12 font-normal text-filter-text-color">From</p>
						<input
							type="text"
							placeholder="$$$"
							value={minPrice}
							onChange={handleMinPriceChange}
							className="w-full h-10 p-2 px-3 justify-center items-center text-center gap-2 flex-shrink-0 flex border border-1/2"
						/>
					</div>
					<div>
						<p className="text-12 font-normal  text-filter-text-color">To</p>
						<input
							type="text"
							placeholder="$$$"
							value={maxPrice}
							onChange={handleMaxPriceChange}
							className="w-full h-10 p-2 px-3 justify-center items-center text-center gap-2 flex-shrink-0 flex border border-1/2"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
export default SortAndFilterButtons;
