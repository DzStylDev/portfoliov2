let tabs = document.querySelectorAll("[data-tabs-target]");
let panelTab = Array.from(
  document.querySelectorAll("#defaultTabContent")[0].children
);

if (!panelTab[0].classList.contains("hidden")) {
  tabs[0].classList.add("text-white");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    let attrTab = tab.getAttribute("aria-controls");

    panelTab.forEach((panel) => {
      let panelId = panel.getAttribute("id");

      if (attrTab === panelId) {
        console.log(panelId)
        tab.classList.add("text-white");
        tab.classList.remove("text-gray-400");
        panel.classList.remove("hidden", "opacity-0");
        panel.classList.remove("invisible", "opacity-0");
        panel.classList.add("visible", "opacity-100");
      } else {
        let tabNotUsed = document.querySelectorAll(
          `[data-tabs-target="#${panelId}"]`
        );
        tabNotUsed[0].classList.remove("text-white");
        tabNotUsed[0].classList.add("text-gray-400");
        panel.classList.add("invisible", "opacity-0");
        panel.classList.add("hidden", "opacity-0");
      }
    });
  });
});
