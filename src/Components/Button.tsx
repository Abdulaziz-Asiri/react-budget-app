type ButtonProps = {
  label: string;
};

export function Button({ label }: ButtonProps) {
  return <button className="btn">{label}</button>;
}
