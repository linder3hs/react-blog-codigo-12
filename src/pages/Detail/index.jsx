import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  return (
    <>
      <h1 className="text-3xl font-bold">Detalle de post {id}</h1>
    </>
  );
}
