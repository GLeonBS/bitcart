import { Component, Input } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  template: `
    <a routerLink="/">
      <h1>{{title}}</h1>
    </a>
    <a routerLink="/cart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        height="24"
        width="24"
      >
        <path
          d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"
          fill="currentColor"
        />
      </svg>
      <h3>{{ total | async }} itens</h3>
    </a>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        background-color: #005589;
        padding: 8px 16px;
        justify-content: space-between;
        position: fixed;
        width: calc(100vw - 32px);
      }
      :host h1,
      :host h3 {
        margin: 0;
      }
      :host h3 {
        font-weight: normal;
      }
      :host a {
        display: flex;
        align-items: center;
        color: white;
        gap: 8px;
      }
    `,
  ],
})
export class ToolbarComponent {
  @Input() title = ''
  @Input() total = of(0);
}
