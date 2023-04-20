export default function TextField(props) {
  const { inputs, isValid = null, elements, handleInputsChange } = props;

  return (
    <>
      {elements.map(
        ({
          name,
          type,
          value,
          placeholder,
          isValid: isInputValid,
          messageInvalid,
          disabled = false,
        }) => (
          <div key={name} className="mt-6">
            <input
              type={type}
              value={inputs[value]}
              name={name}
              disabled={disabled}
              onChange={handleInputsChange}
              placeholder={placeholder}
              className={`border ${
                isValid && isValid[isInputValid]
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg p-3 w-full ${
                disabled ? "bg-gray-300" : "bg-gray-50"
              }`}
            />
            {isValid && isValid[isInputValid] && (
              <span className="text-red-500 mt-2 text-sm">
                {messageInvalid}
              </span>
            )}
          </div>
        )
      )}
    </>
  );
}
