import React from "react";

function SkillCard({ icon, name }) {
    return (
        <div className="skill-card">
            <div className="skill-icon">{icon}</div>
            <div className="skill-name">{name}</div>
        </div>
    );
}

export default SkillCard;
