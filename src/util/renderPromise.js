import React from 'react';
import ReactDOM from 'react-dom';
function renderPromise(promise, hyperscript, node) {
    const spinner = createSpinner();
    spinner.render(node); // clears this.resultDiv of all its children, i.e. wipes the previous search results. Then adds the spinner
    promise /* TODO: read the params as the values of this.textControl and this.typeControl, in the correct order */
        .then(result => hyperscript(result).render(node))
        /* TODO: for each element in dishes (use map()), call createDishDisplay(dish), render the resulting array in resultDiv */
        .catch(err => h("div", err.toString()).render(node)) /* TODO: render the error text to resultDiv */
        .finally(() => spinner.remove()) /* TODO: remove the spinner  from its parent */
}

function createSpinner() {
    return h("div", h("img", { className: "loadingPicture", src: "https://ak6.picdn.net/shutterstock/videos/1011054266/thumb/1.jpg" }))
        // return h("img", { src: "https://ak6.picdn.net/shutterstock/videos/1011054266/thumb/1.jpg" })
}
// export default renderPromise;
// export default createSpinner;