import { fireEvent, render, screen } from "@testing-library/react";
import { api, DataProvider } from "../../contexts/DataContext";
import Events from "./index";

const data = {
  events: [
    {
      id: 1,
      type: "soirée entreprise",
      date: "2022-04-29T20:28:45.744Z", // date de l'événement = 29 avril
      title: "Conférence #productCON",
      cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié",
      ],
    },

    {
      id: 2,
      type: "forum",
      date: "2022-04-29T20:28:45.744Z", // date de l'événement = 29 avril
      title: "Forum #productCON",
      cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
      description:
        "Présentation des outils analytics aux professionnels du secteur",
      nb_guesses: 1300,
      periode: "24-25-26 Février",
      prestations: ["1 espace d’exposition", "1 scéne principale"],
    },
  ],
};

describe("When Events is created", () => {   // quand Events est créé 
  it("a list of event card is displayed", async () => {  // une liste de carte d'événement est affichée 
    api.loadData = jest.fn().mockReturnValue(data);  // on mock les données 
    render(  
      <DataProvider>
        <Events />
      </DataProvider>
    );
    await screen.findByText("avril"); // on s'assure que le mois d'avril soit affiché 
  });
  describe("and an error occured", () => {  // si une erreur est survenue 
    it("an error message is displayed", async () => {  // un message d'erreur est affiché
      api.loadData = jest.fn().mockRejectedValue();  // on mock une erreur
      render(
        <DataProvider>
          <Events />
        </DataProvider>
      );
      expect(await screen.findByText("An error occured")).toBeInTheDocument();  // on s'assure que le message d'erreur est affiché 
    });
  });
  describe("and we select a category", () => {  // on sélectionne une catégorie 
    it.only("an filtered list is displayed", async () => {  // une liste filtrée est affichée
      api.loadData = jest.fn().mockReturnValue(data);  // on mock les données
      render(
        <DataProvider>
          <Events />
        </DataProvider>
      );
      await screen.findByText("Forum #productCON");  // on s'assure que le forum est affiché
      fireEvent(
        await screen.findByTestId("collapse-button-testid"),  // on clique sur le bouton collapse
        new MouseEvent("click", {   // on simule un click
          cancelable: true,
          bubbles: true,
        })
      );
      fireEvent(
        (await screen.findAllByText("soirée entreprise"))[0],  // on clique sur le premier élément de la liste
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );

      await screen.findByText("Conférence #productCON");  // on s'assure que la conférence est affichée 
      expect(screen.queryByText("Forum #productCON")).not.toBeInTheDocument();  // on s'assure que le forum n'est pas affiché
    });
  });

  describe("and we click on an event", () => {
    it("the event detail is displayed", async () => {
      api.loadData = jest.fn().mockReturnValue(data);
      render(
        <DataProvider>
          <Events />
        </DataProvider>
      );

      fireEvent(
        await screen.findByText("Conférence #productCON"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );

      await screen.findByText("24-25-26 Février");
      await screen.findByText("1 site web dédié");
    });
  });
});
