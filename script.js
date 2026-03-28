const home_div = document.querySelector('.home');
const sgi_open_button = document.querySelector('.sgi_open_button');
const sgi_edit_button = document.querySelector('.sgi_edit_button');
const study_guide_interface = document.querySelector('.study_guide_interface');
const study_guide_creator = document.querySelector('.study_guide_creator');
const sgi_close_button = document.querySelector('.sgi_close_button');
const sgc_close_button = document.querySelector('.sgc_close_button');

sgi_open_button.onclick = () => {
    home_div.style.display = 'none';
    study_guide_interface.style.display = 'block';
    study_guide_creator.style.display = 'none';
};

sgi_edit_button.onclick = () => {
    home_div.style.display = 'none';
    study_guide_interface.style.display = 'none';
    study_guide_creator.style.display = 'block';
};

sgi_close_button.onclick = () => {
    home_div.style.display = 'block';
    study_guide_interface.style.display = 'none';
    study_guide_creator.style.display = 'none';
};

sgc_close_button.onclick = () => {
    home_div.style.display = 'block';
    study_guide_interface.style.display = 'none';
    study_guide_creator.style.display = 'none';
};

