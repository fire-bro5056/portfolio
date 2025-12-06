const buttons = document.querySelectorAll('.menu_link') 
const sections = document.querySelectorAll('section')
let active = document.querySelector('.active')
window.addEventListener('scroll',()=>{
    const currentSection=getCurrentSection()
    console.log(currentSection)
})
function getCurrentSection(){
    const position =window.scrollY
    for(let section of sections){
        const sectionTop= section.offsetTop
        const sectionBottom= section.offsetTop+ section.offsetHeight
        if (position>=sectionTop&&position<sectionBottom){
             return section

        }
        
            

    }
}