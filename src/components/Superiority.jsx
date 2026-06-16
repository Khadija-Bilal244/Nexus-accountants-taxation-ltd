import superiorityImage from "../assets/superiority-image.png";

function Superiority() {
  return (
    <div className="superiority-section">
  <div className="superiority-container">
    <div className="superiority-wrapper">
      <div className="superiority-text">
        <h2 className="superiority-title">Nexus Superiority Among Others</h2>
        <p>
          At Nexus, we start from the principle that every client is our only client. 
          This is what makes Nexus different from any other firm of Accountants. 
          We believe in continually developing comprehensive and relevant services 
          in all areas of practice so that our clients always get the most informed 
          advice and the best opportunities. We are focusing on becoming a fully 
          digital firm by 2019 and hence we are aiming to deliver additional services 
          to our clients with deep-rooted relationships. We assure you that our 
          services are second to none, and the way we produce reports gives you a 
          full understanding of your business every week and plan your tax affairs 
          accordingly to provide you peace of mind so that you can focus on your 
          business. Tailored accounting for ambitious business. You have a vision 
          for the future of your business. We will help you plan it, develop it, 
          and make it a reality. Business fails to manage their accounts and 
          eventually pay too much taxes or unnecessarily incur fines and interest 
          penalties. We become instrumental in helping businesses with our proactive 
          and innovative approach to overcome these niches and map toward development.
        </p>
      </div>
      <div className="superiority-image">
        <img src={superiorityImage} alt="Nexus Accountants Superiority" />
      </div>
    </div>
  </div>
</div>)
}
export default Superiority;