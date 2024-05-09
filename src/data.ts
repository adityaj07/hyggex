interface menuLinksTypes {
  text: String;
  link: String;
}

interface flashCardLinksTypes {
  label: string;
  index: number;
}

interface faqItemsTypes {
  question: string;
  answer: string;
}

export const menuLinks: menuLinksTypes[] = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Flashcard",
    link: "/flashcard",
  },
  {
    text: "Contact",
    link: "/contact",
  },
  {
    text: "FAQ",
    link: "/faq",
  },
];

export const flashCardLinks: flashCardLinksTypes[] = [
  {
    label: "Study",
    index: 0,
  },
  {
    label: "Quiz",
    index: 1,
  },
  {
    label: "Test",
    index: 2,
  },
  {
    label: "Game",
    index: 3,
  },
  {
    label: "Others",
    index: 4,
  },
];

export const faqItems: faqItemsTypes[] = [
  {
    question: "Can education flashcards be used for all age groups?",
    answer: "Lorem ipsum smthng smthng smthngg",
  },
  {
    question: "How do education flashcards work?",
    answer: "Lorem ipsum smthng smthng smthngg",
  },
  {
    question: "Can education flashcards be used for test preparation?",
    answer: "Lorem ipsum smthng smthng smthngg",
  },
];
