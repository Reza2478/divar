import { BsTrash3Fill } from "react-icons/bs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategory, deleteCategory } from "services/admin";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

function CategoryList() {
  const { data, isLoading } = useQuery({
    queryKey: "categoreis",
    queryFn: getCategory,
  });

  const queryClient = useQueryClient();

  const deleteItem = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => queryClient.invalidateQueries("categories"),
  });

  useEffect(() => {
    if (deleteItem.status === "success")
      toast.success(deleteItem.data.data.message);
  }, [deleteItem.status]);

  return (
    <div>
      {isLoading ? (
        <p>Loading categories...</p>
      ) : (
        data.data.map((category) => (
          <div
            className="flex justify-between items-center border-2 p-2 mb-2 rounded-md"
            key={category._id}
          >
            <div className="flex gap-2">
              <img src={`${category.icon}.svg`} />
              <p>{category.name}</p>
            </div>

            <div className="flex justify-center items-center gap-2">
              <BsTrash3Fill
                onClick={() => deleteItem.mutate(category._id)}
                className="text-gray-500 cursor-pointer"
              />
              <p>slug: {category.slug}</p>
            </div>
          </div>
        ))
      )}
      <Toaster />
    </div>
  );
}

export default CategoryList;
