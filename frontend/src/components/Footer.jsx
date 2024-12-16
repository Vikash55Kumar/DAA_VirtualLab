import React from "react";
import "./Footer.css"; // Assuming the styles are in Footer.css

const Footer = ({ teamMembers }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="team-title">Meet Our Team</h2>
        <div className="team-list">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
            
              <div className="member-info">
                <p className="member-name">{member.name}</p>
                <p className="member-role">
                  {member.role}{" "}
                  {member.isHead && <span className="head"> - Head</span>}
                </p>
                <p>{member.info}</p>
                {member.isHead && <div className="head-badge">Team Head</div>}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-bottom">© 2024 Team. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
