
var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?13231';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
    "enabled": true,
    "chatButtonSetting": {
        "backgroundColor": "#4dc247",
        "ctaText": "",
        "borderRadius": "25",
        "marginLeft": "0",
        "marginBottom": "100",
        "marginRight": "25",
        "position": "right"
    },
    "brandSetting": {
        "brandName": "GradeUpEducationInstitute",
        "brandSubTitle": "Sagar Yadav",
        "brandImg": "https://cdn.clare.ai/wati/images/WATI_logo_square_2.png",
        "welcomeText": "Hi there!\nHow can I help you?",
        "messageText": "Hello! 🤝%0AI want to join GradeUp Education Institute.",
        "backgroundColor": "#0a5f54",
        "ctaText": "Start Chat",
        "borderRadius": "25",
        "autoShow": false,
        "phoneNumber": "917678522877"
    }
};
s.onload = function () {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
