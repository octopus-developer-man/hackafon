// DOM Elements
const home_div = document.querySelector('.home');
const sgi_open_button = document.querySelector('.sgi_open_button');
const sgi_edit_button = document.querySelector('.sgi_edit_button');
const study_guide_interface = document.querySelector('.study_guide_interface');
const study_guide_creator = document.querySelector('.study_guide_creator');
const sgi_close_button = document.querySelector('.sgi_close_button');
const sgc_close_button = document.querySelector('.sgc_close_button');
const sgi_next_button = document.querySelector('.sgi_next_button');

const slide_element = document.querySelector('.slide');
const slide_title = document.querySelector('.slide_title');
const slide_content = document.querySelector('.slide_content');
const slide_image = document.querySelector('.slide_image');
const slide_button_1 = document.querySelector('.slide_button_1');
const slide_button_2 = document.querySelector('.slide_button_2');
const slide_button_3 = document.querySelector('.slide_button_3');
const slide_button_4 = document.querySelector('.slide_button_4');

// Export/Import elements
const sgc_export_button = document.querySelector('.sgc_export_button');
const sgc_import_button = document.querySelector('.sgc_import_button');
const export_modal = document.getElementById('export_modal');
const import_modal = document.getElementById('import_modal');
const export_json = document.getElementById('export_json');
const import_json = document.getElementById('import_json');

// Slide Sets elements
const slide_sets_scrollable = document.getElementById('slide_sets_scrollable');
const save_current_button = document.querySelector('.save_current_button');
const SLIDE_SETS_COUNT = 12;
const SLIDE_SETS_STORAGE_KEY = 'hackafon_slide_sets';

