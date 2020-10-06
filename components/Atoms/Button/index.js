import Link from "next/link";

const Button = () => {
  return (
    <div className="button">
      <Link href="/">
        <a className="buttonLink">Read More</a>
      </Link>
    </div>
  );
};

export default Button;
