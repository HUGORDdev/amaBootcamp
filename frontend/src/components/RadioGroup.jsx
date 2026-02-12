import React from 'react'

const RadioGroup = ({ label, name, options, required = false, errors, formData, handleChange }) => (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-[#282830] mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="flex gap-6">
        {options.map(opt => (
          <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={formData[name] === opt.value}
              onChange={handleChange}
              className="w-4 h-4 border-2 border-gray-400 text-[#282830] focus:ring-1 focus:ring-[#282830]"
            />
            <span className="text-sm text-[#282830]">{opt.label}</span>
          </label>
        ))}
      </div>
      {errors[name] && (
        <p className="text-xs text-red-600 mt-1">{errors[name]}</p>
      )}
    </div>
  );


export default RadioGroup