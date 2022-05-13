const navBarContainer = document.querySelector(".nav-bar")
const navBarItemGroup = document.createElement("ul");
navBarContainer.appendChild(navBarItemGroup)

const navBarItem1 = document.createElement("li");
const navBarLink1 = document.createElement("a");
navBarLink1.setAttribute("href", "https://www.google.com/");
navBarLink1.setAttribute("target", "blank")
navBarLink1.innerText = "Google";
navBarItem1.appendChild(navBarLink1);

const navBarItem2 = document.createElement("li");
const navBarLink2 = document.createElement("a");
navBarLink2.setAttribute("href", "https://www.yahoo.com/");
navBarLink2.setAttribute("target", "blank")
navBarLink2.innerText = "Yahoo";
navBarItem2.appendChild(navBarLink2);

const navBarItem3 = document.createElement("li");
const navBarLink3 = document.createElement("a");
navBarLink3.setAttribute("href", "https://www.cnn.com/");
navBarLink3.setAttribute("target", "blank")
navBarLink3.innerText = "CNN"
navBarItem3.appendChild(navBarLink3);

const navBarItem4 = document.createElement("li");
const navBarLink4 = document.createElement("a");
navBarLink4.setAttribute("href", "https://www.youtube.com/");
navBarLink4.setAttribute("target", "blank")
navBarLink4.innerText = "Youtube";
navBarItem4.appendChild(navBarLink4); 

const navBarItem5 = document.createElement("li");
const navBarLink5 = document.createElement("a");
navBarLink5.setAttribute("href", "https://www.reddit.com/");
navBarLink5.setAttribute("target", "blank")
navBarLink5.innerText = "Reddit";
navBarItem5.appendChild(navBarLink5);

navBarItemGroup.appendChild(navBarItem1);
navBarItemGroup.appendChild(navBarItem2);
navBarItemGroup.appendChild(navBarItem3);
navBarItemGroup.appendChild(navBarItem4);
navBarItemGroup.appendChild(navBarItem5);

// he just took the whole unordered list and stamped it in as content.
// i went overboard here, but this was excellent practice, i suppose.