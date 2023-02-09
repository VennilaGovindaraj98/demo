interface InputParams {
  type: string;
  value: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input(props: InputParams) {
  return (
    <input type={props.type} value={props.value} onChange={props.onChange} />
  );
}
export default Input;
