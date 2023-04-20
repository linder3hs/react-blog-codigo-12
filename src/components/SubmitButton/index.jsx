export default function SubmitButton(props) {
  const { text } = props;

  return (
    <div className="mt-6">
      <button type="submit" className="btn btn-primary w-full">
        {text}
      </button>
    </div>
  );
}
