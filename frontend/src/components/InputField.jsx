const InputField = ({ label, name, type = 'text', required = false, placeholder, step, errors, formData, handleChange }) => (
    <div className="space-y-1.5">
      <label htmlFor={name} className="block text-sm font-medium text-[#282830]">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        step={step}
        className={`w-full px-3 py-2.5 text-sm border rounded-xl ${
          errors[name] ? 'border-red-600' : 'border-gray-300 '
        } focus:border-[#1188CC] focus:outline-none focus:ring-1 focus:ring-[#1188CC] transition-all`}
        aria-invalid={errors[name] ? 'true' : 'false'}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
      />
      {errors[name] && (
        <p id={`${name}-error`} className="text-xs text-red-600 mt-1">{errors[name]}</p>
      )}
    </div>
  );

  export default InputField