window.addEventListener("DOMContentLoaded", (event) => {
  getVisitCount();
});

const functionApi =
  "https://mxr-website-counter.azurewebsites.net/api/count?id=1";

const getVisitCount = () => {
  let count = 37;
  console.log("getVisitCount started.");
  fetch(functionApi)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log("Website called function API.");
      count = response.count;
      document.getElementsByClassName(
        "countertext"
      )[0].innerText = `VIEWS: ${count}`;
    })
    .catch(function (error) {
      console.log(error);
    });
  return count;
};

document.addEventListener("DOMContentLoaded", () => {
  // Get the computed value of the CSS variable
  const themeColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--primary-color")
    .trim();

  // Find the meta tag and update its content
  const metaTag = document.getElementById("theme-color-meta");
  if (metaTag) {
    metaTag.setAttribute("content", themeColor);
  }
});
