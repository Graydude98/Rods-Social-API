const names = [
'Kickboxer',
'Karate',
'Muay Thai',
'Boxing',
'Savate',
'Lethwei',
];

//==========Taken from Example to test
const descriptionsBodies = [
    'How to disagree with someone',
    'The point of KATA',
    'The art of 8 limbs',
    'Bareknuckle Thai',
    'The Art of Barehanded Sweet Science',
];

//==========Taken from Example to test
const possibleResponses = [
    'I disagree!',
    'Improve technique',
    'Muay Thai and Baron',
    'Lethwei a rather brutal art',
    'Legends like Ali, Tyson, and Mayweather and more practice this art',
];  


const users = [];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUser = () =>
    `${getRandomArrItem(names)}`;

const getRandomThought = (int) => {
    const getThoughtReactions = (count) => {
        const reactions = [];
        for (let i = 0; i < count; i++) {
            reactions.push({
                text: getRandomArrItem(possibleResponses),
                likes: Math.floor(Math.random() * 100),
            });
        }
        return reactions;
    };

        let results = [];
        for (let i = 0; i < int; i++) {
            results.push({
                published: Math.random() < 0.5,
                description: getRandomArrItem(descriptionsBodies),
                reactions: [...getThoughtReactions(3)],
            });
        }

        return results;
};

module.exports = {
    getRandomThought,
    getRandomUser,
};