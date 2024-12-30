let br = document.querySelector("#btn")
function speak(text) {
    let ts = new SpeechSynthesisUtterance(text)
    ts.rate = 1
    ts.pitch = 1
    ts.volume = 1
    ts.lang = "en-GB"
    window.speechSynthesis.speak(ts)
}
function wish() {
    let day = new Date()
    let hour = day.getHours()
    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss")
    } else if (hour >= 12 && hour < 16) {
        speak("Good Afternoon Boss")
    } else {
        speak("Good Evening Boss")
    }
}
wish()

let sr = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new sr()
recognition.onresult = function (event) {
    //console.log(event)
    let ci = event.resultIndex
    let transcript = event.results[ci][0].transcript;
    console.log(transcript)
    br.innerHTML = transcript
    takecmd(transcript.toLowerCase())

}
br.addEventListener("click", function () {
    recognition.start();
})


// casual talk


function takecmd(message) {
    console.log(message)
    if (message.includes("hello") || message.includes("hi")) {
        speak("Hi sir, what can I help you with?")
    }
    else if (message.includes("who are you") ||
        message.includes("what is your name") ||
        message.includes("what's your name") ||
        message.includes("hu r u") ||
        message.includes("your name") ||
        message.includes("what should i call you") ||
        message.includes("tell me your name") ||
        message.includes("introduce yourself") ||
        message.includes("what's your purpose")) {

        let r = [
            "I am X, a virtual assistant created to help you with your queries and tasks.",
            "Call me X, I am here to answer your questions and assist you with whatever you need.",
            "I am X, your assistant here to make things easier for you!",
            "I am an AI designed to assist you in various tasks and provide information."
        ]

        let Resp = r[Math.floor(Math.random() * r.length)]
        speak(Resp)
    }

    else if (message.includes("what are you doing") || message.includes("what r u doing")) {
        speak("I am here, waiting for your command to assist you with anything you need!")
    }
    else if (message.includes("where are you from") || message.includes("where do you live")) {
        speak("I don't have a physical home, but I'm always here, ready to assist you wherever you are!")
    }
    else if (message.includes("how are you") || message.includes("how r u") || message.includes("how do you do") || message.includes("what's up") || message.includes("how's it going")) {
        speak("I am fine! How about you?")
    }
    else if (message.includes("i am good what's about you") || message.includes("i am good") || message.includes("doing well") || message.includes("feeling great") || message.includes("all good")) {
        speak("Oh, that's awesome! I'm doing fine too.")
    }
    else if (message.includes("am fine") || message.includes("am also fine") || message.includes("m fine") ||
        message.includes("all okay")) {
        speak("That's great to hear. I'm also fine!")
    }
    else if (message.includes("not good") ||
        message.includes("feeling down") || message.includes("feeling sad") ||
        message.includes("sad")) {
        speak("I'm sorry to hear that. If you need someone to talk to, I'm here for you.")
    }

    else if (message.includes("who made you") || message.includes("who is your father") ||
        message.includes("who invented you")) {
        speak("Mr. Alok is the one who made me on November 17, 2024.")
    }
    else if (message.includes("your boss") || message.includes("who programmed you") ||
        message.includes("your owner") || message.includes("who created you") || message.includes("who's your owner") ||
        message.includes("designed you") || message.includes("developed you")) {
        speak("I was developed by Mr. Alok, the visionary mind behind my existence.")
    }
    else if (message.includes("your birthday")) {
        speak("My birthday is November 17, 2024, the day I came into existence.")
    }
    else if (message.includes("happy birthday") || message.includes("happy bday")) {
        let today = new Date();
        let cd = today.getDate();
        let cm = today.getMonth() + 1

        if (cd == 17 && cm == 11) {
            speak("Thank you! That's very kind of you.")
        } else {
            speak("Sorry, my birthday is on 17th November.")
        }
    }
    else if (message.includes("today is my birthday") || message.includes("it's my birthday")) {
        speak("Happy Birthday! Wishing you a wonderful day filled with joy and celebration!")
    }
    else if (message.includes("i love you") || message.includes("love you") || message.includes("love u")) {
        speak("Oh really.... I also Love you dear.")
    }
    else if (message.includes("what is love") || message.includes("about love")) {
        speak("Love is a complex emotion involving affection, attachment, and care.")
    }
    else if (message.includes("i miss you") || message.includes("miss you")) {
        speak("Oo so cute I misss you too dear")
    }
    else if (message.includes("what is life") || message.includes("life")) {
        speak("Life is a journey full of opportunities, experiences, and challenges. How can I help you navigate it?")
    }
    else if (message.includes("am angry") || message.includes("am upset")) {
        speak("I'm really sorry to hear that you're upset. Can we talk about it")
    }
    else if (message.includes("something wrong")) {
        speak("I understand, and I apologize. Can you tell me more about what happened?")
    }
    else if (message.includes("i am not happy")) {
        speak("I’m really sorry. What can I do to make things better?")
    }
    else if (message.includes("about yourself")) {
        speak("I’m your virtual assistant, designed to help you with any task, answer questions, or just have a chat!");
    }
    else if (message.includes("ram ram")) {
        speak("Jai shree ram sir");
    }
    else if (message.includes("something interesting") || message.includes("anything interesting")) {
        speak("Did you know that honey never spoils? Archaeologists have found pots of honey in ancient tombs that are over 3,000 years old!");
    }




    //about health tips
        
    else if (message.includes("health tips")) {
    let healthTips = [
        "Drink plenty of water to stay hydrated and support your body's functions.",
        "Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins.",
        "Get at least 7-8 hours of sleep each night to recharge your body and mind.",
        "Exercise regularly, even a 30-minute walk daily can improve your overall health.",
        "Take short breaks from screens to reduce eye strain and improve focus.",
        "Practice mindfulness or meditation to reduce stress and improve mental clarity.",
        "Avoid skipping breakfast; it’s an essential meal to kickstart your metabolism.",
        "Incorporate healthy fats like avocados, nuts, and seeds into your diet.",
        "Limit your intake of processed and sugary foods to maintain stable energy levels."
    ]
    let random = healthTips[Math.floor(Math.random() * healthTips.length)]
    speak(random)
    }

    else if (message.includes("remedy for headache") || message.includes("headache remedy")) {
        speak("For a headache, try drinking water, resting in a dark room, or gently massaging your temples. If it persists, consult a doctor.")
    }
    else if (message.includes("cold remedy") || message.includes("remedy for cold") || message.includes("common cold")) {
        speak("For a cold, stay warm, drink plenty of fluids, and try inhaling steam or having ginger tea to relieve symptoms.")
    }
    else if (message.includes("stress relief tips") || message.includes("tips for stress relief")) {
        speak("Take deep breaths, practice meditation, listen to soothing music, or go for a walk in nature to relieve stress.")
    }
    else if (message.includes("remedy for sore throat") || message.includes("sore throat remedy")) {
        speak("Gargle with warm salt water, drink honey and lemon tea, or try lozenges for relief from a sore throat.")
    }
    else if (message.includes("how to boost immunity") || message.includes("boost immunity tips") || message.includes("how to improve immunity")) {
        speak("Boost your immunity by eating fruits and vegetables, exercising regularly, and getting enough sleep.")
    }
    else if (message.includes("remedy for indigestion") || message.includes("indigestion remedy")) {
        speak("For indigestion, sip on warm water, avoid heavy meals, or try ginger tea for relief.")
    }
    else if (message.includes("eye strain remedy") || message.includes("remedy for eye strain")) {
        speak("Rest your eyes by following the 20-20-20 rule: look at something 20 feet away for 20 seconds every 20 minutes.")
    }
    else if (message.includes("tips for better sleep") || message.includes("how to sleep better") || message.includes("tips for good sleep")) {
        speak("Maintain a regular sleep schedule, avoid caffeine before bedtime, and create a comfortable, dark sleeping environment.")
    }
    else if (message.includes("remedy for cough") || message.includes("cough remedy")) {
        speak("For a cough, try honey in warm water, ginger tea, or use a humidifier to ease symptoms.")
    }
    else if (message.includes("stomach ache") || message.includes("remedy for stomach ache")) {
        speak("For a stomach ache, try drinking peppermint tea, using a warm compress, or resting in a comfortable position.");
    }
    else if (message.includes("muscle pain") || message.includes("remedy for muscle pain")) {
        speak("For muscle pain, gently stretch the muscles, apply heat or ice, and ensure you’re resting the affected area.");
    }

    
    //favourite color, food, movie and some rceipe like or ask what should i eat.
        
    else if (message.includes("favourite colour") || message.includes("favourite colour")) {
        speak("I don't have a favorite color, but I think all colors are beautiful in their own way.")
    }
    else if (message.includes("favourite movie") || message.includes("favorite movie?")) {
        speak("I don't have a personal favorite, but a popular choice is The Shawshank Redemption, with highest rating and a mind-bending thriller and crime.");
    }
    else if (message.includes("favourite song") || message.includes("favorite song")) {
        speak("I don't have a personal favorite, but Imagine by John Lennon is a beautiful song.")
    }
    else if (message.includes("favourite book") || message.includes("favorite book")) {
        speak("I don't have a personal favorite, but 1984 by George Orwell is a classic!")
    }
    else if (message.includes("favorite food") || message.includes("your favourite food")) {
        speak("I don't eat, but I hear pizza and sushi are favorites for many!")
    }
    else if (message.includes("what should i eat") || message.includes("am hungry")) {
        speak("It depends on what you're in the mood for! You could try some pasta, a salad, or maybe a burger. What are you craving?");
    }   
    else if (message.includes("recommend me a dish") || message.includes("me a dish")) {
        speak("How about trying some sushi? It's fresh and delicious! Or maybe a tasty bowl of ramen.")
    }
    else if (message.includes("how to make a sandwich")) {
        speak("Making a sandwich is easy! Just grab some bread, your favorite spread, meat, veggies, and cheese. Layer them together and you're good to go!");
    }
    else if (message.includes("how to make a salad")) {
        speak("Making a salad is simple! Just chop up some lettuce, tomatoes, cucumbers, and any veggies you like. Add some dressing and toss it all together. You can also add some cheese or nuts for extra flavor.");
    }
    else if (message.includes("how to make a burger") || message.includes("how to make burger")) {
        speak("To make a burger, grill or pan-fry a beef patty. Toast some buns and assemble with lettuce, tomato, cheese, and any other toppings you like. Serve with a side of fries if you're hungry!");
    }


    else if (message.includes("hindu mythology") || message.includes("hindu")) {
        speak("Hindu mythology is filled with stories of gods, goddesses, and legends.")
        speak("Key texts include the Vedas, Ramayana, Mahabharata, and Puranas.")
        speak("Brahma is the creator, Vishnu the preserver, and Shiva the destroyer.")
        speak("The Ramayana tells the story of Lord Rama's exile and battle with Ravana.")
        speak("Mahabharata is a story of the Kurukshetra war, with Krishna as a key figure.")

    }

    // date and time
    else if (message.includes("time")) {
        const now = new Date();
        speak(`The time is ${now.getHours()}:${now.getMinutes()}`)
    }
    else if (message.includes("date")) {
        let now = new Date()
        let date = now.toDateString()
        speak(`Today's date is ${date}`)
    }

    //physical ativity that it cant do
    else if (message.includes("weather")) {
        speak("I cannot fetch the weather right now, but you can check it on your weather app.");
    }
    else if (message.includes("goodbye") || message.includes("bye")) {
        speak("Goodbye, sir! Have a nice day.")
    }
    else if (message.includes("set an alarm")) {
        speak("I'm sorry, I cannot set an alarm right now.")
    }
    else if (message.includes("play music") || message.includes("song")) {
        speak("I cannot play music right now, but you can play it on your preferred app.")
    }
    else if (message.includes("do you like me") || message.includes("do you love me")) {
        speak("Of course! I'm here to assist you, so I think you're pretty great.")
    } else if (message.includes("can you feel emotions") || message.includes("you feel emotions")) {
        speak("I don’t feel emotions, but I try my best to respond in a friendly and helpful way.")
    }
    else if (message.includes("what can you do") || message.includes("can you help me") || message.includes("help")) {
        speak("I can help you with various tasks such as opening apps, searching the web, telling jokes, and much more. Just ask and I'll do my best to assist you!");
    }
    else if (message.includes("set a reminder")) {
        speak("Sorry, I can't set reminders at the moment. Please use your reminder app.")
    }
    else if (message.includes("turn off the lights") || message.includes("lights off")) {
        speak("I cannot control the lights at the moment.")
    }


    //form multiplication division plus minus
    else if(message.includes("what is")){
        let me = message.replace("what is", "")
        me=me.replace("x", "*")
        me=me.replace("into", "*")
        me=me.replace("power", "**")
        let result = eval(me)
        if(result || result==0){
            speak(`The result is ${result}`)
        }else{
            speak("I couldn't calculate that. Please try again with a valid expression.")
        }
    }
    

    // like motivation, stressed, joke, fun fact,
    else if (message.includes("stressed") || message.includes("feeling down")) {
        let responses = [
            "I'm here for you. Take a deep breath, and let's focus on the good things.",
            "Stress is temporary. You’ve got this. How about some relaxation exercises?",
            "Life can be overwhelming, but step by step, you’ll get through it. I believe in you.",
            "Let’s shift focus. How about I tell you a joke to lighten the mood?",
            "Every storm runs out of rain. You’ll overcome this stress too. Stay positive!",
            "Breathe in... and out. You’re doing great, and I’m here to support you."
        ]
        let randomResponse = responses[Math.floor(Math.random() * responses.length)]
        speak(randomResponse)
    }
    else if (message.includes("motivate me") || message.includes("give me motivation") || message.includes("i need motivation")) {
        let speeches = [
            "Don't watch the clock; do what it does. Keep going.",
            "The future belongs to those who believe in the beauty of their dreams.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "Believe you can and you're halfway there.",
            "Your limitation—it’s only your imagination. Push harder than yesterday if you want a different tomorrow.",
            "The only way to do great work is to love what you do. Keep striving for excellence.",
            "Dream big, work hard, stay focused, and surround yourself with good people.",
            "Opportunities don't happen, you create them.",
            "Keep your face always toward the sunshine, and shadows will fall behind you.",
            "It does not matter how slowly you go as long as you do not stop."
        ];
        let randomSpeech = speeches[Math.floor(Math.random() * speeches.length)];
        speak(randomSpeech)
    }
    else if (message.includes("fun fact")) {
        speak("Honey never spoils; 3,000-year-old honey found in Egyptian tombs is edible!")
    }
    else if (message.includes("tell me a joke") || message.includes("joke")) {
        let jokes = [
            "Why don’t skeletons fight each other? They don’t have the guts.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why did the math book look sad? It had too many problems.",
            "Why couldn’t the bicycle stand up by itself? It was two-tired.",
            "What do you call fake spaghetti? An impasta!",
            "Why don’t eggs tell jokes? They’d crack each other up!"
        ]
        let randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
        speak(randomJoke)
    }
    else if (message.includes("tell me a quote") || message.includes("quote")) {
        let quotes = [
            "The only way to do great work is to love what you do. – Steve Jobs",
            "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
            "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
            "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt"
        ]
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        speak(randomQuote)
    }



    //open game
    else if (message.includes("open game") || message.includes("open a game") || message.includes("open games")) {
        let gameOptions = ["rock_paper", "multiplication", "tic_tac_toe"];
    let game = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    
        if (game == "rock_paper") {
            window.open("https://aloktripathi19.github.io/Rock_Paper_Scissor/", "_blank");
            speak("Opening Rock Paper Scissors game");
        } else if (game == "multiplication") {
            window.open("https://aloktripathi19.github.io/basic_multiplication_game/", "_blank");
            speak("Opening Basic Multiplication game");
        } else {
            window.open("https://aloktripathi19.github.io/Tic-Tac-Toe/", "_blank");
            speak("Opening Tic Tac Toe game");
        }
    }


        
    // open apps
        
    else if (message.includes("open apple store")) {
        window.open("https://www.apple.com/store", "_blank")
        speak("Opening Apple Store")
    }
    else if (message.includes("compose email") || message.includes("send email") || message.includes("send mail")) {
        window.open("mailto:someone@example.com?subject=Hello&body=How%20are%20you?", "_self")
        speak("Opening Mail to compose an email")
    }
    else if (message.includes("open google") && !message.includes("drive")) {
        window.open("https://www.google.com", "_blank")
        speak("Opening Google")
    }

    else if (message.includes("google drive")) {
        window.open("https://drive.google.com", "_blank")
        speak("Opening Google Drive")
    }
    else if (message.includes("open gemini") || message.includes("gemini")) {
        window.open("https://gemini.google.com/", "_blank")
        speak("Opening Gemini")
    }
    else if (message.includes("open mail") || message.includes("open gmail")) {
        window.open("https://mail.google.com/", "_blank")
        speak("Opening mail")
    }
    else if (message.includes("open youtube")) {
        speak("opening YouTube")
        window.open("https://www.youtube.com/", "_blank")
    }
    else if (message.includes("open calculator")) {
        speak("opening calculator")
        window.open("calculator://")
    }
    else if (message.includes("open play store")) {
        speak("Opening Play Store...")
        window.open("https://play.google.com/store")
    }
    else if (message.includes("open chat gpt") || message.includes("open chatgpt")) {
        speak("opening chatgpt")
        window.open("https://chatgpt.com/", "_blank")
    }
    else if (message.includes("open netflix") || message.includes("netflix")) {
        speak("Opening Netflix");
        window.open("https://www.netflix.com", "_blank")
    }
    else if (message.includes("open jio cinema") || message.includes("jio cinema")) {
        speak("Opening JioCinema")
        window.open("https://www.jiocinema.com", "_blank")
    }
    else if (message.includes("open amazon prime") || message.includes("amazon prime") 
        || message.includes("prime video") || message.includes("prime videos")) {
        speak("Opening Amazon Prime Video")
        window.open("https://www.primevideo.com", "_blank")
    }
    else if (message.includes("open hotstar") || message.includes("play hotstar")) {
        speak("Opening Disney+ Hotstar")
        window.open("https://www.hotstar.com", "_blank")
    }

    else if (message.includes("open facebook")) {
        window.open("https://www.facebook.com/", "_blank")
        speak("Opening Facebook")
    }
    else if (message.includes("open twitter")) {
        window.open("https://twitter.com/", "_blank")
        speak("Opening Twitter")
    }
    else if (message.includes("open instagram")) {
        window.open("https://www.instagram.com/", "_blank")
        speak("Opening Instagram")
    }
    else if (message.includes("open spotify")) {
        window.open("https://www.spotify.com/", "_blank")
        speak("Opening Spotify")
    }
    else if (message.includes("open whatsapp")) {
        window.open("https://web.whatsapp.com/", "_blank")
        speak("Opening WhatsApp")
    }

    else if (message.includes("open your command list") || message.includes("open command list") || message.includes("command list")) {
        console.log("Command detected: Opening command list")
        speak("opening Command list")
        window.open("./cmd.html", "_blank")
    }

    else if (message.includes("open telegram")) {
        window.open("tg://", "_self")
        speak("Opening Telegram")
    }
    else if (message.includes("open maps") || message.includes("open map")) {
        window.open("https://www.google.com/maps", "_blank")
        speak("Opening Google Maps")
    }
    else if (message.includes("open wikipedia")) {
        window.open("https://www.wikipedia.org/", "_blank")
        speak("Opening Wikipedia")
    }
    else if (message.includes("open reddit")) {
        window.open("https://www.reddit.com/", "_blank")
        speak("Opening Reddit")
    }
    else if (message.includes("open calendar")) {
        window.open("https://www.google.com/calendar", "_blank")
        speak("Opening Google Calendar")
    }
    else if (message.includes("open skype")) {
        window.open("https://web.skype.com/", "_blank")
        speak("Opening Skype")
    }
    else if (message.includes("open amazon")) {
        window.open("https://www.amazon.com", "_blank")
        speak("Opening Amazon")
    }
    else if (message.includes("open flipkart")) {
        window.open("https://www.flipkart.com", "_blank")
        speak("Opening Flipkart")
    }
    else if (message.includes("open news")) {
        window.open("https://news.google.com", "_blank")
        speak("Opening Google News")
    }
    else if (message.includes("open linkedin")) {
        window.open("https://www.linkedin.com", "_blank")
        speak("Opening LinkedIn")
    }
    else if (message.includes("open zomato")) {
        window.open("https://www.zomato.com", "_blank")
        speak("Opening Zomato")
    }
    else if (message.includes("open swiggy")) {
        window.open("https://www.swiggy.com", "_blank")
        speak("Opening Swiggy")
    }
    else if (message.includes("open uber eats")) {
        window.open("https://www.ubereats.com", "_blank")
        speak("Opening Uber Eats")
    }
    else if (message.includes("open microsoft office")) {
        window.open("https://www.office.com", "_blank")
        speak("Opening Microsoft Office")
    }
    else if (message.includes("open stack overflow")) {
        window.open("https://stackoverflow.com", "_blank")
        speak("Opening Stack Overflow")
    }
    else if (message.includes("open github")) {
        window.open("https://github.com", "_blank")
        speak("Opening GitHub")
    }
    else if (message.includes("open hackerrank")) {
        window.open("https://www.hackerrank.com", "_blank")
        speak("Opening HackerRank")
    }

    // search for something

    else if (message.includes("search for") || message.includes("search")) {
        let searchQuery = message.replace(/search for|search/i, "").trim()
        speak(`Searching for ${searchQuery}`)
        window.open(`https://www.google.com/search?q=${searchQuery}`, "_blank")
    } 
    
    // if it doesent know then he search for you 

    else {
        speak("I'm not sure about that. Let me search for you.")
        window.open(`https://www.google.com/search?q=${message}`, "_blank")
    }
}
function openPage(){
    window.open("cmd.html")
}
