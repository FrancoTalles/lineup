import tipo from "../../assets/logo/tipo.png";

export default function Header(props) {
  return (
    <div className="w-full h-16 bg-MainRed flex justify-center items-center shadow-sm fixed top-0 left-0 px-4 z-50">
      <div className="bg-MainWhite rounded">
        <img src={tipo} alt="nome" className="h-8" />
      </div>
    </div>
  );
}
