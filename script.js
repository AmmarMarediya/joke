let div = document.getElementsByTagName("div")[0];

let joks = [
    "पप्पू डॉक्टर से: कोई सस्ती दवा बताइए, डॉक्टर: नींद में गिर जाओ सब भूल जाओगे!",
    "टीचर: बताओ सबसे ईमानदार कौन है? छात्र: नींद, कभी भी धोखा नहीं देती!",
    "गोलू: मम्मी मुझे भूख लगी है, मम्मी: फ्रिज में जो है खा लो, गोलू: फ्रिज तो फोटो है!",
    "मोहन: मैं तुम्हारे बिना मर जाऊंगा, लड़की: तो जाओ वैक्सीन लगवा लो!",
    "पप्पू: बाबू जी पैसे दो हेयर कट करवाना है, बाबू जी: पहले पढ़ाई कर गंजा हो जाएगा खुद!",
    "राजू: तुम रोज लेट क्यों आते हो? श्याम: ताकि टाइम का मोल समझ में आए!",
    "लड़का: मम्मी मेरी शादी नहीं करनी, मम्मी: बेटा तो फिर खाना भी खुद बना ले!",
    "पप्पू: शादी क्यों करनी चाहिए? गप्पू: ताकि दो लोग मिलकर दुखी हो सकें!",
    "टीचर: गधा कौन है? छात्र: जो कुछ पूछे बिना शादी कर ले!",
    "पप्पू ATM गया, लिखा था- 'Insert card', पप्पू बोला- 'Please take my card, it's humble request!'",
    "टीचर: इतने दिन कहां थे? छात्र: बर्ड फ्लू हो गया था, टीचर: तू इंसान है या मुर्गा? छात्र: मुर्गा बना कर पढ़ाते हो!",
    "राजू: मम्मी फोन दे दो, मम्मी: चार्ज नहीं है, राजू: मैं PUBG चार्ज करने के लिए खेलता हूं!",
    "टीचर: भारत का नक्शा कौन बनाएगा? छात्र: हम तो व्हाट्सएप पर भेज देंगे!",
    "गोलू: मम्मी मेरा फोन कहां है? मम्मी: पढ़ाई की किताबों में रखा है, गोलू: अच्छा, फिर रहने दो!",
    "मोहन: आज दाल में कुछ काला है, पत्नी: किचन में बल्ब फ्यूज है!",
    "पत्नी: सुनिए जी आज मेरे लिए क्या लाए? पति: खामोशी और चैन!",
    "शादी से पहले लड़का: मैं तुम्हारे लिए तारे तोड़ लाऊंगा, शादी के बाद: गैस सिलेंडर खुद ले आओ!",
    "टीचर: इतने नंबर कैसे आए? छात्र: पेपर ही आसान था, टीचर: फिर भी 2 नंबर कैसे मिले? छात्र: दया से!",
    "बबलू: मम्मी मेरा रिजल्ट कैसा आया? मम्मी: बेटा तुम होश में हो ना?",
    "पप्पू: भगवान मुझे नौकरी दे दो, भगवान: बेटा पहले उठ जा इंटरव्यू पर तो जा!",
    "राजू: प्यार और WiFi में क्या फर्क है? गोलू: प्यार मिल भी जाए तो भी नेटवर्क कमजोर रहता है!",
    "गोलू: मेरी गर्लफ्रेंड बहुत स्वीट है, राजू: चीनी कम खाया कर!",
    "पप्पू: शादी करना चाहता हूं, दोस्त: भाई गलती से भी 'हां' मत बोलना!",
    "टीचर: मोबाइल पर गेम कौन खेल रहा है? छात्र: मैं तो ज्ञान की खोज कर रहा हूं!",
    "राजू: मेरे मोबाइल की बैटरी बहुत खराब है, गोलू: शादी कर ले, बीवी हमेशा चार्ज में रखेगी!",
    "टीचर: गधे की पहचान बताओ? छात्र: जो एग्जाम से पहले FB पर Active रहे!",
    "पप्पू: लड़की सुंदर होनी चाहिए, स्मार्ट होनी चाहिए, गप्पू: भाई सपना देख ले!",
    "राजू: तू इतना मोटा क्यों है? गोलू: क्योंकि मैं दिल से खाता हूं!",
    "बबलू: तू स्कूल क्यों नहीं जाता? गोलू: स्कूल तो जाकर भी कुछ नहीं होता!",
    "टीचर: होमवर्क क्यों नहीं किया? छात्र: सपने में किया था!",
    "राजू: तू रोज लेट क्यों आता है? गोलू: क्योंकि समय का पाबंद हूं!",
    "गोलू: मुझे नींद नहीं आती, डॉक्टर: फेसबुक बंद कर दे!",
    "मोहन: Exam कैसा गया? सोहन: ऐसा जैसे शादी के बाद पहला खाना!",
    "गोलू: मेरी किस्मत ही खराब है, राजू: किस्मत नहीं, तेरी सोच खराब है!",
    "पप्पू: मम्मी मुझे नींद नहीं आ रही, मम्मी: तो जाकर पढ़ाई कर, नींद आ जाएगी!",
    "राजू: मम्मी भूख लगी है, मम्मी: फोन में कुछ खा ले!",
    "टीचर: तुम सबसे पीछे क्यों बैठे हो? छात्र: ताकि टाइम पर भाग सकूं!",
    "मोहन: यार मुझे कोई काम नहीं मिलता, सोहन: व्हाट्सएप ग्रुप एडमिन बन जा!",
    "गोलू: मुझे लड़की पसंद आ गई है, राजू: लड़की को बता भी देना!",
    "पप्पू: मुझे ताजमहल देखना है, गप्पू: शादी कर ले, रोज देखेगा!",
    "टीचर: सबसे बेवकूफ कौन है? छात्र: जो एक्सपायर दूध पी जाए!",
    "बबलू: मेरी गर्लफ्रेंड मुझसे रूठ गई है, गोलू: मोबाइल बंद कर दे, वापस मान जाएगी!",
    "राजू: तुम इतने खुश क्यों हो? गोलू: मेरी बीवी मायके चली गई!",
    "मोहन: नींद क्यों नहीं आती? श्याम: बीवी साथ सोती है!",
    "टीचर: पढ़ाई क्यों नहीं कर रहे हो? छात्र: क्योंकि हम डिजिटल इंडिया में हैं!",
    "पप्पू: मेरी बीवी बहुत सीधी है, गप्पू: तो फिर डर कैसा लगता है?",
    "बबलू: WhatsApp पर क्या कर रहे हो? गोलू: आंखें थका रहा हूं!",
    "राजू: नींद नहीं आ रही, गोलू: सपने में आ जाओ!",
    "गोलू: शादी के बाद लाइफ कैसी होती है? राजू: जैसे मोबाइल बिना नेटवर्क!",
    "पप्पू: मुझे टीवी देखना है, मम्मी: रिमोट खुद ढूंढ ले!",
    "टीचर: स्कूल क्यों नहीं आए? छात्र: सपने में आ गया था!",
    "मोहन: शादी कैसी लगती है? श्याम: EMI जैसी!",
    "राजू: प्यार में दर्द क्यों होता है? गोलू: क्योंकि दिल में Data नहीं होता!",
    "गोलू: तुझे देख कर नींद आ जाती है, बबलू: मुझे देख कर किताब मत समझ!",
    "बबलू: मम्मी मुझसे शादी करनी है, मम्मी: खुद से ही कर ले!",
    "राजू: पप्पू कहां है? गोलू: WiFi का पासवर्ड बदल गया, तभी गायब है!",
    "पप्पू: परीक्षा में पास हो गया, मम्मी: बेटा तू हीरा है!",
    "राजू: PUBG खेलें? गोलू: नहीं भाई मैं अब आध्यात्म में हूं!",
    "टीचर: नाम बताओ! छात्र: मोनू '2GB RAM, 32GB Storage'!",
    "मोहन: मेरे मोबाइल का चार्ज खत्म हो गया, राजू: दिल से मत खेल!",
    "गोलू: WIFI नहीं मिल रहा, राजू: दिल से जोड़ भाई!",
    "टीचर: सूरज कब निकलता है? छात्र: जब पापा उठाते हैं!",
    "राजू: सुबह सुबह कौन है जो मूड खराब करता है? गोलू: अलार्म!",
    "पप्पू: तू परेशान क्यों है? गोलू: मम्मी ने पासवर्ड बदल दिया!",
    "गोलू: तुम्हें मेरा प्यार महसूस होता है? राजू: हां, जैसे नेटवर्क नहीं आता!",
    "मोहन: शादी क्यों करनी चाहिए? श्याम: ताकि कोई हो जो ताने मारे!",
    "बबलू: गर्लफ्रेंड चाहिए, गोलू: पहले पॉकेट में बैलेंस रख!",
    "टीचर: 1+1 कितना होता है? छात्र: शादी!",
    "गोलू: नींद नहीं आती यार, राजू: किताब खोल!",
    "पप्पू: शादी के बाद क्या बदलता है? गोलू: WiFi का पासवर्ड!",
    "टीचर: बच्चो बोर्ड परीक्षा पास करना जरूरी है, छात्र: शादी के लिए भी?",
    "राजू: ये दुनिया बहुत मतलबी है, गोलू: हां भाई, बिना चार्ज के बात भी नहीं करता कोई!",
    "गोलू: दुनिया में सबसे कठिन काम क्या है? राजू: गर्लफ्रेंड को 'सॉरी' मनवाना!",
    "पप्पू: तू टाइम पर क्यों नहीं आता? गोलू: क्योंकि टाइम कभी मेरे साथ नहीं आता!",
    "बबलू: आज तो मैं मस्त हूं, गोलू: क्यूंकि बीवी मायके है?",
    "राजू: मुझे फॉलो करो, गोलू: कहां? शादी के मंडप तक?",
    "पप्पू: मेरी बीवी मुझसे बहुत प्यार करती है, गप्पू: CCTV लगवा ले!",
    "गोलू: नींद आ रही है, राजू: किताब खोलते ही गारंटी है!",
    "टीचर: पढ़ते क्यों नहीं? छात्र: क्योंकि नींद जरूरी है!",
    "बबलू: क्या तू मुझसे शादी करेगा? गोलू: मैं लड़की नहीं हूं!",
    "राजू: तेरा चेहरा देखकर भूख मर जाती है, गोलू: तो मुझे फ्रिज बना ले!",
    "गोलू: मुझे कोई नौकरी नहीं मिल रही, राजू: WhatsApp ग्रुप एडमिन बन जा!",
    "पप्पू: नींद नहीं आ रही, गप्पू: सपनों में आ जा!",
    "राजू: फोन क्यों नहीं उठाया? गोलू: दिल तोड़ दिया तेरा!",
    "टीचर: तुम्हें क्या बनना है? छात्र: Online Star!",
    "मोहन: शादी में क्या मिला? श्याम: EMI और टेंशन!",
    "गोलू: मम्मी भूख लगी है, मम्मी: डाटा खत्म है खा ले!",
    "पप्पू: आज भी अकेला हूं, गप्पू: क्योंकि अक्ल वाला है!",
    "राजू: किस्मत खराब है, गोलू: क्योंकि सोच भी वैसी है!",
    "टीचर: शादी क्या होती है? छात्र: WiFi का गलत पासवर्ड!",
    "बबलू: मुझे डर लग रहा है, गोलू: क्योंकि तूने पढ़ाई नहीं की!",
    "राजू: आज क्या स्पेशल है? गोलू: मोबाइल में बैलेंस है!",
    "गोलू: WhatsApp डाउन है, राजू: अब क्या जि़ंदगी भी बंद हो गई?",
    "पप्पू: मेरी लाइफ सेट है, गप्पू: फिर भी दुखी क्यों है?",
    "राजू: आज मूड खराब है, गोलू: मोबाइल गिरा क्या?",
    "बबलू: भाई शादी करूं? गोलू: कर, फिर खुद समझ जाएगा!",
    "राजू: मेरी बीवी मुझसे नाराज है, गोलू: तुमसे नहीं, तुम्हारे मोबाइल से है!",
    "टीचर: बताओ पानी क्यों उबलता है? छात्र: क्योंकि उसमें गुस्सा होता है!",
    "पप्पू: बीवी मायके गई है, गप्पू: चलो अब चैन से सांस लो!",
    "गोलू: तुम इतने सीरियस क्यों हो? राजू: क्योंकि बीवी सामने बैठी है!"

]


let jno = Math.floor(Math.random() * joks.length);

div.innerHTML = jno+1 + ": "+ joks[jno];