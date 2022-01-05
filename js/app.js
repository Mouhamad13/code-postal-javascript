
document.querySelector('#cp').addEventListener('input',function(){
    if (this.value.length == 5) {
        let url=`https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom,code,codesPotaux,codeDepartement,codeRegion,population&format=json&geometry=centre`;
           
        fetch(url).then((response)=>
            response.json().then((data) =>{
                let affiche = '<ul>'
                for (let ville of data) {
                    affiche +=`<li><strong>${ville.nom}</strong> - ${ville.population} habitants</li>`;
                }
                affiche += '</ul>'
                document.querySelector('#villes').innerHTML = affiche;
            })
            );
    }
});
