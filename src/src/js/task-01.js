const listOfCat = document.querySelector("#categories").children;

console.log(`Number of Categories: ${listOfCat.length}

category: ${listOfCat[0].firstElementChild.textContent}
Elements: ${listOfCat[0].lastElementChild.childElementCount}

category: ${listOfCat[1].firstElementChild.textContent}
Elements: ${listOfCat[1].lastElementChild.childElementCount}

category: ${listOfCat[2].firstElementChild.textContent}
Elements: ${listOfCat[2].lastElementChild.childElementCount}`)

