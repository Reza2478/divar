import AddPost from "components/templates/Addpost";
import PostList from "components/templates/PostList";

function DashboardPage() {
  return (
    <div className="py-4">
      <AddPost />
      <PostList />
    </div>
  );
}

export default DashboardPage;
