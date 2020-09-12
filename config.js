
const config = {
    style: "mapbox://styles/mapbox/light-v10",
    accessToken: "pk.eyJ1IjoiYXppbW1lcm1hbjEzIiwiYSI6ImNrZjAyM2M1bDB0N2czMm51MDJ6eHV3ZjQifQ.v2MeKdTHRSkFupO4jZBQkw",
    CSV: "MapBox_sample.csv",
    center: [-120.234, 47.398], //Lng, Lat
    zoom: 6, //Default zoom
    title: "Test Map",
    description: "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
    sideBarInfo: ["Location_Name", "Type", "Address"],
    popupInfo: ["Popup Information"],
    filters: [
        {
            type: "dropdown",
            title: "Language: ",
            columnHeader: "Languages",
            listItems: [
                'English',
                'Spanish',
                'Hindi',
                'French',
                'Russian',
                'Language Line Services',
                'Hindi',
                'Punjabi',
                'Oriya',
                'Vietnamese',
                'Chinese',
                'Amharic',
                'Japanese',
                "ASL",
                'Oromo',
                'Somali',
                'Cambodian',
                'Tigrinya',
                'German',
                'Italian',
                'Portuguese',
                'Greek',
                'Korean',
                'Swedish',
                'Danish',
                'Norwegian',
                'Cantonese', 
                'Mandarin', 
                'Toisanese', 
                'Taiwanese', 
                'Hakka', 
                'Chiuchow', 
                'Shanghainese', 
                'Fukienese'
            ]
        },
        {
            type: "checkbox",
            title: "Available Devices: ",
            columnHeader: "Devices_available",
            listItems: ["Computer", "Wi-Fi", "Adaptive Laptops"]
        },
        {
            type: "dropdown",
            title: "Public Status: ",
            columnHeader: "Public",
            listItems: [
                'All Public',
                'Limited Users'
            ]
        }
    ]

};
