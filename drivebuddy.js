console.log("hello");
const toCapitalCase = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
const cars_list = [
    // Popular Indian Cars
    "Maruti Suzuki Alto",
    "Maruti Suzuki Swift",
    "Maruti Suzuki Baleno", 
    "Maruti Suzuki WagonR",
    "Maruti Suzuki Dzire", 
    "Maruti Suzuki Ertiga", 
    "Hyundai Creta", 
    "Hyundai Venue", 
    "Hyundai i20", 
    "Hyundai Verna", 
    "Tata Nexon",
    "Tata Harrier",
    "Tata Punch", 
    "Tata Altroz",
    "Tata Safari", 
    "Mahindra XUV700",
    "Mahindra Scorpio-N",
    "Mahindra Thar", 
    "Kia Sonet", 
    "Kia Seltos", 
    "Kia Carens", 
    "Toyota Fortuner",
    "Toyota Innova Crysta",
    "Toyota Urban Cruiser", 
    "Honda City",
    "Honda Amaze",
    "Renault Kiger",
    "Renault Triber", 
    "MG Hector", 
    "MG Astor", 
    "Volkswagen Virtus",
    "Skoda Slavia",

    // Luxury Brands
    "BMW 3 Series", "BMW X5", "BMW 7 Series", 
    "Audi A4", "Audi Q7", "Audi R8", 
    "Mercedes-Benz C-Class", "Mercedes-Benz E-Class", "Mercedes-Benz GLE", 
    "Land Rover Defender", "Range Rover Evoque", "Range Rover Velar", 
    "Porsche 911", "Porsche Cayenne", 
    "Jaguar F-PACE", "Jaguar XE", 
    "Lexus RX", "Lexus NX", 
    "Volvo XC90", "Volvo S60"
];
let skilled_at = [
    [19, 10, 3, 0],
    [7, 18, 11, 5],
    [15, 14, 19, 9],
    [4, 16, 17, 13],
    [11, 3, 10, 8],
    [1, 14, 13, 6],
    [19, 16, 7, 8],
    [4, 3, 19, 6],
    [10, 5, 14, 18],
    [2, 13, 19, 4],
    [6, 5, 12, 11],
    [3, 18, 13, 9],
    [15, 8, 7, 17],
    [16, 9, 6, 5],
    [0, 3, 13, 1],
    [4, 10, 8, 7],
    [12, 1, 9, 18],
    [15, 7, 8, 2]
];

let d_l_name = [
   "Aarav",
  "Vikram",
  "Rohan",
  "Sanjay",
  "shashank tirandas",
  "kumara swamy",
  "ronith",
  "suhas anadh",
  "jeevan sai",
  "harsha teja",
  "gopal krishna",
  "manoj kumar",
  "naveen reddy",
  "akhil varma",
  "yashwanth guptha",
  "ravi teja",
  "pavan kumar",
  "tarun yadav",
  "pranay sharma",
  "rohit varma",
  "sandeep reddy",
  "bharath raj",
  "uday kiran",
  "charan deep",
  "aravind prasad"
];
let d_l_places = [
   "Madhapur, Hyderabad, Telangana, India",
   "Gachibowli, Hyderabad, Telangana, India",
   "Kukatpally, Hyderabad, Telangana, India",
   "Ameerpet, Hyderabad, Telangana, India",
   "Banjara Hills, Hyderabad, Telangana, India",
   "Jubilee Hills, Hyderabad, Telangana, India",
   "Miyapur, Hyderabad, Telangana, India",
   "Begumpet, Hyderabad, Telangana, India",
   "Hitech City, Hyderabad, Telangana, India",
   "Mehdipatnam, Hyderabad, Telangana, India",
   "LB Nagar, Hyderabad, Telangana, India",
   "Dilsukhnagar, Hyderabad, Telangana, India",
   "Uppal, Hyderabad, Telangana, India",
   "Secunderabad, Telangana, India",
   "Tolichowki, Hyderabad, Telangana, India",
   "Kompally, Hyderabad, Telangana, India",
   "Manikonda, Hyderabad, Telangana, India",
   "Attapur, Hyderabad, Telangana, India",
   "Nallakunta, Hyderabad, Telangana, India",
   "Chandanagar, Hyderabad, Telangana, India",
   "Malkajgiri, Hyderabad, Telangana, India",
   "Nagole, Hyderabad, Telangana, India",
   "Rajendranagar, Hyderabad, Telangana, India",
   "Habsiguda, Hyderabad, Telangana, India",
   "Shamshabad, Hyderabad, Telangana, India"
];
let d_l_lang=[
    ["Hindi", "Urdu"],
    ["Hindi", "English", "Telugu"],
    ["Hindi", "Telugu", "English"],
    ["Hindi", "English", "Telugu"],
    ["Telugu", "Urdu", "English"],
    ["Urdu", "Hindi"],
    ["Telugu", "Urdu", "Hindi"],
    ["Urdu", "Telugu", "Hindi"],
    ["Telugu", "Hindi"],
    ["Telugu", "Urdu"],
    ["Hindi", "Urdu", "Telugu"],
    ["Hindi", "English", "Urdu"],
    ["English", "Hindi"],
    ["Telugu", "Hindi", "English"],
    ["Hindi", "English", "Telugu"],
    ["Telugu", "Hindi", "Urdu"],
    ["English", "Urdu"],
    ["Hindi", "Telugu", "English"],
    ["English", "Hindi", "Telugu"],
    ["Urdu", "English", "Telugu"],
    ["Urdu", "Telugu", "Hindi"],
    ["Telugu", "English", "Urdu"],
    ["Telugu", "English"],
    ["English", "Telugu"],
    ["Telugu", "Urdu"]
];
let d_l_license_no=[
    "TS-09-2025-ABC1234",
    "TS-09-2025-XYZ5678",
    "TS-09-2025-PQR9101",
    "TS-09-2025-JKL2345",
    "TS-09-2025-MNO6789",
    "TS-09-2025-DEF3456",
    "TS-09-2025-UVW8901",
    "TS-09-2025-IJK2345",
    "TS-09-2025-FGH6789",
    "TS-09-2025-XYZ1234",
    "TS-09-2025-KLM5678",
    "TS-09-2025-OPQ9101",
    "TS-09-2025-RST2345",
    "TS-09-2025-ABC6789",
    "TS-09-2025-JHI3456",
    "TS-09-2025-LMN8901",
    "TS-09-2025-PQR2345",
    "TS-09-2025-KLP6789",
    "TS-09-2025-MNO1234",
    "TS-09-2025-DEF5678",
    "TS-09-2025-UVW9101",
    "TS-09-2025-IJK2345",
    "TS-09-2025-FGH6789",
    "TS-09-2025-XYZ3456",
    "TS-09-2025-KLM8901"
];


let d_l_ages = [
   32, 28, 35, 40, 30, 38, 29, 33, 27, 36,  
   31, 42, 34, 39, 26, 37, 41, 25, 45, 50,  
   30, 43, 48, 29, 44
];


