// import checkmark from "../../img/checkmark.svg";
import "../input/input.css";
export const Inp = ({ label }: { label: string }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input className="input" />
      </div>
    </div>
  );
};