const slides = [
    // --- SPACE INFORMATION SLIDES ---
    {
        title: 'Welcome to the Cosmos',
        content: 'Space is a vast expanse filled with stars, planets, galaxies, and mysteries we are still discovering.',
        image: "nebula.jpeg",
        has_image: true,
        class: 'information',
        button1: 'Next',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A'
    },
    {
        title: 'The Solar System',
        content: 'Our solar system contains eight planets orbiting the Sun, each with unique features and environments.',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'information',
        button1: 'Next',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A'
    },
    {
        title: 'Q1: What is the Sun?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'question',
        button1: 'A star',
        button2: 'A planet',
        button3: 'A comet',
        button4: 'A galaxy',
        correct_answer: '1'
    },
    {
        title: 'Galaxies Explained',
        content: 'Galaxies are massive collections of stars, dust, and dark matter. The Milky Way is our home galaxy.',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'information',
        button1: 'Next',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A'
    },
    {
        title: 'Q2: What galaxy do we live in?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'question',
        button1: 'Andromeda',
        button2: 'Milky Way',
        button3: 'Sombrero Galaxy',
        button4: 'Whirlpool Galaxy',
        correct_answer: '2'
    },
    {
        title: 'Stars and Their Life Cycle',
        content: 'Stars are born in nebulae, live for millions to billions of years, and end as white dwarfs, neutron stars, or black holes.',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'information',
        button1: 'Next',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A'
    },
    {
        title: 'Q3: Where are stars born?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'question',
        button1: 'Nebulae',
        button2: 'Asteroids',
        button3: 'Moons',
        button4: 'Black holes',
        correct_answer: '1'
    },
    {
        title: 'Planets: Rocky vs Gas Giants',
        content: 'Rocky planets like Earth have solid surfaces. Gas giants like Jupiter are massive and made mostly of hydrogen and helium.',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'information',
        button1: 'Next',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A'
    },
    {
        title: 'Q4: Which is a gas giant?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'question',
        button1: 'Earth',
        button2: 'Mars',
        button3: 'Jupiter',
        button4: 'Mercury',
        correct_answer: '3'
    },
    {
        title: 'Black Holes',
        content: 'Black holes are regions of space where gravity is so strong that not even light can escape.',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'information',
        button1: 'Next',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A'
    },
    {
        title: 'Q5: What is a black hole?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'question',
        button1: 'A collapsed star',
        button2: 'A type of planet',
        button3: 'A glowing nebula',
        button4: 'A comet',
        correct_answer: '1'
    },
    {
        title: 'Exoplanets',
        content: 'Exoplanets are planets that orbit stars outside our solar system. Thousands have been discovered.',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'information',
        button1: 'Next',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A'
    },
    {
        title: 'Q6: What is an exoplanet?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'question',
        button1: 'A planet outside our solar system',
        button2: 'A dwarf star',
        button3: 'A type of asteroid',
        button4: 'A moon of Jupiter',
        correct_answer: '1'
    },
    {
        title: 'Nebulae',
        content: 'Nebulae are giant clouds of gas and dust where stars form. Some are bright and colorful.',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'information',
        button1: 'Next',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A'
    },
    {
        title: 'Q7: What are nebulae made of?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'question',
        button1: 'Gas and dust',
        button2: 'Ice and rock',
        button3: 'Metal and lava',
        button4: 'Water and soil',
        correct_answer: '1'
    },
    {
        title: 'The Moon',
        content: 'Earth’s Moon is our closest celestial neighbor and influences tides and natural cycles.',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'information',
        button1: 'Next',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A'
    },
    {
        title: 'Q8: What causes ocean tides?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'question',
        button1: 'The Moon’s gravity',
        button2: 'Earth’s rotation only',
        button3: 'Sunlight pressure',
        button4: 'Wind currents',
        correct_answer: '1'
    },
    {
        title: 'Comets',
        content: 'Comets are icy bodies that release gas and dust, forming glowing tails when near the Sun.',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'information',
        button1: 'Next',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A'
    },
    {
        title: 'Q9: What are comets mostly made of?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'question',
        button1: 'Ice and dust',
        button2: 'Metal and rock',
        button3: 'Gas only',
        button4: 'Liquid water',
        correct_answer: '1'
    },
    {
        title: 'The Speed of Light',
        content: 'Light travels at about 300,000 kilometers per second, the fastest speed in the universe.',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'information',
        button1: 'Next',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A'
    },
    {
        title: 'Q10: What is the fastest known speed?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'question',
        button1: 'Speed of sound',
        button2: 'Speed of light',
        button3: 'Speed of gravity',
        button4: 'Speed of planets',
        correct_answer: '2'
    },
    {
        title: 'Q10: What is the fastest known speed?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'question',
        button1: 'Speed of sound',
        button2: 'Speed of light',
        button3: 'Speed of gravity',
        button4: 'Speed of planets',
        correct_answer: '2'
    },
    {
        title: 'This is Ellen Joe',
        content: 'Ellen Joe is a Zenless Zone Zero character known for her shark tail and stylish combat skills.',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'information',
        button1: 'Next',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A'
    },
    {
        title: 'Is Ellen Joe tuff?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'Yes',
        button2: 'No',
        button3: 'Maybe',
        button4: 'I don’t know',
        correct_answer: '1'    },
    {
        title: 'Fill in the Blank: Stars',
        content: 'Stars are born in _______ clouds of gas and dust.',
        image: 'nebula.jpeg',
        has_image: true,
        class: 'fill-in-the-blank',
        button1: '',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A',
        blank_answer: 'nebula'    }
];

// Normalize slides to ensure they have all required properties
slides.forEach(slide => {
    if (!slide.blank_answer) {
        slide.blank_answer = '';
    }
});

let current_slide_index = 0;
let question_answered = false;
 