const d_l_ex = [
  5, 6, 4, 3, 7, 8, 5, 6, 10, 4, 
  6, 5, 7, 3, 8, 9, 4, 5, 6, 10, 
  7, 8, 9, 6, 5
];
const reviewList = [
   [
      ["Rahul", 4, "Experienced driver with good route knowledge. Ensures a smooth and safe ride."],
      ["Sneha", 4, "Punctual and follows traffic rules well. Sometimes takes longer routes to avoid congestion."],
      ["Amit", 3.5, "Reliable and friendly, but once arrived late due to traffic issues."],
      ["Kiran", 4.5, "Good driver but could improve his handling in heavy traffic."]
   ],
   [
      ["Nina", 3, "Decent driver but needs improvement in time management."],
      ["Vikram", 3.5, "Follows all traffic rules but lacks speed in urgent situations."],
      ["Tina", 3, "Has good control over the vehicle but needs to improve punctuality."],
      ["Suresh", 4, "Safe driver but took an unexpected leave once."]
   ],
   [
      ["Ravi", 4.5, "Very professional and experienced. Knows all the best routes."],
      ["Sita", 4.5, "Drives smoothly and handles difficult situations well."],
      ["Arun", 4, "Polite and well-mannered. Follows all safety measures."],
      ["Maya", 4, "One of the best drivers! Ensures a stress-free ride."]
   ],
   [
      ["Lina", 3, "Good driving skills but needs improvement in punctuality."],
      ["Vishal", 3.5, "Has good road sense but sometimes takes unplanned leaves."],
      ["Sam", 3, "Drives carefully but could be more proactive in avoiding traffic delays."],
      ["Raj", 3.5, "Fair experience, but time management needs improvement."]
   ],
   [
      ["Shiv", 3.5, "Reliable driver with good navigation skills. Sometimes late but drives safely."],
      ["Madhav", 3.5, "Handles traffic well but takes occasional leaves."],
      ["Priya", 4.5, "Follows traffic rules but could improve customer interaction."],
      ["Nisha", 4.5, "Overall a decent driver, but needs better time management."]
   ],
   [
      ["Neha", 4.2, "Skilled driver with a great sense of road safety."],
      ["Manish", 4.5, "Punctual and smooth driver, ensures passenger comfort."],
      ["Suman", 4, "Handles traffic well and follows all safety guidelines."],
      ["Vijay", 4, "Good at navigation but needs to avoid last-minute cancellations."]
   ],
   [
      ["Anuj", 4.8, "One of the best drivers! Always punctual and very professional."],
      ["Pooja", 4.5, "Knows city routes well and drives smoothly."],
      ["Rajesh", 5, "Highly skilled driver, very safe and comfortable ride."],
      ["Kavita", 4.5, "Excellent at managing traffic situations with ease."]
   ],
   [
      ["Suman", 3.9, "Drives safely but sometimes takes longer routes."],
      ["Vikram", 3.5, "Needs better time management but follows traffic rules."],
      ["Nina", 4, "Good driver with decent customer service."],
      ["Kiran", 4.2, "Avoids traffic well and ensures a comfortable ride."]
   ],
   [
      ["Rita", 4.6, "Exceptional driving skills and very professional."],
      ["Geeta", 4.5, "Always on time and ensures passenger safety."],
      ["Neel", 4.8, "One of the most reliable drivers, highly recommended."],
      ["Ravi", 4.3, "Very skilled but could be more flexible with routes."]
   ],
   [
      ["Shyam", 3.8, "Fairly skilled driver but sometimes arrives late."],
      ["Tanvi", 3.5, "Handles the vehicle well but needs improvement in punctuality."],
      ["Kiran", 4, "Good at navigation and avoids heavy traffic areas."],
      ["Raj", 4, "Reliable and ensures a smooth ride, but has taken unplanned leaves."]
   ],
   [
      ["Madhavi", 4.1, "Safe driver and always follows traffic rules."],
      ["Gauri", 4, "Punctual and professional, good knowledge of city routes."],
      ["Shanti", 4.2, "Skilled driver, ensures comfort and safety."],
      ["Vikram", 4.1, "Drives well but sometimes takes unnecessary detours."]
   ],
   [
      ["Kiran", 4.4, "Professional and well-mannered. Drives efficiently in traffic."],
      ["Ajay", 4.5, "Highly skilled driver, ensures passenger comfort."],
      ["Rohit", 4, "Sometimes takes longer routes but drives smoothly."],
      ["Vinay", 4.5, "Very reliable, avoids unnecessary delays."]
   ],
   [
      ["Rani", 4.9, "One of the best drivers! Very skilled and always on time."],
      ["Aarti", 5, "Highly professional and ensures passenger comfort."],
      ["Rajesh", 4.8, "Exceptional road sense and smooth driving."],
      ["Ananya", 4.9, "Knows every shortcut and avoids heavy traffic well."]
   ],
   [
      ["Suresh", 4.5, "Highly experienced and follows all traffic rules strictly."],
      ["Kavita", 4.5, "Very smooth and comfortable driving experience."],
      ["Amit", 4, "Skilled driver, but could communicate better with passengers."],
      ["Geeta", 5, "Excellent at handling traffic situations with ease."]
   ],
   [
      ["Anil", 3.6, "Fairly skilled driver, but sometimes late."],
      ["Vikas", 3.5, "Good at handling the car, but needs improvement in punctuality."],
      ["Sushma", 3.8, "Ensures a safe ride, but sometimes takes unnecessary detours."],
      ["Bhuvan", 3.5, "Reliable, but took unplanned leave twice."]
   ],
   [
      ["Arvind", 4.2, "Great driver! Always on time and ensures a comfortable ride."],
      ["Shilpa", 4, "Follows all safety norms and traffic rules well."],
      ["Raj", 4.5, "Very professional and polite, avoids risky driving."],
      ["Rani", 4.1, "Reliable and friendly, ensures a stress-free journey."]
   ],
   [
      ["Shyam", 4.3, "Skilled driver with good road knowledge."],
      ["Suman", 4, "Drives well and is always punctual."],
      ["Meera", 4.5, "Ensures passenger comfort and safety."],
      ["Kavita", 4.3, "Handles traffic smoothly and efficiently."]
   ],
   [
      ["Ravi", 4.7, "Highly professional driver with smooth driving skills."],
      ["Madhav", 4.5, "Knows all the best routes and avoids unnecessary delays."],
      ["Kiran", 4.8, "One of the best drivers I’ve had, highly recommended."],
      ["Nina", 4.5, "Very safe and comfortable ride, follows all traffic rules."]
   ],
      [
      ["Kiran", 4.4, "Professional and well-mannered. Drives efficiently in traffic."],
      ["Ajay", 4.5, "Highly skilled driver, ensures passenger comfort."],
      ["Rohit", 4, "Sometimes takes longer routes but drives smoothly."],
      ["Vinay", 4.5, "Very reliable, avoids unnecessary delays."]
   ],
   [
      ["Rani", 4.9, "One of the best drivers! Very skilled and always on time."],
      ["Aarti", 5, "Highly professional and ensures passenger comfort."],
      ["Rajesh", 4.8, "Exceptional road sense and smooth driving."],
      ["Ananya", 4.9, "Knows every shortcut and avoids heavy traffic well."]
   ],
   [
      ["Suresh", 4.5, "Highly experienced and follows all traffic rules strictly."],
      ["Kavita", 4.5, "Very smooth and comfortable driving experience."],
      ["Amit", 4, "Skilled driver, but could communicate better with passengers."],
      ["Geeta", 5, "Excellent at handling traffic situations with ease."]
   ],
   [
      ["Anil", 3.6, "Fairly skilled driver, but sometimes late."],
      ["Vikas", 3.5, "Good at handling the car, but needs improvement in punctuality."],
      ["Sushma", 3.8, "Ensures a safe ride, but sometimes takes unnecessary detours."],
      ["Bhuvan", 3.5, "Reliable, but took unplanned leave twice."]
   ],
   [
      ["Arvind", 4.2, "Great driver! Always on time and ensures a comfortable ride."],
      ["Shilpa", 4, "Follows all safety norms and traffic rules well."],
      ["Raj", 4.5, "Very professional and polite, avoids risky driving."],
      ["Rani", 4.1, "Reliable and friendly, ensures a stress-free journey."]
   ],
   [
      ["Shyam", 4.3, "Skilled driver with good road knowledge."],
      ["Suman", 4, "Drives well and is always punctual."],
      ["Meera", 4.5, "Ensures passenger comfort and safety."],
      ["Kavita", 4.3, "Handles traffic smoothly and efficiently."]
   ],
   [
      ["Ravi", 4.7, "Highly professional driver with smooth driving skills."],
      ["Madhav", 4.5, "Knows all the best routes and avoids unnecessary delays."],
      ["Kiran", 4.8, "One of the best drivers I’ve had, highly recommended."],
      ["Nina", 4.5, "Very safe and comfortable ride, follows all traffic rules."]
   ]
];
let driverExperience = [
    [
        [22, "Toyota Innova Crysta", "3 - 4 years in Banjara Hills, Hyderabad"],
        [10, "Hyundai Verna", "2 - 3 years in Jubilee Hills, Hyderabad"],
        [33, "BMW 3 Series", "4 - 5 years in Gachibowli, Hyderabad"],
        [17, "Mahindra Scorpio-N", "1 - 2 years in Madhapur, Hyderabad"]
    ],
    [
        ["Vikram", "Honda City", "2 - 3 years in Madhapur, Hyderabad"],
        ["Vikram", "Hyundai Verna", "3 - 4 years in Jubilee Hills, Hyderabad"],
        ["Vikram", "BMW X5", "4 - 5 years in Banjara Hills, Hyderabad"],
        ["Vikram", "Maruti Suzuki Swift", "1 - 2 years in Gachibowli, Hyderabad"]
    ],
    [
        ["Rohan", "Toyota Fortuner", "5 - 6 years in Gachibowli, Hyderabad"],
        ["Rohan", "Audi A4", "4 - 5 years in Banjara Hills, Hyderabad"],
        ["Rohan", "BMW 3 Series", "2 - 3 years in Madhapur, Hyderabad"],
        ["Rohan", "Mercedes-Benz E-Class", "3 - 4 years in Jubilee Hills, Hyderabad"]
    ],
    [
        ["Sanjay", "Hyundai Verna", "3 - 4 years in Jubilee Hills, Hyderabad"],
        ["Sanjay", "Maruti Suzuki Swift", "2 - 3 years in Banjara Hills, Hyderabad"],
        ["Sanjay", "Honda City", "4 - 5 years in Madhapur, Hyderabad"],
        ["Sanjay", "BMW X5", "3 - 4 years in Gachibowli, Hyderabad"]
    ],
    [
        ["Shashank Tirandas", "Toyota Innova Crysta", "3 - 4 years in Banjara Hills, Hyderabad"],
        ["Shashank Tirandas", "Hyundai Verna", "2 - 3 years in Jubilee Hills, Hyderabad"],
        ["Shashank Tirandas", "BMW X5", "4 - 5 years in Gachibowli, Hyderabad"],
        ["Shashank Tirandas", "Mahindra Scorpio-N", "1 - 2 years in Madhapur, Hyderabad"]
    ],
    [
        ["Kumara Swamy", "Honda City", "2 - 3 years in Gachibowli, Hyderabad"],
        ["Kumara Swamy", "Hyundai Verna", "3 - 4 years in Banjara Hills, Hyderabad"],
        ["Kumara Swamy", "BMW X5", "4 - 5 years in Madhapur, Hyderabad"],
        ["Kumara Swamy", "Maruti Suzuki Swift", "1 - 2 years in Jubilee Hills, Hyderabad"]
    ],
    [
        ["Ronith", "Mercedes-Benz E-Class", "4 - 5 years in Gachibowli, Hyderabad"],
        ["Ronith", "BMW 3 Series", "3 - 4 years in Banjara Hills, Hyderabad"],
        ["Ronith", "Hyundai Verna", "5 - 6 years in Jubilee Hills, Hyderabad"],
        ["Ronith", "Audi A4", "2 - 3 years in Madhapur, Hyderabad"]
    ],
    [
        ["Suhas Anadh", "Honda City", "2 - 3 years in Madhapur, Hyderabad"],
        ["Suhas Anadh", "Hyundai Verna", "3 - 4 years in Gachibowli, Hyderabad"],
        ["Suhas Anadh", "BMW X5", "4 - 5 years in Banjara Hills, Hyderabad"],
        ["Suhas Anadh", "Maruti Suzuki Swift", "1 - 2 years in Jubilee Hills, Hyderabad"]
    ],
    [
        ["Jeevan Sai", "Toyota Innova Crysta", "4 - 5 years in Banjara Hills, Hyderabad"],
        ["Jeevan Sai", "Hyundai Verna", "5 - 6 years in Jubilee Hills, Hyderabad"],
        ["Jeevan Sai", "Audi A4", "2 - 3 years in Madhapur, Hyderabad"],
        ["Jeevan Sai", "BMW X5", "3 - 4 years in Gachibowli, Hyderabad"]
    ],
    [
        ["Harsha Teja", "Toyota Innova Crysta", "3 - 4 years in Banjara Hills, Hyderabad"],
        ["Harsha Teja", "Hyundai Verna", "2 - 3 years in Jubilee Hills, Hyderabad"],
        ["Harsha Teja", "Mahindra Scorpio-N", "4 - 5 years in Gachibowli, Hyderabad"],
        ["Harsha Teja", "BMW X5", "3 - 4 years in Madhapur, Hyderabad"]
    ],
    [
        ["Gopal Krishna", "Honda City", "3 - 4 years in Gachibowli, Hyderabad"],
        ["Gopal Krishna", "Hyundai Verna", "2 - 3 years in Banjara Hills, Hyderabad"],
        ["Gopal Krishna", "BMW 3 Series", "4 - 5 years in Jubilee Hills, Hyderabad"],
        ["Gopal Krishna", "Maruti Suzuki Swift", "1 - 2 years in Madhapur, Hyderabad"]
    ],
    [
        ["Manoj Kumar", "Toyota Innova Crysta", "3 - 4 years in Banjara Hills, Hyderabad"],
        ["Manoj Kumar", "Hyundai Verna", "2 - 3 years in Gachibowli, Hyderabad"],
        ["Manoj Kumar", "BMW X5", "4 - 5 years in Jubilee Hills, Hyderabad"],
        ["Manoj Kumar", "Mahindra Scorpio-N", "1 - 2 years in Madhapur, Hyderabad"]
    ],
    [
        ["Akhil Varma", "Mercedes-Benz E-Class", "3 - 4 years in Gachibowli, Hyderabad"],
        ["Akhil Varma", "BMW X5", "4 - 5 years in Banjara Hills, Hyderabad"],
        ["Akhil Varma", "Audi A4", "2 - 3 years in Madhapur, Hyderabad"],
        ["Akhil Varma", "Hyundai Verna", "5 - 6 years in Jubilee Hills, Hyderabad"]
    ],
    [
        ["Ravi Teja", "Toyota Innova Crysta", "4 - 5 years in Banjara Hills, Hyderabad"],
        ["Ravi Teja", "Hyundai Verna", "5 - 6 years in Gachibowli, Hyderabad"],
        ["Ravi Teja", "BMW X5", "2 - 3 years in Jubilee Hills, Hyderabad"],
        ["Ravi Teja", "Mahindra Scorpio-N", "3 - 4 years in Madhapur, Hyderabad"]
    ],
    [
        ["Pavan Kumar", "Honda City", "3 - 4 years in Gachibowli, Hyderabad"],
        ["Pavan Kumar", "Hyundai Verna", "2 - 3 years in Banjara Hills, Hyderabad"],
        ["Pavan Kumar", "BMW 3 Series", "4 - 5 years in Jubilee Hills, Hyderabad"],
        ["Pavan Kumar", "Maruti Suzuki Swift", "1 - 2 years in Madhapur, Hyderabad"]
    ],
    [
        ["Tarun Yadav", "Toyota Innova Crysta", "4 - 5 years in Banjara Hills, Hyderabad"],
        ["Tarun Yadav", "Hyundai Verna", "5 - 6 years in Gachibowli, Hyderabad"],
        ["Tarun Yadav", "BMW X5", "2 - 3 years in Jubilee Hills, Hyderabad"],
        ["Tarun Yadav", "Mahindra Scorpio-N", "3 - 4 years in Madhapur, Hyderabad"]
    ],
    [
        ["Nikhil", "Honda City", "1 - 2 years in Jubilee Hills, Hyderabad"],
        ["Nikhil", "Hyundai Verna", "3 - 4 years in Gachibowli, Hyderabad"],
        ["Nikhil", "BMW 3 Series", "2 - 3 years in Banjara Hills, Hyderabad"],
        ["Nikhil", "Maruti Suzuki Swift", "5 - 6 years in Madhapur, Hyderabad"]
    ],
    [
        ["Manoj Kumar", "BMW 3 Series", "4 - 5 years in Jubilee Hills, Hyderabad"],
        ["Manoj Kumar", "Audi Q7", "1 - 2 years in Gachibowli, Hyderabad"],
        ["Manoj Kumar", "Mercedes-Benz C-Class", "3 - 4 years in Banjara Hills, Hyderabad"],
        ["Manoj Kumar", "BMW X5", "2 - 3 years in Madhapur, Hyderabad"]
    ],
    [
        ["Aditya", "Mercedes-Benz GLE", "5 - 6 years in Gachibowli, Hyderabad"],
        ["Aditya", "Toyota Fortuner", "4 - 5 years in Banjara Hills, Hyderabad"],
        ["Aditya", "BMW X5", "3 - 4 years in Jubilee Hills, Hyderabad"],
        ["Aditya", "Range Rover Evoque", "2 - 3 years in Madhapur, Hyderabad"]
    ],
    [
        ["Aakash", "Honda Amaze", "2 - 3 years in Gachibowli, Hyderabad"],
        ["Aakash", "Toyota Fortuner", "4 - 5 years in Banjara Hills, Hyderabad"],
        ["Aakash", "Hyundai Creta", "3 - 4 years in Jubilee Hills, Hyderabad"],
        ["Aakash", "BMW 3 Series", "1 - 2 years in Madhapur, Hyderabad"]
    ],
    [
        ["Anil Kumar", "Mercedes-Benz C-Class", "4 - 5 years in Gachibowli, Hyderabad"],
        ["Anil Kumar", "BMW X5", "3 - 4 years in Banjara Hills, Hyderabad"],
                ["Anil Kumar", "Audi R8", "2 - 3 years in Jubilee Hills, Hyderabad"],
        ["Anil Kumar", "Hyundai Verna", "5 - 6 years in Madhapur, Hyderabad"]
    ],
    [
        ["Shyam", "Honda City", "3 - 4 years in Banjara Hills, Hyderabad"],
        ["Shyam", "Toyota Fortuner", "4 - 5 years in Gachibowli, Hyderabad"],
        ["Shyam", "Tata Safari", "2 - 3 years in Jubilee Hills, Hyderabad"],
        ["Shyam", "BMW X5", "1 - 2 years in Madhapur, Hyderabad"]
    ],
    [
        ["Raghav", "BMW 7 Series", "4 - 5 years in Gachibowli, Hyderabad"],
        ["Raghav", "Audi Q7", "3 - 4 years in Banjara Hills, Hyderabad"],
        ["Raghav", "Toyota Fortuner", "5 - 6 years in Jubilee Hills, Hyderabad"],
        ["Raghav", "Hyundai Creta", "2 - 3 years in Madhapur, Hyderabad"]
    ],
    [
    ["Charan Deep", "Maruti Suzuki Swift", "3 - 4 years in Gachibowli, Hyderabad"],
    ["Charan Deep", "Hyundai Verna", "2 - 3 years in Banjara Hills, Hyderabad"],
    ["Charan Deep", "BMW X5", "4 - 5 years in Madhapur, Hyderabad"],
    ["Charan Deep", "Toyota Innova Crysta", "1 - 2 years in Jubilee Hills, Hyderabad"]
],
    [
    ["Aravind Prasad", "Honda City", "4 - 5 years in Banjara Hills, Hyderabad"],
    ["Aravind Prasad", "BMW 3 Series", "3 - 4 years in Gachibowli, Hyderabad"],
    ["Aravind Prasad", "Audi A4", "5 - 6 years in Jubilee Hills, Hyderabad"],
    ["Aravind Prasad", "Hyundai Creta", "2 - 3 years in Madhapur, Hyderabad"]
]

];
for(let i=0;i<driverExperience.length;i++){
  skilled_at[i]=[];
  for(let j=0;j<driverExperience[i].length;j++){
    let tt=true;
  for(let u=0;u<cars_list.length;u++){
  if(cars_list[u]==driverExperience[i][j][1]){
     driverExperience[i][j][0]=u;
     skilled_at[i][j]=u;
     tt=false;
     break;
  //   console.log(u);
   }
  }
     if(tt){
     console.log(driverExperience[i][j]);
   }
  }
}
console.log( skilled_at);


