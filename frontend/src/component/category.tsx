function Category() {
  return (
    <div className="px-5 mb-20">
      <div className="grid grid-cols-4 gap-5 p-5 py-14">
        <div className="flex flex-col flex-shrink-0 items-center justify-center">
          <img src="./src/assets/category1.svg" />
          <div className="flex items-center justify-center h-5">
            <p className="text-center font-sans text-black text-xxs font-medium leading-20">
              Men's
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center justify-center">
          <img src="./src/assets/category2.svg" />
          <div className="flex items-center justify-center h-5">
            <p className="text-center font-sans text-black text-xxs font-medium leading-20">
              Women's
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center justify-center">
          <img src="./src/assets/category3.svg" />
          <div className="flex items-center justify-center h-5">
            <p className="text-center font-sans text-black text-xxs font-medium leading-20">
              Cosmetics
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center justify-center">
          <img src="./src/assets/category4.svg" />
          <div className="flex items-center justify-center h-5">
            <p className="text-center font-sans text-black text-xxs font-medium leading-20">
              Baby
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center justify-center">
          <img src="./src/assets/category5.svg" />
          <div className="flex items-center justify-center h-5">
            <p className="text-center font-sans text-black text-xxs font-medium leading-20">
              Marijuana
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center justify-center">
          <img src="./src/assets/category6.svg" />
          <div className="flex items-center justify-center h-5">
            <p className="text-center font-sans text-black text-xxs font-medium leading-20">
              Kitchen
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center justify-center">
          <img src="./src/assets/category7.svg" />
          <div className="flex items-center justify-center h-5">
            <p className="text-center font-sans text-black text-xxs font-medium leading-20">
              Gadget
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-shrink-0 items-center justify-center">
          <img src="./src/assets/category8.svg" />
          <div className="flex items-center justify-center h-5">
            <p className="text-center font-sans text-black text-xxs font-medium leading-20">
              Electronic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
