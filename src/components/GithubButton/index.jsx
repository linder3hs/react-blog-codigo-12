import { signInWithGithub } from "../../service/supabase";
import github from "../../assets/github.svg";

export default function GithubButton(props) {
  const { text } = props;

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={signInWithGithub}
        className="bg-gray-950 w-full flex items-center justify-center p-2.5 text-white gap-3 rounded-md"
      >
        <img src={github} width={30} alt="" />
        <span>{text}</span>
      </button>
    </div>
  );
}