console.log(driverExperience.length);
console.log(skilled_at.length);
console.log(reviewList.length);




let d_type=[];
for(let i=0;i<d_l_name.length;i++){
  d_type[i]=[];
  for(let j=0;j<d_l_name.length;j++){
  d_type[i][j]=j;
  }
}

let d_l_ex_t=d_l_ex.slice();

const sort=(arr,arr_i)=>{
  for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]<arr[j]){
       let temp=arr[i];
       arr[i]=arr[j];
       arr[j]=temp;
       let temp_i=arr_i[i];
       arr_i[i]=arr_i[j];
       arr_i[j]=temp_i;
    }
    }
}
   return [arr,arr_i];
}

[d_l_ex_t,d_type[1]]=sort(d_l_ex_t,d_type[1]);

//console.log(d_type[1],d_l_ex_t,d_l_ex);

const d_l_r = [
  4, 3.5, 4.5, 3, 3.5, 4.2, 4.8, 3.9, 4.6, 3.8, 
  4.1, 4.4, 3.7, 3.2, 4.9, 4.5, 3.6, 4.2, 4.3, 4.7, 
  3.9, 4.8, 4.2, 4.0, 4.1
];
let d_l_r_t=d_l_r.slice();
[d_l_r_t,d_type[2]]=sort(d_l_r_t,d_type[2]);
const d_l_s = [
  8, 9, 8, 7, 10, 9, 8, 7, 11, 8, 
  9, 7, 10, 6, 11, 10, 7, 8, 9, 12, 
  10, 11, 12, 9, 8
];
let d_status = [
  "available", "working", "unavailable", "available", "working",
  "unavailable", "available", "working", "unavailable", "available",
  "working", "unavailable", "available", "working", "unavailable",
  "available", "working", "unavailable", "available", "working",
  "unavailable", "available", "working", "unavailable", "available"
];
let d_status_c=[
  "available", "working", "unavailable"
  ];

