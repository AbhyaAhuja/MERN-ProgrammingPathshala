// const firstNameChange=()=>{
//     console.log('firstName');
//     // would show when we click(outside)
// }

const firstNameChange = (e) => {

    const val = e.target.value;
    if (val.length > 3) {
        console.log("correct")
        // irregular behaviour coz of keydown -> 1 ka delay
    }
    
}

const submitForm = (e) => {
    e.preventDefault()
    // console.log(e)
    // console.dir(e.target)
    // e.target gives a list/iterator of all the values of form

    const t = e.target
    const res = {
        hobbies: [],
    };
    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;

//  ______________________________________________
        //    when we want to print name and value as an object

        // initially, key= hobbies, value = empty array

        if (ty != 'submit') {
            const vl = t[i].value;
            const nm = t[i].name
            if (ty == 'checkbox' && t[i].checked) {
                res.hobbies.push(vl);
            }
            if (ty != 'checkbox') {
                res[nm] = vl;
            }
        }

    }
    console.log(res);



    // console.dir(t[i].type, t[i].value);


    // console.dir(t[i].type);
    // console.dir(t[i].value);

}