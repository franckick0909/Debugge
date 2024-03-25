export const MONTHS = {
  0: "janvier",    // mois de l'année de 0 à 11 pour correspondre à l'index 
  1: "février",    // des mois dans le tableau MONTHS, au lieu de 1 à 12.
  2: "mars",
  3: "avril",      // Un tableau commence toujours à l'index 0.
  4: "mai",
  5: "juin",
  6: "juillet",
  7: "août",
  8: "septembre",
  9: "octobre",
  10: "novembre",
  11: "décembre",
};

export const getMonth = (date) => MONTHS[date.getMonth()];  // retourne le mois de la date passée en paramètre