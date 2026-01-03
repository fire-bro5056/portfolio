const buttons = document.querySelectorAll('.menu_link') 
const sections = Array.from(document.querySelectorAll('section'))
let active = document.querySelector('.active')  


window.addEventListener('scroll',()=>{
    const currentSection=getCurrentSection();
    const index = sections.indexOf(currentSection);
    const newActive=buttons[index];
    active.classList.remove('active');
    newActive.classList.add('active')
    active=newActive;
    

})


function getCurrentSection(){
    const position =window.scrollY + 1
    for(let section of sections){
        const sectionTop= section.offsetTop
        const sectionBottom= section.offsetTop+ section.offsetHeight
        if (position>=sectionTop&&position<sectionBottom){
             return section

        }
        
            

    }
    return sections.at(-1)
}
const menuToggleBtn=document.querySelector(".menu_toggle")
const menu=document.querySelector(".menu")
menuToggleBtn.addEventListener('click',ToggleMenu)
function ToggleMenu(){
menu.classList.toggle('oppened')
}