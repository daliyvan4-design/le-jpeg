/**
 * L'ÉQUIPE JPEG — source unique de vérité.
 *
 * Chaque membre est UN objet : surnom, nom, rôle, description ET photo sont
 * liés ensemble. Impossible que la description ou le surnom tombe sur la
 * mauvaise photo, tout vit dans la même entrée.
 *
 * POUR AJOUTER TA PHOTO :
 *   1. Dépose ton image dans  public/membres/  au nom indiqué par `photo`
 *      (ex. public/membres/membre-1.jpg). Garde exactement ce nom de fichier.
 *      Format conseillé : portrait 4:5, JPG ou WEBP, min. 800 × 1000 px.
 *   2. Remplace `name`, `nickname`, `role`, `desc` par les tiens.
 * Tant qu'aucune photo n'est déposée, un emplacement réservé s'affiche avec
 * ton surnom et le nom de fichier attendu.
 *
 * Pour ajouter / retirer un membre : ajoute ou enlève une entrée du tableau,
 * la grille s'adapte automatiquement.
 */

export type Member = {
  /** Nom du fichier photo attendu dans /public/membres (dépose-la ici). */
  photo: string;
  /** Prénom Nom */
  name: string;
  /** Surnom affiché entre guillemets */
  nickname: string;
  /** Rôle / poste */
  role: string;
  /** Une phrase sur ce que fait la personne */
  desc: string;
};

export const MEMBERS: Member[] = [
  {
    photo: "/membres/membre-1.jpg",
    name: "Prénom Nom",
    nickname: "Le Surnom",
    role: "Direction artistique · Fondateur",
    desc: "Cadre la ligne visuelle et signe la direction de chaque numéro.",
  },
  {
    photo: "/membres/membre-2.jpg",
    name: "Prénom Nom",
    nickname: "Le Surnom",
    role: "Rédaction en chef",
    desc: "Écrit, édite, et tient le ton éditorial du média.",
  },
  {
    photo: "/membres/membre-3.jpg",
    name: "Prénom Nom",
    nickname: "Le Surnom",
    role: "Photographie",
    desc: "Capte les créateurs dans leur quotidien, après le succès.",
  },
  {
    photo: "/membres/membre-4.jpg",
    name: "Prénom Nom",
    nickname: "Le Surnom",
    role: "Réalisation · Vidéo",
    desc: "Filme les coulisses : le script, le croquis, ça tourne.",
  },
  {
    photo: "/membres/membre-5.jpg",
    name: "Prénom Nom",
    nickname: "Le Surnom",
    role: "Design & Motion",
    desc: "Décline l'identité JPEG en glitch, motion et print.",
  },
  {
    photo: "/membres/membre-6.jpg",
    name: "Prénom Nom",
    nickname: "Le Surnom",
    role: "Digital & Développement",
    desc: "Encode le média sur le web et fait vivre la communauté.",
  },
];
