
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const EnquiryForm = () => (
  <section id="enquiry" data-aos="fade-up">
    <h2>Enquiry Form</h2>
    <p>Let us know your requirements, and we'll connect with a customized solution for your gym.</p>
    <div className="form-frame" style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.2)', height: '900px' }}>
      <iframe
        src="https://share.hsforms.com/1eSiQFq4URk6iNa9KyZNTcQe6knp"
        width="100%"
        height="900"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="HubSpot Form"
      />
    </div>
  </section>
);

const GrowthChart = () => {
  const data = {
    labels: ["Gym A", "Gym B", "Gym C", "Gym D"],
    datasets: [
      {
        label: "Before RJR (in ₹ Lakh)",
        data: [1.2, 2.5, 1.8, 2.0],
        backgroundColor: "rgba(200, 200, 200, 0.7)",
      },
      {
        label: "After RJR (in ₹ Lakh)",
        data: [3.5, 5.0, 4.0, 4.8],
        backgroundColor: "rgba(240, 78, 35, 0.9)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Client Revenue Growth with RJR Consultancy",
      },
    },
  };

  return (
    <div className="graph" style={{ textAlign: 'center', margin: '2rem auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section id="testimonials" data-aos="fade-up">
      <h2>What Our Clients Say</h2>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {testimonials.map((t, index) => (
          <div key={index} style={{ padding: '1rem', background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
            <p>"{t.feedback}"</p>
            <strong>- {t.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <header style={{ backgroundColor: '#111', color: 'white', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between' }}>
        <h1>RJR Consultancy</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#locations">Locations</a>
          <a href="#about">About Us</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact Us</a>
          <a className="enquiry-btn" href="#enquiry">Enquiry</a>
        </nav>
      </header>

      <section id="home" style={{ padding: '6rem 2rem', background: '#222', color: '#fff', textAlign: 'center' }}>
        <h2>Helping Gyms Grow & Succeed</h2>
        <p>We help fitness businesses double their revenue with expert solutions.</p>
        <a href="https://instagram.com/direct/t/123456789" target="_blank" rel="noreferrer" className="insta-dm">DM us on Instagram</a>
      </section>

      <section id="services" data-aos="fade-up">
        <h2>Our Services</h2>
        <ul>
          <li>Complete Business Audits & Diagnostics</li>
          <li>Sales Team Setup & High-Conversion Training</li>
          <li>Standard Operating Procedures (SOPs)</li>
          <li>CRM Setup & Member Retention Systems</li>
          <li>Staff Structuring & KPI Dashboards</li>
        </ul>
      </section>

      <section id="about" data-aos="fade-up">
        <h2>About Us</h2>
        <p>RJR Consultancy is a passionate team of fitness business strategists. Since 2021, we’ve helped over 12 gyms in Delhi NCR double revenue and achieve sustainable growth.</p>
        <GrowthChart />
      </section>

      <Testimonials />
      <EnquiryForm />

      <footer style={{ backgroundColor: '#111', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <p>&copy; 2025 RJR Consultancy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
