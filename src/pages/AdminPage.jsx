import CategoryForm from "components/templates/CategoryForm";
import CategoryList from "components/templates/CategoryList";

function AdminPage() {
  return (
    <div className="py-5">
      <CategoryList/>
      <CategoryForm />
    </div>
  );
}

export default AdminPage;
