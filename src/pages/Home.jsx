import Banner from "../component/Banner/Banner"
import Button from "../component/common/Button/Button";
import Card from "../component/common/Card/Card";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header"
import { bannerText1, bannerText2, bannerText3, bannerText4 } from "../utils/constant/bannerText"
import { cardData } from "../utils/constant/cardData";
import ContactUs from "../component/contact/ContactUS";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner data={bannerText1} />
      <Banner data={bannerText2} isrotate />
      <Banner data={bannerText3} />

      <div className="m-20">
        <h2 className="text-center min-w-full text-xl font-semibold">Some Services We Offer</h2>
        <div className="cardBox">

          {
            cardData.map((item, index) => {
              return (
                <Card key={index} data={item} />
              )

            })
          }

        </div>
      </div>
      <Banner data={bannerText4} isrotate />
      <ContactUs />
      <div>
      <Footer />
      </div>
    </div>
  )
}

export default Home