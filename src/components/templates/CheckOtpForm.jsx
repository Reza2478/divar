function CheckOtpForm({ formik, setStep }) {
  return (
    <form onSubmit={formik.handleSubmit}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیام شده به شماره {formik.values.mobile} را وارد کنید </span>
      <label htmlFor="code">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="code"
        placeholder="کد تایید را وارد کنید"
        name="code"
        onChange={formik.handleChange}
      />
      <p style={{ color: "red", fontSize: "12px" }}>{formik.errors.code}</p>
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
