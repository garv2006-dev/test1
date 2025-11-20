import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, className = "", ...props }, ref) {
    const baseStyles =
        "border-2 border-gray-300 p-3 md:p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:border-transparent text-gray-900 text-base md:text-lg transition placeholder-gray-400";

    return (
        <div>
            <label className="block mb-2 text-sm md:text-base font-semibold text-gray-900">{label}</label>

            {textarea ? (
                <textarea
                    ref={ref}
                    className={`${baseStyles} ${className} resize-none`}
                    {...props}
                />
            ) : (
                <input
                    ref={ref}
                    className={`${baseStyles} ${className}`}
                    {...props}
                />
            )}
        </div>
    );
});

export default Input;
