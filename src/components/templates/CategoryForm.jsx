import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { addCategory } from "services/admin";

function CategoryForm() {
  const queryClient = useQueryClient();

  const initialValues = {
    name: "",
    slug: "",
    icon: "",
  };

  const { mutate } = useMutation({
    mutationFn: addCategory,
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries("categories");
    },
  });

  const formik = useFormik({
    initialValues,
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "اسم دسته بندی را وارد  کنید";
      if (!values.slug) errors.slug = "اسلاگ را وارد کنید";
      if (!values.icon) errors.icon = "آیکون را وارد کنید";
      return errors;
    },

    onSubmit: () => {
      mutate(formik.values);
    },
  });

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-start items-start gap-2"
      >
        <p className="font-bold">دسته بندی جدید</p>
        <hr className="bg-red-700 h-1 w-[120px]" />
        <label htmlFor="name" className="text-sm ">
          {" "}
          اسم دسته بندی
        </label>
        <input
          name="name"
          id="name"
          onChange={formik.handleChange}
          className="border rounded-md p-1 text-sm"
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-xs text-red-700 mt-2">{formik.errors.name}</p>
        )}
        <label htmlFor="slug" className="text-sm ">
          {" "}
          اسلاگ
        </label>
        <input
          name="slug"
          id="slug"
          onChange={formik.handleChange}
          className="border  rounded-md text-sm p-1 "
          onBlur={formik.handleBlur}
        />
        {formik.touched.slug && formik.errors.slug && (
          <p className="text-xs text-red-700 mt-2">{formik.errors.slug}</p>
        )}
        <label htmlFor="icon" className="text-sm ">
          {" "}
          آیکون
        </label>
        <input
          name="icon"
          id="icon"
          onChange={formik.handleChange}
          className="border rounded-md text-sm p-1 "
          onBlur={formik.handleBlur}
        />
        {formik.touched.icon && formik.errors.name && (
          <p className="text-xs text-red-700 mt-2">{formik.errors.name}</p>
        )}

        <button
          className="bg-red-700 text-white px-5 py-2 rounded-md text-sm"
          type="submit"
        >
          ایجاد
        </button>
      </form>
      <Toaster />
    </>
  );
}

export default CategoryForm;
