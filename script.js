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

// Slide data structure
const slides = [
    {
        title: 'This is Ellen Joe',
        content: 'Ellen Joe is a Zenless Zone Zero character, she has a shark tail.',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    },
    {
        title: 'Is Ellen Joe a baddie?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'Yes',
        button2: 'No',
        button3: 'Maybe',
        button4: 'I don\'t know',
        correct_answer: '1'
    },
    {
        title: 'Space cool',
        content: 'cool planit',
        image: null,
        has_image: false,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    },
    {
        title: 'Q2: Which group includes fruits and vegetables?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'Produce group',
        button2: 'Grain group',
        button3: 'Dairy group',
        button4: 'Protein group',
        correct_answer: '1'
    },
    {
        title: 'Understanding Proteins',
        content: 'Proteins are essential amino acids that build and repair muscles, skin, and other tissues. They\'re found in meat, fish, eggs, beans, nuts, and dairy. Protein is crucial for growth and energy.',
        image: null,
        has_image: false,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    },
    {
        title: 'Q3: Which food is a complete protein?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'Eggs',
        button2: 'Rice',
        button3: 'Beans alone',
        button4: 'Lettuce',
        correct_answer: '1'
    },
    {
        title: 'Carbohydrates: Simple vs Complex',
        content: 'Simple carbs (sugars) provide quick energy but lack nutrients. Complex carbs (whole grains, beans) digest slowly, providing sustained energy and more nutrients. Choose complex carbs for better health.',
        image: null,
        has_image: false,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    },
    {
        title: 'Q4: Which is a complex carbohydrate?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'White sugar',
        button2: 'Whole wheat bread',
        button3: 'Candy',
        button4: 'Soda',
        correct_answer: '2'
    },
    {
        title: 'Healthy Fats Overview',
        content: 'Not all fats are bad. Unsaturated fats (olive oil, avocados, nuts) support heart health. Avoid trans fats and limit saturated fats. Fats provide energy and help absorb vitamins A, D, E, and K.',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    },
    {
        title: 'Q5: Which fat is healthiest?',
        content: '',
        image: null,
        has_image: false,
        class: 'question',
        button1: 'Saturated fat',
        button2: 'Trans fat',
        button3: 'Unsaturated fat',
        button4: 'All equally healthy',
        correct_answer: '3'
    },
    {
        title: 'Vitamins and Minerals Guide',
        content: 'Vitamins and minerals are micronutrients needed in small amounts. They support immune function, bone health, and energy production. Different foods provide different vitamins and minerals.',
        image: null,
        has_image: false,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    },
    {
        title: 'Q6: What does Vitamin C do?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'Builds bones',
        button2: 'Supports immunity',
        button3: 'Improves eyesight',
        button4: 'Makes blood',
        correct_answer: '2'
    },
    {
        title: 'Calorie Consumption Basics',
        content: 'Calories measure energy from food. Everyone needs different amounts based on age, gender, and activity level. Balance calories consumed with calories burned for healthy weight.',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    },
    {
        title: 'Q7: How many calories per gram in protein?',
        content: '',
        image: null,
        has_image: false,
        class: 'question',
        button1: '4 calories',
        button2: '7 calories',
        button3: '9 calories',
        button4: '12 calories',
        correct_answer: '1'
    },
    {
        title: 'Balanced Diet Principles',
        content: 'A balanced diet includes portions from all food groups. Fill half your plate with fruits and vegetables, one quarter with grains, and one quarter with protein. Add dairy for complete nutrition.',
        image: null,
        has_image: false,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    },
    {
        title: 'Q8: What should most calories come from?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'Fruits and vegetables',
        button2: 'Whole grains',
        button3: 'Processed foods',
        button4: 'Sugar and salt',
        correct_answer: '2'
    },
    {
        title: 'Hydration and Health',
        content: 'Water is essential for all body functions. It regulates temperature, transports nutrients, and removes waste. Most people need 8 glasses daily, but individual needs vary based on activity and climate.',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    },
    {
        title: 'Q9: Is proper hydration important?',
        content: '',
        image: null,
        has_image: false,
        class: 'question',
        button1: 'Yes, essential',
        button2: 'No, not needed',
        button3: 'Only sometimes',
        button4: 'Never important',
        correct_answer: '1'
    },
    {
        title: 'Reading Nutrition Labels',
        content: 'Nutrition labels show serving size, calories, nutrients, and ingredients. Check serving size first—nutrition info is per serving, not per package. Compare labels to make healthier choices.',
        image: null,
        has_image: false,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    },
    {
        title: 'Q10: What is serving size?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'How much you eat',
        button2: 'Amount listed on label',
        button3: 'Whole package',
        button4: 'Daily recommendation',
        correct_answer: '2'
    },
    {
        title: 'Special Diets Overview',
        content: 'Various diets exist for different reasons: vegetarian (no meat), vegan (no animal products), gluten-free (no wheat), and more. Choose based on personal health, ethics, or medical needs.',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    },
    {
        title: 'Q11: What does vegan exclude?',
        content: '',
        image: null,
        has_image: false,
        class: 'question',
        button1: 'Animal products',
        button2: 'All vegetables',
        button3: 'Only meat',
        button4: 'Grains',
        correct_answer: '1'
    },
    {
        title: 'Nutrition and Exercise',
        content: 'Proper nutrition supports fitness goals. Eat balanced meals with carbs for energy and protein for muscle recovery. Timing matters: eat before exercise for energy, after for recovery.',
        image: null,
        has_image: false,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    },
    {
        title: 'Q12: When is best to eat after workout?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: '30 minutes to 2 hours',
        button2: '6 hours later',
        button3: 'Never eat',
        button4: 'Only drink water',
        correct_answer: '1'
    },
    {
        title: 'Key Nutrition Takeaways',
        content: 'Summary: Eat a variety of foods from all groups, balance portions, limit sugar and salt, stay hydrated, and choose whole grains. Small changes lead to big health improvements over time!',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'information',
        button1: 'Button 1',
        button2: 'Button 2',
        button3: 'Button 3',
        button4: 'Button 4',
        correct_answer: 'N/A'
    }
];

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
    
    // Hide buttons for information slides
    if (slide.class === 'information') {
        slide_button_1.style.display = 'none';
        slide_button_2.style.display = 'none';
        slide_button_3.style.display = 'none';
        slide_button_4.style.display = 'none';
    } else {
        slide_button_1.style.display = 'inline-block';
        slide_button_2.style.display = 'inline-block';
        slide_button_3.style.display = 'inline-block';
        slide_button_4.style.display = 'inline-block';
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

slide_button_1.onclick = () => {check_answer("1")};
slide_button_2.onclick = () => {check_answer("2")};
slide_button_3.onclick = () => {check_answer("3")};
slide_button_4.onclick = () => {check_answer("4");};

// Edit mode elements
const sgc_grid_container = document.getElementById('sgc_grid_container');
const edit_modal = document.getElementById('edit_modal');
const edit_title = document.getElementById('edit_title');
const edit_content = document.getElementById('edit_content');
const edit_button1 = document.getElementById('edit_button1');
const edit_button2 = document.getElementById('edit_button2');
const edit_button3 = document.getElementById('edit_button3');
const edit_button4 = document.getElementById('edit_button4');
const edit_correct_answer = document.getElementById('edit_correct_answer');
const edit_has_image = document.getElementById('edit_has_image');
const edit_image = document.getElementById('edit_image');
const edit_class = document.getElementById('edit_class');
const edit_save_button = document.querySelector('.edit_save_button');
const edit_back_button = document.querySelector('.edit_back_button');

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
    if (edit_class.value === 'question') {
        question_fields.style.display = 'block';
    } else {
        question_fields.style.display = 'none';
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

