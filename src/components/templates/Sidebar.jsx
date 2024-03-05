function Sidebar({ categories }) {
  return (
    <div>
      <p className="text-lg font-bold mb-2 ">دسته ها</p>
      <hr className="w-[120px] border mb-6" />
      <ul className="flex flex-col gap-3 text-gray-400">
        {categories.data.map((category) => {
          return (
            <li className="flex gap-2" key={category._id}>
              <img src={`${category.icon}.svg`} alt={`${category.icon}`} />
              <p>{category.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
