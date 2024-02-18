import { render, screen } from "@testing-library/react";
import Slider from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

const data = {
  focus: [
    {
      title: "World economic forum",                      // titre de l'événement
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-02-29T20:28:45.744Z",                   // date de l'événement = 29 février
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Gaming Day",                          // titre de l'événement
      description: "Evenement mondial autour du gaming",  // description de l'événement
      date: "2022-03-29T20:28:45.744Z",                   // date de l'événement = 29 mars
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Farming Day",                         // titre de l'événement
      description: "Evenement mondial autour de la ferme", //
      date: "2022-01-29T20:28:45.744Z",                   // date de l'événement = 29 janvier
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
  ],
};

describe("When slider is created", () => {
  it("a list card is displayed", async () => {  // une liste de carte est affichée 
    window.console.error = jest.fn();     // on mock la console.error
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );
    await screen.findByText("World economic forum");
    await screen.findByText("janvier");  //  on s'assure que le mois de janvier soit affiché
    await screen.findByText(
      "Oeuvre à la coopération entre le secteur public et le privé."
    );
  });
});
