import React from 'react'

const SelectField = ({ label, name, options, required = false, errors, formData, handleChange }) => (
    <div className="space-y-1.5">
        <label htmlFor={name} className="block text-sm font-medium text-[#282830]">
            {label} {required && <span className="text-red-600">*</span>}
        </label>
        <select
            id={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            className={`w-full px-3 py-2.5 text-sm border ${errors[name] ? 'border-[#282830]' : 'border-gray-300 rounded-xl'
                } focus:border-[#282830] focus:outline-none focus:ring-1 focus:ring-[#282830] transition-all bg-white`}
            aria-invalid={errors[name] ? 'true' : 'false'}
        >
            <option value="">Sélectionner...</option>
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
        {errors[name] && (
            <p className="text-xs text-red-600 mt-1">{errors[name]}</p>
        )}
    </div>
);

export default SelectField