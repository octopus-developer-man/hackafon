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
const slide_caption = document.querySelector('.slide_caption');
const slide_content = document.querySelector('.slide_content');
const slide_image = document.querySelector('.slide_image');
const slide_button_1 = document.querySelector('.slide_button_1');
const slide_button_2 = document.querySelector('.slide_button_2');
const slide_button_3 = document.querySelector('.slide_button_3');
const slide_button_4 = document.querySelector('.slide_button_4');

// Slide data structure
const slides = [
    {
        caption: 'Introduction to Nutrition',
        content: 'Nutrition is the study of how food and nutrients affect our body\'s growth, development, and health. A balanced diet provides the energy and nutrients needed for daily activities.',
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
        caption: 'Q1: What is a macronutrient?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'Protein, fats, carbs',
        button2: 'Vitamins and minerals',
        button3: 'Water and fiber',
        button4: 'All of the above',
        correct_answer: 'A'
    },
    {
        caption: 'The Food Groups Explained',
        content: 'The five main food groups are: Fruits, Vegetables, Grains, Protein, and Dairy. Each group provides different essential nutrients. Eating a variety from each group ensures balanced nutrition.',
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
        caption: 'Q2: Which group includes fruits and vegetables?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'Produce group',
        button2: 'Grain group',
        button3: 'Dairy group',
        button4: 'Protein group',
        correct_answer: 'A'
    },
    {
        caption: 'Understanding Proteins',
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
        caption: 'Q3: Which food is a complete protein?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'Eggs',
        button2: 'Rice',
        button3: 'Beans alone',
        button4: 'Lettuce',
        correct_answer: 'A'
    },
    {
        caption: 'Carbohydrates: Simple vs Complex',
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
        caption: 'Q4: Which is a complex carbohydrate?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'White sugar',
        button2: 'Whole wheat bread',
        button3: 'Candy',
        button4: 'Soda',
        correct_answer: 'B'
    },
    {
        caption: 'Healthy Fats Overview',
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
        caption: 'Q5: Which fat is healthiest?',
        content: '',
        image: null,
        has_image: false,
        class: 'question',
        button1: 'Saturated fat',
        button2: 'Trans fat',
        button3: 'Unsaturated fat',
        button4: 'All equally healthy',
        correct_answer: 'C'
    },
    {
        caption: 'Vitamins and Minerals Guide',
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
        caption: 'Q6: What does Vitamin C do?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'Builds bones',
        button2: 'Supports immunity',
        button3: 'Improves eyesight',
        button4: 'Makes blood',
        correct_answer: 'B'
    },
    {
        caption: 'Calorie Consumption Basics',
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
        caption: 'Q7: How many calories per gram in protein?',
        content: '',
        image: null,
        has_image: false,
        class: 'question',
        button1: '4 calories',
        button2: '7 calories',
        button3: '9 calories',
        button4: '12 calories',
        correct_answer: 'A'
    },
    {
        caption: 'Balanced Diet Principles',
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
        caption: 'Q8: What should most calories come from?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'Fruits and vegetables',
        button2: 'Whole grains',
        button3: 'Processed foods',
        button4: 'Sugar and salt',
        correct_answer: 'B'
    },
    {
        caption: 'Hydration and Health',
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
        caption: 'Q9: Is proper hydration important?',
        content: '',
        image: null,
        has_image: false,
        class: 'question',
        button1: 'Yes, essential',
        button2: 'No, not needed',
        button3: 'Only sometimes',
        button4: 'Never important',
        correct_answer: 'A'
    },
    {
        caption: 'Reading Nutrition Labels',
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
        caption: 'Q10: What is serving size?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: 'How much you eat',
        button2: 'Amount listed on label',
        button3: 'Whole package',
        button4: 'Daily recommendation',
        correct_answer: 'B'
    },
    {
        caption: 'Special Diets Overview',
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
        caption: 'Q11: What does vegan exclude?',
        content: '',
        image: null,
        has_image: false,
        class: 'question',
        button1: 'Animal products',
        button2: 'All vegetables',
        button3: 'Only meat',
        button4: 'Grains',
        correct_answer: 'A'
    },
    {
        caption: 'Nutrition and Exercise',
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
        caption: 'Q12: When is best to eat after workout?',
        content: '',
        image: 'ellenjoe.webp',
        has_image: true,
        class: 'question',
        button1: '30 minutes to 2 hours',
        button2: '6 hours later',
        button3: 'Never eat',
        button4: 'Only drink water',
        correct_answer: 'A'
    },
    {
        caption: 'Key Nutrition Takeaways',
        content: 'Summary: Eat a variety of foods from all groups, balance portions, limit sugar and salt, stay hydrated, and choose whole grains. Small changes lead to big health improvements over time!',
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
        caption: 'Congratulations! Study Complete',
        content: 'You\'ve completed the nutrition study guide! You now understand macronutrients, food groups, healthy eating, and balanced nutrition. Use this knowledge for a healthier lifestyle!',
        image: null,
        has_image: false,
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

// Function to disable button interaction
function disable_buttons() {
    slide_button_1.style.pointerEvents = 'none';
    slide_button_2.style.pointerEvents = 'none';
    slide_button_3.style.pointerEvents = 'none';
    slide_button_4.style.pointerEvents = 'none';
}

// Function to enable button interaction
function enable_buttons() {
    slide_button_1.style.pointerEvents = 'auto';
    slide_button_2.style.pointerEvents = 'auto';
    slide_button_3.style.pointerEvents = 'auto';
    slide_button_4.style.pointerEvents = 'auto';
}

// Function to reset button styles
function reset_button_styles() {
    slide_button_1.style.backgroundColor = 'var(--color-two)';
    slide_button_2.style.backgroundColor = 'var(--color-two)';
    slide_button_3.style.backgroundColor = 'var(--color-two)';
    slide_button_4.style.backgroundColor = 'var(--color-two)';
}

// Function to check answer
function check_answer(button_letter) {
    const slide = slides[current_slide_index];
    
    // Only check for question slides
    if (slide.class !== 'question') {
        return;
    }
    
    // Don't process if question already answered
    if (question_answered) {
        return;
    }
    
    question_answered = true;
    
    const correct_answer = slide.correct_answer;
    
    // Reset all buttons first
    reset_button_styles();
    
    // Show correct answer in green
    if (correct_answer === 'A') {
        slide_button_1.style.backgroundColor = '#4CAF50';
    } else if (correct_answer === 'B') {
        slide_button_2.style.backgroundColor = '#4CAF50';
    } else if (correct_answer === 'C') {
        slide_button_3.style.backgroundColor = '#4CAF50';
    } else if (correct_answer === 'D') {
        slide_button_4.style.backgroundColor = '#4CAF50';
    }
    
    // If user clicked wrong answer, show it in red
    if (button_letter !== correct_answer) {
        if (button_letter === 'A') {
            slide_button_1.style.backgroundColor = '#f44336';
        } else if (button_letter === 'B') {
            slide_button_2.style.backgroundColor = '#f44336';
        } else if (button_letter === 'C') {
            slide_button_3.style.backgroundColor = '#f44336';
        } else if (button_letter === 'D') {
            slide_button_4.style.backgroundColor = '#f44336';
        }
    }
    
    // Disable buttons after answer is selected
    disable_buttons();
}

// Function to update the slide display
function display_slide(index) {
    const slide = slides[index];
    
    slide_caption.textContent = slide.caption;
    
    // Display content for information slides only
    if (slide.class === 'information') {
        slide_content.textContent = slide.content;
        slide_content.style.display = 'block';
    } else {
        slide_content.style.display = 'none';
    }
    
    // Handle image display
    if (slide.has_image) {
        slide_image.style.display = 'block';
        slide_image.src = slide.image;
    } else {
        slide_image.style.display = 'none';
    }
    
    slide_button_1.textContent = slide.button1;
    slide_button_2.textContent = slide.button2;
    slide_button_3.textContent = slide.button3;
    slide_button_4.textContent = slide.button4;
    
    // Reset question answered flag and enable buttons
    question_answered = false;
    enable_buttons();
    // Reset button styles
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
    home_div.style.display = 'block';
    study_guide_interface.style.display = 'none';
    study_guide_creator.style.display = 'none';
};

sgc_close_button.onclick = () => {
    home_div.style.display = 'block';
    study_guide_interface.style.display = 'none';
    study_guide_creator.style.display = 'none';
};

sgi_next_button.onclick = () => {
    current_slide_index = (current_slide_index + 1) % slides.length;
    display_slide(current_slide_index);
};

// Answer button click handlers
slide_button_1.onclick = () => {
    check_answer('A');
};

slide_button_2.onclick = () => {
    check_answer('B');
};

slide_button_3.onclick = () => {
    check_answer('C');
};

slide_button_4.onclick = () => {
    check_answer('D');
};

// Edit mode elements
const sgc_grid_container = document.getElementById('sgc_grid_container');
const edit_modal = document.getElementById('edit_modal');
const edit_caption = document.getElementById('edit_caption');
const edit_content = document.getElementById('edit_content');
const edit_button1 = document.getElementById('edit_button1');
const edit_button2 = document.getElementById('edit_button2');
const edit_button3 = document.getElementById('edit_button3');
const edit_button4 = document.getElementById('edit_button4');
const edit_correct_answer = document.getElementById('edit_correct_answer');
const edit_has_image = document.getElementById('edit_has_image');
const edit_class = document.getElementById('edit_class');
const edit_save_button = document.querySelector('.edit_save_button');
const edit_back_button = document.querySelector('.edit_back_button');

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

// Open edit modal for a specific slide
function open_edit_modal(slide_index) {
    currently_editing_slide = slide_index;
    const slide = slides[slide_index];
    
    // Populate form with slide data
    edit_caption.value = slide.caption;
    edit_content.value = slide.content;
    edit_button1.value = slide.button1;
    edit_button2.value = slide.button2;
    edit_button3.value = slide.button3;
    edit_button4.value = slide.button4;
    edit_correct_answer.value = slide.correct_answer;
    edit_has_image.checked = slide.has_image;
    edit_class.value = slide.class;
    
    // Show modal
    edit_modal.classList.add('show');
}

// Close edit modal
function close_edit_modal() {
    edit_modal.classList.remove('show');
}

// Save slide changes
edit_save_button.onclick = () => {
    const slide = slides[currently_editing_slide];
    
    // Update slide data
    slide.caption = edit_caption.value;
    slide.content = edit_content.value;
    slide.button1 = edit_button1.value;
    slide.button2 = edit_button2.value;
    slide.button3 = edit_button3.value;
    slide.button4 = edit_button4.value;
    slide.correct_answer = edit_correct_answer.value;
    slide.has_image = edit_has_image.checked;
    slide.class = edit_class.value;
    
    // Close modal
    close_edit_modal();
};

// Back button
edit_back_button.onclick = () => {
    close_edit_modal();
};

// Initialize grid when entering edit mode
sgi_edit_button.onclick = () => {
    home_div.style.display = 'none';
    study_guide_interface.style.display = 'none';
    study_guide_creator.style.display = 'block';
    init_grid();
};