function disable_buttons() {
    slide_button_1.style.pointerEvents = 'none';
    slide_button_2.style.pointerEvents = 'none';
    slide_button_3.style.pointerEvents = 'none';
    slide_button_4.style.pointerEvents = 'none';
}
function enable_buttons() {
    slide_button_1.style.pointerEvents = 'auto';
    slide_button_2.style.pointerEvents = 'auto';
    slide_button_3.style.pointerEvents = 'auto';
    slide_button_4.style.pointerEvents = 'auto';
}
function reset_button_styles() {
    slide_button_1.style.backgroundColor = 'var(--color-two)';
    slide_button_2.style.backgroundColor = 'var(--color-two)';
    slide_button_3.style.backgroundColor = 'var(--color-two)';
    slide_button_4.style.backgroundColor = 'var(--color-two)';
}

function check_answer(button_letter) {
    const slide = slides[current_slide_index];
    
    // Only check for question slides
    if (slide.class !== 'question' || question_answered) {
        return;
    }
    question_answered = true;

    reset_button_styles();
    disable_buttons();

    // Show correct answer in green
    if (slide.correct_answer === '1') {
        slide_button_1.style.backgroundColor = '#4CAF50';
    } else if (slide.correct_answer === '2') {
        slide_button_2.style.backgroundColor = '#4CAF50';
    } else if (slide.correct_answer === '3') {
        slide_button_3.style.backgroundColor = '#4CAF50';
    } else if (slide.correct_answer === '4') {
        slide_button_4.style.backgroundColor = '#4CAF50';
    }
    
    // If user clicked wrong answer, show it in red
    if (button_letter !== slide.correct_answer) {
        if (button_letter === '1') {
            slide_button_1.style.backgroundColor = '#f44336';
        } else if (button_letter === '2') {
            slide_button_2.style.backgroundColor = '#f44336';
        } else if (button_letter === '3') {
            slide_button_3.style.backgroundColor = '#f44336';
        } else if (button_letter === '4') {
            slide_button_4.style.backgroundColor = '#f44336';
        }
    }
}

function check_blank_answer() {
    const slide = slides[current_slide_index];
    
    // Only check for fill-in-the-blank slides
    if (slide.class !== 'fill-in-the-blank' || question_answered) {
        return;
    }
    
    const user_answer = fill_blank_input.value.trim().toLowerCase();
    const correct_answer = slide.blank_answer.toLowerCase();
    
    question_answered = true;
    fill_blank_input.disabled = true;
    fill_blank_submit.disabled = true;
    
    if (user_answer === correct_answer) {
        fill_blank_feedback.textContent = '✅ Correct!';
        fill_blank_feedback.style.color = '#4CAF50';
    } else {
        fill_blank_feedback.textContent = `❌ Incorrect. The answer is: ${slide.blank_answer}`;
        fill_blank_feedback.style.color = '#f44336';
    }
}

// Function to update the slide display
function display_slide(index) {
    const slide = slides[index];
    
    slide_title.textContent = slide.title;
    
    // Display content for information slides only
    if (slide.class === "information") {
        slide_content.textContent = slide.content;
        slide_content.style.display = "block";
    } 
    else {slide_content.style.display = "none";}
    
    // Handle image display
    if (slide.has_image) {
        slide_image.style.display = 'block';
        slide_image.src = slide.image;
    } 
    else {slide_image.style.display = 'none';}
    
    slide_button_1.textContent = slide.button1;
    slide_button_2.textContent = slide.button2;
    slide_button_3.textContent = slide.button3;
    slide_button_4.textContent = slide.button4;
    
    // Reset question answered flag and enable buttons
    question_answered = false;
    enable_buttons();
    reset_button_styles();
    
    // Hide all interactive elements first
    slide_button_1.style.display = 'none';
    slide_button_2.style.display = 'none';
    slide_button_3.style.display = 'none';
    slide_button_4.style.display = 'none';
    document.querySelector('.fill_blank_container').style.display = 'none';
    
    // Show appropriate interactive elements based on slide type
    if (slide.class === 'question') {
        slide_button_1.style.display = 'inline-block';
        slide_button_2.style.display = 'inline-block';
        slide_button_3.style.display = 'inline-block';
        slide_button_4.style.display = 'inline-block';
    } else if (slide.class === 'fill-in-the-blank') {
        document.querySelector('.fill_blank_container').style.display = 'flex';
        fill_blank_input.value = '';
        fill_blank_feedback.textContent = '';
        fill_blank_feedback.style.color = '';
        fill_blank_input.disabled = false;
        fill_blank_submit.disabled = false;
    }
}

