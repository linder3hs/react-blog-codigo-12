export default function TextField(props) {
  const { inputs, isValid = null, elements, handleInputsChange } = props;

  return (
    <>
      {elements.map((element) => (
        <div key={element.name} className="mt-6">
          <input
            type={element.type}
            value={inputs[element.value]}
            name={element.name}
            onChange={handleInputsChange}
            placeholder={element.placeholder}
            className={`border ${
              isValid && isValid[element?.isValid]
                ? "border-red-500"
                : "border-gray-300 "
            }  rounded-lg p-3 w-full bg-gray-50`}
          />
          {isValid && isValid[element?.isValid] && (
            <span className="text-red-500 mt-2 text-sm">
              {element?.messageInvalid}
            </span>
          )}
        </div>
      ))}
    </>
  );
}
