export default function Card(props) {
  const { children } = props;

  return (
    <>
      <div className="artboard-demo phone-2 p-6">
        {children}
      </div>
    </>
  );
}
