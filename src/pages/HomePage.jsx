import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "src/services/admin";
import { getAllPosts } from "src/services/user";

function HomePage() {
  const { data: categories, isLoading: categoriesLoading } = useQuery({
    queryKey: "categories",
    queryFn: getCategory,
  });
  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: "allposts",
    queryFn: getAllPosts,
  });

  return (
    <>
      {categoriesLoading || postsLoading ? (
        <p>Loading ...</p>
      ) : (
        <div className="flex justify-between">
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
}

export default HomePage;
