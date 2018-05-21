


export default ($NDGCNN) => {
    const WholeCnn = $NDGCNN.PARTNERSHIP_TOTAL_COINS

    const checkinRewordsArr = [...$NDGCNN.CHECKIN_GAIN_COIN_LIST].unshift("Rewards (Coins)")
    return {  
        "en":{
            "list":[
                {
                    "question": "Who are we?",
                    "answers": [
                        "NewsDog is an India-focused news APP that uses cutting-edge technology to recommend the most relevant and interesting news individually to each user. Since the APP was launched in March 2016, we have accumulated over 50 million users and are ranked top 1 news apps on Google Play.",
                        "CNN (Content Neutrality Network) is an innovative content ecosystem based on blockchain technology. It breaks the barrier between content communities, revolutionizes revenue share, and decentralizes user acquisition and incentive program, creating a more open, efficient and trustworthy content era.",
                        "NewsDog CNN is the first application of CNN network, will lead us into the new content ecosystem."
                    ]
                },
                {
                    "question": "Why refer friends?",
                    "answers": [
                        `Referring friends is by far the easiest way to earn cnn coins with NewsDog. You can win up to ${WholeCnn} cnn coins for inviting one friend.`
                    ]
                },
                {
                    "type": "title",
                    "title": "CNN coin related questions"
                },
                {
                    "question": "Daily Check-in",
                    "answers": [
                        `Earn cnn coins by daily checking in. The more days you check in consecutively, the more you earn. First 5 days check-in gets ${$NDGCNN.CHECKIN_GAIN_COIN_LIST[0]} cnn coin, and the next 2 days will double the prize, then recycle.`
                    ]
                },
                {
                    "type": "title",
                    "title": "Friend invitation related questions"
                },
                {
                    "question": "What is invite link?",
                    "answers": [
                        "The unique link given to each user by NewsDog for the purpose of tracking how many friends you have invited. You can find it under tab \"Invite friends\"."
                    ]
                },
                {
                    "type": "table",
                    "question": `How to earn ${WholeCnn} cnn coins?`,
                    "answers": [
                        `You can earn maximum of ${WholeCnn} cnn coins from each friend. coins will be credited to your account during the first 6 days.`,
                        `1. ${$NDGCNN.TAKE_CHILD_COIN} cnn coins once he opens NewsDog.`,
                        `2. ${$NDGCNN.CHILD_REACH_GOAL_COIN[0]} cnn coins each day he reads any news.`
                    ]
                },
                {
                    "question": `Why did I not get ${WholeCnn} cnn coins?`,
                    "answers": [
                        "1. You will not get cnn coins associated with your friend if your friend didn’t install NewsDog through your invite link.",
                        `2. ${WholeCnn} cnn coins is the maximum coins you win from one friend. Cnn coins will be credited to your account daily when your friend reads news during the first 6 days. If your friend doesn't read news, you would get less than ${WholeCnn} cnn coins.`
                    ]
                },
                {
                    "question": "What if my friend fails to open the invite link?",
                    "answers": [
                        "Please go to the invite link page and try to share the link again. If you still face the problems after having tried several times, please go to 'ME' button at the bottom of the main page, then click 'Feedback' and report the problem."
                    ]
                },
                {
                    "type": "title",
                    "title": "Cash out questions"
                },
                {
                    "question": "How to cash out my cnn coins?",
                    "answers": [
                        `You can cash out when your balance reaches cnn coins ${$NDGCNN.WITHDRAW_LIMIT}. Check now if you are eligible for cash out: go to the tab "Income" and then click "Cash Out". `
                    ]
                },
                {
                    "question": "How long does it take to receive the cnn coins?",
                    "answers": [
                        "It takes 3-7 days for us to transfer the cnn coins into your Paytm account after you submit the cash out request."
                    ]
                },
                {
                    "question": "Why can I not participate anymore?",
                    "answers": [
                        "Each device, each user can be invited only once. Once we find any device or any user has been invited or used multiple times, we have the right to cancel the payment and deny him/her from participating further in the campaign."
                    ]
                },
                {
                    "type": "title",
                    "title": "Others"
                },
                {
                    "question": "Terms and conditions",
                    "answers": [
                        "1. The promotional campaign is part of an advertising campaign for NewsDog. It is not a lottery nor risk-based activity. It doesn’t aim at making profits. NewsDog reserves the right to amend the policy at any time of the campaign.\n                            ",
                        "2. All the pictures of the prizes are only for your reference",
                        "3. Kindly do not uninstall NewsDog during the plan. NewsDog will not be responsible for loss of your coins due to uninstallation."
                    ]
                },
                {
                    "question": "What if this FAQ sheet cannot help me solve my problem?",
                    "answers": [
                        "Go to the \"Me\" button at the bottom of the main page, then click \"Feedback\" and fill in the info."
                    ]
                }
            ],
            "table":[
                ["Time of being active","1st","2nd","3rd","4th","5th","6th"],
                checkinRewordsArr
            ]
        }
    }
}