sgi_open_button.onclick = () => {
    home_div.style.display = 'none';
    study_guide_interface.style.display = 'block';
    study_guide_creator.style.display = 'none';
    current_slide_index = 0;
    display_slide(current_slide_index);
};

sgi_close_button.onclick = () => {
    home_div.style.display = 'flex';
    study_guide_interface.style.display = 'none';
    study_guide_creator.style.display = 'none';
};

sgc_close_button.onclick = () => {
    home_div.style.display = 'flex';
    study_guide_interface.style.display = 'none';
    study_guide_creator.style.display = 'none';
};

sgi_next_button.onclick = () => {
    current_slide_index = (current_slide_index + 1) % slides.length;
    display_slide(current_slide_index);
};

// Edit mode elements (must be before event listeners that use them)
const sgc_grid_container = document.getElementById('sgc_grid_container');
const edit_modal = document.getElementById('edit_modal');
const edit_title = document.getElementById('edit_title');
const edit_content = document.getElementById('edit_content');
const edit_button1 = document.getElementById('edit_button1');
const edit_button2 = document.getElementById('edit_button2');
const edit_button3 = document.getElementById('edit_button3');
const edit_button4 = document.getElementById('edit_button4');
const edit_correct_answer = document.getElementById('edit_correct_answer');
const edit_blank_answer = document.getElementById('edit_blank_answer');
const edit_has_image = document.getElementById('edit_has_image');
const edit_image = document.getElementById('edit_image');
const edit_class = document.getElementById('edit_class');
const edit_save_button = document.querySelector('.edit_save_button');
const edit_back_button = document.querySelector('.edit_back_button');
const fill_blank_input = document.getElementById('fill_blank_input');
const fill_blank_submit = document.querySelector('.fill_blank_submit');
const fill_blank_feedback = document.getElementById('fill_blank_feedback');

slide_button_1.onclick = () => {check_answer("1")};
slide_button_2.onclick = () => {check_answer("2")};
slide_button_3.onclick = () => {check_answer("3")};
slide_button_4.onclick = () => {check_answer("4");};
fill_blank_submit.onclick = () => {check_blank_answer()};
fill_blank_input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        check_blank_answer();
    }
});

// Track if save button has been pressed
let has_saved = false;

let currently_editing_slide = 0;

// Initialize grid for edit mode
function init_grid() {
    sgc_grid_container.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        const button = document.createElement('button');
        button.className = 'sgc_grid_button';
        button.textContent = `Slide ${i + 1}`;
        button.onclick = () => open_edit_modal(i);
        sgc_grid_container.appendChild(button);
    }
}

// Toggle question fields based on slide type
function toggle_question_fields() {
    const question_fields = document.getElementById('question_fields');
    const fill_blank_fields = document.getElementById('fill_blank_fields');
    if (edit_class.value === 'question') {
        question_fields.style.display = 'block';
        fill_blank_fields.style.display = 'none';
    } else if (edit_class.value === 'fill-in-the-blank') {
        question_fields.style.display = 'none';
        fill_blank_fields.style.display = 'block';
    } else {
        question_fields.style.display = 'none';
        fill_blank_fields.style.display = 'none';
    }
}

// Toggle image selection based on has_image checkbox
function toggle_image_selection() {
    const image_selection = document.getElementById('image_selection');
    if (edit_has_image.checked) {
        image_selection.style.display = 'block';
    } else {
        image_selection.style.display = 'none';
    }
}

