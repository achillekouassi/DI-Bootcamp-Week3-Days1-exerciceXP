// Exercice 1
// 1- Récupérez le divet console.log it
const container = document.getElementById("container")
console.log('container:', container)
// 2- Changez le nom "Pete" en "Richard"
document.querySelector(".list").children[1].textContent = "Richard"
// 3- Remplacez chaque prénom des deux <ul>'spar votre nom.
document.querySelectorAll(".list")[0].firstElementChild.textContent = " N'dri"
const lists = document.querySelectorAll(".list")
lists.forEach(list=>list.firstElementChild.textContent="N'dri")
// 4- Supprimez le <li>qui contient le nœud de texte "Sarah".
lists[1].children[1].remove()
// Bonus - Utilisation de Javascript
// 1- Ajoutez une classe appelée student_list aux deux <ul>'s.
lists.forEach(list => list.classList.add("student_list"))
// 2- Ajoutez les classes university et attendance au premier <ul>.
const firstUl = document.querySelector("ul.list.student_list")
firstUl.classList.add("university", "attendance")