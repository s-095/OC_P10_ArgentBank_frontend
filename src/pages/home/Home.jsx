import NavBar from "../../components/navbar/NavBar"
import Hero from "../../components/hero/Hero"
import Features from "../../components/features/Features"
import Footer from "../../components/footer/Footer"
import iconChat from "../../assets/img/icon-chat.png"
import iconMoney from "../../assets/img/icon-money.png"
import iconSecurity from "../../assets/img/icon-security.png"
import "./home.scss"

function Home() {
    return (
        <div className="home">
            <NavBar />
            <main>
                <Hero />
                <section className="features">
                    <Features
                        title="You are our #1 priority"
                        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                        imgSrc={iconChat} alt="Chat Icon"
                    />
                    <Features
                        title="More savings means higher rates"
                        description="The more you save with us, the higher your interest rate will be!"
                        imgSrc={iconMoney} alt="Money Icon"
                    />
                    <Features
                        title="Security you can trust"
                        description="We use top of the line encryption to make sure your data and money is always safe."
                        imgSrc={iconSecurity} alt="Security Icon"
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
