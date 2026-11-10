import { LitElement, html, css, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { CardConfig, HomeAssistant } from "./types";

@customElement("austria-public-transport-card")
export class AustriaPublicTransportCard extends LitElement {
    @property({attribute:false}) hass?: HomeAssistant;

    @state() private config?: CardConfig;

    setConfig(config:CardConfig):void {
        if (!config.entity) {
            throw new Error("Please set 'entity'");
        }
        this.config = config
    }

    getCardSize():number {
        return 3;
    }

    protected render(){
        if (!this.config || !this.hass) return nothing;

    const stateObj = this.hass.states[this.config.entity];
    const title = this.config.title ?? "Departures";

    if (!stateObj) {
      return html`<ha-card .header=${title}>
        <div class="content">Entity not found: ${this.config.entity}</div>
      </ha-card>`;
    }

    return html`<ha-card .header=${title}>
      <div class="content">
        <div><b>State:</b> ${stateObj.state}</div>
        <pre>${JSON.stringify(stateObj.attributes, null, 2)}</pre>
      </div>
    </ha-card>`;
  }

  static styles = css`
    .content {
      padding: 0 16px 16px;
    }
    pre {
      font-size: 12px;
      overflow-x: auto;
      background: var(--secondary-background-color);
      padding: 8px;
      border-radius: 4px;
    }
  `;
    }
