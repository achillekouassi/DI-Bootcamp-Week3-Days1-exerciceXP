// 2- Dans le <div>, modifiez la valeur de l'attribut id de navBar à socialNetworkNavigation , à l'aide de la setAttributeméthode
const navBar = document.getElementById("navBar")
console.log("navBar:", navBar)
navBar.setAttribute("id", "socialNetworkNavigation")
// 3- Nous allons ajouter un nouveau <li>au <ul>
// 3. 1- Tout d'abord, créez une nouvelle <li>balise (utilisez la createElementméthode).
const li = document.createElement("li")
console.log("li:", li)
// 3. 2- Créez un nouveau nœud de texte avec "Déconnexion" comme texte spécifié.
const logout = document.createTextNode("Logout")
console.log("logout:", logout)
// 3. 3- Ajoutez le nœud de texte au nœud de liste nouvellement créé ( <li>)
li.appendChild(logout)
console.log("li:", li)
// 3. 4- Enfin, ajoutez ce nœud de liste mis à jour à la liste non ordonnée ( <ul>), en utilisant la appendChildméthode.
const ul = navBar?.firstElementChild
ul?.appendChild(li)
//Utilisez les firstElementChildpropriétés et lastElementChildpour récupérer le premier et le dernier <li>élément de leur élément parent ( <ul>). Affichez le texte de chaque lien. ( Astuce : utilisez la textContentpropriété).
const firstLi = ul?.firstElementChild
const lastLi = ul?.lastElementChild
console.log("lastLi:", lastLi)
console.log("firstLi:", firstLi)
console.log("first li content")
console.log(firstLi?.textContent)
console.log("second li content")
console.log(lastLi?.textContent)