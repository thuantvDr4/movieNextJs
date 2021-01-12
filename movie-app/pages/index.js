import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Header />

      <Navbar />
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu />
            </div>

            <div className="col-lg-9">
              <Carousel />
              <div className="row">
                <MovieList />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    <style jsx>{`
    .home-page {
      padding-top: 80px;
    }
    `}
    </style>

    </div>
  );
}
