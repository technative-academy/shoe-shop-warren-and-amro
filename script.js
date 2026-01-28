const tabsContainer = document.querySelector(".tabs");
const tabButtons = tabsContainer.querySelectorAll(".tabs__button");
const tabContents = tabsContainer.querySelectorAll(".tabs__content");

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("click", (event) => tabClicked(event));
});

function tabClicked(event) {
    const clickedButton = event.currentTarget;
    const tabId = clickedButton.dataset.tab;
    const detailsElement = tabsContainer.querySelector(
      `.tabs__content[data-tab-content="${tabId}"]`
    );

    tabButtons.forEach((button) => {
      button.classList.remove("tabs__button--selected");
    });
    tabContents.forEach((content) => {
      content.classList.remove("tabs__content--selected");
    });

    clickedButton.classList.add("tabs__button--selected");
    detailsElement.classList.add("tabs__content--selected");
  }

// Expose the 'Tabs' class so that it can be imported by other files
// export default Tabs;