/*const a_sort=(arr,arr_i)=>{
  for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    for(let u=i+1;u<3;u++){
    if(arr[i]){
    }
    }
    }
    }
}
   return [arr,arr_i];
}*/

for(let i=0;i<d_l_name.length;i++){
    d_l_name[i]=toCapitalCase(d_l_name[i]);
   // d_status[i]=toCapitalCase(d_status[i]);
 //   console.log(d_l_name[i]);
  } 

//searched list search bar
function s_l_search_bar_f(){
  //console.log("helloooo");
  const search_text=document.querySelector(".s_l_search_text");
  const search_icon=document.querySelector(".s_l_search_icon");
  const searched_list_space=document.querySelector(".s_l_searched_list_space");
let c_l_l=[];
let s_l_l=[];
let s_l_sugg_list=[];
let s_l_m=[];
search_text.addEventListener("input",()=>{
   searched_list_space.innerHTML="";
   let value=search_text.value;
   let v_len=value.length;
   const c_list_out=(c_l,valuee)=>{
      let c_len=c_l.length;
      let c_listed=[];
      let c_listed_index=[];
      let c_listed_u=[];
      let c_listed_c=[];
      let c_listed_i=0;
      for(let i=0;i<c_len;i++){
      for(let j=0;j<c_l[i].length;j++){
       let c_len=cars_list[c_l[i][j]].length;
      for(let v=0;v<c_len-(c_len%v_len)-1;v++){
        let sl=cars_list[c_l[i][j]].slice(v,v+v_len);
 if(valuee.toLowerCase()==sl.toLowerCase()){
    //  console.log(`${v} ${v_len} ${sl}`);
  // console.log(`=> ${value} ${sl} ${l[u]}`);
    c_listed[c_listed_i]=cars_list[c_l[i][j]];
      c_listed_index[c_listed_i]=v;
      c_listed_u[c_listed_i]=i;
      c_listed_c[c_listed_i]=0;
      c_listed_i++;
        break;
          }
        } 
        }
      }
      return [c_listed,c_listed_index,c_listed_u,c_listed_c];
   }
   c_l_l=c_list_out(skilled_at,value);
   
   const list_out=(l)=>{
      let len=l.length;
      let listed=[];
      let listed_index=[];
      let listed_u=[];
      let listed_s=[];
      let listed_i=0;
      for(let u=0;u<len;u++){
       let s_len=l[u].length;
     for(let v=0;v<s_len-(s_len%v_len)-1;v++){
          let sl=l[u].slice(v,v+v_len);
    if(value.toLowerCase()==sl.toLowerCase()){
    //  console.log(`${v} ${v_len} ${sl}`);
  // console.log(`=> ${value} ${sl} ${l[u]}`);
      listed[listed_i]=l[u];
      listed_index[listed_i]=v;
      listed_u[listed_i]=u;
      listed_s[listed_i]=1;
      listed_i++;
        break;
          }
        }
      }
      return [listed,listed_index,listed_u,listed_s];
    }
  
   const concat=(pre,post)=>{
      let pp=0;
      let con=[];
      for(let p=0;p<pre.length;p++){
        con[pp]=pre[p];
        pp++;
      }
      for(let p=0;p<post.length;p++){
        con[pp]=post[p];
        pp++;
      }
      return con;
    }
   const e_copy=(arr)=>{
      let d_arr=[];
      let d_i=1;
      d_arr[0]=arr[0];
      for(let a=1;a<arr.length;a++){
        let test=true;
        for(let b=0;b<a;b++){
         if(arr[b]==arr[a]){
           test=false;
           break;
         }
        }
        if(test){
          d_arr[d_i]=arr[a];
          d_i++;
        }
      }
      return d_arr;
    }
    s_l_l= list_out(d_l_name);
    
  const e_copy_cs=(arr_m,arr_f,arr_sign)=>{
      let d_arr_m=[];
      let d_arr_f=[];
      let d_arr_sign=[];
      let d_i=1;
      d_arr_m[0]=arr_m[0];
      d_arr_f[0]=arr_f[0];
      d_arr_sign[0]=arr_sign[0];
      for(let a=1;a<arr_m.length;a++){
        let test=true;
        for(let b=0;b<a;b++){
         if(arr_m[b]==arr_m[a]){
           test=false;
           break;
         }
        }
        if(test){
          d_arr_m[d_i]=arr_m[a];
          d_arr_f[d_i]=arr_f[a];
          d_arr_sign[d_i]=arr_sign[a];
          d_i++;
        }
      }
      return [d_arr_m,d_arr_f,d_arr_sign];
    }
    
  s_l_m=e_copy_cs(concat(c_l_l[0],s_l_l[0]),concat(c_l_l[1],s_l_l[1]),concat(c_l_l[3],s_l_l[3]));
   
   let s_l=s_l_m[0];
   let s_l_in=s_l_m[1];
   let s_l_sign=s_l_m[2];
   console.log(s_l_m);
   s_l_sugg_list=e_copy(concat(c_l_l[2],s_l_l[2]));
   if(s_l[0]){
//   console.log("fainall",s_l,s_l_in);
    for(let i=0;i<s_l.length;i++){
    const searched_list_item=document.createElement("div");  
    searched_list_item.classList.add("m_searched_list_item");
    
    const searched_list_item_icon=document.createElement("div");  
    searched_list_item_icon.classList.add("m_searched_list_item_icon");
    searched_list_item_icon.innerHTML=`
     <i class="fa-solid fa-magnifying-glass"></i>
    `;
    searched_list_item.append(searched_list_item_icon);
    
    const searched_list_item_name=document.createElement("div");  
    searched_list_item_name.classList.add("m_searched_list_item_name");
    searched_list_item_name.innerHTML=`
   ${s_l[i].slice(0,s_l_in[i])}<span>${s_l[i].slice(s_l_in[i],v_len+s_l_in[i])}</span>${s_l[i].slice(v_len+s_l_in[i],)}`;
    searched_list_item.append(searched_list_item_name);
    
 searched_list_item.addEventListener("click",()=>{
   if(!s_l_sign[i]){
   searched_list_item.style.backgroundColor="yellow";
   searched_list_space.innerHTML="";
   search_text.value=s_l[i];
   let list_bar_d=[];
   let list_bar_d_i=0;
   for(let ci=0;ci<skilled_at.length;ci++){
   for(let cj=0;cj<skilled_at[ci].length;cj++){
     if(cars_list[skilled_at[ci][cj]].toLowerCase()==s_l[i].toLowerCase()){
     list_bar_d[list_bar_d_i]=ci;
        list_bar_d_i++;
       }
     }
   }
   s_l_sugg(list_bar_d);
  // console.log(list_bar_d);
   }
   else{
     searched_list_item.style.backgroundColor="yellow";
     let pp_j=0;
     for(let pp_i=0;pp_i<d_l_name.length;pp_i++){
       if(d_l_name[pp_i]==s_l[i]){
         pp_j=pp_i;
         break;
       }
     }
     profile_page_f(pp_j,0);
     console.log(search_text.value);
     search_text.value=d_l_name[pp_j];
     console.log(search_text.value);
     
     searched_list_space.innerHTML="";
     
   }
  // ("alert");
    })
   // console.log(searched_list_item_name.innerHTML);
    searched_list_space.append(searched_list_item);
    }
    searched_list_space.style.display="flex";
   }
  })
  search_icon.addEventListener("click",()=>{
 //   if(s_l_m[0][0]){
      //console.log(s_l_m[1][0]);
    s_l_sugg(s_l_sugg_list);
    console.log("main_page",s_l_sugg_list);
    searched_list_space.innerHTML="";
   //}
 /*   else{
      console.log(s_l_m[0][0])
    }*/
  })
}

