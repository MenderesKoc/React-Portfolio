import React from "react";

function Portfolio() {
  const projects = [
    {
      project_number: "project4",
      title: "TASKMASTER PRO",
      githubUrl: "https://github.com/mendereskoc/taskmaster-pro",
      live_url: "https://mendereskoc.github.io/taskmaster-pro/",
      description: "Edit, organize, and manage tasks",
    },
  ];
  return (
    <article class="projects" id="projects">
      <section id="projects-tag">
        <h1 class="project-title">PROJECTS</h1>
      </section>

      <section class="projects-content">
        {projects.map((data) => (
          <button class="btn" id="hoverbig" value="PLACEHOLDER">
            <section class={data.project_number} id="allcards">
              <p class="cards-title">{data.title}</p>
              <div class="button-holder">
                <img
                  id="hoverbig"
                  onClick={() => window.open(data.githubUrl, "_blank")}
                  class="github3"
                  alt="linkedin link"
                />
                <button
                  class="liveurl"
                  id="hoverbig"
                  onClick={() => window.open(data.live_url, "_blank")}
                  value="PLACEHOLDER"
                >
                  LIVE URL
                </button>
              </div>
              <p class="cards">{data.description}</p>
            </section>
          </button>
        ))}
      </section>
    </article>
  );
}

export default Portfolio;
