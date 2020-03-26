let theStateOfTheInterface = (event) => { 
  
  // How much has scrolled?
  let winY = window.scrollY

  let allSections = '' // Start with blank, in case there are no sections

  // For each section...
  document.querySelectorAll('section').forEach(($sec) => {

    let secH = $sec.scrollHeight  // How tall is this element?
    let topPx = $sec.offsetTop  // How far is the top of this element from the top of the document?
    let botPx = topPx + secH    // How far is the bottom of this element from the top of the document?

    let seenThese = ''  // Start with blank: no class needed

    // If the scroll position is at or below the element, AND it's also above the bottom of the element
    if (winY >= topPx && winY < botPx) {
      seenThese = 'class="seen"'  // add a class to this element
    }

    // If you wanted the above to accumulate elements you have passed, just remove the second condition, like this:
    // if (winY >= topPx) { seenThese = 'class="seen"' }

    // Check the CSS class definition to see what it does (assume each has an <h2>)
    allSections += `<li ${seenThese}><a href="$">${ $sec.querySelector('h2').textContent }</a></li>`
  })

  // Print out all the heading names
  document.querySelector('.panel').innerHTML = allSections
}



window.addEventListener('load', theStateOfTheInterface)
window.addEventListener('scroll', theStateOfTheInterface)
window.addEventListener('resize', theStateOfTheInterface)