//searched list suggetion list
function s_l_sugg(type){
const suggetion_space=document.querySelector(".s_l_suggetion_space");
const s_l_not_found_space=document.querySelector(".s_l_not_found_space");
suggetion_space.innerHTML="";
s_l_not_found_space.style.display="none";
let a=1;
let b=1;
if(type[0]+1){
  b=0;
}
console.log(type);
if(type.length-b){
for(let ii=0;ii<type.length-b;ii++){
  let i=type[ii];
const sugg=document.createElement("div");
sugg.classList.add("sugg");
sugg.addEventListener("click",()=>{
  console.log("hi")
  profile_page_f(i,0);
  const search_list_page=document.querySelector(".search_list_page");
const profile_page=document.querySelector(".profile_page");
search_list_page.style.display="none";
profile_page.style.display="flex";
  
})
const d_sugg_head=document.createElement("div");
d_sugg_head.classList.add("d_sugg_head");

const d_sugg_head_name=document.createElement("div");
d_sugg_head_name.classList.add("d_sugg_head_name");
d_sugg_head_name.innerText="Driver";
d_sugg_head.append(d_sugg_head_name);

const d_sugg_ex=document.createElement("div");
d_sugg_ex.classList.add("d_sugg_ex");
d_sugg_ex.innerText=`${d_l_ex[i]} years`;
d_sugg_head.append(d_sugg_ex);

sugg.append(d_sugg_head);

const d_profile_info=document.createElement("div");
d_profile_info.classList.add("d_profile_info");

const d_profile_photo=document.createElement("div");
d_profile_photo.classList.add("d_profile_photo");
if(i<5)
d_profile_photo.style.backgroundImage=`url('d_p_p/d${i}.jpg')`;
else
d_profile_photo.style.backgroundImage=`url('d_p_p/d${1}.jpg')`;
d_profile_info.append(d_profile_photo);

const d_profile_dis=document.createElement("div");
d_profile_dis.classList.add("d_profile_dis");

const d_profile_dis_name=document.createElement("div");
d_profile_dis_name.classList.add("d_profile_dis_name");
d_profile_dis_name.innerText=d_l_name[i];
d_profile_dis.append(d_profile_dis_name);

const d_profile_dis_rating=document.createElement("div");
d_profile_dis_rating.classList.add("d_profile_dis_rating");
let tem_r="";
for(let tr=0;tr<5;tr++){
  if(tr<Math.floor(d_l_r[i])){
    tem_r+=`<i class="fa-solid fa-star"></i>`;
  }
  else if(tr<d_l_r[i]){
   tem_r+=`<i class="fa-solid fa-star-half-stroke"></i>`;
  }
  else{
  tem_r+=`<i class="fa-regular fa-star"></i>`;
  }
}
d_profile_dis_rating.innerHTML=tem_r;
d_profile_dis.append(d_profile_dis_rating);

const d_profile_dis_salary=document.createElement("div");
d_profile_dis_salary.classList.add("d_profile_dis_salary");
d_profile_dis_salary.innerHTML=`Salary : ${d_l_s[i]} LPA`;
d_profile_dis.append(d_profile_dis_salary);

d_profile_info.append(d_profile_dis);

sugg.append(d_profile_info);

const f_sugg_space=document.createElement("div");
f_sugg_space.classList.add("f_sugg_space");

const f_sugg=document.createElement("div");
f_sugg.classList.add("f_sugg");
if(d_status[i]==d_status_c[0]){
f_sugg.innerHTML=`
 <i class="fa-solid fa-circle-check"></i>
 `;
}
else if(d_status[i]==d_status_c[1]){
f_sugg.innerHTML=`
  <i class="fa-solid fa-circle-check" style="color:#ffa000"></i>
 `;
 f_sugg.style.color="##ffc000";
}
else if(d_status[i]==d_status_c[2]){
f_sugg.innerHTML=`
 <i class="fa-solid fa-circle-xmark" style="color:#ff5353"></i>
 `;
 //f_sugg.style.color="#fe9696";
}

f_sugg.innerHTML+=`${d_status[i]}`;
f_sugg_space.append(f_sugg);

sugg.append(f_sugg_space);


suggetion_space.append(sugg);
}
}
else{
  s_l_not_found_space.style.display="flex";
}
          }

//searched list page
function search_list_page(){
  const search_list_page=document.querySelector(".search_list_page");
  const home_page=document.querySelector(".home_page");
  const s_l_back_btn=document.querySelector(".s_l_back_btn");
  s_l_back_btn.addEventListener("click",()=>{
    search_list_page.style.display="none";
    home_page.style.display="flex";
  })
  s_l_search_bar_f();
  //s_l_sugg(d_type[0]);
}
search_list_page();

//main page suggetion list
function sugg(type){
const suggetion_space=document.querySelector(".suggetion_space");
suggetion_space.innerHTML="";
let a=1;
for(let ii=0;ii<d_l_name.length ;ii++){
  let i=type[ii];
const sugg=document.createElement("div");
sugg.classList.add("sugg");
sugg.addEventListener("click",()=>{
  console.log("hi")
  profile_page_f(i,1);
  const home_page=document.querySelector(".home_page");
const profile_page=document.querySelector(".profile_page");
home_page.style.display="none";
profile_page.style.display="flex";
  
})
const d_sugg_head=document.createElement("div");
d_sugg_head.classList.add("d_sugg_head");

const d_sugg_head_name=document.createElement("div");
d_sugg_head_name.classList.add("d_sugg_head_name");
d_sugg_head_name.innerText="Driver";
d_sugg_head.append(d_sugg_head_name);

const d_sugg_ex=document.createElement("div");
d_sugg_ex.classList.add("d_sugg_ex");
d_sugg_ex.innerText=`${d_l_ex[i]} years`;
d_sugg_head.append(d_sugg_ex);

sugg.append(d_sugg_head);

const d_profile_info=document.createElement("div");
d_profile_info.classList.add("d_profile_info");

const d_profile_photo=document.createElement("div");
d_profile_photo.classList.add("d_profile_photo");
if(i<5)
d_profile_photo.style.backgroundImage=`url('d_p_p/d${i}.jpg')`;
else
d_profile_photo.style.backgroundImage=`url('d_p_p/d${1}.jpg')`;
d_profile_info.append(d_profile_photo);

const d_profile_dis=document.createElement("div");
d_profile_dis.classList.add("d_profile_dis");

const d_profile_dis_name=document.createElement("div");
d_profile_dis_name.classList.add("d_profile_dis_name");
d_profile_dis_name.innerText=d_l_name[i];
d_profile_dis.append(d_profile_dis_name);

const d_profile_dis_rating=document.createElement("div");
d_profile_dis_rating.classList.add("d_profile_dis_rating");
let tem_r="";
for(let tr=0;tr<5;tr++){
  if(tr<Math.floor(d_l_r[i])){
    tem_r+=`<i class="fa-solid fa-star"></i>`;
  }
  else if(tr<d_l_r[i]){
   tem_r+=`<i class="fa-solid fa-star-half-stroke"></i>`;
  }
  else{
  tem_r+=`<i class="fa-regular fa-star"></i>`;
  }
}
d_profile_dis_rating.innerHTML=tem_r;
d_profile_dis.append(d_profile_dis_rating);

const d_profile_dis_salary=document.createElement("div");
d_profile_dis_salary.classList.add("d_profile_dis_salary");
d_profile_dis_salary.innerHTML=`Salary : ${d_l_s[i]} LPA`;
d_profile_dis.append(d_profile_dis_salary);

d_profile_info.append(d_profile_dis);

sugg.append(d_profile_info);

const f_sugg_space=document.createElement("div");
f_sugg_space.classList.add("f_sugg_space");

const f_sugg=document.createElement("div");
f_sugg.classList.add("f_sugg");
if(d_status[i]==d_status_c[0]){
f_sugg.innerHTML=`
 <i class="fa-solid fa-circle-check"></i>
 `;
}
else if(d_status[i]==d_status_c[1]){
f_sugg.innerHTML=`
  <i class="fa-solid fa-circle-check" style="color:#ffa000"></i>
 `;
 f_sugg.style.color="##ffc000";
}
else if(d_status[i]==d_status_c[2]){
f_sugg.innerHTML=`
 <i class="fa-solid fa-circle-xmark" style="color:#ff5353"></i>
 `;
 //f_sugg.style.color="#fe9696";
}

f_sugg.innerHTML+=`${d_status[i]}`;
f_sugg_space.append(f_sugg);

sugg.append(f_sugg_space);


suggetion_space.append(sugg);
}
}
//sugg(d_l_ex_t_i);
sugg(d_type[0]);
function menu_bar_f(){
  const m_l = [
    "All ",
    "Experience",
    "Rating",
    "Availability",
    "Location",
    "Salary",
    "Experience Level",
    "License Type",
    "Age",
    "Driver's Vehicle",
    "Working Hours",
    "Distance Covered",
    "Hourly Rate",
    "long-distance ", 
    "city driving",
    "Customer Feedback",
    "Insurance Status"
];
  let m_l_a=[]
  const menu_bar=document.querySelector(".menu_bar");
  let p=0;
  for(let i=0;i<m_l.length;i++){
    const m_b=document.createElement("div");
    m_b.classList.add("m_b");
    m_b.innerText=m_l[i];
    if(i==p){
     m_b.style.color="#faa71f";
    }
    m_l_a[i]=m_b;
    m_b.addEventListener("click",()=>{
      if(i==1){
        sugg(d_type[1]);
      }
      else if(i==2){
      sugg(d_type[2]);
      }
      else{
        sugg(d_type[0]);
      }
      m_l_a[p].style.color="#7c969a";
      m_l_a[i].style.color="#faa71f";
      p=i;
    })
    menu_bar.append(m_b);
  }
  
}
menu_bar_f();

