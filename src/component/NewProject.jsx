import { useRef, useState } from "react";
import Input from "./Input";

export default function NewProject({ onAdd, onCancel }) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const [errors, setErrors] = useState({
        title: "",
        description: "",
        dueDate: "",
    });

    function handleSave() {
        const enteredTitle = titleRef.current.value.trim();
        const enteredDescription = descriptionRef.current.value.trim();
        const enteredDueDate = dueDateRef.current.value;

        const newErrors = {
            title: enteredTitle === "" ? "Title is required" : "",
            description: enteredDescription === "" ? "Description is required" : "",
            dueDate: enteredDueDate === "" ? "Due date is required" : "",
        };

        setErrors(newErrors);

        // If ANY error → stop
        const hasError = Object.values(newErrors).some((err) => err !== "");
        if (hasError) return;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });

        // Clear fields after save
        handleCancel();
    }

    function handleCancel() {
        titleRef.current.value = "";
        descriptionRef.current.value = "";
        dueDateRef.current.value = "";
        onCancel();
        setErrors({
            title: "",
            description: "",
            dueDate: "",
        });
    }

    return (
        <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg w-full md:w-2xl max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Create New Project</h2>
            
            <div className="space-y-6">
                <div>
                    <Input
                        ref={titleRef}
                        label="Project Title"
                        placeholder="Enter project title"
                        className={`${errors.title ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"}`}
                        onChange={() => setErrors(prev => ({ ...prev, title: "" }))}
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>⚠️</span>{errors.title}</p>
                    )}
                </div>

                <div>
                    <Input
                        ref={descriptionRef}
                        label="Project Description"
                        placeholder="Describe your project"
                        textarea
                        rows={5}
                        className={`${errors.description ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"}`}
                        onChange={() => setErrors(prev => ({ ...prev, description: "" }))}
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>⚠️</span>{errors.description}</p>
                    )}
                </div>

                <div>
                    <Input
                        ref={dueDateRef}
                        label="Due Date"
                        type="date"
                        className={`${errors.dueDate ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"}`}
                        onChange={() => setErrors(prev => ({ ...prev, dueDate: "" }))}
                    />
                    {errors.dueDate && (
                        <p className="text-red-500 text-sm mt-2 flex items-center gap-1"><span>⚠️</span>{errors.dueDate}</p>
                    )}
                </div>
            </div>

            <menu className="flex flex-col sm:flex-row justify-end gap-3 mt-8">
                <button 
                    className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition font-semibold" 
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button
                    className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                    onClick={handleSave}
                >
                    Save Project
                </button>
            </menu>
        </div>
    );
}
