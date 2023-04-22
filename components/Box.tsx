export default function ({ value , onClick }: any) {
  return (
    <>
      <button className="box" onClick = {onClick}>{value}</button>
    </>
  );
}