//main page search bar
function m_search_bar_f(){
//  console.log("helloooo");
  
  const search_list_page=document.querySelector(".search_list_page");
  const home_page=document.querySelector(".home_page");
  
  const search_text=document.querySelector(".m_search_text");
  const search_icon=document.querySelector(".m_search_icon");
  search_text.value="";
  const searched_list_space=document.querySelector(".m_searched_list_space");
let s_l_sugg_list=[];
let c_l_l=[];
let s_l_m=[];
let s_l_l=[];
search_text.addEventListener("input",()=>{
   searched_list_space.innerHTML="";
   let value=search_text.value;
   let v_len=value.length;
   const c_list_out=(c_l,valuee)=>{
      let c_len=c_l.length;
      let c_listed=[];
      let c_listed_index=[];
      let c_listed_u=[];
      let c_listed_c=[];
      let c_listed_i=0;
      for(let i=0;i<c_len;i++){
      for(let j=0;j<c_l[i].length;j++){
       let c_len=cars_list[c_l[i][j]].length;
      for(let v=0;v<c_len-(c_len%v_len)-1;v++){
        let sl=cars_list[c_l[i][j]].slice(v,v+v_len);
 if(valuee.toLowerCase()==sl.toLowerCase()){
    //  console.log(`${v} ${v_len} ${sl}`);
  // console.log(`=> ${value} ${sl} ${l[u]}`);
    c_listed[c_listed_i]=cars_list[c_l[i][j]];
      c_listed_index[c_listed_i]=v;
      c_listed_u[c_listed_i]=i;
      c_listed_c[c_listed_i]=0;
      c_listed_i++;
        break;
          }
        } 
        }
      }
      return [c_listed,c_listed_index,c_listed_u,c_listed_c];
   }
   c_l_l=c_list_out(skilled_at,value);
   
   const list_out=(l)=>{
      let len=l.length;
      let listed=[];
      let listed_index=[];
      let listed_u=[];
      let listed_s=[];
      let listed_i=0;
      for(let u=0;u<len;u++){
       let s_len=l[u].length;
     for(let v=0;v<s_len-(s_len%v_len)-1;v++){
          let sl=l[u].slice(v,v+v_len);
    if(value.toLowerCase()==sl.toLowerCase()){
    //  console.log(`${v} ${v_len} ${sl}`);
  // console.log(`=> ${value} ${sl} ${l[u]}`);
      listed[listed_i]=l[u];
      listed_index[listed_i]=v;
      listed_u[listed_i]=u;
      listed_s[listed_i]=1;
      listed_i++;
        break;
          }
        }
      }
      return [listed,listed_index,listed_u,listed_s];
    }
  
   const concat=(pre,post)=>{
      let pp=0;
      let con=[];
      for(let p=0;p<pre.length;p++){
        con[pp]=pre[p];
        pp++;
      }
      for(let p=0;p<post.length;p++){
        con[pp]=post[p];
        pp++;
      }
      return con;
    }
   const e_copy=(arr)=>{
      let d_arr=[];
      let d_i=1;
      d_arr[0]=arr[0];
      for(let a=1;a<arr.length;a++){
        let test=true;
        for(let b=0;b<a;b++){
         if(arr[b]==arr[a]){
           test=false;
           break;
         }
        }
        if(test){
          d_arr[d_i]=arr[a];
          d_i++;
        }
      }
      return d_arr;
    }
   s_l_l= list_out(d_l_name);
    
  const e_copy_cs=(arr_m,arr_f,arr_sign)=>{
      let d_arr_m=[];
      let d_arr_f=[];
      let d_arr_sign=[];
      let d_i=1;
      d_arr_m[0]=arr_m[0];
      d_arr_f[0]=arr_f[0];
      d_arr_sign[0]=arr_sign[0];
      for(let a=1;a<arr_m.length;a++){
        let test=true;
        for(let b=0;b<a;b++){
         if(arr_m[b]==arr_m[a]){
           test=false;
           break;
         }
        }
        if(test){
          d_arr_m[d_i]=arr_m[a];
          d_arr_f[d_i]=arr_f[a];
          d_arr_sign[d_i]=arr_sign[a];
          d_i++;
        }
      }
      return [d_arr_m,d_arr_f,d_arr_sign];
    }
    
  s_l_m=e_copy_cs(concat(c_l_l[0],s_l_l[0]),concat(c_l_l[1],s_l_l[1]),concat(c_l_l[3],s_l_l[3]));
   //@
   let s_l=s_l_m[0];
   let s_l_in=s_l_m[1];
   let s_l_sign=s_l_m[2];
//   console.log(s_l_m);
   s_l_sugg_list=e_copy(concat(c_l_l[2],s_l_l[2]));
   if(s_l[0]){
   console.log("finall",s_l,s_l_in);
    for(let i=0;i<s_l.length;i++){
    const searched_list_item=document.createElement("div");  
    searched_list_item.classList.add("m_searched_list_item");
    
    const searched_list_item_icon=document.createElement("div");  
    searched_list_item_icon.classList.add("m_searched_list_item_icon");
    searched_list_item_icon.innerHTML=`
     <i class="fa-solid fa-magnifying-glass"></i>
    `;
    searched_list_item.append(searched_list_item_icon);
    
    const searched_list_item_name=document.createElement("div");  
    searched_list_item_name.classList.add("m_searched_list_item_name");
    searched_list_item_name.innerHTML=`
   ${s_l[i].slice(0,s_l_in[i])}<span>${s_l[i].slice(s_l_in[i],v_len+s_l_in[i])}</span>${s_l[i].slice(v_len+s_l_in[i],)}`;
    searched_list_item.append(searched_list_item_name);
    
 searched_list_item.addEventListener("click",()=>{
   if(!s_l_sign[i]){
   searched_list_item.style.backgroundColor="yellow";
   searched_list_space.innerHTML="";
   search_text.value=s_l[i];
   let list_bar_d=[];
   let list_bar_d_i=0;
   for(let ci=0;ci<skilled_at.length;ci++){
   for(let cj=0;cj<skilled_at[ci].length;cj++){
     if(cars_list[skilled_at[ci][cj]].toLowerCase()==s_l[i].toLowerCase()){
     list_bar_d[list_bar_d_i]=ci;
        list_bar_d_i++;
       }
     }
   }
   s_l_sugg(list_bar_d);
   document.querySelector(".s_l_search_text").value=s_l[i];
   search_list_page.style.display="flex";
  home_page.style.display="none";
 //  console.log(list_bar_d);
   }
   else{
     searched_list_item.style.backgroundColor="yellow";
     let pp_j=0;
     for(let pp_i=0;pp_i<d_l_name.length;pp_i++){
       if(d_l_name[pp_i]==s_l[i]){
         pp_j=pp_i;
         break;
       }
     }
     profile_page_f(pp_j,0);
     console.log(search_text.value);
     search_text.value=d_l_name[pp_j];
     console.log(search_text.value);
     
     searched_list_space.innerHTML="";
     
   }
  // ("alert");
    })
   // console.log(searched_list_item_name.innerHTML);
    searched_list_space.append(searched_list_item);
    }
    searched_list_space.style.display="flex";
   }
   else{
     console.log(s_l);
   }
  })


search_icon.addEventListener("click",()=>{
  if(search_text.value ){
      //console.log(s_l_m[1][0]);
    //console.log(search_text.value);
    s_l_sugg(s_l_sugg_list);
  search_list_page.style.display="flex";
  home_page.style.display="none";
  document.querySelector(".s_l_search_text").value=search_text.value;
  search_text.value="";
  searched_list_space.innerHTML="";
  
  }
  })
}
m_search_bar_f();