// Open edit modal for a specific slide
function open_edit_modal(slide_index) {
    currently_editing_slide = slide_index;
    const slide = slides[slide_index];
    
    // Populate form with slide data
    edit_title.value = slide.title;
    edit_content.value = slide.content;
    edit_button1.value = slide.button1;
    edit_button2.value = slide.button2;
    edit_button3.value = slide.button3;
    edit_button4.value = slide.button4;
    edit_correct_answer.value = slide.correct_answer;
    if(edit_correct_answer.value !== '1' && edit_correct_answer.value !== '2' && edit_correct_answer.value !== '3' && edit_correct_answer.value !== '4') {
        edit_correct_answer.value = '1';
    }
    edit_blank_answer.value = slide.blank_answer || '';
    edit_has_image.checked = slide.has_image;
    edit_class.value = slide.class;
    edit_image.value = slide.image === 'ellenjoe.webp' ? 'ellenjoe.webp' : slide.image;
    
    // Toggle question fields based on slide type
    toggle_question_fields();
    // Toggle image selection based on checkbox
    toggle_image_selection();
    
    // Show modal
    edit_modal.classList.add('show');
}

// Close edit modal
function close_edit_modal() {
    edit_modal.classList.remove('show');
}

// Save slide changes
edit_save_button.onclick = () => {
    has_saved = true;
    const slide = slides[currently_editing_slide];
    
    // Update slide data
    slide.title = edit_title.value;
    slide.content = edit_content.value;
    slide.button1 = edit_button1.value;
    slide.button2 = edit_button2.value;
    slide.button3 = edit_button3.value;
    slide.button4 = edit_button4.value;
    slide.correct_answer = edit_correct_answer.value;
    slide.blank_answer = edit_blank_answer.value;
    slide.has_image = edit_has_image.checked;
    slide.class = edit_class.value;
    slide.image = edit_image.value;
    
    // Close modal
    close_edit_modal();
};

// Back button
edit_back_button.onclick = () => {
    close_edit_modal();
};

// Change listeners
edit_class.addEventListener('change', toggle_question_fields);
edit_has_image.addEventListener('change', toggle_image_selection);

// Blank all slides button
const sgc_blank_all_button = document.querySelector('.sgc_blank_all_button');
sgc_blank_all_button.onclick = () => {
    if (has_saved && !confirm('Are you sure? This will blank all slides.')) {
        return; // Cancel if user doesn't confirm
    }
    
    // Convert all slides to blank information slides
    slides.forEach(slide => {
        slide.title = '';
        slide.content = '';
        slide.image = 'ellenjoe.webp';
        slide.has_image = false;
        slide.class = 'information';
        slide.button1 = '';
        slide.button2 = '';
        slide.button3 = '';
        slide.button4 = '';
        slide.correct_answer = 'N/A';
    });
    
    init_grid();
};

// Add slide button
const sgc_add_slide_button = document.querySelector('.sgc_add_slide_button');
sgc_add_slide_button.onclick = () => {
    const new_slide = {
        title: 'New Slide',
        content: '',
        image: 'ellenjoe.webp',
        has_image: false,
        class: 'information',
        button1: '',
        button2: '',
        button3: '',
        button4: '',
        correct_answer: 'N/A',
        blank_answer: ''
    };
    slides.push(new_slide);
    init_grid();
};

// Delete slide button
const edit_delete_button = document.querySelector('.edit_delete_button');
edit_delete_button.onclick = () => {
    if (slides.length === 1) {
        alert('You cannot delete the last slide!');
        return;
    }
    
    if (confirm('Are you sure you want to delete this slide?')) {
        slides.splice(currently_editing_slide, 1);
        close_edit_modal();
        init_grid();
    }
};

// Initialize grid when entering edit mode
sgi_edit_button.onclick = () => {
    home_div.style.display = 'none';
    study_guide_interface.style.display = 'none';
    study_guide_creator.style.display = 'block';
    init_grid();
};

