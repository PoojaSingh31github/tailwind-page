type Props = {
  inputkey: string;
  inputPlaceholder: string;
  inputType: string;
  inputValue: any;
  inputLable: string;
//   onchange: (e: any) => void;
};

export default function Input({
  inputkey,
  inputLable,
  inputPlaceholder,
  inputType,
  inputValue,
//   onchange,
}: Props) {
  return (
    <div className="flex-1">
      <label className="" htmlFor={inputkey}>
        {inputLable}
          </label>
          <br/>
      <input
        placeholder={inputPlaceholder}
        className="w-4/5 bg-white rounded-lg p-2"
        id={inputkey}
        name={inputkey}
        type={inputType}
        value={inputValue}
        // onChange={onchange}
      />
    </div>
  );
}
