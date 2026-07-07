import React from "react";
import img from "../assets/portfolio.png";
import "../styles/portfolio.css"; 
import descriptionImg from "../assets/summary.jpeg"; 
import descriptionImg2 from "../assets/vision.png";
import descriptionImg3 from "../assets/p1c.png";
import descriptionImg4 from "../assets/p1b.png";
import PortfolioBack from "../common/PortfolioBack/PortfolioBack"; 

const Portfolio = () => {
  return (
    <>
      <section className="portfolio-section mb">
        <PortfolioBack
          title="Our Mission"
          cover={img}
          typedLines={[
            "NEXUS mission is to deliver a portfolio of diversified, specialized, and strategic accounting services for our clients.",
          ]}
        />

        <div className="portfolio-content">
          <img
            src={descriptionImg}
            alt="Description"
            className="portfolio-img"
          />
          <div className="portfolio-text">
            <p>
              At Nexus, we are a London-based firm of accountants committed to delivering expert accounting, taxation, payroll, and business advisory services to businesses and individuals across the UK. Founded by M. Shahid, whose extensive experience as a Finance Director and Financial Controller spans a range of international organisations, Nexus combines technical expertise with a client-focused approach to support long-term success.
              Under M. Shahid's leadership, we have built a reputation for providing reliable, proactive, and tailored financial solutions. By staying up to date with current UK tax legislation and embracing modern digital accounting practices, we help clients remain compliant, improve financial performance, and focus on growing their businesses with confidence. Our international experience across the UK, Europe, the Middle East, and Asia enables us to deliver practical solutions that meet the needs of today's dynamic business environment.

            </p>
          </div>
        </div>

        <div className="portfolio-content second-description">
          <div className="portfolio-text">
            <p>
             Our mission is to deliver specialised, strategic, and reliable accounting services that support businesses across the UK. We provide expert guidance, modern financial solutions, and proactive advice to help clients remain compliant with current UK legislation and achieve sustainable growth.
             We are committed to building long-term relationships through trust, professionalism, and exceptional service, continually expanding our expertise to deliver greater value as our clients' businesses grow.

            </p>
          </div>
          <img
            src={descriptionImg2}
            alt="Description"
            className="portfolio-right-img"
          />
        </div>

        {/* New Section with 12 Points */}
        <div className="portfolio-points">
          <div className="portfolio-section-border2"></div>
          <div className="portfolio-points-intro">
            <p>
              Our range of professional services, delivered by a team of
              friendly, vibrant individuals, empowers business owners to achieve
              their goals by enabling them to focus on what they do best. We
              embrace:
            </p>
          </div>
          <ul className="portfolio-points-list">
            <li>Sincerity</li>
            <li>Excellence</li>
            <li>Education</li>
            <li>Honesty & Integrity</li>
            <li>Referrals</li>
            <li>Team</li>
            <li>Passion</li>
            <li>Proactivity</li>
            <li>Community</li>
            <li>Reliability</li>
            <li>Approachability</li>
            <li>Client Satisfaction</li>
          </ul>
        </div>
        <div className="portfolio-section-border"></div>
        <div className="portfolio-content">
          <img
            src={descriptionImg3}
            alt="Description"
            className="portfolio-img"
          />
          <div className="portfolio-text">
            <p>
              Established in 2018, Nexus Accountants & Taxation Limited is a trusted UK accountancy firm led by M. Shahid, an experienced finance professional with over 15 years of expertise in accounting, taxation, and business advisory services. Beginning his career with a respected accountancy practice in North West London while completing an Honours Degree in Accounting and Finance, he progressed into senior finance leadership roles, including Financial Director, managing diverse client portfolios across multiple industries.
              Drawing on extensive experience supporting businesses of all sizes, including organisations with significant turnover, M. Shahid founded Nexus with a clear vision—to provide professional, proactive, and client-focused financial solutions. Today, Nexus combines technical expertise with modern digital accounting practices to help businesses remain compliant with current UK legislation, make informed financial decisions, and achieve sustainable growth.

            </p>
          </div>
        </div>
        <div className="portfolio-content second-description">
          <div className="portfolio-text">
            <p>
              The Nexus team is made up of experienced accounting and finance professionals with expertise across accounting, taxation, payroll, bookkeeping, HR, and business advisory services. Our qualified specialists bring together decades of industry experience, delivering practical solutions tailored to the needs of businesses across the UK.
              While Nexus is a boutique firm, we provide the expertise, technical knowledge, and personalised service you would expect from a larger practice. Our clients benefit from dedicated support, proactive advice, and cost-effective solutions—receiving high-quality professional services without the complexity or fees often associated with larger firms.

            </p>
          </div>
          <img
            src={descriptionImg4}
            alt="Description"
            className="portfolio-right-img"
          />
        </div>
      </section>
    </>
  );
};

export default Portfolio;