const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "You can do that! or I feel strong! Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym.",
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a high five or to say thank you.",
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of rofl. Stands for „rolling on the floor, laughing.",
  },
  {
    id: 4,
    emoji: "😊",
    name: "Smiling Face with Smiling Eyes",
    meaning:
      "A classic smiley face with rosy cheeks and softly smiling eyes. Expresses genuine happiness, warmth, and positive feelings. Often used to convey friendliness or gratitude.",
  },
  {
    id: 5,
    emoji: "🥰",
    name: "Smiling Face with Hearts",
    meaning:
      "A face with smiling eyes, rosy cheeks, and several hearts floating around the head. Represents being in love, feeling deep affection, or expressing adoration for someone or something.",
  },
  {
    id: 6,
    emoji: "😎",
    name: "Smiling Face with Sunglasses",
    meaning:
      "A smiling face wearing sunglasses. Commonly used to express a sense of cool, calmness, or confidence. Can also indicate a sunny day or bright weather.",
  },
  {
    id: 7,
    emoji: "😢",
    name: "Crying Face",
    meaning:
      "A face with a single tear streaming down the cheek. Represents sadness, disappointment, or being emotionally touched by something moving or beautiful.",
  },
  {
    id: 8,
    emoji: "😡",
    name: "Pouting Face",
    meaning:
      "A face with a red/purple-colored brow and cheeks, scowling eyes, and a downturned mouth. Expresses rage, extreme anger, or frustration with a person or situation.",
  },
  {
    id: 9,
    emoji: "🤔",
    name: "Thinking Face",
    meaning:
      "A face with a raised eyebrow and a hand on the chin, pondering or processing thoughts. Used when contemplating, considering a point, or trying to solve a problem.",
  },
  {
    id: 10,
    emoji: "😴",
    name: "Sleeping Face",
    meaning:
      "A face with closed eyes and a small zzz bubble, indicating sleep. Used to express tiredness or boredom, or to indicate that someone is falling asleep or already asleep.",
  },
  {
    id: 11,
    emoji: "🍕",
    name: "Pizza",
    meaning:
      "A slice of pepperoni pizza, with a red tomato sauce base and yellow cheese. Often used to express hunger, desire for pizza, or to suggest eating out or ordering food.",
  },
  {
    id: 12,
    emoji: "🌮",
    name: "Taco",
    meaning:
      "A Mexican taco with a folded shell containing meat, cheese, and vegetables. Represents Mexican food in general or specifically tacos. Often used on Taco Tuesday or to suggest eating Mexican cuisine.",
  },
  {
    id: 13,
    emoji: "🍷",
    name: "Wine Glass",
    meaning:
      "A glass of red wine. Often used to express sophistication, relaxation after work, celebrating, or enjoying a meal with wine. Can also indicate a desire to drink alcohol.",
  },
  {
    id: 14,
    emoji: "🎉",
    name: "Party Popper",
    meaning:
      "A party popper, shown as a small conical device that spews confetti when activated. Used to express celebration, congratulations, happiness, or the announcement of good news.",
  },
  {
    id: 15,
    emoji: "🎂",
    name: "Birthday Cake",
    meaning:
      "A decorated birthday cake with lit candles on top. Used to wish someone a happy birthday or to represent a birthday celebration or party.",
  },
  {
    id: 16,
    emoji: "🎁",
    name: "Wrapped Gift",
    meaning:
      "A wrapped present or gift box with a bow. Represents giving or receiving gifts, birthdays, holidays, or special occasions where gifts are exchanged.",
  },
  {
    id: 17,
    emoji: "❤️",
    name: "Red Heart",
    meaning:
      "A classic red heart, the most common symbol for love. Represents romantic love, affection, or a close bond with someone or something.",
  },
  {
    id: 18,
    emoji: "🔥",
    name: "Fire",
    meaning:
      "A flame of fire. Commonly used to express that something is hot, exciting, attractive, or impressive. Can also indicate burning desire or that something is lit (excellent).",
  },
  {
    id: 19,
    emoji: "✨",
    name: "Sparkles",
    meaning:
      "Multiple four-point stars, creating a sparkling effect. Used to express cleanliness, something new or shiny, magic, or general positivity and good vibes.",
  },
  {
    id: 20,
    emoji: "🌈",
    name: "Rainbow",
    meaning:
      "A colorful arc of a rainbow. Represents hope, good fortune, or the calm after a storm. Also widely used as a symbol for LGBTQ+ pride and inclusivity.",
  },
  {
    id: 21,
    emoji: "🌟",
    name: "Glowing Star",
    meaning:
      "A golden five-pointed star with a glowing effect. Used to mark something as special, favorite, or high quality. Also expresses excellence or achievement.",
  },
  {
    id: 22,
    emoji: "👍",
    name: "Thumbs Up",
    meaning:
      "A hand showing a thumbs-up gesture. Universally recognized as a sign of approval, agreement, or encouragement. Often used as a quick positive response.",
  },
  {
    id: 23,
    emoji: "👎",
    name: "Thumbs Down",
    meaning:
      "A hand showing a thumbs-down gesture. Indicates disapproval, disagreement, or rejection. Used to express negative feedback or dislike of something.",
  },
  {
    id: 24,
    emoji: "👀",
    name: "Eyes",
    meaning:
      "A pair of eyes, glancing slightly to the left. Often used to indicate curiosity, interest, or attention. Can also suggest witnessing drama or emphasize something noteworthy.",
  },
  {
    id: 25,
    emoji: "🤫",
    name: "Shushing Face",
    meaning:
      "A face with a finger pressed against the lips, requesting silence or quiet. Used to indicate a secret, request discretion, or suggest keeping something confidential.",
  },
  {
    id: 26,
    emoji: "🤷",
    name: "Person Shrugging",
    meaning:
      "A person shrugging their shoulders to indicate uncertainty, indifference, or lack of knowledge. Often used when someone doesn't know the answer or doesn't care about a situation.",
  },
  {
    id: 27,
    emoji: "🤦",
    name: "Person Facepalming",
    meaning:
      "A person with their hand on their face, expressing embarrassment, disbelief, or exasperation. Used to indicate something is obviously wrong or disappointing.",
  },
  {
    id: 28,
    emoji: "🧠",
    name: "Brain",
    meaning:
      "A pinkish-gray human brain. Used to represent intelligence, thinking, or mental activity. Can also indicate mind-related topics or suggest someone should use their brain.",
  },
  {
    id: 29,
    emoji: "💯",
    name: "Hundred Points",
    meaning:
      "The number 100 underlined with two horizontal lines. Used to express perfect score, complete agreement, or total success. Often indicates something is 100% right or excellent.",
  },
  {
    id: 30,
    emoji: "🙄",
    name: "Face with Rolling Eyes",
    meaning:
      "A face shown with rolling eyes, expressing disbelief, annoyance, or exasperation. Used to indicate that something is obvious or silly, or to show irritation with someone's behavior.",
  },
  {
    id: 31,
    emoji: "😂",
    name: "Face with Tears of Joy",
    meaning:
      "A face with tears streaming down from laughing so hard. One of the most popular emojis, used to express uncontrollable laughter or finding something extremely funny.",
  },
  {
    id: 32,
    emoji: "😭",
    name: "Loudly Crying Face",
    meaning:
      "A face with streams of tears flowing from closed eyes. Used to express intense sadness, grief, or overwhelming emotion. Can also indicate laughter so hard it brings tears.",
  },
  {
    id: 33,
    emoji: "🥺",
    name: "Pleading Face",
    meaning:
      "A face with large, glossy eyes and a small frown. Used to look cute, express genuine sadness, or make a pleading request. Often called puppy dog eyes.",
  },
  {
    id: 34,
    emoji: "💩",
    name: "Pile of Poo",
    meaning:
      "A smiling pile of poop. Used in a playful or humorous context to represent something bad, a mess, or useless. Can also be used as a friendlier way to call something rubbish.",
  },
  {
    id: 35,
    emoji: "👻",
    name: "Ghost",
    meaning:
      "A cartoonish ghost with a white sheet and black oval eyes. Used to represent Halloween, spooky things, or ghost stories. Can also be used playfully to indicate someone is being ignored.",
  },
  {
    id: 36,
    emoji: "👽",
    name: "Alien",
    meaning:
      "A green alien with a large head and black oval eyes. Used to represent extraterrestrial life, science fiction concepts, or something that feels strange or unfamiliar.",
  },
  {
    id: 37,
    emoji: "🤖",
    name: "Robot",
    meaning:
      "A retro-style robot face with antenna. Used to represent artificial intelligence, automation, or technology. Can also indicate robotic behavior or lack of emotion.",
  },
  {
    id: 38,
    emoji: "🌍",
    name: "Globe Showing Europe-Africa",
    meaning:
      "A globe of the Earth showing Europe and Africa. Used to represent the world, global issues, or international topics. Can also indicate travel or worldwide connections.",
  },
  {
    id: 39,
    emoji: "🌱",
    name: "Seedling",
    meaning:
      "A young plant or seedling, shown as a small sprout with green leaves. Represents growth, new beginnings, or environmental consciousness. Often used in context of personal development.",
  },
  {
    id: 40,
    emoji: "🐶",
    name: "Dog Face",
    meaning:
      "The face of a dog, typically representing a generic friendly canine. Used to express loyalty, playfulness, or to represent dogs in general. Often used by dog lovers.",
  },
  {
    id: 41,
    emoji: "🐱",
    name: "Cat Face",
    meaning:
      "The face of a cat with whiskers and pointy ears. Used to represent cats, feline qualities, or independence. Often used by cat lovers or to express a cute, mischievous feeling.",
  },
  {
    id: 42,
    emoji: "💤",
    name: "Zzz",
    meaning:
      "A series of three Z's, increasing in size. Used to represent sleeping, snoring, or boredom. Often used in comics to indicate that a character is asleep.",
  },
  {
    id: 43,
    emoji: "💭",
    name: "Thought Balloon",
    meaning:
      "A cloud-shaped bubble used in comics to indicate a character's thoughts. Used to represent thinking, daydreaming, or contemplation.",
  },
  {
    id: 44,
    emoji: "💬",
    name: "Speech Balloon",
    meaning:
      "A white speech bubble, as used in comics to indicate dialogue. Represents conversation, communication, or expressing thoughts out loud.",
  },
  {
    id: 45,
    emoji: "📱",
    name: "Mobile Phone",
    meaning:
      "A smartphone or mobile phone. Used to represent phones, mobile technology, or calling someone. Also used to indicate that someone is busy on their phone.",
  },
  {
    id: 46,
    emoji: "💻",
    name: "Laptop",
    meaning:
      "A laptop or notebook computer. Used to represent work, technology, or computing. Often used in contexts related to remote work or programming.",
  },
  {
    id: 47,
    emoji: "📷",
    name: "Camera",
    meaning:
      "A digital camera or photo device. Used to represent photography, taking pictures, or visual media. Often used to indicate a photo opportunity or memorable moment.",
  },
  {
    id: 48,
    emoji: "🎵",
    name: "Musical Note",
    meaning:
      "A single musical note. Used to represent music, songs, or musical content. Often used when discussing music or to indicate someone is singing or listening to music.",
  },
  {
    id: 49,
    emoji: "🎮",
    name: "Video Game",
    meaning:
      "A gamepad or video game controller. Used to represent gaming, play, or leisure activities. Often used by gamers or to indicate someone is playing video games.",
  },
  {
    id: 50,
    emoji: "📚",
    name: "Books",
    meaning:
      "A stack of three colored books. Used to represent reading, education, or knowledge. Often used in contexts related to learning, studying, or literature.",
  },
  {
    id: 51,
    emoji: "⏰",
    name: "Alarm Clock",
    meaning:
      "A traditional alarm clock with bells on top. Used to represent time, deadlines, or waking up. Often used to indicate urgency or a reminder.",
  },
  {
    id: 52,
    emoji: "💰",
    name: "Money Bag",
    meaning:
      "A bag filled with money, tied at the top. Used to represent wealth, finances, or earnings. Often used in contexts related to money, business, or profit.",
  },
  {
    id: 53,
    emoji: "🔒",
    name: "Locked",
    meaning:
      "A closed padlock. Used to represent security, privacy, or something that is secured. Often used in contexts related to passwords, protection, or confidentiality.",
  },
  {
    id: 54,
    emoji: "🌊",
    name: "Water Wave",
    meaning:
      "A blue wave of water, curling as if breaking onto a shore. Represents the ocean, surfing, swimming, or beach activities. Can also symbolize deep emotions, going with the flow, or indicate overwhelming situations as in 'drowning in work'.",
  },
];

export default emojipedia;
