import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          {" "}
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/hotel-facilities">
            <a>Hotel Facilities</a>
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/per-person-prices">
            <a>Per Person Prices</a>
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link href="/star-rating">
            <a>Star Rating</a>
          </Link>{" "}
        </li>
      </ul>
    </>
  );
}
