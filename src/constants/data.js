export const CATEGORIES = [
  { id: 'rosary', title: 'Rosary', icon: 'flower-outline', color: '#7B68AE', description: 'Pray the Holy Rosary' },
  { id: 'mass', title: 'Daily Mass', icon: 'reader-outline', color: '#C4785C', description: 'Readings & reflections' },
  { id: 'lectio', title: 'Lectio Divina', icon: 'book-outline', color: '#5B8A72', description: 'Sacred reading' },
  { id: 'examen', title: 'Examen', icon: 'eye-outline', color: '#4A7FB5', description: 'Daily reflection' },
  { id: 'novena', title: 'Novenas', icon: 'calendar-outline', color: '#A85C7B', description: 'Nine-day devotions' },
  { id: 'saints', title: 'Saints', icon: 'star-outline', color: '#B8963E', description: 'Lives of the saints' },
];

export const DAILY_PRAYERS = [
  { id: '1', title: 'Morning Offering', duration: '5 min', type: 'Guided' },
  { id: '2', title: 'Angelus', duration: '3 min', type: 'Traditional' },
  { id: '3', title: 'Divine Mercy Chaplet', duration: '12 min', type: 'Guided' },
  { id: '4', title: 'Night Prayer (Compline)', duration: '10 min', type: 'Liturgy of the Hours' },
];

export const ROSARY_MYSTERIES = {
  Monday: 'Joyful',
  Tuesday: 'Sorrowful',
  Wednesday: 'Glorious',
  Thursday: 'Luminous',
  Friday: 'Sorrowful',
  Saturday: 'Joyful',
  Sunday: 'Glorious',
};

export const FEATURED_SESSIONS = [
  {
    id: 'f1',
    title: 'Finding Your Peace',
    subtitle: 'A guided meditation on Psalm 23',
    duration: '15 min',
    image: null,
    gradient: ['#2A2045', '#1A1040'],
  },
  {
    id: 'f2',
    title: 'Surrender Prayer',
    subtitle: 'Letting go and trusting God',
    duration: '10 min',
    image: null,
    gradient: ['#1A3040', '#0B1820'],
  },
  {
    id: 'f3',
    title: 'Stations of the Cross',
    subtitle: 'Walk with Christ',
    duration: '25 min',
    image: null,
    gradient: ['#301A20', '#1A0B10'],
  },
];

export const PRAYER_CONTENT = {
  rosary: {
    title: 'The Holy Rosary',
    sessions: [
      { id: 'r1', title: 'Joyful Mysteries', duration: '20 min', description: 'The Annunciation, Visitation, Nativity, Presentation, Finding in the Temple' },
      { id: 'r2', title: 'Sorrowful Mysteries', duration: '20 min', description: 'Agony in the Garden, Scourging, Crowning with Thorns, Carrying of the Cross, Crucifixion' },
      { id: 'r3', title: 'Glorious Mysteries', duration: '20 min', description: 'Resurrection, Ascension, Descent of the Holy Spirit, Assumption, Coronation' },
      { id: 'r4', title: 'Luminous Mysteries', duration: '20 min', description: 'Baptism, Wedding at Cana, Proclamation of the Kingdom, Transfiguration, Institution of the Eucharist' },
    ],
  },
  mass: {
    title: 'Daily Mass',
    sessions: [
      { id: 'm1', title: "Today's Readings", duration: '10 min', description: 'First Reading, Psalm, Gospel' },
      { id: 'm2', title: 'Gospel Reflection', duration: '8 min', description: 'Guided meditation on the Gospel' },
      { id: 'm3', title: 'Preparation for Mass', duration: '5 min', description: 'Prepare your heart before Mass' },
    ],
  },
  lectio: {
    title: 'Lectio Divina',
    sessions: [
      { id: 'l1', title: 'Lectio — Read', duration: '5 min', description: 'Slow, attentive reading of Scripture' },
      { id: 'l2', title: 'Meditatio — Meditate', duration: '10 min', description: 'Reflect on the Word' },
      { id: 'l3', title: 'Oratio — Pray', duration: '10 min', description: 'Respond to God in prayer' },
      { id: 'l4', title: 'Contemplatio — Rest', duration: '15 min', description: 'Rest in God\'s presence' },
    ],
  },
  examen: {
    title: 'Daily Examen',
    sessions: [
      { id: 'e1', title: 'Ignatian Examen', duration: '15 min', description: 'St. Ignatius\' five-step prayer of reflection' },
      { id: 'e2', title: 'Gratitude Examen', duration: '10 min', description: 'Review the day with thankfulness' },
      { id: 'e3', title: 'Evening Reflection', duration: '8 min', description: 'A simple end-of-day review' },
    ],
  },
  novena: {
    title: 'Novenas',
    sessions: [
      { id: 'n1', title: 'Sacred Heart Novena', duration: '10 min', description: 'Nine days of devotion to the Sacred Heart' },
      { id: 'n2', title: 'Our Lady of Perpetual Help', duration: '8 min', description: 'Seek Mary\'s intercession' },
      { id: 'n3', title: 'St. Joseph Novena', duration: '10 min', description: 'Patron of the Universal Church' },
      { id: 'n4', title: 'Divine Mercy Novena', duration: '12 min', description: 'Begin on Good Friday' },
    ],
  },
  saints: {
    title: 'Saints',
    sessions: [
      { id: 's1', title: 'Saint of the Day', duration: '5 min', description: 'Learn about today\'s saint' },
      { id: 's2', title: 'St. Therese of Lisieux', duration: '10 min', description: 'The Little Way' },
      { id: 's3', title: 'St. Francis of Assisi', duration: '10 min', description: 'Canticle of the Sun' },
      { id: 's4', title: 'St. Augustine', duration: '12 min', description: 'Restless hearts find rest in God' },
    ],
  },
};
