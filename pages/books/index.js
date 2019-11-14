import Link from "next/link";
import Card from "../../components/dataDisplay/Card";
import Jumbo from "../../components/dataDisplay/Jumbo";
import HeaderImage from "../../components/dataDisplay/HeaderImage";

const Books = ({ query }) => {
  return (
    <>
      <HeaderImage src={"/img/header-books.jpg"}>
        <h1>Books Catalogue</h1>
      </HeaderImage>
      <div className="content">
        <Card>
          <Link href="/b/everybody-writes">
            <a>1. Everybody Writes</a>
          </Link>
        </Card>
      </div>
    </>
  );
};

Books.getInitialProps = async ({ query }) => {
  // Visit https://iJS.to to learn how to use fetch in getInitialProps

  return { query };
};

export default Books;
