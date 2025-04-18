function BadgeButton({ active = false, onTap, text, icon = null }) {
    return (
        <div
            className={`flex items-center gap-2 px-6 py-3 border-1 rounded-xl  text-sm capitalize ${
                active
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 text-gray-500"
            }`}
            onClick={() => onTap()}
        >
            {icon}
            {text}
        </div>
    );
}

export default BadgeButton;
