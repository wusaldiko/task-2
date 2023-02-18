class UserCard extends HTMLElement {
  render({ name, username, email, address, phone, website }) {
    this.innerHTML = `
          <div class="card">
                  <div class="card__head">
                          <img src="https://cdn.britannica.com/25/160325-050-EB1C8FB7/image-instruments-Earth-satellite-NASA-Suomi-National-2012.jpg"
                              alt="user image">
                      <ul>
                          <li>${name}</li>
                          <li>${username}</li>
                          <li>${email}</li>
                          <li>${address?.street}</li>
                      </ul>
                  </div>
                  <div class="card__body">
                      <p>${phone}</p>
                      <p>${website}</p>
                      <p>${website}</p>
                      <p>${address?.geo.lat}</p>
                      <p>${address?.geo.lng}</p>
                  </div>
              </div>
          `;
  }

  static get observedAttributes() {
    return ["user-data"];
  }

  attributeChangedCallback(name, _, newValue) {
    if (name === "user-data") {
      this.render(JSON.parse(newValue));
    }
  }
}

customElements.define("user-card", UserCard);