function profile_page_f(p_i,h_s){
  const scrollToTop=()=>{
    window.scrollTo({
      top: 0,
     behavior: 'smooth'
    });
  }
 scrollToTop();
  
  document.querySelector(".home_page").style.display="none";
  document.querySelector(".search_list_page").style.display="none";
  document.querySelector(".profile_page").style.display="flex";
  document.querySelector(".p_p_search_text").value=d_l_name[p_i];
  const p_p_back_btn=document.querySelector(".p_p_back_btn");
  const profile_page=document.querySelector(".profile_page");
  const search_list_page=document.querySelector(".search_list_page");
  const home_page=document.querySelector(".home_page");
  p_p_back_btn.addEventListener("click",()=>{
    home_page.style.display="none";
    search_list_page.style.display="none";
    if(h_s){
    home_page.style.display="flex";
    }
    else{
      search_list_page.style.display="flex";
    }
    profile_page.style.display="none";
  })
  
  const profile_poster=document.querySelector(".profile_poster");
  const profile_photo=document.querySelector(".profile_photo");
  const p_p_d_rating=document.querySelector(".p_p_d_rating");
 // profile_poster.style.backgroundImage=`url()`;
  if(p_i<6){
  profile_photo.style.backgroundImage=`url('d_p_p/d${p_i}.jpg')`;
  }
  else{
   profile_photo.style.backgroundImage=`url('d_p_p/d${0}.jpg')`; 
  }
const r_c_s=(y)=>{
 let tem_r="";
for(let tr=0;tr<5;tr++){
  if(tr<Math.floor(y)){
    tem_r+=`<i class="fa-solid fa-star"></i>`;
  }
  else if(tr<y){
   tem_r+=`<i class="fa-solid fa-star-half-stroke"></i>`;
  }
  else{
  tem_r+=`<i class="fa-regular fa-star"></i>`;
  }
}
return tem_r;
}
  p_p_d_rating.innerHTML=`${r_c_s(d_l_r[p_i])} `;
  
  const p_p_d_name=document.querySelector(".p_p_d_name");
  p_p_d_name.innerText=`${d_l_name[p_i]}`;
  const p_p_d_bio=document.querySelector(".p_p_d_bio");
  p_p_d_bio.innerText=` Professional Driver | ${Math.floor(d_l_r[p_i])} + Years Experience | Verified & Licensed
  `;
  const p_p_d_age=document.querySelector(".p_p_d_age");
  p_p_d_age.innerText=`Age : ${d_l_ages[p_i]} years `;
  const p_p_d_salary=document.querySelector(".p_p_d_salary");
  p_p_d_salary.innerText=` Salary : ${d_l_s[p_i]} LPA`;
  const p_p_d_place=document.querySelector(".p_p_d_place");
  p_p_d_place.innerText=`${d_l_places[p_i]}`;
  const p_p_d_license_no=document.querySelector(".p_p_d_license_no");
  p_p_d_license_no.innerText=`Driving License No : ${d_l_license_no[p_i]}`;
  const p_p_d_languages=document.querySelector(".p_p_d_languages");
  let tem_lang="";
  for(let i=0;i<d_l_lang[p_i].length;i++){
    tem_lang+=d_l_lang[p_i][i]+", ";
  }
  tem_lang+="ect..";
  p_p_d_languages.innerText=`Languages : ${tem_lang}`;
  
  const p_p_d_request_button=document.querySelector(".p_p_d_request_button");
  p_p_d_request_button.innerText=`request`;
  let req=true;
  p_p_d_request_button.addEventListener("click",()=>{
    if(req){
   p_p_d_request_button.innerText=`requested`;
    req=false;
    }
    else{
    p_p_d_request_button.innerText=`request`;
    req=true;
    }
  })
  const p_p_d_like_button=document.querySelector(".p_p_d_like_button i");
  p_p_d_like_button.style.color="#67676788";
  let like=true;
  p_p_d_like_button.addEventListener("click",()=>{
    if(like){
   p_p_d_like_button.style.color=" #f3481e";
    like=false;
    }
    else{
    p_p_d_like_button.style.color="#67676788";
    like=true;
    }
  })
  
  const p_p_d_available=document.querySelector(".p_p_d_available");
  const a_f=()=>{
    let tem_a="";
 if(d_status[p_i]==d_status_c[0]){
tem_a=`
 <i class="fa-solid fa-circle-check"></i>
 `;
}
else if(d_status[p_i]==d_status_c[1]){
tem_a=`
  <i class="fa-solid fa-circle-check" style="color:#ffa000"></i>
 `;
}
else if(d_status[p_i]==d_status_c[2]){
tem_a=`
 <i class="fa-solid fa-circle-xmark" style="color:#ff5353"></i>
 `;
 //f_sugg.style.color="#fe9696";
}
return tem_a+d_status[p_i];
  }
  p_p_d_available.innerHTML=`${a_f()}`;
  
  const p_p_d_space=document.querySelector(".p_p_d_space");
  p_p_d_space.innerHTML="";
  const p_p_d_experience_space=document.createElement("div");
  p_p_d_experience_space.classList.add("p_p_d_space_s");
  p_p_d_space.append(p_p_d_experience_space);
  const experience_f=()=>{
  
  const p_p_d_experience_space_heding=document.createElement("div");
  p_p_d_experience_space_heding.classList.add("p_p_d_space_heding");
  p_p_d_experience_space_heding.innerText=`Experience`;
  p_p_d_experience_space.append(p_p_d_experience_space_heding);
  const p_p_d_experience_dis_space_list=document.createElement("div");
  p_p_d_experience_dis_space_list.classList.add("p_p_d_experience_dis_space_list");
  const experience_car_f=(l)=>{
  const p_p_d_experience_dis_space=document.createElement("div");
  p_p_d_experience_dis_space.classList.add("p_p_d_experience_dis_space");
  
  const p_p_d_experience_dis=document.createElement("div");
  p_p_d_experience_dis.classList.add("p_p_d_experience_dis");
 
 const p_p_d_experience_dis_car_photo=document.createElement("div");
  p_p_d_experience_dis_car_photo.classList.add("p_p_d_experience_dis_car_photo");
 
 
/* p_p_d_experience_dis_car_photo.style.backgroundImage=`
 url('car_images/c${l[0]}.jpeg')
 `;
 */
 const formats = ["jpeg", "jpg", "png", "webp", "gif"]; 
const imagePath = `car_images/c${l[0]}`;
const element = p_p_d_experience_dis_car_photo;
for (const format of formats) {
    const img = new Image();
    img.src = `${imagePath}.${format}`;
    img.onload = () => {
        element.style.backgroundImage = `url('${img.src}')`;
    };
}

  p_p_d_experience_dis.append(p_p_d_experience_dis_car_photo);
  
  const p_p_d_experience_dis_block=document.createElement("div");
  p_p_d_experience_dis_block.classList.add("p_p_d_experience_dis_block");
 const p_p_d_experience_dis_car_name=document.createElement("div");
  p_p_d_experience_dis_car_name.classList.add("p_p_d_experience_dis_car_name");
p_p_d_experience_dis_car_name.innerText=`${l[1]}`;
  p_p_d_experience_dis_block.append(p_p_d_experience_dis_car_name);
  
  const p_p_d_experience_dis_car_dis=document.createElement("div");
  p_p_d_experience_dis_car_dis.classList.add("p_p_d_experience_dis_car_dis");
 p_p_d_experience_dis_car_dis.innerText=`Experience : ${l[2]}`;
  p_p_d_experience_dis_block.append(p_p_d_experience_dis_car_dis);
 
  p_p_d_experience_dis.append(p_p_d_experience_dis_block);
 
  p_p_d_experience_dis_space.append(p_p_d_experience_dis);
  
  p_p_d_experience_dis_space_list.append(p_p_d_experience_dis_space);
  }
  
  let list=[
    ["car1.jpeg","Toyota Innova Crysta","3 - 4 years in Banjara Hills, Hyderabad"],["car1.jpeg","Hyundai Verna","2 - 3 years in Jubilee Hills, Hyderabad"],["car1.jpeg","BMW X5","4 - 5 years in Gachibowli, Hyderabad"],["car1.jpeg","Mahindra Scorpio-N","1 - 2 years in Madhapur, Hyderabad"]
    ];
    list=driverExperience[p_i];
  for(let i=0;i<list.length;i++){
    experience_car_f(list[i]);
  }

  p_p_d_experience_space.append(p_p_d_experience_dis_space_list);
  }
  experience_f();
  
  const p_p_d_skilled_at_space=document.createElement("div");
  p_p_d_skilled_at_space.classList.add("p_p_d_space_s");
  const skilled_at_f=()=>{
    const p_p_d_skilled_at_space_heding=document.createElement("div");
  p_p_d_skilled_at_space_heding.classList.add("p_p_d_space_heding");
  p_p_d_skilled_at_space_heding.innerText=`Skilled at`;
  p_p_d_skilled_at_space.append(p_p_d_skilled_at_space_heding);
  const p_p_d_skilled_at_space_dis=document.createElement("div");
  p_p_d_skilled_at_space_dis.classList.add("p_p_d_skilled_at_space_dis");
const list=skilled_at[p_i];
for(let i=0;i<list.length;i++){
  const p_p_d_skilled_tag=document.createElement("span");
  p_p_d_skilled_tag.classList.add("p_p_d_skilled_tag");
  p_p_d_skilled_tag.innerText=`${cars_list[list[i]]}`;
  p_p_d_skilled_at_space_dis.append(p_p_d_skilled_tag);
}
  p_p_d_skilled_at_space.append(p_p_d_skilled_at_space_dis);
  }
  skilled_at_f();
  p_p_d_space.append(p_p_d_skilled_at_space);
  
const p_p_d_feedback_space=document.createElement("div");
  p_p_d_feedback_space.classList.add("p_p_d_space_s");
  const feedback_f=()=>{
    const p_p_d_feedback_heding=document.createElement("div");
  p_p_d_feedback_heding.classList.add("p_p_d_space_heding");
  p_p_d_feedback_heding.innerText=`Reviews`;
  p_p_d_feedback_space.append(p_p_d_feedback_heding);
  const p_p_d_feedback_dis_space_list=document.createElement("div");
  p_p_d_feedback_dis_space_list.classList.add("p_p_d_feedback_dis_space_list");
  const feedback_list_f=(l)=>{
  const p_p_d_feedback_dis_space=document.createElement("div");
  p_p_d_feedback_dis_space.classList.add("p_p_d_feedback_dis_space");
  
  const p_p_d_feedback_dis_space_heading=document.createElement("div");
  p_p_d_feedback_dis_space_heading.classList.add("p_p_d_feedback_dis_space_heading");
  
  const p_p_d_feedback_dis_space_photo=document.createElement("div");
  p_p_d_feedback_dis_space_photo.classList.add("p_p_d_feedback_dis_space_photo");
  
  p_p_d_feedback_dis_space_heading.append(p_p_d_feedback_dis_space_photo);
  
  const p_p_d_feedback_dis_space_id_name=document.createElement("div");
  p_p_d_feedback_dis_space_id_name.classList.add("p_p_d_feedback_dis_space_id_name");
  p_p_d_feedback_dis_space_id_name.innerText=`${l[0]}`;
  p_p_d_feedback_dis_space_heading.append(p_p_d_feedback_dis_space_id_name);
  
  const p_p_d_feedback_dis_rating=document.createElement("div");
  p_p_d_feedback_dis_rating.classList.add("p_p_d_feedback_dis_rating");
  let tem_r="";
for(let tr=0;tr<5;tr++){
  if(tr<Math.floor(l[1])){
    tem_r+=`<i class="fa-solid fa-star"></i>`;
  }
  else if(tr<l[1]){
   tem_r+=`<i class="fa-solid fa-star-half-stroke"></i>`;
  }
  else{
  tem_r+=`<i class="fa-regular fa-star"></i>`;
  }
}
p_p_d_feedback_dis_rating.innerHTML=` ${tem_r}`;
  p_p_d_feedback_dis_space_heading.append(p_p_d_feedback_dis_rating);
  
  p_p_d_feedback_dis_space.append(p_p_d_feedback_dis_space_heading);
  
  const p_p_d_feedback_dis_space_msg=document.createElement("div");
  p_p_d_feedback_dis_space_msg.classList.add("p_p_d_feedback_dis_space_msg");
  p_p_d_feedback_dis_space_msg.innerText=`${l[2]}`;
  p_p_d_feedback_dis_space.append(p_p_d_feedback_dis_space_msg);
  
  p_p_d_feedback_dis_space_list.append(p_p_d_feedback_dis_space);
  }
  
  
 let list=reviewList[p_i];
//   console.log(p_i,d_l_name[p_i],reviewList[p_i] );
    for(let i=0;i<list.length;i++){
      feedback_list_f(list[i]);
    }
  p_p_d_feedback_space.append(p_p_d_feedback_dis_space_list);
  }
  feedback_f();
  p_p_d_space.append(p_p_d_feedback_space);

}
//profile_page_f(6);


