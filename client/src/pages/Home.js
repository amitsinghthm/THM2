import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full pt-0">
        <img
          src="/images/filler2.jpg"
          className=" w-full"
          style={{ display: "block", maxWidth: "100%", height: "auto" }}
          alt="img"
        />
      </div>

      <div className="w-full text-center p-12 mt-4">
        <div className="mx-auto max-w-5xl">
          <p className="text-7xl text-gray-700 font-didot">Our Approach</p>
          <p className="mt-10 text-2xl font-didot text-gray-700">
            Our approach at TheHealthyMinds is to deliver world-class mental
            health care that is both affordable and accessible.
          </p>
          <p className="mt-8 text-2xl font-didot text-gray-700">
            We empower businesses, employees, and their families to engage in
            meaningful dialogue about mental wellness, breaking down the stigmas
            that often silence such conversations. Through early intervention
            and a supportive culture, we minimize the reliance on critical
            resources, ensuring that mental health care is an attainable and
            empowering journey for all.
          </p>
          <p className="mt-8 text-2xl font-didot text-gray-700">
            Our dedication lies in making mental wellness an integral, seamless
            aspect of every company's ethos.
          </p>
        </div>
        <div className="mt-10">
          <button
            className="bg-dark-green text-neon-green hover:opacity-90 text-lg font-didot p-4 rounded-lg"
            onClick={() => {
              navigate("/about");
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl p-10">
        <div className="flex items-stretch space-x-12">
          <div className="flex-1">
            <h2 className="text-3xl font-didot text-gray-700 leading-tight mb-4">
              An industry-focused approach by world-class mental health experts
            </h2>
            <p className="text-2xl text-gray-600 font-didot">
              Our expert-driven therapy and counseling are tailored to address
              unique challenges in maintaining healthy minds for industries like
              Technology & Consulting, Manufacturing, Sports, Academia, etc. We
              aim to provide high-quality services at an affordable price,
              ensuring that each client feels supported and valued.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="/images/2 women meeting on couch.jpeg"
              alt="Descriptive Alt Text"
              className="w-max-75 h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <button
          className="bg-dark-green text-neon-green hover:opacity-90 text-lg font-didot p-4 rounded-lg"
          onClick={() => {
            navigate("/about");
          }}
        >
          Learn More
        </button>
      </div>

      <div className="mx-auto max-w-7xl p-10 mt-5">
        <div className="flex items-stretch space-x-12">
          <div className="w-1/2">
            <img
              src="/images/woman using phone.jpg"
              alt="Descriptive Alt Text"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 left-3">
            <h2 className="text-4xl font-didot text-gray-700 leading-tight mb-4">
              Community-driven mobile app to de-stigmatize mental health
              discussion
            </h2>
            <p className="text-2xl text-gray-600 font-didot">
              We aim to destigmatize mental health discussions and empower
              everyone to engage in confident conversations about their
              well-being through our community app, designed to facilitate deep,
              meaningful, and empowering conversations among individuals with
              similar experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          className="bg-dark-green text-neon-green hover:opacity-90 text-lg font-didot p-4 rounded-lg"
          onClick={() => {
            navigate("/about");
          }}
        >
          Learn More
        </button>
      </div>

      <div className="mx-auto max-w-7xl p-10">
        <div className="flex items-stretch space-x-12">
          <div className="flex-1">
            <h2 className="text-4xl font-didot text-gray-700 leading-tight mb-4">
              Accessibility and Affordability to Employees, and their Families
            </h2>
            <p className="text-2xl text-gray-600 font-didot">
              We strive to create a supportive ecosystem where mental wellness
              services are not a luxury, but a standard provision for all
              workplace participants. By offering scalable solutions tailored to
              diverse organizational sizes and needs, we make it easier for
              corporates to integrate mental health care into their benefits
              package, thus promoting a healthier, more productive work
              environment.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="/images/indian family pic.jpg"
              alt="Descriptive Alt Text"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div
        className="w-full bg-dark-green p-8 text-center relative overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <h2 className="text-7xl text-white font-didot mb-6">Our Offerings</h2>
        <div className="flex justify-around items-center mb-6 mt-9">
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b503b5d73881124e70a24/1649102924019-AQPZM7QK25J33VKNIGMV/Thrapy+copy+2.png?format=1000w"
              alt="Image 1"
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-didot text-white mb-4">
              Bespoke Wellness Programs
            </h3>
          </div>
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b503b5d73881124e70a24/1649102924036-G0TE4WZ8BW74BRIHOQEA/Accupuncture+copy+2.png?format=1000w"
              alt="Image 2"
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl font-didot text-white mb-4">
              AI-Enhanced Platform
            </h3>
          </div>
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b503b5d73881124e70a24/1649102924031-YXADIDPIOUVJ41WLFVKJ/Coaching+copy.png?format=1000w"
              alt="Image 3"
              className="mb-4 mx-auto"
            />
            <h3 className="text-xl text-white font-didot mb-4">
              Support for Whole Family
            </h3>
          </div>
        </div>
        <button
          className="bg-dark-green text-neon-green font-didot hover:opacity-90 py-6 px-10 text-2xl rounded shadow mt-12"
          onClick={() => {
            navigate("/about");
          }}
        >
          Learn More
        </button>

        <div
          className="absolute bottom-0 left-0 w-full"
          style={{
            height: "150px",
            background:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 1200 120'%3E%3Cpath fill='%2348bb78' fill-opacity='1' d='M0,0 Q600,150 1200,0 V120 H0 Z'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>

      <div className="w-full p-12">
        <h2 className="text-center text-5xl my-4 mt-8 font-didot text-gray-700">
          Meet Our Experts
        </h2>

        <div className="flex justify-between w-full px-2">
          <div className="w-1/4 px-2">
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b503b5d73881124e70a24/1649102924042-LBG3A4K8J8B702X8592T/image-asset.jpeg?format=500w"
              alt="Description 1"
              className="w-full"
            />
            <p className="text-center mt-2 text-3xl font-didot text-gray-700">
              Tai Schell, PSY.D
            </p>
          </div>

          <div className="w-1/4 px-2">
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b503b5d73881124e70a24/1649102924048-3RMJ9PCMIMT58X8RNDBE/image-asset.jpeg?format=500w"
              alt="Description 2"
              className="w-full"
            />
            <p className="text-center mt-2 text-3xl font-didot text-gray-700">
              Larissa O’Connor, MD
            </p>
          </div>

          <div className="w-1/4 px-2">
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b503b5d73881124e70a24/1649102924053-KSGYYU58YC7E3AAHJQYO/Stocksy_comp_2318452.jpg?format=500w"
              alt="Description 3"
              className="w-full"
            />
            <p className="text-center mt-2 text-3xl font-didot text-gray-700">
              Emmett Marsh, PHD
            </p>
          </div>

          <div className="w-1/4 px-2">
            <img
              src="https://images.squarespace-cdn.com/content/v1/624b503b5d73881124e70a24/1649102924058-11G1S9WX1NOACY4ICCMQ/image-asset.jpeg?format=500w"
              alt="Description 4"
              className="w-full"
            />
            <p className="text-center mt-2 text-3xl font-didot text-gray-700">
              Lana Vargas, ND, LAc
            </p>
          </div>
        </div>
      </div>
      <button
        className="bg-dark-green text-neon-green hover:opacity-90 text-lg font-didot p-4 rounded-lg"
        onClick={() => {
          navigate("/about");
        }}
      >
        Learn More
      </button>

      <div
        className="bg-dark-green flex flex-col items-center justify-center h-auto py-20 px-12 mt-8 text-center"
        style={{ minHeight: "75vh" }}
      >
        <p
          className="text-3xl italic mb-4 text-white mx-auto"
          style={{ maxWidth: "80%" }}
        >
          “The partnership with TheHealthyMinds has revolutionized our workplace
          wellness strategy. Their exceptional app has become a vital resource
          for our team, offering immediate access to therapists who resonate
          with our industry's specific needs. This initiative has significantly
          boosted our performance by facilitating a supportive environment that
          actively destigmatizes mental health. The app's role in our employees'
          mental and emotional well-being journey has been transformative,
          fostering a culture of resilience and productivity across the
          company.”
        </p>

        <p className="text-2xl mt-3 text-white">
          — India-based IT & Consulting company, from Corporate HR
        </p>
      </div>

      <div className="bg-gray-200 p-6 text-center w-full h-[500px] flex flex-col justify-center items-center">
        <p className="text-6xl mb-6 font-didot text-gray-700">
          Get started with TheHealthyMinds, today.
        </p>
        <button
          className="bg-dark-green text-neon-green hover:opacity-90 text-xl font-didot py-4 px-8 rounded-lg mt-9 w-auto min-w-[300px]"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
