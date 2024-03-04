import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { getCategory } from "services/admin";
import { getCookie } from "utils/cookie";

function AddPost() {
  const { data } = useQuery({ queryKey: "categories", queryFn: getCategory });

  const initialValues = {
    title: "",
    content: "",
    amount: "",
    city: "",
    category: "",
    images: {},
  };

  const formik = useFormik({
    initialValues,
    validate: (values) => {
      const errors = {};
      if (!values.title) {
        errors.title = "عنوان را وارد کنید";
      }
      if (!values.category) {
        errors.category = "دسته بندی را وارد کنید";
      }
      if (!values.images) {
        errors.images = "عکس آگهی را مشخص کنید";
      }
      if (!values.amount) {
        errors.amount = "قیمت را وارد کنید";
      }
      if (!values.city) {
        errors.city = "شهر محل آگهی را وارد کنیذ";
      }
      if (!values.content) {
        errors.content = "توضیحات آگهی را وارد کنید";
      }

      return errors;
    },

    onSubmit: () => {
      const formData = new FormData();

      for (const i in formik.values) {
        formData.append(i, formik.values[i]);
      }

      const accessToken = getCookie("accessToken");

      axios
        .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `bearer ${accessToken}`,
          },
        })
        .then((res) => toast.success(res.data.message))
        .catch((err) => toast.error("خطایی پیش آمده است!"));

      console.log(formik.values);
    },
  });
  return (
    <>
      <form
        className="flex flex-col justify-center items-start gap-2"
        onSubmit={formik.handleSubmit}
      >
        <p className="text-lg font-bold">افزودن آگهی</p>
        <hr className="w-[120px] border-red-700  border-2" />
        <label htmlFor="title" className="text-sm">
          عنوان آگهی
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="border-2 p-1 text-sm rounded-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title && (
          <p className="text-xs text-red-700 mt-2">{formik.errors.title}</p>
        )}

        <label htmlFor="content">توضیحات</label>
        <textarea
          type="text"
          name="content"
          id="content"
          className="border-2 p-1 text-sm rounded-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.content && formik.errors.content && (
          <p className="text-xs text-red-700 mt-2">{formik.errors.content}</p>
        )}
        <label htmlFor="amount">قیمت</label>
        <input
          type="number"
          name="amount"
          id="amount"
          className="border-2 p-1 text-sm rounded-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.amount && formik.errors.amount && (
          <p className="text-xs text-red-700 mt-2">{formik.errors.amount}</p>
        )}
        <label htmlFor="city">شهر</label>
        <input
          type="text"
          name="city"
          id="city"
          className="border-2 p-1 text-sm rounded-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.city && formik.errors.city && (
          <p className="text-xs text-red-700 mt-2">{formik.errors.city}</p>
        )}
        <label htmlFor="category">دسته بندی</label>
        <select
          type="text"
          name="category"
          id="category"
          className="border-2 p-1 text-sm rounded-md"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {data?.data.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        {formik.touched.category && formik.errors.category && (
          <p className="text-xs text-red-700 mt-2">{formik.errors.category}</p>
        )}
        <label htmlFor="image">عکس</label>
        <input
          type="file"
          name="images"
          id="images"
          className="border-2 p-1 text-sm rounded-md"
          onChange={(e) => formik.setFieldValue("images", e.target.files[0])}
          onBlur={formik.handleBlur}
        />
        {formik.touched.images && formik.errors.images && (
          <p className="text-xs text-red-700 mt-2">{formik.errors.image}</p>
        )}
        <button
          className="bg-red-700 text-white px-5 py-1 rounded-md mt-2"
          type="submit"
        >
          ایجاد
        </button>
      </form>
      <Toaster />
    </>
  );
}

export default AddPost;