// Export Slides functionality
sgc_export_button.onclick = () => {
    export_json.textContent = JSON.stringify(slides, null, 2);
    export_modal.classList.add('show');
};

document.querySelector('.modal_copy_button').onclick = () => {
    export_json.select();
    document.execCommand('copy');
    alert('Slides JSON copied to clipboard!');
};

// Import Slides functionality
sgc_import_button.onclick = () => {
    import_json.value = '';
    import_modal.classList.add('show');
};

document.querySelector('.modal_import_button').onclick = () => {
    try {
        const imported_slides = JSON.parse(import_json.value);
        
        // Validate that it's an array
        if (!Array.isArray(imported_slides)) {
            alert('Invalid JSON format. Please paste valid slides JSON.');
            return;
        }
        
        // Validate that each slide has required fields
        for (let slide of imported_slides) {
            if (!slide.title || slide.class === undefined) {
                alert('Invalid slide format. Each slide must have a title and class.');
                return;
            }
        }
        
        // Replace slides with imported data
        slides.length = 0;
        slides.push(...imported_slides);
        
        // Close import modal and refresh grid
        import_modal.classList.remove('show');
        init_grid();
        alert('Slides imported successfully!');
    } catch (error) {
        alert('Error parsing JSON. Please check the format and try again.\n\nError: ' + error.message);
    }
};

// Close modals when clicking outside of the content
export_modal.onclick = (event) => {
    if (event.target === export_modal) {
        export_modal.classList.remove('show');
    }
};

import_modal.onclick = (event) => {
    if (event.target === import_modal) {
        import_modal.classList.remove('show');
    }
};

// ========== SLIDE SETS FUNCTIONALITY ==========

function get_slide_sets() {
    const saved = localStorage.getItem(SLIDE_SETS_STORAGE_KEY);
    if (!saved) {
        // Initialize empty slide sets
        const empty_sets = Array(SLIDE_SETS_COUNT).fill(null);
        return empty_sets;
    }
    return JSON.parse(saved);
}

function save_slide_sets(sets) {
    localStorage.setItem(SLIDE_SETS_STORAGE_KEY, JSON.stringify(sets));
}

function save_to_slot(slot_index) {
    const sets = get_slide_sets();
    sets[slot_index] = JSON.parse(JSON.stringify(slides));
    save_slide_sets(sets);
    render_slide_sets();
    alert(`Slides saved to slot ${slot_index + 1}!`);
}

function load_from_slot(slot_index) {
    const sets = get_slide_sets();
    if (!sets[slot_index]) {
        alert('This slot is empty!');
        return;
    }
    
    // Replace current slides with slot data
    slides.length = 0;
    slides.push(...sets[slot_index]);
    
    alert(`Slides loaded from slot ${slot_index + 1}!`);
}

function render_slide_sets() {
    const sets = get_slide_sets();
    slide_sets_scrollable.innerHTML = '';
    
    for (let i = 0; i < SLIDE_SETS_COUNT; i++) {
        const slot = document.createElement('div');
        slot.className = 'slide_set_slot';
        
        if (sets[i]) {
            slot.classList.add('filled');
            const title = document.createElement('div');
            title.className = 'slide_set_slot_title';
            title.textContent = sets[i][0]?.title || `Slot ${i + 1}`;
            
            const count = document.createElement('div');
            count.className = 'slide_set_slot_count';
            count.textContent = `${sets[i].length} slides`;
            
            slot.appendChild(title);
            slot.appendChild(count);
            
            slot.onclick = () => load_from_slot(i);
        } else {
            slot.classList.add('empty');
            slot.innerHTML = `<div class="slide_set_slot_title">Empty Slot ${i + 1}</div>`;
            
            slot.ondblclick = () => {
                if (confirm('Save current slides to this slot?')) {
                    save_to_slot(i);
                }
            };
        }
        
        slide_sets_scrollable.appendChild(slot);
    }
}

