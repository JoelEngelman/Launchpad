import { useEffect, useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  ExternalLink,
  GitBranch,
  Globe,
  Layers3,
  MousePointer2,
  Save,
  Sparkles,
  Star,
  Trash2,
  Zap,
} from "lucide-react";

import "./index.css";

const features = [
  {
    icon: GitBranch,
    title: "Connect GitHub",
    text: "Paste a public repository and Launchpad reads the project automatically.",
  },
  {
    icon: Sparkles,
    title: "Generate the page",
    text: "Launchpad turns your project into a polished launch page in seconds.",
  },
  {
    icon: Layers3,
    title: "Customize everything",
    text: "Fine-tune the look, sections, content and presentation of your page.",
  },
];

const defaultEditor = {
  tagline: "A project worth sharing.",
  buttonText: "Explore project",
  showHero: true,
  showFeatures: true,
  showAbout: true,
  showLinks: true,
  about:
    "This project was created to solve a problem, explore an idea, or build something new.",
};

function App() {
  const [repo, setRepo] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [error, setError] = useState("");
  const [project, setProject] = useState(null);

  const [editing, setEditing] = useState(false);
  const [editor, setEditor] = useState(defaultEditor);

  const [saved, setSaved] = useState(false);
  const [published, setPublished] = useState(false);
  const [copied, setCopied] = useState(false);
  const [page, setPage] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const savedProject = localStorage.getItem("launchpad-project");

    if (!savedProject) {
      return;
    }

    try {
      const parsed = JSON.parse(savedProject);

      if (parsed.project) {
        setProject(parsed.project);
      }

      if (parsed.editor) {
        setEditor({
          ...defaultEditor,
          ...parsed.editor,
        });
      }
    } catch {
      localStorage.removeItem("launchpad-project");
    }
  }, []);
 if (page === "hub") {
  return (
    <div className="hub-page">
      <nav className="hub-navbar">
        <button
          className="hub-brand"
          onClick={() => setPage("home")}
        >
          <span className="hub-brand-mark">L</span>
          Launchpad
        </button>

        <div className="hub-nav-links">
          <button
            className="hub-nav-link active"
            onClick={() => setPage("hub")}
          >
            Joel Hub
          </button>

          <button
            className="hub-nav-link"
            onClick={() => setPage("home")}
          >
            Create a project
          </button>
        </div>
      </nav>

      <main className="hub-content">

        {/* HERO */}
        <section className="hub-hero">
          <div className="hub-eyebrow">
            <span className="hub-dot"></span>
            Joel's projects
          </div>

          <h1>
            A place for
            <br />
            <span>everything I've built.</span>
          </h1>

          <p>
            Explore my apps, games, websites, experiments,
            and other things I've made.
          </p>
        </section>

        {/* FILTERS */}
        <section className="hub-toolbar">
          <div className="hub-filters">
            <button className="hub-filter active">
              All
            </button>

            <button className="hub-filter">
              Apps
            </button>

            <button className="hub-filter">
              Games
            </button>

            <button className="hub-filter">
              Websites
            </button>
          </div>

          <span className="hub-project-count">
            7 projects
          </span>
        </section>

        {/* PROJECT GRID */}
        <section className="hub-projects">

          {/* PULSE */}
          <a
            className="hub-card featured"
            href="https://joelengelman.github.io/Pulse/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="hub-card-image">
              <img
                src="https://joelengelman.github.io/android-chrome-192x192.png"
                alt="Pulse"
              />
            </div>

            <div className="hub-card-content">
              <div className="hub-card-top">
                <span className="hub-card-category">
                  App
                </span>

                <span className="hub-card-arrow">
                  ↗
                </span>
              </div>

              <h2>Pulse</h2>

              <p>
                A modern messaging and calling app
                built around simple, real-time
                communication.
              </p>

              <div className="hub-card-footer">
                <span>Messaging</span>
                <span>↗</span>
              </div>
            </div>
          </a>


          {/* FLUXCODE */}
          <a
            className="hub-card"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            <div className="hub-card-image">
              <img
                src="https://joelengelman.github.io/FluxIDE/android-chrome-512x512.png"
                alt="FluxCode"
              />
            </div>

            <div className="hub-card-content">
              <div className="hub-card-top">
                <span className="hub-card-category">
                  Developer tool
                </span>

                <span className="hub-card-arrow">
                  ↗
                </span>
              </div>

              <h2>FluxCode</h2>

              <p>
                A modern coding environment for
                building and experimenting with software.
              </p>

              <div className="hub-card-footer">
                <span>Development</span>
                <span>Coming soon</span>
              </div>
            </div>
          </a>


          {/* FLUXSTUDIO */}
          <a
            className="hub-card"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            <div className="hub-card-image">
              <img
                src="https://joelengelman.github.io/FluxIDE/android-chrome-512x512.png"
                alt="FluxStudio"
              />
            </div>

            <div className="hub-card-content">
              <div className="hub-card-top">
                <span className="hub-card-category">
                  IDE
                </span>

                <span className="hub-card-arrow">
                  ↗
                </span>
              </div>

              <h2>FluxStudio</h2>

              <p>
                A playground and studio for creating
                with the Flux programming language.
              </p>

              <div className="hub-card-footer">
                <span>Development</span>
                <span>Coming soon</span>
              </div>
            </div>
          </a>


          {/* FLUXIDE */}
          <a
            className="hub-card"
            href="https://joelengelman.github.io/FluxIDE/"
            onClick={(e) => e.preventDefault()}
          >
            <div className="hub-card-image">
              <img
                src="https://joelengelman.github.io/FluxIDE/android-chrome-512x512.png"
                alt="FluxIDE"
              />
            </div>

            <div className="hub-card-content">
              <div className="hub-card-top">
                <span className="hub-card-category">
                  IDE
                </span>

                <span className="hub-card-arrow">
                  ↗
                </span>
              </div>

              <h2>FluxIDE</h2>

              <p>
                A broader coding environment inspired
                by tools like VS Code and Xcode.
              </p>

              <div className="hub-card-footer">
                <span>Development</span>
                <span>Coming soon</span>
              </div>
            </div>
          </a>


          {/* SURVIVAL SKIES */}
          <a
            className="hub-card"
            href="https://joelengelman.github.io/Survival-Skies/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="hub-card-image">
              <img
                src="https://joelengelman.github.io/SURVIVAL%20SKIES.png"
                alt="Survival Skies"
              />
            </div>

            <div className="hub-card-content">
              <div className="hub-card-top">
                <span className="hub-card-category">
                  Game
                </span>

                <span className="hub-card-arrow">
                  ↗
                </span>
              </div>

              <h2>Survival Skies</h2>

              <p>
                A survival game built for the web.
              </p>

              <div className="hub-card-footer">
                <span>Game</span>
                <span>↗</span>
              </div>

              <div className="hub-card-note">
                Character speech is AI-generated.
              </div>
            </div>
          </a>


          {/* JGAMEZ */}
          <a
            className="hub-card"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            <div className="hub-card-image">
              <img
                src="PASTE_JGAMEZ_IMAGE_URL_HERE"
                alt="JGamez"
              />
            </div>

            <div className="hub-card-content">
              <div className="hub-card-top">
                <span className="hub-card-category">
                  Games
                </span>

                <span className="hub-card-arrow">
                  ↗
                </span>
              </div>

              <h2>JGamez</h2>

              <p>
                A home for games and experiments
                I've made.
              </p>

              <div className="hub-card-footer">
                <span>Games</span>
                <span>Coming soon</span>
              </div>
            </div>
          </a>


          {/* GEOMETRY JUMP */}
          <a
            className="hub-card"
            href="https://thegeometryjump.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="hub-card-image">
              <img
                src="https://joelengelman.github.io/JEMusic/Screenshot_2-8-2026_12419_scratch.mit.edu.jpeg"
                alt="Geometry Jump"
              />
            </div>

            <div className="hub-card-content">
              <div className="hub-card-top">
                <span className="hub-card-category">
                  Game
                </span>

                <span className="hub-card-arrow">
                  ↗
                </span>
              </div>

              <h2>Geometry Jump</h2>

              <p>
                A fast-paced platform game inspired
                by classic rhythm-based games.
              </p>

              <div className="hub-card-footer">
                <span>Game</span>
                <span>↗</span>
              </div>
            </div>
          </a>

        </section>


        {/* BOTTOM CTA */}
        <section className="hub-bottom">
          <div>
            <span className="hub-eyebrow">
              Keep building
            </span>

            <h2>
              More projects
              <br />
              coming soon.
            </h2>

            <p>
              This hub grows every time I create
              something new.
            </p>
          </div>

          <button
            className="hub-create-button"
            onClick={() => setPage("home")}
          >
            Create a project
            <span>→</span>
          </button>
        </section>

      </main>
    </div>
  );
}
  const updateEditor = (key, value) => {
    setEditor((current) => ({
      ...current,
      [key]: value,
    }));

    setSaved(false);
    setPublished(false);
  };

  const generate = async () => {
    if (!repo.trim()) {
      setError("Please enter a GitHub repository URL.");
      return;
    }

    const cleanRepo = repo.trim().replace(/\/+$/, "");
    const parts = cleanRepo.split("/");

    if (
      parts.length < 5 ||
      parts[0] !== "https:" ||
      parts[1] !== "" ||
      parts[2] !== "github.com" ||
      !parts[3] ||
      !parts[4]
    ) {
      setError("Please enter a valid GitHub repository URL.");
      return;
    }

    setError("");

    try {
      const response = await fetch(
        `https://api.github.com/repos/${parts[3]}/${parts[4]}`
      );

      if (!response.ok) {
        setError("Repository not found or inaccessible.");
        return;
      }

      const data = await response.json();

      setProject(data);
      setEditor({
        ...defaultEditor,
        tagline:
          data.description || defaultEditor.tagline,
      });

      setSubmitted(true);
      setEditing(true);
      console.log("EDITOR SHOULD OPEN");
      setPublished(false);
    } catch {
      setError("Something went wrong while contacting GitHub.");
    }
  };

  const createProject = () => {
    setEditing(false);
    setProject(null);
    setRepo("");
    setSubmitted(false);
    setError("");
    setSaved(false);
    setPublished(false);
    setCopied(false);
    setEditor(defaultEditor);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const saveProject = () => {
    if (!project) {
      return;
    }

    localStorage.setItem(
      "launchpad-project",
      JSON.stringify({
        project,
        editor,
      })
    );

    setSaved(true);
    setPublished(false);
  };

  const publishProject = () => {
    if (!project) {
      return;
    }

    localStorage.setItem(
      "launchpad-project",
      JSON.stringify({
        project,
        editor,
      })
    );

    setPublished(true);
    setSaved(true);
  };

  const copyProjectLink = async () => {
    if (!project) {
      return;
    }

    const slug = project.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    const fakePublicUrl = `${window.location.origin}/project/${slug}`;

    try {
      await navigator.clipboard.writeText(fakePublicUrl);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  const resetEditor = () => {
    setEditor({
      ...defaultEditor,
      tagline: project?.description || defaultEditor.tagline,
    });

    setSaved(false);
    setPublished(false);
  };

  if (editing && project) {
    return (
      <div className="app editor-app">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <header className="editor-navbar">
          <button
            className="editor-back"
            onClick={() => setEditing(false)}
          >
            <ArrowLeft size={17} />
            Back
          </button>

          <div className="editor-brand">
            <span className="brand-mark">
              <Zap size={17} />
            </span>
            <span>Launchpad</span>
          </div>

          <div className="editor-actions">
            <button
              className="editor-secondary-button"
              onClick={resetEditor}
            >
              Reset
            </button>

            <button
              className="editor-secondary-button"
              onClick={saveProject}
            >
              <Save size={16} />
              {saved ? "Saved" : "Save"}
            </button>

            <button
              className="editor-publish-button"
              onClick={publishProject}
            >
              <Globe size={16} />
              {published ? "Published" : "Publish"}
            </button>
          </div>
        </header>

        <main className="editor-layout">
          <aside className="editor-sidebar">
            <div className="editor-sidebar-heading">
              <span className="section-label">Project editor</span>
              <h1>Customize</h1>
              <p>
                Build your project page and see your changes instantly.
              </p>
            </div>

            <div className="editor-card">
              <label>Project name</label>

              <input
                value={project.name || ""}
                onChange={(e) =>
                  setProject((current) => ({
                    ...current,
                    name: e.target.value,
                  }))
                }
              />
            </div>

            <div className="editor-card">
              <label>Tagline</label>

              <textarea
                value={editor.tagline}
                onChange={(e) =>
                  updateEditor("tagline", e.target.value)
                }
                rows={3}
              />
            </div>

            <div className="editor-card">
              <label>About your project</label>

              <textarea
                value={editor.about}
                onChange={(e) =>
                  updateEditor("about", e.target.value)
                }
                rows={5}
              />
            </div>

            <div className="editor-card">
              <label>Button text</label>

              <input
                value={editor.buttonText}
                onChange={(e) =>
                  updateEditor("buttonText", e.target.value)
                }
              />
            </div>

            <div className="editor-card">
              <label>Sections</label>

              <div className="section-toggles">
                <button
                  className={editor.showHero ? "toggle active" : "toggle"}
                  onClick={() =>
                    updateEditor("showHero", !editor.showHero)
                  }
                >
                  <span>Hero</span>
                  <span>{editor.showHero ? "On" : "Off"}</span>
                </button>

                <button
                  className={
                    editor.showFeatures
                      ? "toggle active"
                      : "toggle"
                  }
                  onClick={() =>
                    updateEditor(
                      "showFeatures",
                      !editor.showFeatures
                    )
                  }
                >
                  <span>Features</span>
                  <span>{editor.showFeatures ? "On" : "Off"}</span>
                </button>

                <button
                  className={
                    editor.showAbout
                      ? "toggle active"
                      : "toggle"
                  }
                  onClick={() =>
                    updateEditor("showAbout", !editor.showAbout)
                  }
                >
                  <span>About</span>
                  <span>{editor.showAbout ? "On" : "Off"}</span>
                </button>

                <button
                  className={
                    editor.showLinks
                      ? "toggle active"
                      : "toggle"
                  }
                  onClick={() =>
                    updateEditor("showLinks", !editor.showLinks)
                  }
                >
                  <span>Links</span>
                  <span>{editor.showLinks ? "On" : "Off"}</span>
                </button>
              </div>
            </div>

            <button
              className="new-project-button"
              onClick={createProject}
            >
              <Sparkles size={17} />
              Create another project
            </button>
          </aside>

          <section className="editor-preview-area">
            <div className="preview-toolbar">
              <div>
                <span className="section-label">Live preview</span>
                <strong>{project.name}</strong>
              </div>

              <div className="preview-status">
                <span />
                Changes update instantly
              </div>
            </div>

            <div className="project-page-preview">
              {editor.showHero && (
                <section className="project-page-hero">
                  <div className="project-page-icon">
                    <Zap size={30} />
                  </div>

                  <div className="project-page-badge">
                    <span />
                    GitHub project
                  </div>

                  <h2>{project.name}</h2>

                  <p className="project-page-tagline">
                    {editor.tagline}
                  </p>

                  <div className="project-page-meta">
                    {project.language && (
                      <span>{project.language}</span>
                    )}

                    <span>
                      <Star size={14} />
                      {project.stargazers_count} stars
                    </span>

                    <span>
                      {project.forks_count} forks
                    </span>
                  </div>

                  <div className="project-page-owner">
                    <img
                      src={project.owner.avatar_url}
                      alt={project.owner.login}
                    />

                    <span>
                      Built by{" "}
                      <strong>{project.owner.login}</strong>
                    </span>
                  </div>

                  {editor.showLinks && (
                    <div className="project-page-buttons">
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="project-primary-button"
                      >
                        {editor.buttonText}
                        <ArrowRight size={17} />
                      </a>

                      <button
                        className="project-secondary-button"
                        onClick={copyProjectLink}
                      >
                        {copied ? (
                          <>
                            <Check size={17} />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={17} />
                            Copy link
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </section>
              )}

              {editor.showFeatures && (
                <section className="project-page-section">
                  <span className="section-label">
                    Project overview
                  </span>

                  <h3>Built to do something useful.</h3>

                  <p>
                    {project.description ||
                      "A project created with a clear idea and a purpose."}
                  </p>

                  <div className="project-mini-grid">
                    <div>
                      <GitBranch size={19} />
                      <strong>Open source</strong>
                      <span>Available on GitHub</span>
                    </div>

                    <div>
                      <Sparkles size={19} />
                      <strong>Customizable</strong>
                      <span>Designed with Launchpad</span>
                    </div>

                    <div>
                      <Globe size={19} />
                      <strong>Shareable</strong>
                      <span>Ready for the web</span>
                    </div>
                  </div>
                </section>
              )}

              {editor.showAbout && (
                <section className="project-page-section about-preview">
                  <span className="section-label">About</span>

                  <h3>About this project</h3>

                  <p>{editor.about}</p>
                </section>
              )}

              {editor.showLinks && (
                <section className="project-page-links">
                  <div>
                    <span className="section-label">
                      Explore
                    </span>
                    <h3>Keep building.</h3>
                  </div>

                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                    <ExternalLink size={16} />
                  </a>
                </section>
              )}
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <a className="brand" href="#">
          <span className="brand-mark">
            <Zap size={17} />
          </span>

          <span>Launchpad</span>
        </a>

        <nav className="nav-links">
          <a href="#how-it-works">How it works</a>
          <a href="#features">Features</a>
          <a href="#preview">Preview</a>
          <button
  className="nav-link"
  onClick={() => setPage("hub")}
>
  Joel Hub
</button>
        </nav>

        <button
          className="nav-button"
          onClick={() => {
            document
              .getElementById("get-started")
              ?.scrollIntoView({
                behavior: "smooth",
              });
          }}
        >
          Get started
        </button>
      </header>

      <main>
        <section className="hero hero-animate" id="get-started">
          <div className="eyebrow">
            <Sparkles size={15} />
            <span>Built for developers</span>
          </div>

          <h1>
            Your code deserves
            <br />
            <span>a better launch.</span>
          </h1>

          <p className="hero-copy">
            Turn a GitHub repository into a beautiful, polished
            project page that is ready to share with the world.
          </p>

          <div className="hero-form">
            <div className="input-wrapper">
              <GitBranch size={18} />

              <input
                value={repo}
                onChange={(e) => {
                  setRepo(e.target.value);
                  setSubmitted(false);
                  setError("");
                }}
                placeholder="https://github.com/username/project"
                aria-label="GitHub repository"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    generate();
                  }
                }}
              />
            </div>

            <button
              className="generate-button"
              onClick={generate}
            >
              <span>
                {submitted ? "Generated" : "Generate"}
              </span>

              {submitted ? (
                <Check size={18} />
              ) : (
                <ArrowRight size={18} />
              )}
            </button>
          </div>

          {error && (
            <p className="form-error">
              {error}
            </p>
          )}

          <div className="metadata">
            <span>
              <Check size={14} />
              No setup required
            </span>

            <span>
              <Globe size={14} />
              Share anywhere
            </span>

            <span>
              <MousePointer2 size={14} />
              Fully customizable
            </span>
          </div>
        </section>

        <section
          className="showcase"
          id="preview"
        >
          <div className="browser">
            <div className="browser-top">
              <div className="browser-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="browser-address">
                launchpad.dev/project
              </div>

              <div className="browser-top-spacer" />
            </div>

            <div className="browser-content">
              <div className="project-icon">
                <Zap size={28} />
              </div>

              <div className="project-badge">
                <span />
                Featured project
              </div>

              <h3>
                {project
                  ? project.name
                  : "ProjectOS"}
              </h3>

              <p>
                {project
                  ? project.description ||
                    "No description provided."
                  : "A modern operating system for your workflow."}
              </p>

              {project?.language && (
                <div className="project-language">
                  {project.language}
                </div>
              )}

              {project && (
                <div className="project-stats">
                  <span>
                    ⭐ {project.stargazers_count} stars
                  </span>

                  <span>
                    🍴 {project.forks_count} forks
                  </span>
                </div>
              )}

              {project && (
                <div className="project-owner">
                  <img
                    src={project.owner.avatar_url}
                    alt={project.owner.login}
                  />

                  <span>
                    {project.owner.login}
                  </span>
                </div>
              )}

              {project && (
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub →
                </a>
              )}

              <div className="preview-buttons">
                <span>Explore project</span>
                <span>GitHub</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="how-it-works"
        >
          <div className="section-heading">
            <span className="section-label">
              How it works
            </span>

            <h2>
              From repository
              <br />
              to launch page.
            </h2>

            <p>
              Three simple steps. No complicated setup.
              No hours spent making your project look
              presentable.
            </p>
          </div>

          <div className="steps">
            <article className="step">
              <span className="step-number">
                01
              </span>

              <div className="step-line" />

              <h3>
                Connect your project
              </h3>

              <p>
                Give Launchpad your public GitHub
                repository.
              </p>
            </article>

            <article className="step">
              <span className="step-number">
                02
              </span>

              <div className="step-line" />

              <h3>
                Customize your page
              </h3>

              <p>
                Edit the content and sections with
                a live preview.
              </p>
            </article>

            <article className="step">
              <span className="step-number">
                03
              </span>

              <div className="step-line" />

              <h3>
                Publish your launch
              </h3>

              <p>
                Save your project and get it ready
                to share.
              </p>
            </article>
          </div>
        </section>

        <section
          className="section features-section"
          id="features"
        >
          <div className="section-heading">
            <span className="section-label">
              Features
            </span>

            <h2>
              Everything your
              <br />
              project needs.
            </h2>

            <p>
              Launchpad keeps the process simple
              while giving you control over how
              your work is presented.
            </p>
          </div>

          <div className="features">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="feature"
                  key={feature.title}
                >
                  <div className="feature-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.text}</p>

                  <div className="feature-arrow">
                    <ArrowRight size={17} />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section
          className="bottom-cta"
          id="bottom-start"
        >
          <div className="cta-glow" />

          <span className="section-label">
            Start building
          </span>

          <h2>
            Ready to
            <br />
            <span>launch?</span>
          </h2>

          <p>
            Give your next project a homepage that
            feels as good as the project itself.
          </p>

          <button
            className="cta-button"
            onClick={() => {
              document
                .getElementById("get-started")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            <span>Get started</span>
            <ArrowRight size={18} />
          </button>
        </section>
      </main>

      <footer className="footer">
        <span className="footer-brand">
          Launchpad
        </span>

        <span>
          Built for people who build.
        </span>

        <span>
          © 2026
        </span>
      </footer>
    </div>
  );
}

export default App;