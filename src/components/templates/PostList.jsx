import { useQuery } from "@tanstack/react-query";
import { getPosts } from "services/user";
import { sp } from "utils/replaceNumber";

function PostList() {
  const { data, isLoading } = useQuery({
    queryKey: "posts",
    queryFn: getPosts,
  });

  return (
    <div className="mt-10">
      <p className="font-bold text-lg">آگهی های من</p>
      <hr className="w-[120px] border-2 mt-2 mb-6 border-red-700" />
      {isLoading ? (
        <p>Loading Posts ... </p>
      ) : (
        data?.data.posts.map((post) => (
          <div
            key={post._id}
            className="flex justify-between items-center border rounded-md p-2 my-2"
          >
            <div className="flex gap-2">
              <img
                src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
                alt={`pic_${post._id}`}
                className="w-20"
              />
              <div className=" flex flex-col gap-2">
                <p>{post.options.title}</p>
                <p className="text-gray-500 text-xs">{post.options.content}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
              <p className="text-gray-500 text-xs">{sp(post.amount)} تومان</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;
