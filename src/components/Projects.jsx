import React, { useState } from "react";

const projectsData = [
  {
    name: "ROBLOX",
    description: "Eter Lab in the Roblox Metaverse,  the thinking factory where Eter Studio creates new products. We  open the doors for players to create and win a new pair of Eter Lab Sunglasses to wear inside the digital real.",
    tags:"metaverse"
  },
  {
    name: "THE SANDBOX",
    description: "This gamified experience lets Kun Agüero connect with his audience, tell the story of his career, and play alongside his fans. We developed the concept and strategy, linking the metaverse with real-life benefits and social interaction through Twitch channels to boost engagement. We designed the game experience, scenery, and in-game assets sold as NFTs, including wearables, equipment, and a 9320 unique avatar collection generated through a smart contract.",
  },
  {
    name: "ETER SPACE",
    description: "We have brought Eter´s ecosystem to life in this virtual reality experience inside Spatial´s platform, which allows users to create and customize their avatars and interact with each other in real-time as if they were in the same physical space. ",

  },
  {
    name: "LE BANANAS",
    description: "We created Le Banana Space, a 360° web page where users were able to interact with art, fashion, and music. It featured an NFT Gallery from Le Banana artists and they could also try the new Blackmamba´s accessory capsule launch through Instagram filters designed with Augmented Reality. Users could also listen to a curated playlist and participate in a giveaway for Coldplay tickets.",

  },
  {
    name: "BUSINESS CARD",
    description: "We designed and developed our AR business card",
  },
  {
    name: "DRESS X",
    description: "Our first collection of digital clothing, made up of 3 garments and 3 accesories, now for sale on DRESSX. We launched the first VR fashion show and hosted it on Eter space.",
  },
  {
    name: "CROBAR",
    description: "3D Animation & Creative Direction for a teaser and aftermovie to promote a special date at the club.",
  },
  {
    name: "MARTA MINUJIN",
    description: "We helped the iconic artist Marta Minujín to give new life to one of her most recognizable art pieces “El pago de la deuda Argentina con maíz, el oro Latinoamericano” making it evolve as an NFT, as a revaluation of her art through web3 tools. ",
  },
  {
    name: "LALI",
    description: "We designed and created this piece of art for the Argentine pop artist LALI. The design represents the symbolic helmet worn by the singer during her latest tour.It was turned into an NFTicket, which was sold in a marketplace providing access to exclusive benefits, including a meet & greet and special LALI merchandising.",
  }
  // add the remaining projects with their respective background images
];

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleProjectHover = (index) => {
    setHoveredProject(index);
  };

  const handleProjectLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div>
        <div class="projects-container-main">
      <div className="project-container">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onMouseEnter={() => handleProjectHover(index)}
            onMouseLeave={handleProjectLeave}
          >
            <p>{project.name}</p>
            <span
              className={"project-description "}
              style={{
                opacity: hoveredProject === index  ? 1 : 0,
                transform: hoveredProject === index ? "translateX(0)" : "translateX(100%)",
                transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                visibility: "visible",
                position: "absolute",

              }}
            >
              {project.description}
            </span>
          </div>
        ))}
      </div>
</div>
    </div>

  );
}

export default Projects;