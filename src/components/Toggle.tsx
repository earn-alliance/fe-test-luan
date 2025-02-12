import { useFilter } from "../hooks/useFilter";

interface ToggleProps {
  trueLabel: string;
  falseLabel: string;
}
export const Toggle = ({ falseLabel, trueLabel }: ToggleProps) => {
  const { isLive, setIsLive } = useFilter();

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLive(event.target.checked);
  };

  return (
    <div className="inline-flex items-center gap-2 justify-center">
      <label
        htmlFor="switch-component-on"
        className="text-white text-sm cursor-pointer"
      >
        {falseLabel}
      </label>

      <div className="relative inline-block w-11 h-5">
        <input
          id="switch-component-on"
          type="checkbox"
          className="peer appearance-none w-11 h-5 bg-slate-200 rounded-full checked:bg-yellow-400 cursor-pointer transition-colors duration-300"
          checked={isLive}
          onChange={handleToggleChange}
        />
        <label
          htmlFor="switch-component-on"
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-none shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
        ></label>
      </div>

      <label
        htmlFor="switch-component-on"
        className="text-white text-sm cursor-pointer"
      >
        {trueLabel}
      </label>
    </div>
  );
};
