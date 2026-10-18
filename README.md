# Claude-like UI for OpenCode WebUI

Estensione per [opencode-webui](https://www.npmjs.com/package/opencode-webui) che rende l'interfaccia più simile a **Claude** di Anthropic.

## Funzionalità

- Sidebar con sezioni **Skills**, **MCP** e **Plugin**
- Selettore modalità **Files / Git / Both** nel composer
- Stile visuale ispirato a Claude (colori, tipografia, card)
- Impostazioni configurabili (modalità predefinita, tema, sidebar)

## Installazione

### Metodo rapido (consigliato)

Copia la cartella dell'estensione nella directory delle estensioni di opencode-webui:

```bash
# Globale
git clone https://github.com/zema-tech/opencode-claude-like-ui.git ~/.config/opencode/webui-extensions/claude-like

# Oppure solo per un progetto
git clone https://github.com/zema-tech/opencode-claude-like-ui.git .opencode/webui-extensions/claude-like
```

Poi avvia (o riavvia) opencode-webui:

```bash
bunx opencode-webui
```

### Sviluppo con sandbox

```bash
bunx opencode-webui sandbox
```

## Struttura

```
claude-like/
├── manifest.json   # metadati + settings
├── index.tsx       # UI (sidebar + selettore modalità)
└── README.md
```

## Prossimi passi (da implementare)

- [ ] Scansione reale delle cartelle Skills
- [ ] Lettura server MCP da `opencode.json`
- [ ] Lista plugin installati
- [ ] Persistenza della modalità Files/Git tramite settings
- [ ] Integrazione con `engine/` per influenzare i tool disponibili
- [ ] Supporto dark mode

## Licenza

MIT
