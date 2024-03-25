import { Fragment, useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData(); // récupère les données
  const [index, setIndex] = useState(0); // index de la slide
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  ); // si la date de l'événement A est supérieure à la date de l'événement B : ordre décroissant "-1 : 1" // sinon : ordre croissant "1 : -1"

// .................................................................................
  const nextCard = () => {
    // fonction pour passer à la slide suivante
    if (byDateDesc) {
      // si byDateDesc existe
      setTimeout(() => {
        // setTimeout pour changer de slide toutes les 5 secondes
        setIndex((index + 1) % byDateDesc.length); // Change l'index de la slide suivante, en fonction de la longueur de byDateDesc (nombre d'événements).
        // % pour revenir à 0 si l'index dépasse la longueur de byDateDesc.
      }, 5000);
    }
  };

  useEffect(() => {
    // useEffect pour appeler la fonction nextCard qui change de slide toutes les 5 secondes.
    nextCard();
  });

  return (
    <div className="SlideCardList">
      {byDateDesc?.map(
        (
          event,
          idx // map sur les événements pour afficher les slides
        ) => (
          <Fragment key={event.title}>
            {/* Fragment pour éviter d'ajouter un élément supplémentaire dans le DOM */}
            {/* Permet de renvoyer plusieurs éléments d'un composant */}
            <div
              className={`SlideCard SlideCard--${
                index === idx ? "display" : "hide"
              }`}>
              <img src={event.cover} alt="forum" />
              <div className="SlideCard__descriptionContainer">
                <div className="SlideCard__description">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div>{getMonth(new Date(event.date))}</div>
                </div>
              </div>
            </div>
            <div className="SlideCard__paginationContainer">
              <div className="SlideCard__pagination">
                {byDateDesc.map((_, radioIdx) => (
                  <input
                    key={`${_.title}`} // clé unique pour chaque radio, _ est utilisé pour éviter les erreurs
                    type="radio"
                    name="radio-button"
                    checked={index === radioIdx}
                    readOnly // pour éviter que l'utilisateur puisse cocher les boutons radio.
                  />
                ))}
              </div>
            </div>
          </Fragment> // fin du Fragment
        )
      )}
    </div>
  );
};

export default Slider;
