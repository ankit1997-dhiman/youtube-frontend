export default function InputField({
  field_label,
  fieldName,
  fieldState,
  setFieldState,
}) {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFieldState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">{field_label}</label>
        <input
          value={fieldState}
          name={fieldName}
          onChange={handleChange}
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </>
  );
}
