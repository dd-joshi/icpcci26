/*
 * SINGLE SOURCE OF TRUTH FOR WEBSITE CONTENT
 * ------------------------------------------
 * Routine conference updates belong in this file. Keep index.html structural.
 * Arrays are displayed in their written order unless an item has an `order`
 * number. Set `visible: false` to hide an item without deleting it.
 * See ../README.md for examples and the validation checklist.
 */
window.ICPCCI_DATA = {
  "site": {
    "pageTitle": "ICPCCI 2026 Technical Program",
    "description": "Search the ICPCCI 2026 technical program by paper, author, track, session, or room.",
    "brandName": "ICPCCI",
    "brandYear": "2026",
    "logo": "assets/iitram-logo.png",
    "logoAlt": "IITRAM",
    "heroEyebrow": "2nd IEEE International Conference",
    "heroTitle": "Technical Program",
    "heroSubtitle": "Power, Control & Communication Infrastructure",
    "minutesPerPaper": 15,
    "conferenceDays": 2,
    "agendaEyebrow": "Program at a glance",
    "agendaTitle": "Two-day conference schedule",
    "agendaDescription": "Technical-paper timings below link directly to the detailed sessions. All other events follow the conference schedule supplied by the organizers.",
    "guestsEyebrow": "Guests & speakers",
    "guestsTitle": "Meet our distinguished guests",
    "partnersEyebrow": "Sponsors & partners"
  },
  "conference": {
    "title": "2nd IEEE International Conference on Power, Control & Communication Infrastructure",
    "shortTitle": "ICPCCI 2026",
    "record": "70399",
    "dates": "8–9 October 2026",
    "venue": "IITRAM, Ahmedabad, Gujarat, India",
    "venueShort": "IITRAM, Ahmedabad",
    "contact": "icpcci2026@iitram.ac.in",
    "officialSite": "https://iitram.in/icpcci26/",
    "lastUpdated": "23 September 2026, 2:00 PM IST"
  },
  "announcements": [
    /* Example:
    {
      "text": "Registration is now open.",
      "linkText": "Register",
      "link": "https://example.com/register",
      "visible": true
    }
    */
  ],
  "guests": [
    /* Copy this object for each guest. Add the photograph under assets/guests/.
    {
      "name": "Guest Name",
      "role": "Chief Guest",
      "organisation": "Organisation Name",
      "bio": "Optional one-sentence introduction.",
      "photo": "assets/guests/guest-name.jpg",
      "photoAlt": "Guest Name",
      "link": "",
      "visible": true,
      "order": 1
    }
    */
  ],
  "presenter": {
    "eyebrow": "For presenters",
    "title": "Arrive at your room 15 minutes early.",
    "points": [
      {
        "label": "Presentation slot",
        "text": "15 minutes per paper."
      },
      {
        "label": "At the venue",
        "text": "Confirm your presence with the session team before the session begins."
      },
      {
        "label": "Program changes",
        "text": "The online program is the current version."
      }
    ]
  },
  "partners": [
    {
      "name": "IEEE Gujarat Section",
      "logo": "assets/ieee-gujarat.png",
      "visible": true,
      "order": 1
    },
    {
      "name": "IEEE MTT-S and AP-S Joint Chapter, Gujarat Section",
      "logo": "assets/ieee-ap-mtt.png",
      "visible": true,
      "order": 2
    },
    {
      "name": "Department of Science and Technology, Government of Gujarat",
      "logo": "assets/dst.jpeg",
      "visible": true,
      "order": 3
    },
    {
      "name": "Gujarat Council on Science and Technology",
      "logo": "assets/gujcost.jpeg",
      "visible": true,
      "order": 4
    },
    {
      "name": "IDSR",
      "logo": "assets/idsr.png",
      "visible": true,
      "order": 5
    }
  ],
  "agenda": [
    {
      "dateLabel": "Day 1 — 8 October 2026",
      "time": "9:00 AM onwards",
      "program": "Registration",
      "location": ""
    },
    {
      "dateLabel": "Day 1 — 8 October 2026",
      "time": "9:30–10:30 AM",
      "program": "Opening Ceremony",
      "location": "S101"
    },
    {
      "dateLabel": "Day 1 — 8 October 2026",
      "time": "10:30–11:00 AM",
      "program": "High Tea & Networking",
      "location": "S101"
    },
    {
      "dateLabel": "Day 1 — 8 October 2026",
      "time": "11:00–11:45 AM",
      "program": "Plenary Talk 1",
      "location": "S101"
    },
    {
      "dateLabel": "Day 1 — 8 October 2026",
      "time": "11:45 AM–12:30 PM",
      "program": "Plenary Talk 2",
      "location": "S101"
    },
    {
      "dateLabel": "Day 1 — 8 October 2026",
      "time": "12:30–1:30 PM",
      "program": "Lunch",
      "location": ""
    },
    {
      "dateLabel": "Day 1 — 8 October 2026",
      "time": "1:30–3:30 PM",
      "program": "Paper Sessions 1, 2, 3",
      "location": "L405, L305, L205",
      "technical": true
    },
    {
      "dateLabel": "Day 1 — 8 October 2026",
      "time": "3:30–3:45 PM",
      "program": "High Tea & Networking",
      "location": ""
    },
    {
      "dateLabel": "Day 1 — 8 October 2026",
      "time": "3:45–5:45 PM",
      "program": "Paper Sessions 4, 5, 6",
      "location": "L405, L305, L205",
      "technical": true
    },
    {
      "dateLabel": "Day 2 — 9 October 2026",
      "time": "8:45 AM onwards",
      "program": "Registration",
      "location": ""
    },
    {
      "dateLabel": "Day 2 — 9 October 2026",
      "time": "8:45–10:45 AM",
      "program": "Paper + Poster Sessions 7, 8",
      "location": "L405, L305",
      "technical": true
    },
    {
      "dateLabel": "Day 2 — 9 October 2026",
      "time": "10:45–11:00 AM",
      "program": "High Tea & Networking",
      "location": ""
    },
    {
      "dateLabel": "Day 2 — 9 October 2026",
      "time": "11:00–11:45 AM",
      "program": "Plenary Talk 3",
      "location": ""
    },
    {
      "dateLabel": "Day 2 — 9 October 2026",
      "time": "11:45 AM–12:30 PM",
      "program": "Plenary Talk 4",
      "location": ""
    },
    {
      "dateLabel": "Day 2 — 9 October 2026",
      "time": "12:30–1:30 PM",
      "program": "Lunch",
      "location": ""
    },
    {
      "dateLabel": "Day 2 — 9 October 2026",
      "time": "1:30–3:30 PM",
      "program": "Paper + Poster Sessions 9, 10",
      "location": "L405, L305",
      "technical": true
    },
    {
      "dateLabel": "Day 2 — 9 October 2026",
      "time": "3:30–4:00 PM",
      "program": "IEEE Student Branch Inauguration + IEEE Leaders' Talk",
      "location": ""
    },
    {
      "dateLabel": "Day 2 — 9 October 2026",
      "time": "4:00–4:30 PM",
      "program": "Closing Ceremony",
      "location": ""
    },
    {
      "dateLabel": "Day 2 — 9 October 2026",
      "time": "4:30–5:00 PM",
      "program": "High Tea & Networking",
      "location": ""
    }
  ],
  "sessions": [
    {
      "sessionNumber": 1,
      "title": "Artificial Intelligence & Machine Learning I",
      "track": "AI/ML",
      "date": "2026-10-08",
      "dateLabel": "Day 1 — 8 October 2026",
      "slot": "1:30–3:30 PM",
      "room": "L405",
      "papers": [
        {
          "paperId": 38,
          "title": "Implementation and Comparative Analysis of Plant Disease Detection Algorithms for Banana Leaf",
          "authors": "BHURE, KIRTI*",
          "track": "AI/ML",
          "startTime": "1:30 PM",
          "endTime": "1:45 PM"
        },
        {
          "paperId": 49,
          "title": "Adaptive Image Based Visual Servoing for Precision Alignment in Remote Maintenance of Fusion Machines",
          "authors": "Rastogi, Naveen*; Gupta, Dr. Suryakant; Gotewal, Krishan",
          "track": "AI/ML",
          "startTime": "1:45 PM",
          "endTime": "2:00 PM"
        },
        {
          "paperId": 87,
          "title": "Deepfake Audio Detection Using MFCC Features and CNN Classification",
          "authors": "Chaurasiya, Rahul*; Pradhan, Priyadarshini ; Pakide, Vishala; Pawaiya, Rishabh Pratap Singh",
          "track": "AI/ML",
          "startTime": "2:00 PM",
          "endTime": "2:15 PM"
        },
        {
          "paperId": 94,
          "title": "Towards Reliable Deepfake Detection and Proactive Prevention",
          "authors": "Cholke, Puja *; Malve, Aatish; Narwade, Ram ; Koli , Kanupriya ; Makanikar, Aarya ; Lakhotiya, Tanisha",
          "track": "AI/ML",
          "startTime": "2:15 PM",
          "endTime": "2:30 PM"
        },
        {
          "paperId": 104,
          "title": "An Explainable Digital Twin for Fault Detection and Early Prediction of EV Batteries Using Decision Tree Classifier",
          "authors": "MANDAL, SUDAKSHINA*",
          "track": "AI/ML",
          "startTime": "2:30 PM",
          "endTime": "2:45 PM"
        },
        {
          "paperId": 130,
          "title": "AI-Driven Precision Oncology Decision Support System for early Lung and Breast Cancer Diagnosis Using Multimodal Explainable Deep Learning",
          "authors": "M, Tamilarasan *",
          "track": "AI/ML",
          "startTime": "2:45 PM",
          "endTime": "3:00 PM"
        },
        {
          "paperId": 148,
          "title": "Segmentation Guided Explainable Deep Learning Framework for Robust Melanoma Detection Using Multi-Source Dermoscopic Images",
          "authors": "BEEDA, SUKUMAR*; M, Rajasekar; Gopalan, Anitha",
          "track": "AI/ML",
          "startTime": "3:00 PM",
          "endTime": "3:15 PM"
        }
      ]
    },
    {
      "sessionNumber": 2,
      "title": "Artificial Intelligence & Machine Learning II",
      "track": "AI/ML",
      "date": "2026-10-08",
      "dateLabel": "Day 1 — 8 October 2026",
      "slot": "1:30–3:30 PM",
      "room": "L305",
      "papers": [
        {
          "paperId": 121,
          "title": "An Explainable Hybrid Ensemble Learning Framework for Cardiovascular Disease Risk Prediction",
          "authors": "Pashikanti, Rajesh *; Bhanuse, Vijaykumar; Bhad, Arjun; Bhingare, Laksh ; Bhalerao, Bandhan",
          "track": "AI/ML",
          "startTime": "1:30 PM",
          "endTime": "1:45 PM"
        },
        {
          "paperId": 122,
          "title": "Proactive Management of Natural Gas Pipelines through Real-Time AI Integration and Self-Optimization",
          "authors": "Pashikanti, Rajesh*; Borkar, Krushna; Debadwar, Parth; Chouhan, Prithvirajsingh",
          "track": "AI/ML",
          "startTime": "1:45 PM",
          "endTime": "2:00 PM"
        },
        {
          "paperId": 248,
          "title": "Pneumonia Detection in Imbalanced Chest X-rays: A Comparative Analysis of Loss Functions across CNN and Transformer Models",
          "authors": "Pashikanti, Rajesh*; Nandeshwar, Vikas; Mamarde, Aditya; Gham, Aryan; Thulkar, Anived",
          "track": "AI/ML",
          "startTime": "2:00 PM",
          "endTime": "2:15 PM"
        },
        {
          "paperId": 139,
          "title": "A Self-Optimizing Cluster-Specific Bayesian Ensemble Intrusion Detection System for Evolving Network Threats",
          "authors": "Rani, D. Sandhya*; Suresh , D; Jabbar , M.A",
          "track": "AI/ML",
          "startTime": "2:15 PM",
          "endTime": "2:30 PM"
        },
        {
          "paperId": 214,
          "title": "Lesion-Level Gastric Cancer Detection in Endoscopic Imaging Using Enhanced YOLOv11 Model",
          "authors": "SINGH, SUNAINA*",
          "track": "AI/ML",
          "startTime": "2:30 PM",
          "endTime": "2:45 PM"
        },
        {
          "paperId": 215,
          "title": "A Deep Learning–Driven Integrated Cascade RPN and Fast R-CNN Model for Early Detection of Wheat Mosaic Virus",
          "authors": "SINGH, SUNAINA*",
          "track": "AI/ML",
          "startTime": "2:45 PM",
          "endTime": "3:00 PM"
        },
        {
          "paperId": 230,
          "title": "A Comparative Study of Retrieval-Augmented Generation Architectures for Question Answering",
          "authors": "Kumar, Chandan*",
          "track": "AI/ML",
          "startTime": "3:00 PM",
          "endTime": "3:15 PM"
        }
      ]
    },
    {
      "sessionNumber": 3,
      "title": "Electrical Power & Energy I",
      "track": "Electrical/Power",
      "date": "2026-10-08",
      "dateLabel": "Day 1 — 8 October 2026",
      "slot": "1:30–3:30 PM",
      "room": "L205",
      "papers": [
        {
          "paperId": 23,
          "title": "Bilevel Stackelberg Optimization of a Microgrid-Integrated Virtual Power Plant with Hydrogen Storage",
          "authors": "Pandya, Vishal*",
          "track": "Electrical/Power",
          "startTime": "1:30 PM",
          "endTime": "1:45 PM"
        },
        {
          "paperId": 25,
          "title": "Techno-Economic Assessment of Renewable Integrated EV Charging Networks Using Walrus Optimization",
          "authors": "KR, Devabalaji *; Issac, Joyal",
          "track": "Electrical/Power",
          "startTime": "1:45 PM",
          "endTime": "2:00 PM"
        },
        {
          "paperId": 51,
          "title": "A Comparative Study of Different HVDC Systems and Their Projects",
          "authors": "Karthik , Shreya *; Dash, Abhijeet; Bhatt, Jignay",
          "track": "Electrical/Power",
          "startTime": "2:00 PM",
          "endTime": "2:15 PM"
        },
        {
          "paperId": 67,
          "title": "Design and Experimental Evaluation of an Output Conditioning and Monitoring System for Human Driven Kinetic Energy Recovery Applications",
          "authors": "Washimkar, Dinesh*; Butala, Shlok",
          "track": "Electrical/Power",
          "startTime": "2:15 PM",
          "endTime": "2:30 PM"
        },
        {
          "paperId": 93,
          "title": "Explainable Machine Learning for Power Conversion Efficiency Prediction of PM6:Y6 Organic Solar Cells Using Multi-Seed Evaluation and SHAP Interaction Analysis",
          "authors": "Jambukia, Rajesh*; Singh, Ashish",
          "track": "Electrical/Power",
          "startTime": "2:30 PM",
          "endTime": "2:45 PM"
        },
        {
          "paperId": 103,
          "title": "Parametric Optimization and System-Level Performance Analysis of a Lead-Free CsSnI3 based Perovskite Photovoltaics: A computational study",
          "authors": "Bhargava, Kshitij *; Patil, Santosh",
          "track": "Electrical/Power",
          "startTime": "2:45 PM",
          "endTime": "3:00 PM"
        }
      ]
    },
    {
      "sessionNumber": 4,
      "title": "Electrical Power & Energy II",
      "track": "Electrical/Power",
      "date": "2026-10-08",
      "dateLabel": "Day 1 — 8 October 2026",
      "slot": "3:45–5:45 PM",
      "room": "L405",
      "papers": [
        {
          "paperId": 95,
          "title": "A PV-Fed DC–DC Converter With SOC Estimation and Smart Battery Monitoring for EV Charging",
          "authors": "Nallamekala, Kiran*; Pranathi, Karra; Srivastava, Ankur; Pavani, Menda; Kumar, Pravin",
          "track": "Electrical/Power",
          "startTime": "3:45 PM",
          "endTime": "4:00 PM"
        },
        {
          "paperId": 96,
          "title": "Balanced Clamp Phase PWM for Dual Two-Level Inverter-Fed Induction Motor Drive for Electric Vehicle Application",
          "authors": "Nallamekala, Kiran*; Pavani, Menda; Srivastava, Ankur; Kumar, Pravin; Pranathi, Karra",
          "track": "Electrical/Power",
          "startTime": "4:00 PM",
          "endTime": "4:15 PM"
        },
        {
          "paperId": 110,
          "title": "A Single-Input Dual-Output DC–DC Converter with Adaptive Power Management and CC–CV Charging for EV Charging Stations",
          "authors": "Nallamekala, Kiran*; Pranathi, Karra; Srivastava, Ankur; Kumar, Pravin; Pavani, Menda",
          "track": "Electrical/Power",
          "startTime": "4:15 PM",
          "endTime": "4:30 PM"
        },
        {
          "paperId": 106,
          "title": "Cross-Temperature Generalisation of a Bidirectional LSTM Network for State of Charge Estimation in Lithium-Ion Batteries",
          "authors": "Nambiar, Shyni*",
          "track": "Electrical/Power",
          "startTime": "4:30 PM",
          "endTime": "4:45 PM"
        },
        {
          "paperId": 109,
          "title": "Cross-Dataset Transfer Learning for Transformer Fault Diagnosis Under Data Scarcity and Class Imbalance",
          "authors": "jarariya, sanjeev*; Srinivasulu, Gumpu; Raju, More",
          "track": "Electrical/Power",
          "startTime": "4:45 PM",
          "endTime": "5:00 PM"
        },
        {
          "paperId": 219,
          "title": "A Design Approach for DC-DC Boost Converters in PV Applications Guided by the Load Line",
          "authors": "YADAV, INDRESH*",
          "track": "Electrical/Power",
          "startTime": "5:00 PM",
          "endTime": "5:15 PM"
        }
      ]
    },
    {
      "sessionNumber": 5,
      "title": "Electrical Power & Energy III",
      "track": "Electrical/Power",
      "date": "2026-10-08",
      "dateLabel": "Day 1 — 8 October 2026",
      "slot": "3:45–5:45 PM",
      "room": "L305",
      "papers": [
        {
          "paperId": 134,
          "title": "Machine Learning Framework for Cloud-Based Electric Vehicle Oil Displacement",
          "authors": "Kumar, Akhil*",
          "track": "Electrical/Power",
          "startTime": "3:45 PM",
          "endTime": "4:00 PM"
        },
        {
          "paperId": 135,
          "title": "Forecasting the Adoption of Electric Vehicles Using Cloud-Based Predictive Modeling",
          "authors": "Kumar, Akhil*",
          "track": "Electrical/Power",
          "startTime": "4:00 PM",
          "endTime": "4:15 PM"
        },
        {
          "paperId": 172,
          "title": "Hybrid Bioleaching and Electrochemical Recovery of Critical Metals from Spent EV Batteries Using a Ceramic Foam Electrode",
          "authors": "S, Allirani; MAHATO, DIPENDRA*; M, Bavithra Devi ; S, Mahadevavarshini",
          "track": "Electrical/Power",
          "startTime": "4:15 PM",
          "endTime": "4:30 PM"
        },
        {
          "paperId": 173,
          "title": "An IoT-Enabled Intelligent Charging Management System for Electric Vehicles with Real-Time Charging Station Reservation",
          "authors": "S, Allirani; R, Krishnakumar; MAHATO, DIPENDRA*; S, Arnesh ; A, Gowtham; N. J, Janani Priya",
          "track": "Electrical/Power",
          "startTime": "4:30 PM",
          "endTime": "4:45 PM"
        },
        {
          "paperId": 175,
          "title": "Decentralized Bidirectional Electric Vehicle Charging Using Vehicle-to-Vehicle and Vehicle-to-Grid Technologies",
          "authors": "R K , Ragavapriya; P, Maruthupandi; R, Krishnakumar; S S , Moneesha; K, Kishore; MAHATO, DIPENDRA*",
          "track": "Electrical/Power",
          "startTime": "4:45 PM",
          "endTime": "5:00 PM"
        },
        {
          "paperId": 184,
          "title": "Scope of Use of D-STATCOM for Reactive Power Compensation in Low Voltage Distribution Lines in India – A Comprehensive Review",
          "authors": "SARADVA, PIYUSHKUMAR MAVJIBHAI*; PAREKH, CHIRAGKUMAR; ISRANI, RIAZ K.",
          "track": "Electrical/Power",
          "startTime": "5:00 PM",
          "endTime": "5:15 PM"
        }
      ]
    },
    {
      "sessionNumber": 6,
      "title": "Electrical Power & Energy IV",
      "track": "Electrical/Power",
      "date": "2026-10-08",
      "dateLabel": "Day 1 — 8 October 2026",
      "slot": "3:45–5:45 PM",
      "room": "L205",
      "papers": [
        {
          "paperId": 223,
          "title": "Remaining Useful Life Estimation and Health Monitoring of EV Battery Systems Using Hybrid CNN-LSTM Deep Learning Model",
          "authors": "Gautam, Suryakant*; Gangrade, Tanisha ; Paturi, Lalitha Anoojna ; Jain, Anshika",
          "track": "Electrical/Power",
          "startTime": "3:45 PM",
          "endTime": "4:00 PM"
        },
        {
          "paperId": 225,
          "title": "A Bidirectional DC-DC Converter With High Voltage Gain and Common Ground Feature",
          "authors": "PANDA, KAIBALYA*; Patel, Vedant; Singhal, Jinisha; Varshney, Shreekant; Sharma, Preeti; Shukla, Vipin",
          "track": "Electrical/Power",
          "startTime": "4:00 PM",
          "endTime": "4:15 PM"
        },
        {
          "paperId": 229,
          "title": "Adaptive Fractional-Order Derivative Differential Protection (AFOD-DP) for Delta-Star 11kV/440V Distribution Transformers",
          "authors": "CHOTHANI, NILESH*",
          "track": "Electrical/Power",
          "startTime": "4:15 PM",
          "endTime": "4:30 PM"
        },
        {
          "paperId": 237,
          "title": "Design and Performance Analysis of a Minimized-Switch Multilevel Inverter with Advanced PWM Control for Grid-Connected Renewable Energy Applications",
          "authors": "P, Elangovan*",
          "track": "Electrical/Power",
          "startTime": "4:30 PM",
          "endTime": "4:45 PM"
        },
        {
          "paperId": 247,
          "title": "A Dual-Loop PI Control Strategy for a Single-Phase Full-Bridge Inverter with Adaptive 50 Hz/60 Hz Operation Using SPWM",
          "authors": "P, Elangovan*",
          "track": "Electrical/Power",
          "startTime": "4:45 PM",
          "endTime": "5:00 PM"
        },
        {
          "paperId": 256,
          "title": "VAr – Watt and Volt – VAr control techniques of solar inverter",
          "authors": "SIDDIQUI, NAUREEN*",
          "track": "Electrical/Power",
          "startTime": "5:00 PM",
          "endTime": "5:15 PM"
        }
      ]
    },
    {
      "sessionNumber": 7,
      "title": "Interdisciplinary Systems I",
      "track": "Other",
      "date": "2026-10-09",
      "dateLabel": "Day 2 — 9 October 2026",
      "slot": "8:45–10:45 AM",
      "room": "L405",
      "papers": [
        {
          "paperId": 29,
          "title": "A Two-Layer Deep Reinforcement Learning Framework for Smart Grid Control in Large-Scale Power Systems: Case Study at Grid-India",
          "authors": "Jaju, Vivek*; Bhandarkar, Ayush",
          "track": "Other",
          "startTime": "8:45 AM",
          "endTime": "9:00 AM"
        },
        {
          "paperId": 32,
          "title": "PV INTEGRATED MULTIFUNCTIONAL EV CHARGER",
          "authors": "SOLANKI, JAYESH*; Pandya, Mahesh ; Odedra, Rimple Odedra",
          "track": "Other",
          "startTime": "9:00 AM",
          "endTime": "9:15 AM"
        },
        {
          "paperId": 35,
          "title": "Design and Simulation of an Extended State Observer Assisted PID Controller for Qube Servo Motor Under Mismatched Disturbances",
          "authors": "Gandhi, Ravi ; Sheth, Saurin M. ; Parikh, Priyam*; Kuppusamy, Arunkarthikeyan ; Gandhi, Shriji V",
          "track": "Other",
          "startTime": "9:15 AM",
          "endTime": "9:30 AM"
        },
        {
          "paperId": 40,
          "title": "Techno-Economic Viability Assessment of Battery Energy Storage Systems in Hybrid Solar–Wind Power Systems Using a Multi-Layer Decision Framework",
          "authors": "Yagnik, Jeet; Mehta, Chintan*; Solanki, Mayank",
          "track": "Other",
          "startTime": "9:30 AM",
          "endTime": "9:45 AM"
        },
        {
          "paperId": 42,
          "title": "A comprehensive evaluation of low-power and high-speed self-recoverable designs for radiation-hardened SRAM cells",
          "authors": "Verma, Preeti*",
          "track": "Other",
          "startTime": "9:45 AM",
          "endTime": "10:00 AM"
        },
        {
          "paperId": 58,
          "title": "Quantum-safe OT Assessment Sandbox (QUOTAS): An Automated Framework for Evaluating Post-Quantum Secure Tunnels in CPU-Constrained Industrial Communication Networks",
          "authors": "P, Sai Surya*; Shah, Ramya",
          "track": "Other",
          "startTime": "10:00 AM",
          "endTime": "10:15 AM"
        },
        {
          "paperId": 61,
          "title": "An IoT-Enabled Energy Monitoring Framework for Real-Time Forecasting and Anomaly Detection in Smart Homes",
          "authors": "Chaudhari, Nishantkumar; Kayasth, Krunal; Rana, Kalprajsinh; Adhikari, Devlina*",
          "track": "Other",
          "startTime": "10:15 AM",
          "endTime": "10:30 AM"
        }
      ]
    },
    {
      "sessionNumber": 8,
      "title": "Communication Infrastructure I",
      "track": "Communication",
      "date": "2026-10-09",
      "dateLabel": "Day 2 — 9 October 2026",
      "slot": "8:45–10:45 AM",
      "room": "L305",
      "papers": [
        {
          "paperId": 27,
          "title": "Embedded Gossip: Distributed Consensus Under Lossy Wireless Links",
          "authors": "Ranjan, Soumya*; Nikam, Honey Dinesh",
          "track": "Communication",
          "startTime": "8:45 AM",
          "endTime": "9:00 AM"
        },
        {
          "paperId": 30,
          "title": "Design parameter and performance analysis of Ferrite-rod Antenna for medium frequency band",
          "authors": "Singh, Shivesh *",
          "track": "Communication",
          "startTime": "9:00 AM",
          "endTime": "9:15 AM"
        },
        {
          "paperId": 55,
          "title": "Metasurface-Loaded MIMO Dielectric Resonator Antenna for Spatial Beam Separation",
          "authors": "das, gourab*; Sharma, Deepak; Mathur, Rohit; Sharma, Anand",
          "track": "Communication",
          "startTime": "9:15 AM",
          "endTime": "9:30 AM"
        },
        {
          "paperId": 79,
          "title": "Embedded Framework for Intelligent Plant Disease Diagnosis in Precision Agriculture",
          "authors": "E, VEERA BOOPATHY *",
          "track": "Communication",
          "startTime": "9:30 AM",
          "endTime": "9:45 AM"
        },
        {
          "paperId": 80,
          "title": "GAN-Assisted Collaborative Healthcare Intelligence for Disease Prediction",
          "authors": "E, VEERA BOOPATHY *",
          "track": "Communication",
          "startTime": "9:45 AM",
          "endTime": "10:00 AM"
        },
        {
          "paperId": 81,
          "title": "Real-Time Intelligent Communication System for Underground Safety Monitoring",
          "authors": "E, VEERA BOOPATHY *",
          "track": "Communication",
          "startTime": "10:00 AM",
          "endTime": "10:15 AM"
        },
        {
          "paperId": 91,
          "title": "NIYAMDRISHTI-AI Intelligent Smart Traffic Management, Automated Law Enforcement and Emergency Safety Surveillance System for Indian Roads",
          "authors": "Changlani, Soni*",
          "track": "Communication",
          "startTime": "10:15 AM",
          "endTime": "10:30 AM"
        }
      ]
    },
    {
      "sessionNumber": 9,
      "title": "Interdisciplinary Systems II",
      "track": "Other",
      "date": "2026-10-09",
      "dateLabel": "Day 2 — 9 October 2026",
      "slot": "1:30–3:30 PM",
      "room": "L405",
      "papers": [
        {
          "paperId": 59,
          "title": "Deep Learning-Based Multi-Class Paddy Disease Classification for Precision Agriculture",
          "authors": "Kumar, Rahul*; Kant, Ravi; Telangore, Hardik; Kumar, Raushan; Kumar, Sujeet; Sharma, Manish",
          "track": "Other",
          "startTime": "1:30 PM",
          "endTime": "1:45 PM"
        },
        {
          "paperId": 60,
          "title": "Device Optimization and Numerical Analysis of Lead-Free Ag–In Based Halide Double Perovskite Solar Ce",
          "authors": "Kumar, Rahul*; Shaikh, Ariba; Pancholi, Tirth; Garg, Aayushi; Vyawhare, Daksh",
          "track": "Other",
          "startTime": "1:45 PM",
          "endTime": "2:00 PM"
        },
        {
          "paperId": 64,
          "title": "Operating-Point-Based Classifcation of Nanosecond High-Voltage Pulsed Generators for Pulse Electric Field Applications",
          "authors": "Nair, Supriya*; Gupta, Suryakant; Gahlaut, Vishant; Kaushik, Meenu",
          "track": "Other",
          "startTime": "2:00 PM",
          "endTime": "2:15 PM"
        },
        {
          "paperId": 66,
          "title": "Discern in Extreme Weather Conditions using Deep-Dive Review on Selected Multi-Modal Fusion Architectures for Autonomous Vehicles",
          "authors": "Parikh, Bhavan*; Thaker, Jignesh; Modi, Tejas",
          "track": "Other",
          "startTime": "2:15 PM",
          "endTime": "2:30 PM"
        },
        {
          "paperId": 163,
          "title": "On a Symmetric Homomorphic Encryption Scheme for Multidimensional Data in IoT",
          "authors": "Upadhyay, Manvi; Choudhuri, Manoj*; Yadav, Ram Narayan",
          "track": "Other",
          "startTime": "2:30 PM",
          "endTime": "2:45 PM"
        },
        {
          "paperId": 228,
          "title": "A Hybrid Deep Learning Framework for Intracranial Aneurysm Detection and Localization",
          "authors": "Makwana, Maya*; Bansod, Ravisha; Bande, Shivangi ; Makwana, Gaurav",
          "track": "Other",
          "startTime": "2:45 PM",
          "endTime": "3:00 PM"
        }
      ]
    },
    {
      "sessionNumber": 10,
      "title": "Communication Infrastructure II + Control Systems",
      "track": "Communication + Control",
      "date": "2026-10-09",
      "dateLabel": "Day 2 — 9 October 2026",
      "slot": "1:30–3:30 PM",
      "room": "L305",
      "papers": [
        {
          "paperId": 108,
          "title": "Performance Evaluation of a Level-3 DWT-Based Digital Image Watermarking under Speckle Noise Attacks",
          "authors": "Gahalod, Dr. Laxminarayan*",
          "track": "Communication",
          "startTime": "1:30 PM",
          "endTime": "1:45 PM"
        },
        {
          "paperId": 151,
          "title": "DARA-IDS: Dual Attention with Recalibration Architecture for Network Intrusion Detection",
          "authors": "Gopi, Pranay*; Paka, Pranay; Rasula, Rohith; Rani, D. Sandhya; Jabbar, M.A.",
          "track": "Communication",
          "startTime": "1:45 PM",
          "endTime": "2:00 PM"
        },
        {
          "paperId": 193,
          "title": "Compact THz MIMO Antenna Array with Enhanced Isolation and Radiation Efficiency for IoT Wireless Networks",
          "authors": "Koundal, Poonam*",
          "track": "Communication",
          "startTime": "2:00 PM",
          "endTime": "2:15 PM"
        },
        {
          "paperId": 194,
          "title": "Single-Band CPW-Fed S-Slot Antenna for Implantable and Wearable Biomedical Devices",
          "authors": "SINGH, SUNAINA*",
          "track": "Communication",
          "startTime": "2:15 PM",
          "endTime": "2:30 PM"
        },
        {
          "paperId": 255,
          "title": "A Guide for BTS and OPAL-RT Integration through Modbus",
          "authors": "SIDDIQUI, NAUREEN*",
          "track": "Communication",
          "startTime": "2:30 PM",
          "endTime": "2:45 PM"
        },
        {
          "paperId": 69,
          "title": "Development and Performance Analysis of an Open Source CNC Plotter with Precision Motion Control",
          "authors": "Washimkar, Dinesh*; More, Shlok; Bagbande,, Shllok; Sarode, Shraddha ; Sangle, Shriharsh",
          "track": "Control",
          "startTime": "2:45 PM",
          "endTime": "3:00 PM"
        },
        {
          "paperId": 170,
          "title": "Integrated Co-Simulation Framework for the Development and Validation of a Field-Oriented Controlled IPMSM Drive for Electric Three-Wheeler Applications",
          "authors": "Saminathan, Allirani; R, Madhusha; MAHATO, DIPENDRA*; M K, Sudarshana ; M, Rithanya",
          "track": "Control",
          "startTime": "3:00 PM",
          "endTime": "3:15 PM"
        }
      ]
    }
  ]
};
