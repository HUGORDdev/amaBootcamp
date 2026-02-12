import React from 'react'

const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-300">
        
        <h2 className="text-lg font-semibold text-[#282830] tracking-tight">{title}</h2>
    </div>
);
export default SectionHeader