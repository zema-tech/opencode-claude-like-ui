// Claude-like UI Extension for opencode-webui
// https://github.com/zema-tech/opencode-claude-like-ui

export const id = "claude-like";

export function register(ctx: any) {
  const { contribute, settings, hook } = ctx;

  // Sidebar items
  contribute("sidebar.items", {
    id: "skills",
    label: "Skills",
    icon: "sparkles",
    order: 20,
    component: SkillsPanel,
  });

  contribute("sidebar.items", {
    id: "mcp",
    label: "MCP",
    icon: "plug",
    order: 30,
    component: McpPanel,
  });

  contribute("sidebar.items", {
    id: "plugins",
    label: "Plugin",
    icon: "puzzle",
    order: 40,
    component: PluginsPanel,
  });

  // Mode selector in composer toolbar
  contribute("composer.toolbar", {
    id: "mode-selector",
    component: ModeSelector,
  });

  // Optional: apply Claude-like styles
  if (settings?.theme === "claude" || true) {
    contribute("styles", {
      id: "claude-theme",
      css: `
        :root {
          --claude-bg: #faf9f5;
          --claude-sidebar: #f5f4ef;
          --claude-accent: #d97757;
          --claude-text: #1a1a1a;
          --claude-border: #e5e4df;
        }
        .claude-like-panel {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: var(--claude-text);
        }
        .claude-like-panel h3 {
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 12px 0;
          color: #333;
        }
        .claude-like-card {
          background: white;
          border: 1px solid var(--claude-border);
          border-radius: 8px;
          padding: 12px;
          margin-bottom: 8px;
        }
        .mode-selector {
          display: flex;
          gap: 4px;
          background: #f0efe9;
          border-radius: 6px;
          padding: 2px;
        }
        .mode-selector button {
          border: none;
          background: transparent;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 12px;
          cursor: pointer;
        }
        .mode-selector button.active {
          background: white;
          box-shadow: 0 1px 2px rgba(0,0,0,0.08);
        }
      `,
    });
  }
}

// ---- Components ----

function SkillsPanel() {
  return (
    <div className="claude-like-panel" style={{ padding: "16px" }}>
      <h3>Skills</h3>
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>
        Skill presenti in .opencode/skills e ~/.config/opencode/skills
      </p>
      <div className="claude-like-card">
        <strong>Esempio skill</strong>
        <div style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>
          Sostituisci questa lista con la scansione reale delle cartelle skill
        </div>
      </div>
    </div>
  );
}

function McpPanel() {
  return (
    <div className="claude-like-panel" style={{ padding: "16px" }}>
      <h3>MCP Servers</h3>
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>
        Server MCP configurati in opencode.json
      </p>
      <div className="claude-like-card">
        <strong>Nessun server caricato</strong>
        <div style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>
          Implementa la lettura della config MCP
        </div>
      </div>
    </div>
  );
}

function PluginsPanel() {
  return (
    <div className="claude-like-panel" style={{ padding: "16px" }}>
      <h3>Plugin</h3>
      <p style={{ fontSize: "13px", color: "#666", marginBottom: "12px" }}>
        Plugin attivi di OpenCode
      </p>
      <div className="claude-like-card">
        <strong>Lista plugin</strong>
        <div style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>
          Da implementare: lettura da ~/.config/opencode/plugins
        </div>
      </div>
    </div>
  );
}

function ModeSelector() {
  // Nota: in un'implementazione reale usa lo state/settings di opencode-webui
  return (
    <div className="mode-selector">
      <button className="active">Files</button>
      <button>Git</button>
      <button>Both</button>
    </div>
  );
}
