// Comprehensive list of names for agent generation
// Includes Hispanic names and international diversity
export const AGENT_NAMES = [
  // Hispanic/Latino names
  'alejandro', 'ana', 'antonio', 'carmen', 'carlos', 'diego', 'elena', 'fernando', 'gabriela', 'hector',
  'isabel', 'javier', 'lucia', 'manuel', 'maria', 'miguel', 'natalia', 'oscar', 'patricia', 'ricardo',
  'sofia', 'valentina', 'adriana', 'alberto', 'beatriz', 'camilo', 'daniela', 'eduardo', 'francisca', 'guillermo',
  'ines', 'jorge', 'karina', 'leonardo', 'mariana', 'nicolas', 'olivia', 'pablo', 'raquel', 'sebastian',
  'teresa', 'valeria', 'andres', 'bianca', 'cristian', 'dolores', 'emilio', 'fatima', 'gustavo', 'esperanza',
  'ignacio', 'juanita', 'lorenzo', 'mercedes', 'norberto', 'paloma', 'rodrigo', 'silvia', 'trinidad', 'ximena',
  'yolanda', 'zenaida', 'armando', 'blanca', 'concepcion', 'domingo', 'estrella', 'florencia', 'guadalupe', 'horacio',
  'imelda', 'joaquin', 'lourdes', 'maximiliano', 'noemi', 'pilar', 'ramiro', 'soledad', 'tomás', 'ursula',
  'vicente', 'amparo', 'bernardo', 'catalina', 'delfina', 'esteban', 'felicia', 'gerardo', 'herminia', 'ismael',
  'jovita', 'leandro', 'magdalena', 'narciso', 'octavio', 'perpetua', 'quintero', 'rosario', 'salvador', 'teodora',
  
  // Portuguese/Brazilian
  'alexandre', 'beatriz', 'bruno', 'camila', 'daniel', 'eduarda', 'fabio', 'gabriela', 'henrique', 'isabella',
  'joao', 'larissa', 'mateus', 'natalia', 'pedro', 'rafaela', 'thiago', 'vitoria', 'wesley', 'yasmin',
  
  // Italian
  'alessandro', 'aurora', 'benedetto', 'chiara', 'davide', 'elena', 'francesco', 'giulia', 'lorenzo', 'martina',
  'nicolo', 'sofia', 'tommaso', 'valentina', 'antonio', 'caterina', 'emanuele', 'francesca', 'giuseppe', 'lucia',
  
  // French
  'antoine', 'camille', 'clement', 'eloise', 'gabriel', 'juliette', 'louis', 'margot', 'nathan', 'oceane',
  'pierre', 'sarah', 'theo', 'valentine', 'adrien', 'chloe', 'etienne', 'josephine', 'maxime', 'noemie',
  
  // German
  'alexander', 'anna', 'benjamin', 'charlotte', 'david', 'emma', 'felix', 'hannah', 'jonas', 'lena',
  'maximilian', 'marie', 'noah', 'sophia', 'paul', 'amelie', 'elias', 'johanna', 'leon', 'laura',
  
  // Nordic
  'anders', 'astrid', 'bjorn', 'frida', 'gustav', 'ida', 'lars', 'maja', 'nils', 'saga',
  'erik', 'elin', 'magnus', 'wilma', 'axel', 'alma', 'oscar', 'nova', 'hugo', 'vera',
  
  // Slavic
  'aleksandar', 'anastasia', 'boris', 'elena', 'dmitri', 'irina', 'mikhail', 'natasha', 'nikolai', 'olga',
  'pavel', 'svetlana', 'vladimir', 'yelena', 'andrei', 'katarina', 'sergei', 'marina', 'viktor', 'zoya',
  
  // English/Celtic
  'adrian', 'claire', 'duncan', 'fiona', 'gavin', 'heather', 'ian', 'jennifer', 'kevin', 'louise',
  'marcus', 'nicole', 'oliver', 'rachel', 'simon', 'victoria', 'william', 'zoe', 'connor', 'moira',
  
  // Arabic/Middle Eastern
  'ahmed', 'amira', 'hassan', 'layla', 'omar', 'sara', 'yusuf', 'zara', 'ali', 'fatima',
  'ibrahim', 'nour', 'khalil', 'rana', 'marwan', 'dina', 'tarek', 'maya', 'samir', 'lina',
  
  // Asian
  'akira', 'emiko', 'hiroshi', 'keiko', 'takeshi', 'yuki', 'chen', 'ling', 'wei', 'xin',
  'raj', 'priya', 'arjun', 'kavya', 'rohan', 'ananya', 'dev', 'meera', 'kiran', 'riya',
  
  // African
  'amara', 'kofi', 'nia', 'kwame', 'zuri', 'jabari', 'kesi', 'tau', 'asha', 'jengo',
  'ada', 'chike', 'zara', 'emeka', 'amina', 'kojo', 'folake', 'sekou', 'thandiwe', 'uzoma',
  
  // Additional unique names
  'phoenix', 'sage', 'river', 'atlas', 'nova', 'orion', 'luna', 'leo', 'iris', 'felix',
  'azure', 'ember', 'storm', 'jade', 'ray', 'echo', 'dawn', 'sky', 'rain', 'star',
  'amber', 'coral', 'forest', 'ivory', 'ocean', 'ruby', 'silver', 'violet', 'winter', 'summer'
];

/**
 * Generate a unique agent slug for a project
 * @param projectId - The project ID to check uniqueness within
 * @param existingAgents - Array of existing agent slugs in the project
 * @returns A unique agent slug
 */
export function generateUniqueAgentSlug(projectId: number, existingAgents: string[] = []): string {
  // Create a copy of the names array and shuffle it
  const availableNames = [...AGENT_NAMES];
  
  // Fisher-Yates shuffle
  for (let i = availableNames.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [availableNames[i], availableNames[j]] = [availableNames[j], availableNames[i]];
  }
  
  // Find first available name
  for (const name of availableNames) {
    const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    if (!existingAgents.includes(slug)) {
      return slug;
    }
  }
  
  // If all names are taken, start adding numbers
  const baseName = availableNames[0].toLowerCase().replace(/[^a-z0-9]/g, '-');
  let counter = 1;
  let slug = `${baseName}-${counter}`;
  
  while (existingAgents.includes(slug)) {
    counter++;
    slug = `${baseName}-${counter}`;
  }
  
  return slug;
}