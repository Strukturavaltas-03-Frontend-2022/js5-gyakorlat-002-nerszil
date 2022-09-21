/*
Hozz létre egy Object-et `roles` névvel!
   Ebben legyen letárolva 3 reguláris kifejezés. Ezek az alábbiak:
   - `visa`: reguláris kifejezés Visa kártyaszámra 
   - `ip`: reguláris kifejezés IP címre
   - `mac`: reguláris kifejezés MAC címre   

   Írj egy `validate` nevű függvényt, ami paraméterként két paramétert vár. 
   Az első egy string, ami egy validálandó érték, a második pedig szintén egy string az alábbiak közül: 
   - `visa` 
   - `ip`
   - `mac` 
   Ez az érték az, hogy milyen adatot akarunk validálni. 
   A függvény visszatérési értéke egye `Boolean`. 
*/

const roles = {
    visa: /^4\d{15}$/
    ip: /^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(?!$)|$)){4}$/
    mac: /^[a-fA-F0-9]{2}(:[a-fA-F0-9]{2}){5}$/
}

const validate = (y, x) => {
    return roles[x].test(y);
}


export default validate;