function p_p_search_bar_f(){
  //console.log("helloooo");
  const search_text=document.querySelector(".p_p_search_text");
  const search_icon=document.querySelector(".p_p_search_icon");
  const searched_list_space=document.querySelector(".p_p_searched_list_space");
let c_l_l=[];
let s_l_l=[];
let s_l_sugg_list=[];
let s_l_m=[];
search_text.addEventListener("input",()=>{
   searched_list_space.innerHTML="";
   let value=search_text.value;
   let v_len=value.length;
   const c_list_out=(c_l,valuee)=>{
      let c_len=c_l.length;
      let c_listed=[];
      let c_listed_index=[];
      let c_listed_u=[];
      let c_listed_c=[];
      let c_listed_i=0;
      for(let i=0;i<c_len;i++){
      for(let j=0;j<c_l[i].length;j++){
       let c_len=cars_list[c_l[i][j]].length;
      for(let v=0;v<c_len-(c_len%v_len)-1;v++){
        let sl=cars_list[c_l[i][j]].slice(v,v+v_len);
 if(valuee.toLowerCase()==sl.toLowerCase()){
    //  console.log(`${v} ${v_len} ${sl}`);
  // console.log(`=> ${value} ${sl} ${l[u]}`);
    c_listed[c_listed_i]=cars_list[c_l[i][j]];
      c_listed_index[c_listed_i]=v;
      c_listed_u[c_listed_i]=i;
      c_listed_c[c_listed_i]=0;
      c_listed_i++;
        break;
          }
        } 
        }
      }
      return [c_listed,c_listed_index,c_listed_u,c_listed_c];
   }
   c_l_l=c_list_out(skilled_at,value);
   
   const list_out=(l)=>{
      let len=l.length;
      let listed=[];
      let listed_index=[];
      let listed_u=[];
      let listed_s=[];
      let listed_i=0;
      for(let u=0;u<len;u++){
       let s_len=l[u].length;
     for(let v=0;v<s_len-(s_len%v_len)-1;v++){
          let sl=l[u].slice(v,v+v_len);
    if(value.toLowerCase()==sl.toLowerCase()){
    //  console.log(`${v} ${v_len} ${sl}`);
  // console.log(`=> ${value} ${sl} ${l[u]}`);
      listed[listed_i]=l[u];
      listed_index[listed_i]=v;
      listed_u[listed_i]=u;
      listed_s[listed_i]=1;
      listed_i++;
        break;
          }
        }
      }
      return [listed,listed_index,listed_u,listed_s];
    }
  
   const concat=(pre,post)=>{
      let pp=0;
      let con=[];
      for(let p=0;p<pre.length;p++){
        con[pp]=pre[p];
        pp++;
      }
      for(let p=0;p<post.length;p++){
        con[pp]=post[p];
        pp++;
      }
      return con;
    }
   const e_copy=(arr)=>{
      let d_arr=[];
      let d_i=1;
      d_arr[0]=arr[0];
      for(let a=1;a<arr.length;a++){
        let test=true;
        for(let b=0;b<a;b++){
         if(arr[b]==arr[a]){
           test=false;
           break;
         }
        }
        if(test){
          d_arr[d_i]=arr[a];
          d_i++;
        }
      }
      return d_arr;
    }
    s_l_l= list_out(d_l_name);
    
  const e_copy_cs=(arr_m,arr_f,arr_sign)=>{
      let d_arr_m=[];
      let d_arr_f=[];
      let d_arr_sign=[];
      let d_i=1;
      d_arr_m[0]=arr_m[0];
      d_arr_f[0]=arr_f[0];
      d_arr_sign[0]=arr_sign[0];
      for(let a=1;a<arr_m.length;a++){
        let test=true;
        for(let b=0;b<a;b++){
         if(arr_m[b]==arr_m[a]){
           test=false;
           break;
         }
        }
        if(test){
          d_arr_m[d_i]=arr_m[a];
          d_arr_f[d_i]=arr_f[a];
          d_arr_sign[d_i]=arr_sign[a];
          d_i++;
        }
      }
      return [d_arr_m,d_arr_f,d_arr_sign];
    }
    
  s_l_m=e_copy_cs(concat(c_l_l[0],s_l_l[0]),concat(c_l_l[1],s_l_l[1]),concat(c_l_l[3],s_l_l[3]));
   
   let s_l=s_l_m[0];
   let s_l_in=s_l_m[1];
   let s_l_sign=s_l_m[2];
   console.log(s_l_m);
   s_l_sugg_list=e_copy(concat(c_l_l[2],s_l_l[2]));
   if(s_l[0]){
   console.log("finall",s_l,s_l_in);
    for(let i=0;i<s_l.length;i++){
    const searched_list_item=document.createElement("div");  
    searched_list_item.classList.add("m_searched_list_item");
    
    const searched_list_item_icon=document.createElement("div");  
    searched_list_item_icon.classList.add("m_searched_list_item_icon");
    searched_list_item_icon.innerHTML=`
     <i class="fa-solid fa-magnifying-glass"></i>
    `;
    searched_list_item.append(searched_list_item_icon);
    
    const searched_list_item_name=document.createElement("div");  
    searched_list_item_name.classList.add("m_searched_list_item_name");
    searched_list_item_name.innerHTML=`
   ${s_l[i].slice(0,s_l_in[i])}<span>${s_l[i].slice(s_l_in[i],v_len+s_l_in[i])}</span>${s_l[i].slice(v_len+s_l_in[i],)}`;
    searched_list_item.append(searched_list_item_name);
    
 searched_list_item.addEventListener("click",()=>{
   if(!s_l_sign[i]){
   searched_list_item.style.backgroundColor="yellow";
   searched_list_space.innerHTML="";
   search_text.value=s_l[i];
   let list_bar_d=[];
   let list_bar_d_i=0;
   for(let ci=0;ci<skilled_at.length;ci++){
   for(let cj=0;cj<skilled_at[ci].length;cj++){
     if(cars_list[skilled_at[ci][cj]].toLowerCase()==s_l[i].toLowerCase()){
     list_bar_d[list_bar_d_i]=ci;
        list_bar_d_i++;
       }
     }
   }
      document.querySelector(".s_l_search_text").value=document.querySelector(".p_p_search_text").value;
  document.querySelector(".p_p_search_text").value="";
    document.querySelector(".search_list_page").style.display="flex";
  document.querySelector(".profile_page").style.display="none";
    searched_list_space.innerHTML="";
   s_l_sugg(list_bar_d);
   //¢
  // console.log(list_bar_d);
   }
   else{
     searched_list_item.style.backgroundColor="yellow";
     let pp_j=0;
     for(let pp_i=0;pp_i<d_l_name.length;pp_i++){
       if(d_l_name[pp_i]==s_l[i]){
         pp_j=pp_i;
         break;
       }
     }
     profile_page_f(pp_j,1);
     console.log(search_text.value);
     search_text.value=d_l_name[pp_j];
     console.log(search_text.value);
     
     searched_list_space.innerHTML="";
     
   }
  // ("alert");
    })
   // console.log(searched_list_item_name.innerHTML);
    searched_list_space.append(searched_list_item);
    }
    searched_list_space.style.display="flex";
   }
  })
  search_icon.addEventListener("click",()=>{
  
      
    if(s_l_m[0][0]){
      s_l_sugg(s_l_sugg_list);
      //console.log(s_l_m[1][0]);
    document.querySelector(".s_l_search_text").value=document.querySelector(".p_p_search_text").value;
  document.querySelector(".p_p_search_text").value="";
    document.querySelector(".search_list_page").style.display="flex";
  document.querySelector(".profile_page").style.display="none";
    searched_list_space.innerHTML="";
    
    }
    else{
      s_l_sugg(s_l_sugg_list);
      //console.log(s_l_m[0][0]);
    }
  })
}
p_p_search_bar_f();
