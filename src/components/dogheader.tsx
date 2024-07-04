type DogheaderProps = {
  title: string;
};

export default function Dogheader({ title }: DogheaderProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