// Save current button functionality
save_current_button.onclick = () => {
    // Show a simple dialog to choose a slot
    const slot_str = prompt(`Enter slot number (1-${SLIDE_SETS_COUNT}):`, '1');
    if (slot_str === null) return;
    
    const slot_num = parseInt(slot_str) - 1;
    if (isNaN(slot_num) || slot_num < 0 || slot_num >= SLIDE_SETS_COUNT) {
        alert(`Please enter a number between 1 and ${SLIDE_SETS_COUNT}`);
        return;
    }
    
    save_to_slot(slot_num);
};

// Initialize slide sets on page load
render_slide_sets();

// ========== AI CONFIGURATION ==========
// API key is now securely stored in Vercel .env
// No user configuration needed - AI features work automatically!

// ========== AI SLIDE GENERATION ==========

const ai_generate_button = document.querySelector('.ai_generate_button');
const generate_slides_modal = document.getElementById('generate_slides_modal');
const generate_button = document.getElementById('generate_button');
const generate_prompt = document.getElementById('generate_prompt');
const slide_count = document.getElementById('slide_count');
const generate_loading = document.getElementById('generate_loading');

// Open generate slides modal
if (ai_generate_button) {
    ai_generate_button.onclick = () => {
        generate_slides_modal.classList.add('show');
        generate_prompt.value = '';
        generate_prompt.focus();
    };
}

// Close modal when clicking outside
generate_slides_modal.onclick = (event) => {
    if (event.target === generate_slides_modal) {
        generate_slides_modal.classList.remove('show');
    }
};

// Generate slides
generate_button.onclick = async () => {
    const prompt = generate_prompt.value.trim();
    
    if (!prompt) {
        alert('Please describe what you want to study');
        return;
    }
    
    generate_button.disabled = true;
    generate_button.style.display = 'none';
    generate_loading.style.display = 'inline-block';
    
    try {
        const numSlides = parseInt(slide_count.value);
        const generatedSlides = await generateSlides(prompt, numSlides);
        
        if (!generatedSlides || generatedSlides.length === 0) {
            alert('Failed to generate slides. Please try again.');
            return;
        }
        
        // Validate and normalize generated slides
        const validSlides = generatedSlides.map(slide => {
            // Ensure all required fields exist
            return {
                title: slide.title || 'Untitled',
                content: slide.content || '',
                image: slide.image || 'ellenjoe.webp',
                has_image: slide.has_image === true,
                class: ['information', 'question', 'fill-in-the-blank'].includes(slide.class) ? slide.class : 'information',
                button1: slide.button1 || '',
                button2: slide.button2 || '',
                button3: slide.button3 || '',
                button4: slide.button4 || '',
                correct_answer: slide.correct_answer || 'N/A',
                blank_answer: slide.blank_answer || ''
            };
        }).filter(slide => slide.title && slide.title !== ''); // Filter out empty slides
        
        if (validSlides.length === 0) {
            alert('AI generated no valid slides. Please try again with a different prompt.');
            return;
        }
        
        // Replace current slides with generated ones
        slides.length = 0;
        slides.push(...validSlides);
        
        // Close modal and go to edit mode
        generate_slides_modal.classList.remove('show');
        
        // Go to edit mode to show the generated slides
        home_div.style.display = 'none';
        study_guide_interface.style.display = 'none';
        study_guide_creator.style.display = 'block';
        init_grid();
        
        alert(`✨ Generated ${validSlides.length} slides! You can now edit them or run the quiz.`);
        
    } catch (error) {
        console.error('Error generating slides:', error);
        alert(`Error: ${error.message}`);
    } finally {
        generate_button.disabled = false;
        generate_button.style.display = 'inline-block';
        generate_loading.style.display = 'none';
    }
};

